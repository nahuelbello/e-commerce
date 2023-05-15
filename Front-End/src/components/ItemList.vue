<template>
    <div class="itemList">
        <p v-if="results.length === 0">Loading...</p>
        <Item v-else v-for="result in this.results" :key="result._id" :id="result._id" :title="result.title" :price="result.price" :thumbnail="result.thumbnail"/>
    </div>
</template>

<script>
import { Item } from '@/components';

export default {
    name: 'ItemList',
    props: {
        results: {
            type: Array,
            default: []
        }
    },
    components: {
        Item
    }
}
</script>

<style scoped>
.itemList {
    margin: 4rem 10rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 3rem;
}
</style>
