<template>
  <div class="flex">
  	<div :class="className" :id="id" :style="{height:height,width:width}" flex="1"></div>
  	<div :class="className" :id="ids" :style="{height:height,width:width}" flex="1"></div>
  </div>
</template>

<script>
  import echarts from 'echarts';
  import { parseTime, addTimeSpan } from 'utils';
  export default {
    props: {
      className: {
        type: String,
        default: 'chartpan'
      },
      id: {
        type: String,
        default: 'chartpan'
      },
      ids: {
        type: String,
        default: 'chartpan1'
      },
      width: {
        type: String,
        default: '50%'
      },
      height: {
        type: String,
        default: '300px'
      }
    },
    data() {
      return {
        chart: null,
        chart1: null,
        opt: {

        }
      };
    },
    beforeDestroy() {
      // if (!this.chart) {
      //   return
      // }
      // this.chart.dispose();
      // this.chart = null;
    },
    methods: {
      queryData(id,startdate=parseTime(addTimeSpan(-7)),enddate=parseTime(new Date())){
        this.$store.dispatch('querydevicedata',id,startdate,enddate).then(({data = {}}) => {
          this.$data.opt = data;

          this.initChart();
          this.initChart1();
        }).catch(() => {
        });
      },
      initChart() {
        this.chart && this.chart.dispose();
        this.chart = null;
        this.chart = echarts.init(document.getElementById(this.id));
        let opt = {
		    tooltip : {
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		    series: [
		        {
		            name: '温度',
		            type: 'gauge',
		            detail: {formatter:'{value}'},
		            data: [{value: 50, name: '实时温度%C'}]
		        }
		    ]
		};
		var self = this;
		setInterval(function () {
		    let rand = (Math.random() * 100).toFixed(0);
		    opt.series[0].data[0].value = rand;
		    self.chart.setOption(opt, true);
		    if(rand>70){
		    	self.$notify({
		          title: '警告',
		          message: '温度过高！！！',
		          type: 'warning'
		        });
		    }
		},2000);
        this.chart.setOption(opt);
    },
    initChart1() {
        this.chart1 && this.chart1.dispose();
        this.chart1 = null;
        this.chart1 = echarts.init(document.getElementById(this.ids));
        let opt = {
		    tooltip : {
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		    series: [
		        {
		            name: '湿度',
		            type: 'gauge',
		            detail: {formatter:'{value}'},
		            data: [{value: 50, name: '实时湿度%C'}]
		        }
		    ]
		};
		var self = this;
		setInterval(function () {
			let rand = (Math.random() * 100).toFixed(0);
		    opt.series[0].data[0].value = rand;
		    self.chart1.setOption(opt, true);
		    if(rand>70){
		    	self.$notify({
		          title: '警告',
		          message: '湿度过高！！！',
		          type: 'warning'
		        });
		    }
		},2000);
        this.chart1.setOption(opt);
      }
}
}
</script>
