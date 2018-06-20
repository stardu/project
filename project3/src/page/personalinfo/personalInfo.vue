<template>
   <div class="container">
       <ul>
           <li>
               <label>昵称</label>
               <input type="text" placeholder="请填写您的真实姓名">
           </li>
            <li>
               <label>E-mail</label>
               <input type="text" placeholder="请填写您的安全邮箱">
           </li>
            <li>
               <label>性别</label>
               <input type="text" placeholder="请填写您所在地区的邮政编码">
           </li>          
            <li>
               <label>身份证号</label>
               <input type="text" placeholder="请输入您的18位身份证号">
           </li>
             <li>
               <label>个人描述</label>
               <input type="text" placeholder="请谈谈您对自己的认识">
           </li>
       </ul>
       <button class="btn btn-success btn-lg">确认修改</button>
    </div>
</template>

<script>
import 'bootcss';
export default {
    name: "personalInfo",
    data() {
        return {
          msg: "个人信息"
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    $border: 1px solid #D7D7D7;
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
</style>