<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8" v-for="(post, i) in posts" :key="i" style="margin-bottom: 20px">
        <el-card :body-style="{ padding: '10px' }">
          <div style="padding: 14px;">
            <span>{{post.question_text}}</span>
            <div class="bottom clearfix">
             
              <router-link :to="/polls/+post.id">
                <el-button  size="small" type="primary">Vote</el-button>
              </router-link>
             <router-link :to="/votes/+post.id">
              <el-button  size="small" type="info">Vote Result</el-button>
              </router-link>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";

export default {

  data() {
    return {
      posts: [],

    };
  },

  mounted() {
   this.getData();
  },

  methods: {
    getData(){
       axios
      .get('http://127.0.0.1:8000/api/question/')
      .then(response => (this.posts = response.data));
  
    },
    
  }
};
</script>

<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>