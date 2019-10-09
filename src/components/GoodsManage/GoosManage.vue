<template>
    <div id="UserFeedback">
        <el-dialog :visible.sync="dialogVisible" title="编辑专业" show-close :modal="false">
            <div class="dialogContent">
                <div>
                    <span>编辑专业：</span>
                    <el-input placeholder="请输入专业名称" v-model="modifyForm.majorName" style="width: 200px;"></el-input>
                </div>
            </div>
            <div style="margin-left: auto;margin-right: auto">
                <el-button type="primary" size="small" @click="confirmMajor">确定修改</el-button>
                <el-button type="warning" size="small" @click="()=>{this.$data.dialogVisible=false;}">取消修改</el-button>
            </div>

        </el-dialog>
        <div class="user-list-breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/UserFeedback' }">用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>专业管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="user-list-table-content">

            <div class="table-panel">
                <el-table :data="tableData">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="专业名称"
                            width="300">
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="180">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="modifyMajor(scope.$index)">编辑</el-button>
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
                tableData:[{
                    name:'ss5hane1',
                    id:''
                }],
                dialogVisible:false,
                modifyForm:{
                    modifyIndex:'',
                    id:'',
                    majorName:''
                }
            }
        },
        methods:{
            modifyMajor(index){
                this.$data.modifyForm.modifyIndex = index;

                this.$data.dialogVisible=true;
                this.$data.modifyForm.majorName = this.$data.tableData[index].name
            },
            confirmMajor(){
                this.$data.tableData[this.$data.modifyForm.modifyIndex].name = this.$data.modifyForm.majorName;
                this.$data.dialogVisible=false;
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

    .dialogContent{
        display: flex;
        width: 100%;
        height: 100px;
        align-items: center;
        justify-content: center;
    }
</style>
