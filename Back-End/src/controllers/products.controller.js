import productModel from '../models/product.model.js';
import { addProductDTO, urlMaker, getProductsDTO, updateProductDTO } from './dto/productsDTO.js';


// Trae los productos de la categoria especificada (opcional), los ordena (opcional) y los pagina (opcional).
export const getProducts = async (req, res) => {
    try {
        const dto = getProductsDTO(req.query || {});        
        if (dto.message) return res.status(500).send(dto.message);
        
        const products = await productModel.paginate(dto.category ? { category: dto.category } : {}, {
            sort: { price: dto.sort },
            limit: dto.limit,
            page: dto.page
        });

        const baseUrl = `${req.protocol}://${req.get("host")}/api/products?`;
        const url = urlMaker(baseUrl, dto);
        res.json({
            status: "success",
            payload: products.docs,
            totalDocs: products.totalDocs,
            totalPages: products.totalPages,
            prevPage: products.prevPage,
            nextPage: products.nextPage,
            page: products.page,
            hasPrevPage: products.hasPrevPage,
            hasNextPage: products.hasNextPage,
            prevLink: products.hasPrevPage ? url + `page=${products.prevPage}` : null,
            nextLink: products.hasNextPage ? url + `page=${products.nextPage}` : null
        });
    } catch (err) {
        res.status(500).send(err);
    }
};


// Trae un producto por ID.
export const getProductById = async (req, res) => {
    try {
        const product = await productModel.findOne({ _id: req.params.pid });
        res.send(product);
    } catch (err) {
        res.status(500).send(err);
    }
};


// Crea un producto.
export const addProduct = async (req, res) => {
    try {
        const dto = addProductDTO(req.body);
        if (dto.message) return res.status(500).send(user.message);

        const newProduct = {
            title: dto.title,
            description: dto.description,
            code: dto.code,
            price: dto.price,
            thumbnail: dto.thumbnail,
            stock: dto.stock,
            category: dto.category,
            status: dto.status
        }
        await productModel.create(newProduct);
        console.log(newProduct)
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err);
    }
};


// Modifica un producto.
export const updateProduct = async (req, res) => {
    try {
        const dto = updateProductDTO(req.body);
        if (dto.message) return res.status(500).send(user.message);

        const product = await productModel.findOne({ _id: req.params.pid });
        await productModel.updateOne(
            { _id: req.params.pid },
            {
                $set: {
                    title: dto.title || product.title,
                    description: dto.description || product.description,
                    price: dto.price || product.price,
                    thumbnail: dto.thumbnail || product.thumbnail,
                    stock: dto.stock || product.stock,
                    category: dto.category || product.category,
                    status: dto.status
                },
            }
        );
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err);
    }
};


// Elimina un producto.
export const deleteProduct = async (req, res) => {
    try {
        await productModel.deleteOne({ _id: req.params.pid });
        res.sendStatus(200);
    } catch (err) {
        res.status(500).send(err);
    }
};
