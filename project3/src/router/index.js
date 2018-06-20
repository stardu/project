import Vue from "vue";
import Router from "vue-router";
import Classify from "@/page/classify/Classify";
import Home from "@/page/home/Home";
import Shoppingcart from "@/page/shoppingcart/Shoppingcart";
import Me from "@/page/me/Me";
import personalInfo from "@/page/personalinfo/personalInfo";
import getAddress from "@/page/address/getAddress";
import Detail from '@/page/detail/Detail'

Vue.use(Router);

export default new Router({
    //使用HTMl5的history API来处理地址栏的显示
    mode: 'history',
    //路由基本配置
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/classify",
            name: "Classify",
            component: Classify
        },
        {
            path: "/shoppingcart",
            name: "Shoppingcart",
            component: Shoppingcart
        },
        {
            path: "/me",
            name: "Me",
            component: Me
        },
        {
            path: "/personalinfo/",
            name: "personalInfo",
            component: personalInfo
        }, 
        {
            path: "/address/",
            name: "getAddress",
            component: getAddress
        },
		{
            path: '/detail',
            name: 'Detail',
            component: Detail
        }
    ],
    //处理路由选中时的class
    // linkActiveClass:'active',
    // linkExactActiveClass:'exact-active'
});
