<template>
    <div class="container">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="http://img.playalot.cn/article/photo/1474731008_m6csitvgqo.jpg?articlestyle">
                </div>
                <div class="swiper-slide">
                    <img src="http://img2.imgtn.bdimg.com/it/u=1026256702,3392164251&fm=214&gp=0.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/bfwbvFblgDwbkfc.jpg">
                </div>
                <div class="swiper-slide">
                    <img src="http://res.hpoi.net.cn/gk/pic/n/2016/10/dae553974c5c4fb19959fd97e308c002.jpeg">
                </div>
            </div>
        </div>
        <!-- 热门手办 -->
        <h2>热门手办</h2>
        <div>
            <div>
                <ul>
                    <li v-for="Garag in GarageKit" @click="showBookInfo(Garag)" :key="Garag.id">
                        <img :src="'/static/GarageKit/'+Garag.imgsrc[0].imgsrc1">
                        <label :title="Garag.titil">{{Garag.titil | sortString}}</label>
                        <label :title="Garag.name">{{Garag.name | sortString}}</label>
                        <span>&yen; {{Garag.price}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 限量手办 -->
        <h2>限量手办</h2>
        <div>
            <div>
                <ul>
                    <li v-for="Garag in GarageKit1" @click="showBookInfo(Garag)" :key="Garag.id">
                        <img :src="'/static/GarageKit/'+Garag.imgsrc[0].imgsrc1">
                        <label :title="Garag.titil">{{Garag.titil | sortString}}</label>
                        <label :title="Garag.name">{{Garag.name | sortString}}</label>
                        <span>&yen; {{Garag.price}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import "swiper-css";
import Swiper from "swiper-js";

export default {
    name: "Swiper",
    data() {
        return {
            GarageKit: [],
            GarageKit1: []
        };
    },
    methods: {
        showBookInfo(Garag) {
            //console.log(Garag);
        }
    },
    //字符串截取
    filters: {
        sortString: function(val) {
            if (!val) {
                return "";
            }
            var stringLength = val.length;
            if (stringLength > 13) {
                val = val.slice(0, 13) + "...";
            }
            return val;
        }
    },
    created() {
        axios.get("/static/GarageKit/garage_kits.json").then(resp => {
            this.GarageKit = resp.data.slice(0, 17);
            this.GarageKit1 = resp.data.slice(17, resp.data.length);
            //console.log(this.GarageKit1);
        });
    },
    mounted() {
        var swiper = new Swiper(".swiper-container", {
            //图片间距
            spaceBetween: 0,
            //幻灯片居中
            centeredSlides: true,
            autoplay: {
                //自动播放的切换时间
                delay: 3500,
                disableOnInteraction: false
            },
            //导航的点点
            pagination: {
                el: ".swiper-pagination",
                //点点不能触发点击切换
                clickable: false
            }
        });
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
.swiper-slide img {
    width: 100%;
}
ul {
    padding: 10px;
    list-style: none;
    li {
        width: 50%;
        display: inline-block;
        padding-bottom: 10px;
        img {
            width: 90%;
            height: 220px;
            border-radius: 5px;
        }
        label,
        span {
            height: 25px;
            display: block;
        }
        label:last-of-type {
            color: #888888;
        }
        span {
            color: #ff0000;
        }
    }
    li:last-of-type {
        margin-left: 0;
        float: left;
    }
}
h2 {
    text-align: left;
    width: 100%;
    margin-left: 20px;
    padding-left: 10px;
    border-left: 2px solid red;
    height: 32px;
    margin-bottom: 18px;
    clear: both;
}
</style>
