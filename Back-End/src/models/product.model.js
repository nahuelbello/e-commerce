import { Schema, model } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';


const productSchema = new Schema(
    {
        title: { type: String, require: true },
        description: { type: String, require: true },
        code: { type: String, require: true, unique: true },
        price: { type: Number, require: true, min: 1 },
        status: { type: Boolean, default: true },
        stock: { type: Number, require: true },
        category: { type: String, require: true },
        thumbnail: { type: String, require: true }
    },
    { versionKey: false }
);

productSchema.plugin(mongoosePaginate);


export default model('product', productSchema);
