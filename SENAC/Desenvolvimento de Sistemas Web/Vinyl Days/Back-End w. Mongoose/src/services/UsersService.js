import { Users as UsersModel } from "../models/User.model.js";
import { Base64 } from "../utils/crypt/base64.crypt.js";
import { UsersValidations } from "../utils/validations/users.validations.js";

let usersValidations = new UsersValidations();

class UsersService {
    
    async findAll() {
        try {
            const users = await UsersModel.find();
            const usersDTO = [];

            if(users.length === 0)
                return { statusCode: 404, service: "Users Service - Find All", message: "No users in database!", date: new Date() };
            else {
                users.forEach((user) => {
                    const userId = String(user.id);
                    const userEmail = Base64.decode(String(user.email));
                    const indexOfAt = userEmail.indexOf("@");

                    const userPassword = Base64.decode(String(user.password));

                    const userDTO = {
                        id: ((userId.substring(0, 3)).concat("...")).concat(userId.substring(userId.length - 3, userId.length)),
                        name: user.name,
                        email: ((userEmail.substring(0, 3)).concat("...")).concat(userEmail.substring(indexOfAt, userEmail.length)),
                        password: userPassword.substring(0, 3).concat("..."),
                        biography: user.biography
                    };

                    usersDTO.push(userDTO);
                });
                return { statusCode: 200, content: usersDTO };
            }
        } catch (exceptions) {
            return { statusCode: 500, service: "Users Service - Find All", message: exceptions.message, date: new Date() }
        }
    }

    async findById(id) {
        try {
            const user = await UsersModel.findById(id);

            if(user === null) {
                return { statusCode: 404, service: "Users Service - Find All", message: "User not found in database!!!", date: new Date() }
            } else {
                return { statusCode: 200, content: user };
            }
        } catch (exceptions) {
            return { statusCode: 404, service: "Users Service - Find All", message: "User not found in database!!!", date: new Date() }
        }
    }

    async findByNameLike(name) {
        try {
            const findAllResponse = await this.findAll();
            const users = findAllResponse.content;
            const usersLike = [];

            if(users.length !== 0) {
                users.forEach((user) => {
                    if(String(user.name).toLowerCase().includes(String(name).toLowerCase())) {
                        usersLike.push(user);
                    }
                });

                if(usersLike.length !== 0) {
                    return { statusCode: 200, content: usersLike };
                } else {
                    return { statusCode: 404, content: usersLike };
                }
            }
        } catch (exceptions) {
            return { statusCode: 500, service: "Users Service - Find All", message: exceptions.message, date: new Date() }
        }
    }

    async create(user) {
        try {
            usersValidations.validation(user);
        } catch (exceptions) {
            return { statusCode: 500, service: "Users Service - Create (validation)", messages: exceptions.message, date: new Date() };
        }

        user.email = Base64.encode(user.email);
        user.password = Base64.encode(user.password);

        try {
            await UsersModel.create(user);
            return { statusCode: 201 };
        } catch (exceptions) { 
            console.log(exceptions);
            return { statusCode: 400, service: "Users Service - Create", message: exceptions.message, date: new Date() };
        }
    }

    async delete(id) {
        const findByIdResponse = await this.findById(id);
        const statusCode = findByIdResponse.statusCode;

        if(statusCode !== 404) {
            try {
                await UsersModel.findByIdAndDelete(id);
                return { statusCode: 204 };
            } catch (exceptions) {
                return { statusCode: 500, service: "Users Service - Delete", message: exceptions.message, date: new Date() }
            }
        } else {
            return findByIdResponse;
        }
    }
}

export { UsersService };