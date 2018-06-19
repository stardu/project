<template>
    <div id="app">
        <header>{{title}}</header>
        <router-view/>
        <footer>
            <ul>
                <li v-for="(item,index) in imgsrc" :key="item.id" @click="navBtn(index)" :class="{active:index===sum}">
                    <img :src="item">
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
            navItem:['首页','分类','购物车','我'],
            imgsrc:['/static/router_button/home1.png','/static/router_button/classify.png','/static/router_button/shop.png','/static/router_button/me.png']
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
            //恢复所有图标颜色
            for(let x in this.imgsrc){
                if(this.imgsrc[x].indexOf('1')!=-1){
                    var arr_1 = this.imgsrc[x].split('1');
                    var str_1 = arr_1[0]+arr_1[1];
                    this.imgsrc[x] = str_1;
                }
            }
            //改变当前点击的图标的颜色
            var str_2 = this.imgsrc[index];
            var arr_2 = str_2.split('.');
            this.imgsrc[index] = arr_2[0]+'1.'+arr_2[1];
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
$color:#ddd;
#app{
    height:100%;
}
.container{
    height:calc(100% - 111px);
    overflow-x: hidden;
    overflow-y: auto;
    background-color:#eee
}
header{
    height:50px;
    line-height:50px;
    border-bottom:1px solid #ccc;
    background-color: $color;
}
footer{
    height:60px;
    border-top:1px solid #ccc;
    background-color: $color;
}
footer ul{
    height:inherit;
    list-style: none;
    padding:0;
    margin:0;
    display: flex;
    li{
        line-height: 60px;
        padding:10px 0;
        width:25%;
        display: list-item;
        cursor: pointer;
        &:hover {
            color: #2299ff;
            background-color: #ddd;
        }
        &.active {
            background-color: #2299ff;
            color: #fff;
        }
    }
}
</style>
