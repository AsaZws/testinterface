<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="input-user-text">
      <div class="input-public">
        <input v-model="userMessage.name" type="text" placeholder="请输入姓名">
      </div>
      <div class="input-public">
        <input v-model="userMessage.age" type="number" placeholder="请输入年龄">
      </div>
      <div class="input-public">
        <input v-model="userMessage.address" type="text" placeholder="请输入地址">
      </div>
      <div class="input-public input-button">
        <button @click="addUser(userMessage)">添加</button>
      </div>
      <div class="input-public input-button">
        <button @click="deleteAll()">全部删除</button>
      </div>
    </div>
    <table>
      <tr>
        <th>#</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>地址</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item, index) in userText" :key="index" @click="deleteOne(item.id)">
        <td>{{ index+1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.address }}</td>
        <td>删除</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function(){
    return{
      userText: [],
      userMessage: {
        name: "",
        age: "",
        address: ""
      }
    }
  },
  created(){
    this.getAll()
  },
  methods: {
    // 获取信息
    getAll() {
      // eslint-disable-next-line no-unused-vars
      var _this = this;
      this.$api.hello.getAll(res => {
          this.userText = res.data;
      });
    },
    // 添加和修改信息
    addUser(subdata) {
      // eslint-disable-next-line no-unused-vars
      var _this = this;
      if(subdata.address && subdata.age && subdata.address) {
        this.$api.hello.add(subdata, res => {
          if(res.data) {
            this.getAll()
          }
          subdata.name = "";
          subdata.age = "";
          subdata.address = "";
        });
      } else {
        alert("请输入完整信息")
      }
    },
    // 删除单条记录
    deleteOne(id) {
      if(id) {
        this.$api.hello.deleteOne(id, res => {
          if(res.data) {
            this.getAll();
          }
        })
      }
    },
    // 全部删除
    deleteAll() {
      this.$api.hello.deleteAll(res => {
        if(res.data) {
          this.getAll();
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello table {
  margin: 0 auto;
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.input-user-text {
  border: 1px solid #eee;
  padding: 10px;
  margin-top: 20px;
}
.input-user-text .input-public input {
  width: 200px;
  height: 20px;
  padding: 8px 4px;
  margin: 4px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.input-user-text .input-public select {
  width: 210px;
  height: 36px;
  padding: 8px 4px;
  margin: 4px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.input-user-text .input-public button {
  width: 210px;
  height: 36px;
  padding: 8px 4px;
  margin: 4px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #417bf9;
  color: #fff;
}
</style>
