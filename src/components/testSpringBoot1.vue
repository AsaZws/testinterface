<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="input-user-text">
      <div class="input-public">
        <input v-model="userMessage.username" type="text" placeholder="请输入姓名">
      </div>
      <div class="input-public">
        <input v-model="userMessage.userpassword" type="text" placeholder="请输入密码">
      </div>
      <div class="input-public">
        <input v-model="userMessage.age" type="number" placeholder="请输入年龄">
      </div>
      <div class="input-public">
        <select v-model="userMessage.sex">
          <option disabled value="">请选择性别</option>
          <option value ="男">男</option>
          <option value ="女">女</option>
        </select>
      </div>
      <div class="input-public input-button">
        <button @click="submitUser(userMessage)">提交</button>
      </div>
    </div>
    <table>
      <tr>
        <th>ID</th>
        <th>姓名</th>
        <th>密码</th>
        <th>年龄</th>
        <th>性别</th>
      </tr>
      <tr v-for="(item, index) in userText" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.username }}</td>
        <td>{{ item.userpassword }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.sex }}</td>
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
        username: "",
        userpassword: "",
        age: Number,
        sex: ""
      }
    }
  },
  created(){
    this.testInterface()
  },
  methods: {
    // 获取信息
    testInterface() {
      // eslint-disable-next-line no-unused-vars
      var _this = this;
      this.$api.hello.userdata(res => {
        _this.userText = res.data;
      });
    },
    // 提交信息
    submitUser(subdata) {
      // eslint-disable-next-line no-unused-vars
      var _this = this;
      this.$api.hello.submit(subdata, res => {
        console.log(res);
        this.testInterface()
      });
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
