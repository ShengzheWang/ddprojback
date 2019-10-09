<template>
    <div id="UserFeedback">
        <el-dialog :visible.sync="previewDialogVisible" title="预览效果" show-close :modal="false">
            <div style="">
                <div class="previewWindow" style="margin-left: auto;margin-right: auto;width: 300px;height: 100px;border-radius: 5px;background-color: whitesmoke;text-align: center;line-height: 100px;">
                    <span>预览图</span>
                </div>
            </div>

        </el-dialog>
        <el-dialog :visible.sync="dialogVisible" title="编辑专业" show-close :modal="false">
            <el-form label-width="110px" label-position="left" >
                <el-form-item label="展示图片：" class="form-item-use">
                    <el-row>
                        <el-col>
                            <div style="width:50px;height:50px;background-color: whitesmoke">

                            </div>

                        </el-col>
                        <el-col>
                            <input type="file"/>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item label="跳转页面：" class="form-item-use">

                    <el-select v-model="value" size="small" style="width:100px;">
                        <el-option value="美食商品"></el-option>
                        <el-option value="校园活动"></el-option>
                        <el-option value="特惠活动"></el-option>
                        <el-option value="运营文章"></el-option>
                    </el-select>

                    <el-select size="small" style="margin-left: 10px;">
                        <el-option value="首页顶部推荐"></el-option>
                        <el-option value="校园活动推荐"></el-option>
                    </el-select>

                </el-form-item>
                <el-form-item label="展示类型：" class="form-item-use">
                    <el-select size="small">
                        <el-option value="首页顶部推荐"></el-option>
                        <el-option value="校园活动推荐"></el-option>
                    </el-select>
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
                <el-breadcrumb-item>轮播图管理</el-breadcrumb-item>
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
                            label="轮播图名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="routePage"
                            label="跳转页面"
                            width="200">
                    </el-table-column>
                    <el-table-column
                            prop="routeType"
                            label="类型"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="routeStatus"
                            label="状态"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="routeRank"
                            label="排序"
                            width="80">
                    </el-table-column>
                    <el-table-column
                            label="操作"
                            width="180">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="modifyMajor(scope.$index)">编辑</el-button>
                            <el-button type="text" size="small" @click="showPreview">预览</el-button>
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
        name: "UserFeedback",
        data(){
            return{
                value:'',
                tableData:[{
                    name:'ss5hane1',
                    routePage:'',
                    routeType:'首页顶部推荐',
                    routeStatus:'启用',
                    routeRank:'1',
                    id:''
                },
                    {
                        name:'ss5hane1',
                        routePage:'',
                        routeType:'校园活动页面',
                        routeStatus:'停用',
                        routeRank:'',
                        id:''

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
