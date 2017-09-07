<template>
  <div class="h100 flex">
    <div class="h100" style="width: 162px; max-width: 162px;" flex="1">
      <p class="device-all" @click="createMap">我的设备</p>
      <ul class="device-ul">
        <li v-for="(item, index) in alldevice" v-bind:class="{selected: (index + 1 == idx)}" @click="querySingleDevice(item.id, index)">{{item.name}}</li>
      </ul>
    </div>
    <div class="h100" flex="9" id="map-container">
    
    </div>
  </div>
  
</template>
<script>
  export default {
    name: 'create',
    data() {
      return {
        alldevice: [],
        idx: 0
      }
    },
    created(){
      this.queryDevice();
    },
    methods: {
      queryDevice() {
        this.$store.dispatch('QueryAllDevice').then(({data}) => {
          console.log(data.list)
          this.$data.alldevice = data.list;
          this.loading = false;
          // this.$router.push({ path: '/' });
            // this.showDialog = true;
          this.createMap();
        }).catch(() => {
          this.loading = false;
        });
      },
      createMap() {
        var map = new BMap.Map("map-container"); 
        map.centerAndZoom(new BMap.Point(this.$data.alldevice[0].lng,this.$data.alldevice[0].lat), 6);
        map.enableScrollWheelZoom(true);
        let opts = {
              width : 250,     // 信息窗口宽度
              height: 80,     // 信息窗口高度
              title : "信息窗口" , // 信息窗口标题
              enableMessage:true//设置允许信息窗发送短息
              };
        let pointArr = [];
        for(var i=0;i<this.$data.alldevice.length;i++){
          var json = this.$data.alldevice[i];
          var point = new BMap.Point(json.lng,json.lat);
          var marker = new BMap.Marker(point);  // 创建标注
          var content = `创建者:${json.creator}<br/>创建时间:${json.creatdate}`;
          var title = json.title;
          map.addOverlay(marker);               // 将标注添加到地图中
          addClickHandler(content,title,marker);
          pointArr.push(point);
        }
        map.setViewport(pointArr);
        function addClickHandler(content,title,marker){
          marker.addEventListener("click",function(e){
            openInfo(content,title,e)}
          );
        }
        function openInfo(content, title,e){
          var p = e.target;
          var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
          var infoWindow = new BMap.InfoWindow(content,Object.assign(opts,{title}));  // 创建信息窗口对象 
          map.openInfoWindow(infoWindow,point); //开启信息窗口
        }
      },
      querySingleDevice(id, idx){
        this.$data.idx = idx +1;
        console.log(this.$data.idx)
      }
    }
  }
</script>

<style lang="scss">
  .main-container,
  .app-main,
  .h100{
    height: 100%;
  }
  .app-main{
    box-sizing: border-box;
    position: relative;
    top: -50px;
    padding-top: 50px;
  }
  .el-menu-item-group__title{
    display: none;
  }
  ul,li{    list-style-type: none;padding:0;margin:0;}
  .device-ul li,
  .device-all{
    height:40px;
    line-height:40px;
    text-align:center;
    border-bottom: 1px solid #dfe6ec;
    margin: 0;
    padding: 0;
    color: #1f2d3d;
    white-space: nowrap;
    overflow: hidden;
  }
  .device-all{
        font-size: 15px;
            background: #eef1f6;
            border: 1px solid #dfe6ec;
    
  }
  .device-ul li{
    font-size: 14px;
  }
  .device-ul li.selected{
    background:#e2f0e4;
  }
</style>