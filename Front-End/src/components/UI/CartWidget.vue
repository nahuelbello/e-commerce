<template>
    <RouterLink to="/cart" class="cartContainer">
        <span class="cartNumber">{{ cartNumber }}</span>
        <img src="../../assets/img/cart.png" alt="cart-img">
    </RouterLink>
</template>

<script>
export default {
    data() {
        return {
            cartNumber: 1//getItemQuantity() > 0 && '<span class="cartNumbers">{ getItemQuantity() }</span>'
        }
    }
};
</script>

<style scoped>
.cartContainer {
    width: 3.5%;
    position: relative;
}

.cartContainer > img {
    width: 100%;
}

.cartNumber {
    position: absolute;
    top: -5px;
    right: -15px;
    border-radius: 50%;
    background-color: rgb(41, 209, 41);
    padding: 0.1rem 0.4rem;
    font-weight: bold;
}
</style>
