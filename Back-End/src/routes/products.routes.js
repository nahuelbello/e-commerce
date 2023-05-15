import { Router } from 'express';
import { isAdmin } from '../middlewares/auth.middleware.js';
import { getProducts, getProductById, addProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js';


const productsRouter = Router();


// Trae todos los productos.
productsRouter.get('/', getProducts);


// Trae un producto por ID.
productsRouter.get('/:pid', getProductById);


// Crea un producto.
productsRouter.post('/', isAdmin, addProduct);


// Modifica un producto.
productsRouter.put('/:pid', isAdmin, updateProduct);


// Elimina un producto.
productsRouter.delete('/:pid', isAdmin, deleteProduct);


export default productsRouter;
