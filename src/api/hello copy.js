import axios from './index';

// 获取信息
function userdata(callback) {
  return axios.get('getuserlist')
    .then(callback, function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
// 添加信息
function submit(subdata, callback) {
  return axios.post('adduser?username='+subdata.username+'&userpassword='+subdata.userpassword+'&age='+subdata.age+'&sex='+subdata.sex)
    .then(callback, function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default {
  userdata,
  submit
}