<template>
  <div>
     <h4>username: {{userinfo.username}}<br> userID: {{userinfo.id}}</h4>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">
          <h2>Welcome to Pollster</h2>
         
          <div class="pollstyle">
            <router-link to="/polls">
              <el-button type="primary">View Available Polls</el-button>
            </router-link>
          </div>
          <div class="postpollst">
            <router-link to="/postpoll">
              <el-button type="primary">Post Another Poll</el-button>
            </router-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      userinfo:[]
    }
  },
  mounted(){
     this.getUserInfo();
  },
  methods:{
     getUserInfo(){
      axios
      .get("http://127.0.0.1:8000/api/auth/users/me/")
      .then(response=>{
        this.userinfo = response.data
      })
    }
  }

};
</script>

<style scoped>
.el-row {
  margin-bottom: 40px;
  /* &:last-child {
      margin-bottom: 0;
    } */
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #e4e7ed;
}
.bg-purple {
  background: #e4e7ed;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 2px;
  min-height: 100px;
  text-align: center;
}
.row-bg {
  padding: 10px 0;
  background-color: #e4e7ed;
}
.postpollst{
  padding-top: 10px;
}
</style>