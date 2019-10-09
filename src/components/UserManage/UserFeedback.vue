<template>
    <div id="UserFeedback">
        <el-dialog :visible.sync="dialogVisible" title="查看简历" :modal="false" width="300">
            <div class="userContentPanel">
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;">
                    <div class="contentTitle" style="width: 100px;">
                        <span>用户昵称：</span>
                    </div>
                    <div class="contentContent" style="width:200px;">
                        <span>{{feedbackContentForm.name}}</span>
                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                    <div class="contentTitle" style="width:100px;">
                        <span>联系方式：</span>
                    </div>
                    <div class="contentContent" style="width:200px;">
                        <span>{{feedbackContentForm.phone}}</span>
                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">


                    <div class="contentTitle" style="width:100px;">
                        <span>来源：</span>
                    </div>
                    <div class="contentContent" style="width:200px;">
                        <span>{{feedbackContentForm.feedbackContentForm}}</span>
                    </div>
                </div>
                <div class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                    <div class="contentTitle" style="width:100px;">
                        <span>留言内容：</span>
                    </div>
                    <div class="contentContent" style="width:200px;">
                        <span>{{feedbackContentForm.feedbackContent}}</span>
                    </div>
                </div>
                <div style="width: 100%;height: 1px;background-color: whitesmoke;margin-top: 30px;"></div>
                <div class="checkPanel" style="margin-top: 20px;">
                    <div v-if="feedbackContentForm.status==='待处理'" class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                        <div class="contentTitle" style="width:100px;">
                            <span>回复留言：</span>
                        </div>
                        <div class="contentContent" style="width:350px;">
                            <el-input type="textarea" v-model="feedbackContentForm.reply" ></el-input>
                        </div>
                    </div>
                    <div v-else class="contentPanel" style="display: flex;flex-direction: row;text-align: left;padding-left: 20px;margin-top: 20px;">
                        <div class="contentTitle" style="width:100px;">
                            <span>回复内容：</span>
                        </div>
                        <div class="contentContent" style="width:350px;">
                            <el-input type="textarea" v-model="feedbackContentForm.reply" disabled></el-input>
                        </div>
                    </div>

                </div>
                <div class="buttonPanel" style="width:100%;height: 50px;text-align: center;margin-top: 30px;">
                    <el-button type="primary" @click="confirmReply" v-if="feedbackContentForm.status==='待处理'">提交</el-button>
                    <el-button type="primary">返回</el-button>

                </div>
            </div>
        </el-dialog>


        <div class="user-list-breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/UserFeedback' }">用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>用户反馈</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="user-list-table-content">
            <div class="search-conditions-panel">
                <div style="font-size: 14px">
                    <span>状态:&nbsp;&nbsp;</span>
                    <el-select style="height: 45px;width: 100px;">
                        <el-option value="全部"></el-option>
                        <el-option value="待审核"></el-option>
                        <el-option value="未激活"></el-option>
                        <el-option value="活动管理员"></el-option>
                    </el-select>
                </div>
                <div style="font-size: 14px;margin-left: 3%">
                    <span>来源:&nbsp;&nbsp;</span>
                    <el-select style="height: 45px;width: 150px;">
                        <el-option value="全部"></el-option>
                        <el-option value="待审核"></el-option>
                        <el-option value="未激活"></el-option>
                        <el-option value="活动管理员"></el-option>
                    </el-select>
                </div>
                <div style="font-size: 14px;margin-left: 4%">
                    <span>排序:&nbsp;&nbsp;</span>
                    <el-select style="height: 45px;width:180px;">
                        <el-option value="按注册时间升序"></el-option>
                        <el-option value="按注册时间降序"></el-option>
                        <el-option value="按邀请人数升序"></el-option>
                        <el-option value="按邀请人数降序"></el-option>
                    </el-select>
                </div>
                <div style="margin-left: 4%">
                    <el-input placeholder="快速搜索手机号、昵称">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </div>

            </div>
            <div class="table-panel">
                <el-table :data="tableData">
                    <el-table-column
                            prop="name"
                            label="昵称"
                            width="100">
                    </el-table-column>
                    <el-table-column
                            prop="feedbackContent"
                            label="留言内容"
                            width="230">
                    </el-table-column>
                    <el-table-column
                            prop="feedbackFrom"
                            label="来源"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="status"
                            label="状态"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="dealer"
                            label="处理人"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="feedbackTime"
                            label="留言时间"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop=""
                            label="操作"
                            width="180">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="dealFeedback(scope.$index)">处理</el-button>
                            <el-button type="text" size="small">详情</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="bottom-panel">
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
        name: "UserFeedback",
        data(){
            return{
                tableData:[{
                    name:'ss5hane1',
                    feedbackContent:'男基地挖掘单位年...',
                    feedbackFrom:'2016',
                    phone:'18860016206',
                    status:'待处理',
                    dealer:'QHYSX5',
                    feedbackTime:'2018-09-08 17:30:30',
                    reply:''
                }],
                dialogVisible:false,
                feedbackContentForm:{
                    name:'ss5hane1',
                    feedbackContent:'男基地挖掘单位年...',
                    feedbackFrom:'2016',
                    phone:'18860016206',
                    status:'正式会员',
                    dealer:'QHYSX5',
                    feedbackTime:'2018-09-08 17:30:30',
                    reply:''
                },
                feedbackIndex:'',

            }
        },
        methods:{
            dealFeedback(index){
                this.$data.dialogVisible = true;
                this.$data.feedbackContentForm = this.$data.tableData[index];
                this.$data.feedbackIndex = index;
            },
            confirmReply(){
                this.$data.tableData[this.$data.feedbackIndex].status='已处理';
                this.$data.dialogVisible = false;
                this.$data.tableDate[this.$data.feedbackIndex].reply = this.$data.feedbackContentForm.reply;
            }
        }
    }
</script>

<style scoped>
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

    .el-input, .el-input__inner, .el-select{
        width:130px !important;
    }

</style>
