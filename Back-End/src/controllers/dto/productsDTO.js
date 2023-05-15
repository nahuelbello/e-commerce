export const getProductsDTO = (params) => {
    const dto = { category: params.category };

    if (!params.sort) params.sort = 'asc';
    if (!params.limit) params.limit = '10';
    if (!params.page) params.page = '1';
    
    if (!['asc','desc'].includes(params.sort)) return { mesage: 'Sort debe ser "asc" o "desc"' };
    if (isNaN(+params.limit)) return { message: 'Limit debe ser un número' };
    if (isNaN(+params.page)) return { message: 'Page debe ser un número' };

    if (params.limit) dto.limit = parseInt(params.limit);
    if (params.page) dto.page = parseInt(params.page);
    if (params.query) dto.query = params.query;
    if (params.sort === 'asc') dto.sort = 1;
    if (params.sort === 'desc') dto.sort = -1;

    return dto;
};

export const urlMaker = (baseUrl, params) => {
    let url = baseUrl;
    if (params.query) url += `query=${params.query}&`;
    if (params.limit) url += `limit=${params.limit}&`;
    if (params.sort) url += params.sort === 1 ? `sort=asc&` : `sort=desc&`;

    return url;
}


export const addProductDTO = (product) => {
    if (!product.title) return { message: "El nombre del producto es obligatorio" };
    if (!product.description) return { message: "La descripción es obligatoria" };
    if (!product.code) return { message: "El código es obligatorio" };
    if (!product.price) return { message: "El precio es obligatorio" };
    if (!product.stock) return { message: "El stock es obligatorio" };
    if (!product.category) return { message: "La categoría es obligatoria" };

    return {
        title: product.title,
        description: product.description,
        code: product.code,
        price: product.price,
        status: product.status,
        stock: product.stock,
        category: product.category.toLowerCase(),
    };
};


export const updateProductDTO = (product) => {
    return {
        title: product.title,
        description: product.description,
        code: product.code,
        price: product.price,
        status: product.status,
        stock: product.stock,
        category: product.category.toLowerCase(),
    };
};
