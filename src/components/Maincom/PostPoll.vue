<template>
  <el-col :span="10">
     <h5>{{qid.id}}</h5>
    <h4>username: {{userinfo.username}}</h4>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="Question">
        <el-input v-model="form.question"></el-input>
      </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="postQ">post poll</el-button>
        </el-form-item>
      
           <router-link :to="/postpoll/+qid.id">
        <el-form-item>
          <el-button type="primary">add Choice</el-button>
        </el-form-item>
      </router-link>
    </el-form>
   
  </el-col>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        question: ""
      },
      userinfo: [],
      qid:[]
    };
  },
  mounted() {
    this.getUserInfo();

  },

  methods: {
    getUserInfo() {
      axios.get("http://127.0.0.1:8000/api/auth/users/me/").then(response => {
        this.userinfo = response.data;
      });
    },
    postQ() {
      axios.post("http://127.0.0.1:8000/api/question/", {
        question_text: this.form.question,
        pub_date: "2019-10-01T19:24:45Z",
        created_by: this.userinfo.id
      })
      .then((response)=> {
          this.qid=response.data
      })
    }
  }
};
</script>

<style  scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>