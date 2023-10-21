import mongoose from "mongoose";
const { Schema } = mongoose;

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    biography: {
        type: String
    }
}, {
    timestamps: true /* auto-create of "created at" and "updated at" fields. */
});

const Users = mongoose.model("Users", usersSchema);
export {
    Users,
    usersSchema
}