<template>
  <div v-if="showData">
    <h3>Question: {{id}}</h3>

    <h1>user Login = {{userinfo.username}}</h1>

    <div style=" background-color:pink">
      <div>
        <h2>{{poll.question_text}}</h2>
      </div>
      <el-radio-group v-model="choiceid" value="4">
        <div style="margin-top: 20px " v-for="(u,i) in poll.choices" :key="i">
          <el-radio :label="u.id">{{u.choice_text}}</el-radio>
        </div>
      </el-radio-group>
      <div class="btnstyle">
        <el-button type="primary" @click="putData">Vote</el-button>
      </div>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      showData: false,
      poll: null,
      picked:'',
      choiceid:0,
      userinfo:[],
    
    };
  },
  mounted() {
    this.showData = false;
    this.getData();    
    this.getUserInfo();
  },
  methods: {
    getData() {
      axios
        .get("http://127.0.0.1:8000/api/question/" + this.id)
        .then(response => {
          this.poll = response.data;
          this.showData = true;
        });
    },
    putData(){
      axios
      // +this.id+"/"
      .post("http://127.0.0.1:8000/api/vote/" ,{
          choice:this.choiceid,
          voted_by:this.userinfo.id,
          

      })
      .then(response=>{
            this.picked = response.data
             
        })
    },
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
.btnstyle{
  padding: 20px
}
</style>