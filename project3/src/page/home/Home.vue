<template>
    <div class="container">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="/static/img/01.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="/static/img/02.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="/static/img/03.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="/static/img/04.jpg">
                </div>
            </div>
        </div>
        <!-- 热门手办 -->
        <h2>热门手办</h2>
        <div>                            
            <div>
                <ul>
                    <li v-for="book in bookShowResult"  @click="showBookInfo(book)" :key="book.id">
                        <img :src="book.imgsrc" width="90%">
                        <label :title="book.name">{{book.name | sortString}}</label>
                        <span>&yen; {{book.price}}</span>                            
                    </li>
                </ul>
            </div>
        </div>
        <!-- 限量手办 -->
        <h2>限量手办</h2>
        <div>                            
            <div>
                <ul>
                    <li v-for="book in bookShowResult"  @click="showBookInfo(book)" :key="book.id">
                        <img :src="book.imgsrc">
                        <label :title="book.name">{{book.name | sortString}}</label>
                        <span>&yen; {{book.price}}</span>                            
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import 'swiper-css';
import Swiper from 'swiper-js';


export default {
    name: "Swiper",
    data(){
        return{
            bookShowResult:[
                {
                    name:'ARSMUNDI 【正版现货】日本日版动漫美女手办lovelive第二季Aqours水团 1：高海千歌',
                    price:'999',
                    imgsrc:'http://fd.topitme.com/d/a8/1d/11315383988791da8do.jpg'
                },
                {
                    name:'ARSMUNDI 【正版现货】日本日版动漫美女手办lovelive第二季Aqours水团 1：高海千歌',
                    price:'666',
                    imgsrc:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1858678554,647544901&fm=27&gp=0.jpg'
                },
                {
                    name:'ARSMUNDI 【正版现货】日本日版动漫美女手办lovelive第二季Aqours水团 1：高海千歌',
                    price:'696',
                    imgsrc:'http://fd.topitme.com/d/a8/1d/11315383988791da8do.jpg'
                },
                {
                    name:'ARSMUNDI 【正版现货】日本日版动漫美女手办lovelive第二季Aqours水团 1：高海千歌',
                    price:'1199',
                    imgsrc:'http://fd.topitme.com/d/a8/1d/11315383988791da8do.jpg'
                },
            ]
        }
    },
    mounted() {
        var swiper = new Swiper('.swiper-container', {
            //图片间距
            spaceBetween: 0,
            //幻灯片居中
            centeredSlides: true,
            autoplay: {
                //自动播放的切换时间
                delay: 3500,
                disableOnInteraction: false,
            },
            //导航的点点
            pagination: {
                el: '.swiper-pagination',
                //点点不能触发点击切换
                clickable: false,
            },
            //左右点击切换上一张 下一张
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    },
    methods:{
        showBookInfo(book){
            console.log(book);
        }
    },
    //字符串截取
    filters:{
        sortString: function(val) {
            if(!val) {
                return '';
            }
            var stringLength = val.length;
            if(stringLength > 13) {
                val = val.slice(0,13) + "...";
            }
            return val;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    html,
    body {
        position: relative;
        height: 100%;
    }
    body {
        background: #eee;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #000;
        margin: 0;
        padding: 0;
    }

    .swiper-container {
        width: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .swiper-slide img{
        width:100%;
    }
    ul{
        padding:10px;
        list-style:none;
        li{
            width:50%;
            display:inline-block;
            padding-bottom: 10px;
            img{
                width: 90%;
                height:220px;
                border-radius:5px;
            }
            label,span{
                height:20px;
                display:block;
            }
            span{
                color:#FF0000;
            }
        }
    }
    h2{
        text-align: left;
        width:80%;
        margin-left: 20px;
        padding-left: 10px;
        border-left:2px solid red;
    }
</style>
