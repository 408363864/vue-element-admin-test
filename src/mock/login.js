
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
        },
        {
            id: 3,//设备唯一id
            name: "设备3",//设备名字
            title: "我的设备3title",//显示设备标题
            lat: 15.32541,//纬度(百度)
            lng: 100.65412,//经度(百度)
            temp: 80,//温度
            hum: 60,//湿度
            creator: "lliub",//创建者
            creatdate: "2017-08-28",//创建时间,
            status: 3//设备状态（1-正常，2-关闭，3-故障，4-未连接）
        },
        {
            id: 4,//设备唯一id
            name: "设备4",//设备名字
            title: "我的设备4title",//显示设备标题
            lat: 15.32541,//纬度(百度)
            lng: 100.65412,//经度(百度)
            temp: 80,//温度
            hum: 60,//湿度
            creator: "lliub",//创建者
            creatdate: "2017-08-28",//创建时间,
            status: 4//设备状态（1-正常，2-关闭，3-故障，4-未连接）
        }
    ]
}

const deviceinfo = {
    1: {
        status: 1,//状态（1-正常，2-关闭，3-故障，4-未连接）
        list: [
            {
                type: 1,//（1-gps,2-湿度，3-温度）
                name: "22",//名字和type对应（1-gps,2-湿度，3-温度）
                image: "",//展示图片的url
                updatetime: "11"//最后更新时间
            }
        ]
    },
    2: {
        status: 2,//状态（1-正常，2-关闭，3-故障，4-未连接）
        list: [
            {
                type: 2,//（1-gps,2-湿度，3-温度）
                name: "湿度",//名字和type对应（1-gps,2-湿度，3-温度）
                image: "",//展示图片的url
                updatetime: "22"//最后更新时间
            }
        ]
    },
    3: {
        status: 3,//状态（1-正常，2-关闭，3-故障，4-未连接）
        list: [
            {
                type: 3,//（1-gps,2-湿度，3-温度）
                name: "温度",//名字和type对应（1-gps,2-湿度，3-温度）
                image: "",//展示图片的url
                updatetime: "33"//最后更新时间
            }
        ]
    },
    4: {
        status: 4,//状态（1-正常，2-关闭，3-故障，4-未连接）
        list: [
            {
                type: 4,//（1-gps,2-湿度，3-温度）
                name: "温度",//名字和type对应（1-gps,2-湿度，3-温度）
                image: "",//展示图片的url
                updatetime: "33"//最后更新时间
            }
        ]
    }
}

const applyinfo = {
    1: {
        id: 1,
        applytype: 0,//应用类别
        name:"我的设备1",//应用名字
        creatdate:"111",//创建时间
        explain:"1111",//应用说明
        tec: 1,//技术方案（1-wifi，2-蓝牙）
    },
    2: {
        id: 2,
        applytype: 0,//应用类别
        name:"我的设备2",//应用名字
        creatdate:"222",//创建时间
        explain:"2222",//应用说明
        tec: 1,//技术方案（1-wifi，2-蓝牙）
    },
    3: {
        id: 3,
        applytype: 0,//应用类别
        name:"我的设备3",//应用名字
        creatdate:"333",//创建时间
        explain:"3333",//应用说明
        tec: 1,//技术方案（1-wifi，2-蓝牙）
    },
    4: {
        id: 4,
        applytype: 0,//应用类别
        name:"我的设备4",//应用名字
        creatdate:"444",//创建时间
        explain:"4444",//应用说明
        tec: 1,//技术方案（1-wifi，2-蓝牙）
    }
}

const devicedata = {
    1: {
        list: [
            {
                temp: "10",//温度
                hum: "20",//湿度
                time: "2017-09-07"//时间
            },
            {
                temp: "20",//温度
                hum: "30",//湿度
                time: "2017-09-08"//时间
            },
            {
                temp: "30",//温度
                hum: "20",//湿度
                time: "2017-09-09"//时间
            },
            {
                temp: "10",//温度
                hum: "40",//湿度
                time: "2017-09-10"//时间
            }
        ]
    }
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
  },
  queryDeviceInfo: config => {
    var body = JSON.parse(config.body);
    return deviceinfo[body.id];
  },
  queryapplyinfo: config => {
    var body = JSON.parse(config.body);
    return applyinfo[body.id];
  },
  querydevicedata: config => {
    return devicedata[1];
  }
};
