<template>
    <div id="UserList">
        <el-dialog :visible.sync="dialogVisible" title="查看订单" :modal="false" width="300">
            <div class="userContentPanel">
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;">
                    <div class="contentTitle" style="width: 100px;">
                        <span>订单编号：</span>
                    </div>
                    <div class="contentContent" style="width:200px;">
                        <span>{{resumeContent.name}}</span>
                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                    <div class="contentTitle" style="width:100px;">
                        <span>订单内容：</span>
                    </div>
                    <div class="contentContent" style="width:200px;">
                        <span>{{resumeContent.gender}}</span>
                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">


                    <div class="contentTitle" style="width:100px;">
                        <span>类型：</span>
                    </div>
                    <div class="contentContent" style="width:200px;">
                        <span>{{resumeContent.grade}}</span>
                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                    <div class="contentTitle" style="width:100px;">
                        <span>合计：</span>
                    </div>
                    <div class="contentContent" style="width:200px;">
                        <span>{{resumeContent.major}}</span>
                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                    <div class="contentTitle" style="width:100px;">
                        <span>实付：</span>
                    </div>
                    <div class="contentContent" style="width:200px;">
                        <span>{{resumeContent.phone}}</span>
                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                    <div class="contentTitle" style="width:100px;">
                        <span>状态：</span>
                    </div>
                    <div class="contentContent" style="width:350px;">
                        <span>{{resumeContent.experience}}</span>
                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                    <div class="contentTitle" style="width:100px;">
                        <span>处理人：</span>
                    </div>
                    <div class="contentContent" style="width:350px;">
                        <span>{{resumeContent.experience}}</span>
                    </div>
                </div>
                <div style="width: 100%;height: 1px;background-color: whitesmoke;margin-top: 30px;"></div>
                <div class="checkPanel" style="margin-top: 20px;">
                    <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                        <div class="contentTitle" style="width:100px;">
                            <span>用户昵称：</span>
                        </div>
                        <div class="contentContent" style="width:350px;">
                            <span>{{resumeContent.experience}}</span>
                        </div>
                    </div>
                    <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                        <div class="contentTitle" style="width:100px;">
                            <span>联系方式：</span>
                        </div>
                        <div class="contentContent" style="width:350px;">
                            <span>{{resumeContent.experience}}</span>
                        </div>
                    </div>
                    <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                        <div class="contentTitle" style="width:100px;">
                            <span>下单时间：</span>
                        </div>
                        <div class="contentContent" style="width:350px;">
                            <span>{{resumeContent.experience}}</span>
                        </div>
                    </div>


                </div>
                <div class="buttonPanel" style="width:100%;height: 50px;text-align: center;margin-top: 30px;">
                    <el-button type="primary" >发货</el-button>
                    <el-button type="primary">返回</el-button>

                </div>
            </div>

        </el-dialog>
        <div class="user-list-breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/UserList' }">交易管理</el-breadcrumb-item>
                <el-breadcrumb-item>交易管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="user-list-table-content">
            <div class="search-conditions-panel">
                <el-row style="width: 100%;overflow: hidden">
                    <el-col style="width: 33%;text-align: left">
                        <div style="font-size: 14px">
                            <span>交易状态:&nbsp;&nbsp;</span>
                            <el-select style="height: 45px;">
                                <el-option value="全部"></el-option>
                                <el-option value="待付款"></el-option>
                                <el-option value="处理中"></el-option>
                                <el-option value="已发货"></el-option>
                                <el-option value="待使用"></el-option>
                                <el-option value="已退款"></el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col style="width: 33%;text-align: left">
                        <div style="font-size: 14px;margin-left: 1%">
                            <span>类型:&nbsp;&nbsp;</span>
                            <el-select style="height: 45px;">
                                <el-option value="全部"></el-option>
                                <el-option value="校园活动"></el-option>
                                <el-option value="美食活动"></el-option>
                                <el-option value="砍价活动"></el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col style="width: 33%;text-align: left">
                        <div style="margin-left: 4%">
                            <el-input placeholder="快速搜索商品、商家昵称、用户昵称">
                                <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            </el-input>
                        </div>
                    </el-col>
                </el-row>

            </div>
            <div class="table-panel">
                <el-table :data="tableData">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="订单编号"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="gender"
                            label="类型"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="grade"
                            label="订单内容"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="major"
                            label="实付金额"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="phone"
                            label="用户昵称"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="status"
                            label="联系方式"
                            width="130">
                    </el-table-column>
                    <el-table-column
                            prop="inviteCode"
                            label="邀请码"
                            width="90">
                    </el-table-column>
                    <el-table-column
                            prop="registerTime"
                            label="注册时间"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="registerTime"
                            label="状态"
                            width="90">
                    </el-table-column>
                    <el-table-column
                            prop="registerTime"
                            label="处理人"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="180">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="checkUser(scope.$index)">详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="bottom-panel">
                <div style="float: left">
                    <el-button type="primary" size="small">退款</el-button>

                </div>
                <div style="float:right;margin-right: 5%;">
                    <el-pagination
                            layout="prev, pager, next"
                            :total="1000">
                    </el-pagination>
                </div>
            </div>


        </el-card>
    </div>
</template>

<script>
    export default {
        name: "OrderManage",
        data(){
            return{

                tableData:[{
                    name:'ss5hane1',
                    gender:'男',
                    grade:'2016',
                    major:'人力资源管理',
                    phone:'18860016206',
                    status:'正式会员',
                    inviteCode:'QHYSX5',
                    inviteNum:13,
                    registerTime:'2019-11',

                }],
                dialogVisible:false,
                resumeContent:{
                    name:'王圣哲',
                    gender:'男',
                    grade:'2016',
                    major:'人力资源管理',
                    phone:'18860016206',
                    experience:'皇帝我觉得挖掘都怕我觉得我我大家啊阿外婆的建安费交付给IE我根本和我如果 ',
                    checkStatus:false,
                }
            }
        },
        methods:{
            checkUser(index){
                this.$data.dialogVisible = true;
            }
        }
    }
</script>

<style>
    #UserList{
        width: 100%;
        height: 100%;
    }

    .user-list-breadcrumb{
        width: 100%;
        height: 30px;
        /*background-color: dodgerblue;*/
        margin-top: 20px;
        padding-left: 20px;
    }

    .user-list-table-content{
        width: 97%;
        margin-left: 2%;
        margin-top: 20px;
    }

    .search-conditions-panel{
        width: 100%;
        height: 60px;
        line-height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        /*background-color: #42b983;*/
    }


    .bottom-panel{
        margin-top: 20px;
        width: 100%;
        height: 50px;
        padding-left: 20px;
        text-align: left;
    }


    .el-input, .el-input--suffix, .el-input__inner, .el-select{
        width:150px !important;
    }
</style>
