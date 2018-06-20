<template>
   <div class="container">
       <ul>
           <li>
               <label>姓名</label>
               <input type="text" placeholder="请填写您的真实姓名" v-model="name">
           </li>
            <li>
               <label>联系电话</label>
               <input type="text" placeholder="请填写我们联系您的电话号码" v-model="phone">
           </li>
            <li>
               <label>邮政编码</label>
               <input type="text" placeholder="请填写您所在地区的邮政编码" v-model="postalCode">
           </li>
            <li>
              <select  @change="setProvince" v-model="provinceVal">
                  <option v-for="item in province"
                  :key="item.id"
                  >{{ item.name }}</option>
              </select>
               <select @change="setCity" v-model="cityVal">
                  <option v-for="itemCity in city"
                  :key="itemCity.id"
                  >{{ itemCity.name }}</option>
              </select>
              <select v-model="areaVal">
                   <option v-for="itemArea in area"
                   :key="itemArea.id"
                   >{{ itemArea }}</option>
               </select>
           </li>
            <li>
               <label>详细地址</label>
               <input type="text" placeholder="请填写详细的街道、楼道、门牌号">
           </li>
       </ul>
       <!-- 按钮触发模态弹框 -->
       <button class="btn btn-success btn-lg" data-toggle="modal" data-target="#myModal">确认地址</button>
       <!-- 模态弹框 -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                &times;
                            </button>
                            <h4 class="modal-title" id="myModalLabel">
                                模态框（Modal）标题
                            </h4>
                        </div>
                        <div class="modal-body">
                            在这里添加一些文本
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭
                            </button>
                            <button type="button" class="btn btn-primary">
                                提交更改
                            </button>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal -->
        </div>
    </div>
</template>

<script>
import 'bootcss';
export default {
    name: "personalInfo",
    data() {
        return {
            //姓名
            name:"",
            //电话号码
            phone: '',
            //邮政编码
            postalCode:'',
            // 省的信息
            province: this.$store.state.province,
            provinceVal: '北京',
            cityVal: '北京',
            areaVal: '朝阳区',
            //市的信息
            city: [],
            //区的信息
            area: [],
        };
    },
    methods: {
        // 确定省份
        setProvince(){
            var currentProvince = this.province.filter((item) => {
                return this.provinceVal === item.name;
            });
           this.city=currentProvince[0].city;
        },
        //确定市区
        setCity(){
           var currentCity = this.city.filter((itemCity) => {
                return this.cityVal === itemCity.name;
            })
           this.area=currentCity[0].area;
        }
    },
    mounted(){
        //获取省份下拉框的对象
       $("province").on("click","option",function(event){
           console.log("haha");
             this.city=this.province[event.target.id].city; 
       })
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