import { UsersService } from "../services/UsersService.js";

const usersService = new UsersService();

class UsersController {

    async findAll(request, response) {
        const serviceResponse = await usersService.findAll();

        if(serviceResponse.statusCode !== 200) {
            response.status(serviceResponse.statusCode).json(serviceResponse);
        } else {
            response.status(serviceResponse.statusCode).json(serviceResponse.content);
        }
    }

    async findById(request, response) {
        const responseService = await usersService.findById(request.params.id);

        if(responseService.statusCode !== 200) {
            return response.status(responseService.statusCode).json(responseService);
        } else {
            return response.status(responseService.statusCode).json(responseService.content);
        }
    }

    async findByNameLike(request, response) {
        const serviceResponse = await usersService.findByNameLike(request.params.name);

        if(serviceResponse.statusCode !== 500) {
            return response.status(serviceResponse.statusCode).json(serviceResponse.content);
        } else {
            return response.status(serviceResponse.statusCode).json(serviceResponse);
        }
    }

    async create(request, response) {
        const user = {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
            biography: request.body.biography
        }

        const responseService = await usersService.create(user);
        
        if(responseService.statusCode !== 201) {
            response.status(responseService.statusCode).json(responseService);
        } else {
            response.status(responseService.statusCode).json();
        }
    }

    async delete(request, response) {
        const serviceResponse = await usersService.delete(request.params.id);

        if(serviceResponse.statusCode !== 204) {
            response.status(serviceResponse.statusCode).json(serviceResponse);
        } else {
            response.status(serviceResponse.statusCode).json();
        }
    }

}

export { UsersController };