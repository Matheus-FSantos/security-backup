import mongoose from "mongoose";
import { usersSchema } from "./User.model";
const { Schema } = mongoose;


const categoriesSchema = new Schema({
     title: {
        type: String,
        required: true 
     },
     description: {
        type: String,
        required: true
     },
     user: {
        type: usersSchema,
        required: true
     }
}, {
    timestamps: true
});

const Categories = mongoose.model("Categories", categoriesSchema);
export { Categories };