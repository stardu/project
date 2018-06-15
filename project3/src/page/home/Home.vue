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
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
        <p>asdasdasdasdasd</p>
    </div>
</template>

<script>
import 'swiper-css';
import Swiper from 'swiper-js';

export default {
    name: "Swiper",
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
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
