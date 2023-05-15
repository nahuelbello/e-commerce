<template>
    <p v-if="this.isLoading">Loading...</p>
    <div v-else class="itemDetailContainer">

        <div class="left-container">
            <img :src="this.results.thumbnail" :alt=this.results.title />
        </div>

        <div class="right-container">
            <h3>{{ results.title }}</h3>
            <p>{{ results.description }}</p>
            <h3>$ {{ results.price }}</h3>
            <p>Stock: {{ results.stock }}</p>
            <PrimaryButton>AGREGAR AL CARRITO</PrimaryButton>
            <SecondaryButton>FINALIZAR COMPRA</SecondaryButton>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            results: '',
            isLoading: true,
            url: 'http://localhost:3000/api/products/',
            pid: this.$route.params.pid
        };
    },
    methods: {
        loadProduct() {
            this.isLoading = true;
            fetch(this.url)
            .then(res => res.json())
            .then(data => {
                this.results = data;
                this.isLoading = false;
            })
            .catch(error => {
                console.log(error);
            });
        },
    },
    beforeMount() {
        this.url += this.pid;
        this.loadProduct();
    }
}
</script>

<style>
.itemDetailContainer {
    display: flex;
    margin: 4rem;
    height: 60vh;
    justify-content: space-evenly;
}

.left-container > img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 10px;
}

.right-container {
    background-color: #dedede;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    padding: 2rem 1rem;
    border-radius: 10px;
}
</style>
