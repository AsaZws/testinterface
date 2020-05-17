import axios from './index';

// 获取信息
function getAll(callback) {
  return axios.get('getAll')
    .then(callback, function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// 添加和修改信息
function add(subdata, callback) {
  return axios.get('add?name='+subdata.name+'&age='+subdata.age+'&address='+subdata.address)
    .then(callback, function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// 删除单条
function deleteOne(id, callback) {
  return axios.get('deleteOne?id='+id)
    .then(callback, function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// 删除所有
function deleteAll(callback) {
  return axios.get('deleteAll')
    .then(callback, function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default {
  getAll,
  add,
  deleteOne,
  deleteAll
}