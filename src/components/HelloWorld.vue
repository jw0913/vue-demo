<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        mounted(){
            console.info("=================")
            this.$emit("test");
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
