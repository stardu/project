import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/page/HelloWorld";
import TestList from "@/page/TestList";
import AboutUs from "@/page/AboutUs";
import Me from "@/page/Me";

Vue.use(Router);

export default new Router({
    //使用HTMl5的history API来处理地址栏的显示
    mode: 'history',
    //路由基本配置
    routes: [
        {
            path: "/",
            name: "HelloWorld",
            component: HelloWorld
        },
        {
            path: "/testlist",
            name: "TestList",
            component: TestList
        },
        {
            path: "/about",
            name: "AboutUs",
            component: AboutUs
        },
        {
            path: "/me",
            name: "Me",
            component: Me
        }
    ],
    //处理路由选中时的class
    // linkActiveClass:'active',
    // linkExactActiveClass:'exact-active'
});
