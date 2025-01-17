import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
    clerkId: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    username: { type: String, require: true, unique: true },
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    photo: { type: String, require: true },
})

const User = models.User || model('User', userSchema);

export default User;