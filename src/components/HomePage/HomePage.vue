<template>
    <div id="HomePage">

<!--        <div class="top-breadcrumb">-->
<!--            <el-breadcrumb separator="/" style="margin-top: 20px;margin-left: 20px;">-->
<!--                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
<!--                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>-->
<!--                <el-breadcrumb-item>活动列表</el-breadcrumb-item>-->
<!--                <el-breadcrumb-item>活动详情</el-breadcrumb-item>-->
<!--            </el-breadcrumb>-->
<!--        </div>-->
        <div class="home-main-content">

            <el-card class="card-1">
                <div style="width: 100%;text-align: left;font-family: 'SourceHanSansSC-regular';font-size: 18px;">
                    <span>用户数据概览</span>
                </div>
                <div class="first-card-main-content" style="margin-top: 50px;">
                    <el-row style="width: 100%;">
                        <el-col style="width: 33%;">
                            <div class="card-column-bar">
                                <div>
                                    <span>昨日新增</span>
                                </div>
                                <div style="margin-top: 30px;">
                                    <span style="font-size: 30px;font-weight: bold;color: #F7C67E">10</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col style="width: 33%">
                            <div class="card-column-bar">
                                <div>
                                    <span>昨日活跃</span>
                                </div>
                                <div style="margin-top: 30px;">
                                    <span style="font-size: 30px;font-weight: bold;color: #A2D567">10</span>
                                </div>
                            </div>
                        </el-col>
                        <el-col style="width: 33%">
                            <div class="card-column-bar">
                                <div>
                                    <span>总用户</span>
                                </div>
                                <div style="margin-top: 30px;">
                                    <span style="font-size: 30px;font-weight: bold;color: #52D9CC">50000</span>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-card>
            <el-card class="card-2">
                <div style="width: 100%;text-align: left;font-family: 'SourceHanSansSC-regular';font-size: 18px;">
                    <span>订单数据概览</span>
                </div>
                <div class="first-card-main-content" style="margin-top: 50px;">
                <el-row style="width: 100%;text-align: center">
                    <el-col style="width: 50%;">
                        <div class="card-column-bar">
                            <div>
                                <span>昨日付费订单数</span>
                            </div>
                            <div style="margin-top: 30px;">
                                <span style="font-size: 30px;font-weight: bold;color: #52D9CC">50000</span>
                            </div>
                        </div>
                    </el-col>
                    <el-col style="width: 50%;">
                        <div class="card-column-bar">
                            <div>
                                <span>总订单数</span>
                            </div>
                            <div style="margin-top: 30px;">
                                <span style="font-size: 30px;font-weight: bold;color: #F78589">50000</span>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                </div>

            </el-card>
            <el-card class="card-3">
                <div style="width: 100%;text-align: left;font-family: 'SourceHanSansSC-regular';font-size: 18px;">
                    <span>一周交易情况</span>
                </div>
            </el-card>
            <el-card class="card-4">
                <div style="width: 100%;text-align: left;font-family: 'SourceHanSansSC-regular';font-size: 18px;">
                    <span>服务提醒</span>
                </div>
                <div v-for="(item,index) in services" class="forth-card-main-content" style="margin-top: 50px;" :key="index">
                    <div class="service-tabs">
                        <el-row style="width: 100%;height: 40px;">
                            <el-col style="width: 33%;">
                                <div style="line-height: 40px">
                                    {{item.name}}
                                </div>
                            </el-col>
                            <el-col style="width: 33%">
                                <div style="line-height: 40px;font-size: 30px;">
                                    {{item.number}}
                                </div>
                            </el-col>
                            <el-col style="width:33%;display: flex;align-items: center;justify-content: center">
                                <div>
                                    <el-button type="primary" style="height: 40px;" @click="()=>{
                                    this.$router.push(item.routePath)
                                    }">立即处理</el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div style="width: 100%;height: 50px;">

                </div>


            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomePage",
        data(){
            return{
                services:[
                    {
                        name:'待审核简历',
                        routePath:'/',
                        number:'10'
                    },
                    {
                        name:'代发货订单',
                        routePath:'代发货订单',
                        number:'10'
                    },
                    {
                        name:'待处理留言',
                        routePath:'',
                        number:'10'
                    },
                    {
                        name:'待审核评论',
                        routePath:'',
                        number:'10'
                    }
                ]
            }
        }
    }
</script>

<style>
    #HomePage{
        width: 100%;
        height: 100%;
    }

    .top-breadcrumb{
        width: 100%;
        height: 40px;
    }

    .home-main-content{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        padding-top: 20px;
        padding-left: 20px;
        display: flex;
        flex-direction: row;
        flex-flow: row wrap;
    }

    .card-1{
        width: 54%;
        height: 250px;
    }

    .card-2{
        width: 36%;
        height: 250px;
        margin-left: 5%;
    }

    .card-3{
        width: 54%;
        height: 800px;
        margin-top: 2%;
    }

    .card-4{
        width: 36%;
        height: 450px;
        margin-left: 5%;
        margin-top: 2%
    }

    forth-card-main-content{
        margin-top: 50px;
    }
</style>