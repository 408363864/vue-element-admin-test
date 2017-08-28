<template>
  <div style="min-width: 1000px;">
    <div style="width: 160px; float: left;">
      <el-table
    :data="alldevice"
    height="800"
    border
    style="width: 160px">
      <el-table-column
        prop="name"
        label="我的设备"
        width="160">
      </el-table-column>
    </el-table>
    </div>
    <div id="map-container" style="height: 800px; float: left;min-width: 840px;">
    
    </div>
  </div>
  
</template>
<script>
  export default {
    name: 'create',
    data() {
      return {
        alldevice: []
      }
    },
    created(){
      this.queryDevice();
    },
    methods: {
      queryDevice() {
        this.$store.dispatch('QueryAllDevice').then(({data}) => {
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
        var opts = {
              width : 250,     // 信息窗口宽度
              height: 80,     // 信息窗口高度
              title : "信息窗口" , // 信息窗口标题
              enableMessage:true//设置允许信息窗发送短息
              };
        for(var i=0;i<this.$data.alldevice.length;i++){
          var json = this.$data.alldevice[i];
          var marker = new BMap.Marker(new BMap.Point(json.lng,json.lat));  // 创建标注
          var content = `创建者:${json.creator}<br/>创建时间:${json.creatdate}`;
          var title = json.title;
          map.addOverlay(marker);               // 将标注添加到地图中
          addClickHandler(content,title,marker);
        }
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
      }
    }
  }
</script>