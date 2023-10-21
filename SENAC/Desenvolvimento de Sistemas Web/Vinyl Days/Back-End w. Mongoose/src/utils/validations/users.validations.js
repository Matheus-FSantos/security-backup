import * as Regex from "../regex/users.regex.js";
import { v4 as RandomUUID } from "uuid";

const validation = (user) => {
    const messages = [];

    /* user biography is optional */

    const nameValidationResponse = nameValidation(user.name);
    const emailValidationResponse = emailValidation(user.email);
    const passwordValidationResponse = passwordValidation(user.password);

    if(nameValidationResponse !== null)
        messages.push(String(nameValidationResponse));
    
    if(emailValidationResponse !== null)
        messages.push(String(emailValidationResponse));

    if(passwordValidationResponse !== null)
        messages.push(String(passwordValidationResponse));

    if(messages.length !== 0) {
        throw new Error(messages[0]);
    } else {
        return true;
    }
}

const nameValidation = (name) => {
    if (Regex.name.test(name) !== true) {
        return "Invalid user name. Use only letters and numbers, with a minimum of 3 and a maximum of 60 characters.";
    } else {
        return null;
    }
}

const emailValidation = (email) => {
    if (Regex.email.test(email) !== true) {
        return "Invalid email. Please enter a valid email address.";
    } else {
        return null;
    }
};

const passwordValidation = (password) => {
    if (Regex.password.test(password) !== true) {
        return "Invalid password. The password must have at least 6 characters, including a letter/digit and a special character.";
    } else {
        return null;
    }
}


class UsersValidations {
    validation(user) {
        const messages = [];
    
        /* user biography is optional */
        const nameValidationResponse = this.nameValidation(user.name);
        const emailValidationResponse = this.emailValidation(user.email);
        const passwordValidationResponse = this.passwordValidation(user.password);
    
        if(nameValidationResponse !== null)
            messages.push(String(nameValidationResponse));
        
        if(emailValidationResponse !== null)
            messages.push(String(emailValidationResponse));
    
        if(passwordValidationResponse !== null)
            messages.push(String(passwordValidationResponse));
    
        if(messages.length !== 0) {
            throw new Error(messages[0]);
        } else {
            return true;
        }
    }

    nameValidation(name) {
        if (Regex.name.test(name) !== true) {
            return "Invalid user name. Use only letters and numbers, with a minimum of 3 and a maximum of 60 characters.";
        } else {
            return null;
        }
    }

    emailValidation(email) {
        if (Regex.email.test(email) !== true) {
            return "Invalid email. Please enter a valid email address.";
        } else {
            return null;
        }
    }
    
    passwordValidation(password) {
        if (Regex.password.test(password) !== true) {
            return "Invalid password. The password must have at least 6 characters, including a letter/digit and a special character.";
        } else {
            return null;
        }
    }
}


export { validation, UsersValidations };