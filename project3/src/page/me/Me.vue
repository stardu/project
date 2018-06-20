<template>
    <div class="container">
        <!-- 未登录时现实的页面 -->
        <div class="regAndLog" v-if="$store.state.count==1">
                <ul>
                    <li v-for="(item,index) in btn" 
                    :key="item.id"
                    @click="setIndex(index)"
                    >{{ item }}</li>
                </ul>
                <div v-if="num==0">
                    <input type="text" placeholder="请输入你的手机号" v-model="phone">
                    <input type="text" placeholder="请输入您的密码" v-model="psd">
                    <button class="btn btn-success btn-lg" @click="submitInfoForlog">登录</button>
                </div>
                <div v-if="num==1">
                    <input type="text" placeholder="请输入你的手机号" v-model="phone">
                    <input type="text" placeholder="请输入您的昵称" v-model="nickname">
                    <input type="text" placeholder="请输入你的密码" v-model="psd">
                    <input type="text" placeholder="请确认您的密码" v-model="confirmPsd">
                    <button class="btn btn-success btn-lg" @click="submitInfoForReg">确认注册</button>
                </div>
        </div>
       <!-- 已登录时的页面 -->
       <div class="logined" v-if="$store.state.count==2">
            <div class="userImg">
                {{ people }}
            </div>
            <div>
                <ul>
                    <li>
                        <span class="left"  @click="goToPage('personalInfo')">设置个人资料</span>
                        <span class="right">></span>
                    </li>
                    <li>
                        <span class="left"  @click="goToPage('getAddress')">收货地址管理</span>
                        <span class="right">></span>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <span class="left">我的订单</span>
                        <span class="right">></span>
                    </li>
                    <li>
                        <span class="left">我的评价</span>
                        <span class="right">></span>
                    </li>
                </ul>
            </div>
             <div>
                <ul>
                    <li>
                        <span class="left">商品收藏</span>
                        <span class="right">></span>
                    </li>
                    <li>
                        <span class="left">店铺收藏</span>
                        <span class="right">></span>
                    </li>
                     <li>
                        <span class="left">浏览记录</span>
                        <span class="right">></span>
                    </li>
                </ul>
            </div>
            <button class="btn btn-danger btn-lg" @click="exitLogin">退出登录</button>
       </div>
    </div>
</template>

<script>
import 'bootcss';
export default {
    name: "Me",
    data() {
        return {
           btn: ["登录","注册"],
           num: "0",
           phone: "",
           psd: "",
           psdReg: "",
           confirmPsd:"",
           nickname: "",

        };
    },
    methods: {
        setIndex(count){
            this.num=count;
        },
        //登录信息提交并且验证
        submitInfoForlog(){
            if((localStorage.getItem("user")==this.phone) && (localStorage.getItem("password")==this.psd)){
                this.$store.commit("add"); 
            }
        },
        //注册信息提交
        submitInfoForReg(){
            localStorage.setItem("user",this.phone);
            localStorage.setItem("password",this.psd);
            localStorage.setItem("nickname",this.nickname);
            this.nickname="";
            this.confirmPsd="";
            this.psd=""; 
            this.$store.commit("add");        
        },
        //退出登录
        exitLogin(){
            
            this.$store.commit("reduce");
        },
        //跳转到指定页面
        goToPage(url){
              this.$router.push({name:url});
        }
    },
    computed: {
          people: function(){
              return localStorage.getItem("user");
          }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$border: 1px solid #D7D7D7;
.regAndLog{
    li{
        list-style:none;
        float:left;
        width:50%;
        height:50px;
        text-align:center;
        line-height:50px;
        .left{
            float: left;  
        }
        .right{
           padding-right :0; 
        }
    }
    input{
        width: 100%;
        height: 50px;
        float: left;
        margin-bottom:10px;
    }
} 
.logined{
    .userImg{
        height: 50px;
    }
    width: 100%;
    ul{
        width: 100%;
        padding: 0;
        li{
            list-style:none; 
            width: 100%;
            height: 50px;
            border-top:$border;
            border-bottom:$border;
            background-color: white;
            cursor: pointer;
        }
    }
    div{
        margin-bottom: 10px;
    }
}   
</style>
 