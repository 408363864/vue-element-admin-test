<template>
	<div>
			<div class="wrap" v-show="info">
				<div>
					<div class="panel panel-primary">
				      <div class="panel-heading">
				        <div class="panel-title flex">
				        	设备信息<div style="margin-left: 15px;" @click="evt_edit"><i class="el-icon-edit"></i></div>
				        </div>
				      </div>
				      <div class="panel-body">
				        <label>应用名称：</label>{{applyInfo.name}}
				      </div>
				      <div class="panel-body">
				        <label>设备状态</label>
				        <span v-bind:style="{color: desc[result.status]['color']}">{{desc[result.status]["desc"]}}</span>
				        <span style="margin-left: 10px;" v-show="(result.status|0) < 3">
							<el-tooltip :content="status ? '设备已开启' : '设备已关闭'" placement="top">
								<el-switch
								  v-model="status"
								  on-color="#13ce66"
								  off-color="#ff4949">
								</el-switch>
							</el-tooltip>
						</span>
				      </div>
				      <div class="panel-body">
				        <label>应用分类：</label>智能设备
				      </div>
				      <div class="panel-body">
				        <label>创建时间：</label>{{applyInfo.creatdate}}
				      </div>
				      <div class="panel-body">
				        <label>应用说明：</label>{{applyInfo.explain}}
				      </div>
				    </div>
				</div>
				<div>
					<chatline ref="chatline"></chatline>
					<chatpan ref="chatpan"></chatpan>
				</div>
			</div>
			<div v-show="!info">
				<create v-bind:ruleForm="applyInfo"></create>
			</div>
	</div>
</template>
<script>
import create from './create';
import chatline from './chatline';
import chatpan from './chatpan';
export default {
    name: 'single',
    components: {create,chatline,chatpan},
    data() {
      return {
      		result: {
      			status: 0
      		},
      		status: false,
      		info: true,
      		desc: {
      			0: {
      				desc: ""
      			},
      			1: {
      				desc: "正常",
      				color: "#13CE66"
      			},
      			2: {
      				desc: "关闭",
      				color: "#ccc"
      			},
      			3: {
      				desc: "故障",
      				color: "#FF4949"
      			},
      			4: {
      				desc: "未连接",
      				color: "#ccc"
      			}
      		},
      		applyInfo: {

      		}
      }
    },
    watch: {
    	status(s){

    	}
    },
    methods:{
    	queryDeviceInfo(id){
    		this.$data.info=true;
    		this.$store.dispatch('QueryDeviceInfo',id).then(({data={}}) => {
    			this.$data.result = data;
    			this.$data.status = data.status == 1;
	          	console.log(data)
	        }).catch(() => {
	        });
    	},
    	queryApplyInfo(id){
    		this.$store.dispatch('queryapplyinfo',id).then(({data={}}) => {
    			data.type = 2;
    			this.$data.applyInfo = data;
	          	console.log(data)
	        }).catch(() => {
	        });
    	},
    	querychatline(id,startdate,enddate){
    		this.$refs.chatline.queryData(id,startdate,enddate);
    		this.$refs.chatpan.queryData(id,startdate,enddate);
    	},
    	evt_edit(){
    		this.$data.info=false;
    	}
    }
  }

</script>

<style>
.wrap{
	padding: 10px;
}
	.white{
		color: #fff;
	}
	.d-title{
		/*background: #99a9bf;*/
		height: 40px;
		line-height: 40px;
		color: #fff;
		font-size: 14px;
	}
	.card{
		border-radius: 3px;
		background: #99a9bf;
	}
	label{
		width: 120px;
		display: inline-block;
		font-weight: normal;
		font-size: 15px;
	}
	.panel {
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
}
.panel-primary>.panel-heading {
    color: #fff;
    background-color: #337ab7;
    border-color: #337ab7;
}
.panel-heading {
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
.panel-body {
    padding: 15px;border-bottom: 1px solid rgba(0,0,0,.05);font-size: 14px;
}
.panel-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
}
.panel-primary {
    border-color: #337ab7;
}
</style>