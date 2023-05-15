import { Schema, model } from 'mongoose';


const userSchema = new Schema(
    {
        first_name: { type: String, require: true },
        last_name: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        age: { type: Number },
        password: { type: String, require: true },
        role: { type: String, enum: ['user', 'admin'], default: 'user'},
    },
    { versionKey: false }
);

export default model('user', userSchema);
