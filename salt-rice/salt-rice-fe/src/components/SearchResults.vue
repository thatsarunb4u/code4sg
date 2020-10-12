<template>
    <div>
        <div v-for="customer in customersAll" :key="customer._id" class="searchResult">
            <SearchResult v-bind:customer="customer" />
        </div>
    </div>
</template>

<script>
import SearchResult from './SearchResult'
import {mapGetters} from 'vuex'

export default {
    name: 'SearchResults',
    components: {
        SearchResult
    },
    computed: mapGetters(["customersAll"])
}

</script>

<style scoped>
    .div{
        width: 80%;
        margin: 0 auto;
    }
    .searchResult{
        background: rgb(185, 185, 185);
    }
</style>