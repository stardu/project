<template>
    <div class="container">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: "Shoppingcart",
    data() {
        return {
            msg: "This is About!"
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
        color: #42b983;
    }
</style>
