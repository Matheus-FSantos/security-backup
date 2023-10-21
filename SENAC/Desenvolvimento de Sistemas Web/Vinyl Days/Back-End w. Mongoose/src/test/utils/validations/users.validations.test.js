import { validation } from "../../../utils/validations/users.validations";


describe("Users Fields Validations", () => {
    
    test("given valid password, return true value", () => {
        const user = {
            name: "Matheus Ferreira Santos",
            email: "matheus@gmail.com",
            password: "D94ed3838#",
            biography: "Full-Stack Developer - Java/Node.JS"
        };
    
        try {
            const isValid = validation(user);
            expect(isValid).toBe(true);
        } catch (error) {
            expect(error.message).toBe("Invalid password. Password must be at least 4 characters long");
        }
    });

});