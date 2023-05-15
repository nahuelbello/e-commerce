<template>
    <div>
        <TheSortingList v-model:sort="sort" />
        <ThePaginateButtons :pagination="pagination" v-model:page="page" />
        <TheLimitInput v-model:limit="limit" />
        <ItemList :results="results" />
    </div>
</template>

<script>
import { ItemList } from '@/components';
import TheLimitInput from '@/components/pagination/TheLimitInput.vue';
import ThePaginateButtons from '@/components/pagination/ThePaginateButtons.vue';
import TheSortingList from '@/components/pagination/TheSortingList.vue';


export default {
    components: {
        ItemList,
        TheLimitInput,
        ThePaginateButtons,
        TheSortingList
    },
    data() {
        return {
            API_URL: import.meta.env.VITE_API_URL,
            results: [],
            pagination: {},
            category: this.$route.query.category || '',
            sort: this.$route.query.sort || 'asc',
            limit: this.$route.query.limit || 9,
            page: this.$route.query.page || 1,
        };
    },
    computed: {
        apiUrl() {
            return `${this.API_URL}/products?category=${this.category}&sort=${this.sort}&limit=${this.limit}&page=${this.page}`;
        }
    },
    methods: {
        loadProducts() {
            fetch(this.apiUrl)
            .then(res => res.json())
            .then(data => {
                this.results = data.payload;
                this.pagination = Object.fromEntries(Object.entries(data).filter(([key]) => !['payload', 'status', 'totalDocs'].includes(key)));
            })
            .catch(error => {
                console.log(error);
            });
        },
        modifyUrl() {
            this.$router.push({ path: this.$route.path, query: {sort: this.sort, limit: this.limit, page: this.page} });
        }
    },
    watch: {
        $route() {
            this.loadProducts();
        },
        sort(newSort) {
            this.sort = newSort;
            this.modifyUrl();
        },
        limit(newLimit) {
            this.limit = newLimit;
            this.modifyUrl();
        },
        page(newPage) {
            this.page = newPage
            this.modifyUrl();
        }
    },
    beforeMount() {
        this.loadProducts();
    }
}
</script>
