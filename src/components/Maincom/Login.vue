<template>
  <div class="login">
    <el-card>
      <h2>Login</h2>
      <!-- @submit.prevent="login" -->
      <el-form class="login-form" ref="form" >
        <el-form-item>
          <el-input v-model="username" placeholder="Username" prefix-icon="fas fa-user"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="password" placeholder="Password" type="password" prefix-icon="fas fa-lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-button" type="primary" @click="login">Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "login",
  data() {
    return {
        username: "",
        password: ""
    };
  },
 
  methods: {
    login() {
      axios
        .post("http://localhost:8000/api/auth/jwt/create",
        {username:this.username ,
        password:this.password})
        .then(  response =>{
            axios.defaults.headers.common['Authorization'] = 
            `Bearer ${
                response.data.access
                }`
            this.$router.push('/')

        } 
        )   
    }
  },
   mounted(){
      this.login()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-button {
  width: 100%;
  margin-top: 40px;
}
.login-form {
  width: 290px;
}
.forgot-password {
  margin-top: 10px;
}
</style>
<style lang="scss">
$teal: rgb(0, 124, 137);
.el-button--primary {
  background: $teal;
  border-color: $teal;

  &:hover,
  &.active,
  &:focus {
    background: lighten($teal, 7);
    border-color: lighten($teal, 7);
  }
}
.login .el-input__inner:hover {
  border-color: $teal;
}
.login .el-input__prefix {
  background: rgb(238, 237, 234);
  left: 0;
  height: calc(100% - 2px);
  left: 1px;
  top: 1px;
  border-radius: 3px;
  .el-input__icon {
    width: 30px;
  }
}
.login .el-input input {
  padding-left: 35px;
}
.login .el-card {
  padding-top: 0;
  padding-bottom: 30px;
}
h2 {
  font-family: "Open Sans";
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  padding-bottom: 20px;
}
a {
  color: $teal;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    color: lighten($teal, 7);
  }
}
.login .el-card {
  width: 340px;
  display: flex;
  justify-content: center;
}
</style>
