<template>
    <div class="container">
        <ul class="role-list">
            <router-link tag="li" :to="{name: 'Detail', params: role}" v-for="role in GarageKitList" :key="role.id">
                <img :src="'/static/GarageKit/'+role.imgsrc[0].imgsrc1">
                <div>
                    <p>{{ role.titil }}</p>
                    <p>{{ role.name }}</p>
                    <span>&yen; {{role.price}}</span>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Classify",
    data() {
        return {
            GarageKitList: []
        }
    },
    methods: {
        
    },
    //通过axios获取json数据
    created() {
        axios.get('/static/GarageKit/garage_kits.json').then((resp) => {
            this.GarageKitList = resp.data;
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.role-list {
    padding: 0 12px;
    margin: 0;
    list-style: none;
    li {
        padding: 4px 0;
        border-bottom: 1px solid #dddddd;
        display: flex;
        img,div {
            display: block;
        }
        img {
            width: 72px; height: 72px;
            margin-right: 12px;
        }
        div {
            text-align:left;
            p {
                margin: 0;
                padding: 8px 0;
            }
            span {
                color: #F00;
            }
            p:first-of-type {
                font-size: 16px;
                color: #333333;
            }
            p:last-of-type {
                color: #888888;
            }
        }
    }
}
</style>
