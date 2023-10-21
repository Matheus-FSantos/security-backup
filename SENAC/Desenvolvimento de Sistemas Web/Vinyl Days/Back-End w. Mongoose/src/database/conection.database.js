import "dotenv/config";
import mongoose from "mongoose";

async function main() {
    try {
        const credentials = {
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD
        }

        await mongoose.connect(`mongodb+srv://${credentials.username}:${credentials.password}@cluster0.wcb4pid.mongodb.net/?retryWrites=true&w=majority`);
    
        console.log("Connected W. MongoDB Atlas 🚀🚀🚀");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }

}

export { main };