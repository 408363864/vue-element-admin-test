
const userMap = {
    issuccess: 1,//1-请求成功，0-请求失败
    code: "200", //200-接口返回数据成功
    msg: ""//返回错误信息
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
  logout: () => 'success'
};
