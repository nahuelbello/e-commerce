<template>
    <nav>
        <RouterLink to="/"> <img src="../../assets/img/brandLogo.png" alt="brand-logo"> </RouterLink>
        <div class="navItem">
            <RouterLink to="/">INICIO</RouterLink>
            <RouterLink to="/products">PRODUCTOS</RouterLink>
            <RouterLink to="/contact">CONTACTO</RouterLink>
            <RouterLink to="/login">INICIAR SESION</RouterLink>
            <RouterLink to="/signup">REGISTRARSE</RouterLink>
            <RouterLink to="/profile">PERFIL</RouterLink>
            <CartWidget />
        </div>
    </nav>
</template>

<script>
import { CartWidget } from '../';

export default {
    components: {
        CartWidget
    }
};
</script>

<style scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFD608;
    padding: 0.25rem 0.75rem;
}

.navItem {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
}

.navItem > a, .navItem > img {
    margin-left: 3rem;
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: 2px;
}

a {
    text-decoration: none;
    color: black;
}

a:hover, a.router-link-active {
    color: #6e6e6e;
}
</style>
