<template>
    <div>
        <form @submit="onSubmit">
            <b-field>
                <b-input placeholder="Search..."
                    type="search"
                    size="is-large"
                    icon="search"
                    icon-clickable
                    v-model="query"
                    >
                </b-input>
                <b-button size="is-large" native-type="submit" >Search</b-button>
            </b-field>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'SearchBoxMain',
    data() {
        return {
            query:''
        };
    },
    methods: {
        ...mapActions(["performSearch"]),
        onSubmit(e){
            e.preventDefault();
            let queryString = this.query;
            this.performSearch(queryString);
        }
    }
}

</script>

<style scoped>
    .div{
        width: 80%;
        margin: 0 auto;
    }
    .button{
        background: crimson;
    }
</style>