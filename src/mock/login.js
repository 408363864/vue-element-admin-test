
const userMap = {
    issuccess: 1,//1-请求成功，0-请求失败
    code: "200", //200-接口返回数据成功
    msg: ""//返回错误信息
}

const alldevice = {
   status: 1,//状态（1-正常，2-关闭，3-故障，4-未连接）
    list: [
        {
            id: 1,//设备唯一id
            name: "我的设备1",//设备名字
            title: "我的设备1title",//显示设备标题
            lat: 39.914889,//纬度(百度)
            lng: 116.403874,//经度(百度)
            temp: 80,//温度
            hum: 60,//湿度
            creator: "lliub",//创建者
            creatdate: "2017-08-28",//创建时间,
            status: 1//设备状态（1-正常，2-关闭，3-故障，4-未连接）
        },
        {
            id: 2,//设备唯一id
            name: "我的设备2",//设备名字
            title: "我的设备2title",//显示设备标题
            lat: 13.32541,//纬度(百度)
            lng: 127.65412,//经度(百度)
            temp: 80,//温度
            hum: 60,//湿度
            creator: "lliub",//创建者
            creatdate: "2017-08-28",//创建时间,
            status: 1//设备状态（1-正常，2-关闭，3-故障，4-未连接）
        }
    ]
}

export default {
  loginByEmail: config => {
    return userMap;
  },
   getInfo: config => {
    return {
    role: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
    }
  },
  logout: () => 'success',
  queryAllDevice: config => {
    return alldevice;
  }
};
