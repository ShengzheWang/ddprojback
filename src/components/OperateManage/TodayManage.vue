<template>
    <div id="UserFeedback">
        <el-dialog :visible.sync="dialogVisible" title="编辑展示" show-close :modal="false">
            <el-form label-width="110px" label-position="left" >
                <el-form-item label="商家名称：" class="form-item-use">
                    <el-input v-model="value" size="small"></el-input>
                </el-form-item>
                <el-form-item label="状态：" class="form-item-use">
                    <el-select size="small">
                        <el-option value="启用"></el-option>
                        <el-option value="停用"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div style="margin-left: auto;margin-right: auto">
                <el-button type="primary" size="small" @click="confirmMajor">确定修改</el-button>
                <el-button type="warning" size="small" @click="()=>{this.$data.dialogVisible=false;}">取消修改</el-button>
            </div>
        </el-dialog>
        <div class="user-list-breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/UserFeedback' }">运营管理</el-breadcrumb-item>
                <el-breadcrumb-item>今天吃什么</el-breadcrumb-item>
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
                            label="展示商家"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="status"
                            label="状态"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="rank"
                            label="排序"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="180">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="modifyMajor(scope.$index)">编辑</el-button>
                            <el-button type="text" size="small" disabled>置顶</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="bottom-panel">
                <div style="float:left;margin-right: 5%;">
                    <el-button type="primary" size="small">新增</el-button>
                    <el-button type="primary" size="small">启用</el-button>
                    <el-button type="primary" size="small">停用</el-button>
                    <el-button type="danger" size="small">删除</el-button>
                </div>
            </div>


        </el-card>
    </div>
</template>

<script>
    export default {
        name: "TodayManage",
        data(){
            return{
                value:'',
                tableData:[{
                    name:'ss5hane1',
                    status:'启用',
                    id:'',
                    rank:'1'
                },
                    {
                        name:'ssdwdw1',
                        status:'启用',
                        id:'',
                        rank:'2'

                    }],
                dialogVisible:false,
                modifyForm:{
                    modifyIndex:'',
                    id:'',
                    majorName:'',

                },
                previewDialogVisible: false,
            }
        },
        methods:{
            showPreview(){
                this.$data.previewDialogVisible = true;
            },
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

        width: 100%;
        height: 400px;

    }


    .form-item-use{
        text-align: left;
        width: 330px;
    }
    .el-input__inner .el-input{
        width:130px;
    }


</style>
