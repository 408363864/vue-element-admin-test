<template>
	<div>
			<div class="wrap">
				<div class="card">
					<div class="d-title">设备状态: <span v-bind:style="{color: desc[result.status]['color']}">{{desc[result.status]["desc"]}}</span></div>
					<div class="d-title" v-show="(result.status|0) < 3">设备开关：
						<el-tooltip :content="status ? '已开启' : '已关闭'" placement="top">
							<el-switch
							  v-model="status"
							  on-color="#13ce66"
							  off-color="#ff4949">
							</el-switch>
						</el-tooltip>
					</div>
				</div>
				<br/>
				<div class="p-title">
					设备信息
				</div>
				<div>
					
				</div>
			</div>
	</div>
</template>
<script>
export default {
    name: 'single',
    data() {
      return {
      		result: {
      			status: 0
      		},
      		status: false,
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
      				color: "#D3DCE6"
      			},
      			3: {
      				desc: "故障",
      				color: "#FF4949"
      			},
      			4: {
      				desc: "未连接",
      				color: "#F9FAFC"
      			}
      		}
      }
    },
    watch: {
    	status(s){

    	}
    },
    methods:{
    	queryDeviceInfo(id){
    		this.$store.dispatch('QueryDeviceInfo',id).then(({data}) => {
    			this.$data.result = data;
    			this.$data.status = data.status == 1;
	          	console.log(data)
	        }).catch(() => {
	        });
    	},
    	
    }
  }

</script>

<style>

</style>