<template>
    <div class="sortingList">
        <label for="menu">Ordenar por precio: </label>
        <select id="menu" @change="updateSort">
            <option value="asc">De menor a mayor</option>
            <option value="desc">De mayor a menor</option>
        </select>
    </div>
</template>

<script>
export default {
    props: ['sort'],
    methods: {
        updateSort(e) {
            this.$emit('update:sort', e.target.value);
        }
    }
}
</script>

<style scoped>
</style>
