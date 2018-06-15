<template>
    <div id="app">
        <header>{{title}}</header>
        <router-view/>
        <footer>
            <ul>
                <!-- <router-link tag="li" :to="{name: 'HelloWorld'}" @click="navBtn(index)" exact>
                    首页
                </router-link>
                <router-link tag="li" :to="{name: 'TestList'}" @click="navBtn(index)">
                    分类
                </router-link>
                <router-link tag="li" :to="{name: 'AboutUs'}" @click="navBtn(index)">
                    购物车
                </router-link>
                <router-link tag="li" :to="{name: 'Me'}" @click="navBtn(index)">
                    我
                </router-link> -->
                <li v-for="(item,index) in navItem" :key="item.id" @click="navBtn(index)" :class="{active:index===sum}">
                    {{item}}
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>
export default {
    name: "App",
    data(){
        return {
            sum:0,
            title: '',
            navItem:['首页','分类','购物车','我']
        }
    },
    created() {
        this.title = this.navItem[0];
    },
    methods:{
        navBtn(index) {
            var url = this.$router.options.routes[index].name;
            this.$router.push({name: url});
            this.title = this.navItem[index];
            this.sum = index;
        }
    }
};
</script>

<style lang="scss">
*{
    box-sizing: border-box;
}
html,body {
    height:100%;
    margin:0;
    font:normal 14px "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#app{
    height:100%;
}
.container{
    height:calc(100% - 110px);
    overflow-x: hidden;
    overflow-y: auto;
}
header{
    height:50px;
    line-height:50px;
    background-color: #ccc;
}
footer{
    height:60px;
    background-color: #ccc;
}
footer ul{
    height:inherit;
    list-style: none;
    padding:0;
    margin:0;
    display: flex;
    li{
        line-height: 60px;
        width:25%;
        display: list-item;
        cursor: pointer;
        &:hover {
            color: #2299ff;
            background-color: #eee;
        }
        &.active {
            background-color: #2299ff;
            color: #fff;
        }
    }
}
</style>
