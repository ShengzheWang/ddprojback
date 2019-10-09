<template>
    <div id="UserFeedback">
        <el-dialog :visible.sync="dialogVisible" :title="dialogTitle" :modal="false" width="300">
            <div class="userContentPanel" v-if="!showModifyMessage">
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;">
                    <div class="contentTitle" style="width: 100px;">
                        <span>商家名称：</span>
                    </div>
                    <div class="contentContent" style="width:200px;">
                        <span>{{shopDetails.name}}</span>
                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                    <div class="contentTitle" style="width:100px;">
                        <span>地址：</span>
                    </div>
                    <div class="contentContent" style="width:200px;">
                        <span>{{shopDetails.address}}</span>
                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">

                    <div class="contentTitle" style="width:100px;">
                        <span>商家帐号：</span>
                    </div>
                    <div class="contentContent" style="width:200px;" v-if="showModifyPassword===false">
                        <span>{{shopDetails.shopAccount}}</span>
                        <span style="margin-left: 20px;color:dodgerblue" @click="()=>{this.$data.showModifyPassword=true}">修改密码</span>

                    </div>
                    <div class="contentContent" style="width:300px;" v-if="showModifyPassword===true">
                        <span>{{shopDetails.shopAccount}}</span>
                        <el-input style="width: 140px;height:16px;" v-model="modifiedPassword"></el-input>
                        <span style="margin-left: 20px;color:dodgerblue" @click="()=>{this.$data.showModifyPassword=false;
                                                                                      this.$message({
                                                                                        type:'success',
                                                                                        message:'修改成功'
                                                                                      });}">确认修改</span>

                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                    <div class="contentTitle" style="width:100px;">
                        <span>负责人：</span>
                    </div>
                    <div class="contentContent" style="width:200px;">
                        <span>{{shopDetails.owner}}</span>
                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                    <div class="contentTitle" style="width:100px;">
                        <span>联系电话：</span>
                    </div>
                    <div class="contentContent" style="width:200px;">
                        <span>{{shopDetails.phone}}</span>
                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                    <div class="contentTitle" style="width:100px;">
                        <span>营业时间：</span>
                    </div>
                    <div class="contentContent" style="width:350px;">
                        <span>{{shopDetails.owner}}</span>
                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                    <div class="contentTitle" style="width:100px;">
                        <span>商家标签：</span>
                    </div>
                    <div class="contentContent" style="width:350px;">
                        <span>{{shopDetails.tags}}</span>
                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                    <div class="contentTitle" style="width:100px;">
                        <span>商家头像：</span>
                    </div>
                    <div class="contentContent" style="width:350px;">
                        <span>{{shopDetails.tags}}</span>
                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                    <div class="contentTitle" style="width:100px;">
                        <span>商家图片：</span>
                    </div>
                    <div class="contentContent" style="width:350px;">
                        <span>{{shopDetails.tags}}</span>
                    </div>
                </div>
                <div style="width: 100%;height: 1px;background-color: whitesmoke;margin-top: 30px;"></div>
                <div class="buttonPanel" style="width:100%;height: 50px;text-align: center;margin-top: 30px;">
                    <el-button type="primary" @click="()=>{this.$data.showModifyMessage=true; this.$data.dialogTitle='编辑商家信息';}">编辑</el-button>
                    <el-button type="primary" >商家商品</el-button>
                </div>
            </div>

            <div class="userModifyPanel" v-else>
                <el-form :model="modifyShopDetails" label-width="130" style="width: 460px;" label-position="left">
                    <el-form-item label="商家名称">
                        <el-input v-model="modifyShopDetails.name"></el-input>
                    </el-form-item>
                    <el-form-item label="商家地址">
                        <el-input v-model="modifyShopDetails.address"></el-input>
                    </el-form-item>
                    <el-form-item label="商家帐号">
                        <el-input v-model="modifyShopDetails.shopAccount"></el-input>
                    </el-form-item>
                    <el-form-item label="商家负责人">
                        <el-input v-model="modifyShopDetails.owner"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model="modifyShopDetails.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="营业时间">
                        <el-input v-model="modifyShopDetails.businessHours"></el-input>
                    </el-form-item>
                    <el-form-item label="商家标签">
                        <el-input v-model="modifyShopDetails.tags"></el-input>
                    </el-form-item>
                    <el-form-item label="商家头像">
                        <input type="file"/>
                    </el-form-item>
                    <el-form-item label="展示图片">
                        <input type="file"/>
                    </el-form-item>

                </el-form>

                <div class="buttonPanel" style="width:100%;height: 50px;text-align: center;margin-top: 30px;">
                    <el-button type="primary" @click="()=>{this.$data.showModifyMessage=false; this.$data.dialogTitle='商家信息';}">编辑</el-button>
                    <el-button type="primary" @click="()=>{this.$data.showModifyMessage=false}">取消</el-button>
                </div>
            </div>

        </el-dialog>
        <div class="user-list-breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/ShopManage' }">商家管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="user-list-table-content">
            <div class="search-conditions-panel">
                <div>
                    <el-input placeholder="快速搜索商家">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </div>
            </div>
            <div class="table-panel">
                <el-table :data="tableData">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="商家名称"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="商家地址"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="负责人"
                            width="80">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="联系电话"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="商品数"
                            width="70">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="加入时间"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="120">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="checkShopDetails">详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="bottom-panel">
                <div style="float:left;margin-right: 5%;">
                    <el-button type="primary" size="small">新增</el-button>
                    <el-button type="danger" size="small">删除</el-button>
                </div>
            </div>


        </el-card>
    </div>
</template>

<script>
    export default {
        name: "ShopManage",
        data(){
            return{
                dialogTitle:'商家详情',
                tableData:[{
                    name:'ss5hane1',
                    id:'',
                    address:'',
                    dealer:'',
                    phone:'',
                    num:'',
                    enterTime:'',

                }],
                dialogVisible:false,
                shopDetails:{
                    name:'',
                    address:'',
                    phone:'',
                    owner:'',
                    goodsNum:'',
                    enterTime:'',
                    businessHours:'',
                    shopAccount:'',
                    shopPassword:'',
                    tags:''
                },
                modifyShopDetails:{
                    name:'',

                },
                showModifyPassword:false,
                modifiedPassword:'',
                showModifyMessage:false,

            }
        },
        methods:{
            checkShopDetails(){
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


    .el-input{
        width:300px;
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

    .dialogContent{
        display: flex;
        width: 100%;
        height: 100px;
        align-items: center;
        justify-content: center;
    }

    .userModifyPanel{

    }
</style>
