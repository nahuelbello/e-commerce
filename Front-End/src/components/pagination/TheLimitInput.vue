<template>
    <div class="limitInput">
        <p>Resultados por página:</p>
        <input type="number" :value="limit" @keydown.enter="updateLimit">
    </div>
</template>

<script>
export default {
    props: ['limit'],
    methods: {
        updateLimit(e) {
            this.$emit('update:limit', e.target.value);
        }
    }
}
</script>

<style scoped>
p {
    color: white;
}
</style>
