import { Schema, model } from 'mongoose';


const ticketSchema = new Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true
        },
        amount: {
            type: Number,
            required: true
        },
        purchaser: {
            type: String,
            required: true
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export default model('order', ticketSchema);
