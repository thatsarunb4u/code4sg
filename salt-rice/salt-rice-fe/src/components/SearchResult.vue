<template>
    <div>
        <div class="linkSection">
            <div class="tile is-parent">
                <article class="tile is-child notification is-danger">
                    <p class="title is-link">{{customer.testid}}</p>
                    
                    <div class="content">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                    </div>
                </article>
            </div>
        </div>
        
    </div>
</template>

<script>


export default {
    name: 'SearchResults',
    props: ["customer"]
}

</script>

<style scoped>
    .div{
        width: 80%;
        margin: 0 auto;
    }
    .linkSection{
         margin-bottom: 0;
    }
</style>