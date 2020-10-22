<template>
    <div id="app">
        <HelloWorld ref="HelloWorld" msg="Welcome to Your Vue.js App"  @test ="test" @click.native ="test2"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'App',
        components: {
            HelloWorld
        },
        methods: {
            test () {
                this.$refs.HelloWorld.click
            },
            test2(){
                alert(1);
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
