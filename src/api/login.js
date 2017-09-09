import fetch from 'utils/fetch';

// export function loginByEmail(email, password) {
//   const data = {
//     email,
//     password
//   };
//   return fetch({
//     url: '/login/loginbyemail',
//     method: 'post',
//     data
//   });
// }

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  });
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}


export function loginByEmail(uname, password) {
  const data = {
    uname,
    password
  };
  return fetch({
    url: '/GetIndexConfig.json',
    method: 'post',
    data
  });
}

export function queryAllDevice(token){
  return fetch({
    url: '/queryalldevice.json',
    method: 'post',
    params: { token }
  });
}

export function queryDeviceInfo(id) {
  const data = {
    id
  };
  return fetch({
    url: '/querydeviceinfo.json',
    method: 'post',
    data
  });
}

export function queryapplyinfo(id) {
  const data = {
    id
  };
  return fetch({
    url: '/queryapplyinfo.json',
    method: 'post',
    data
  });
}

export function querydevicedata(id,startdate,enddate) {
  const data = {
    id,
    startdate,
    enddate
  };
  return fetch({
    url: '/querydevicedata.json',
    method: 'post',
    data
  });
}
