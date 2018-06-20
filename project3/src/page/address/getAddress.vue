<template>
   <div class="container">
       <ul>
           <li>
               <label>姓名</label>
               <input type="text" placeholder="请填写您的真实姓名">
           </li>
            <li>
               <label>联系电话</label>
               <input type="text" placeholder="请填写我们联系您的电话号码">
           </li>
            <li>
               <label>邮政编码</label>
               <input type="text" placeholder="请填写您所在地区的邮政编码">
           </li>
            <li>
              <select class="province">
                  <option v-for="(item,index) in province"
                  :key="item.id"
                  @click="setProvince(index)"
                  >{{ item.name }}</option>
              </select>
               <select class="city">
                  <option v-for="(itemCity,indexCity) in city"
                  :key="itemCity.id"
                  @click="setCity(indexCity)"
                  >{{ itemCity.name }}</option>
              </select>
              <select>
                   <option v-for="(itemArea,indexArea) in area"
                   :key="itemArea.id"
                   >{{ itemArea[indexArea] }}</option>
               </select>
           </li>
            <li>
               <label>详细地址</label>
               <input type="text" placeholder="请填写详细的街道、楼道、门牌号">
           </li>
       </ul>
       <button class="btn btn-success btn-lg">确认地址</button>
    </div>
</template>

<script>
import 'bootcss';
export default {
    name: "personalInfo",
    data() {
        return {
            // 省的信息
            province: this.$store.state.province,
            //市的信息
            city: [],
            //区的信息
            area: [],
        };
    },
    methods: {
        // 确定省份
        setProvince(count){
            console.log("haha");
             this.city=this.province[count].city; 
        },
        //确定市区
        setCity(count){
            this.area=this.city[count].area;
        }
    },
    mounted(){
        //获取省份下拉框的对象
        let objForProvince=document.querySelectorAll(".province option");
        for (let index = 0; index < objForProvince.length; index++) {
            objForProvince[index].onclick=()=>{
                console.log("hha");
                  this.city=this.province[index].city;
            }
            
        }
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
            select{
                width:30%;
                height: 50px;
                float: left;
                margin-left: 9px;
            }
        }
    }
</style>