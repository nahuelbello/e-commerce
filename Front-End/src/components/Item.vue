<template>
    <RouterLink :to="'/product/'+id" class="card">
        <img :src="thumbnail" alt="product-img" class="image"/>
        <p class="title">{{ title }}</p>
        <h3 class="price">$ {{ price }}</h3>
        <span class="footer">VER DESCRIPCIÓN</span>
    </RouterLink>
</template>

<script>
export default {
    props: ['id', 'title', 'price', 'thumbnail']
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    background-color: white;
    box-shadow: 0 0.5rem 0.75rem rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    position: relative;
}

.card:hover {
    box-shadow: 0 0.75rem 1.25rem rgba(0, 0, 0, 0.9);
    transform: translateY(-0.9375rem);
    transition: 0.25s;
}

.image {
    width: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 10px;
}

.title {
    padding-top: 2rem;
    font-size: 1.5rem;
}

.price {
    padding: 1.5rem;
    padding-bottom: 5rem;
    font-size: 2rem;
}

.footer {
    background-color: #41B883;
    font-weight: bold;
    text-align: center;
    padding: 1rem 0;
    width: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    bottom: 0;
}
</style>
