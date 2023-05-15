<template>
    <div class="paginateButtons">
        <PrimaryButton v-if="this.pagination.hasPrevPage" @click="updatePage(this.pagination.page - 1)">&lt</PrimaryButton>
        <PrimaryButton v-for="page in this.pagination.totalPages" @click="updatePage(page)">{{ page }}</PrimaryButton>
        <PrimaryButton v-if="this.pagination.hasNextPage" @click="updatePage(this.pagination.page + 1)">></PrimaryButton>
    </div>
</template>

<script>
export default {
    props: ['pagination', 'page'],
    methods: {
        updatePage(page) {
            this.$emit('update:page', page);
        }
    }
}
</script>

<style>
label, select, option {
    color: white;
}

select {
    background-color: #34495E;
    color: white;
    border: none;
}
</style>
