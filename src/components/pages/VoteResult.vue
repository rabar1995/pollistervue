<template>
  <div v-if="showData">
    <h3>Question: {{id}}</h3>
    <div style=" background-color:pink">
      <div>
        <h2>{{user.question_text}}</h2>
      </div>

      <div style="margin-top: 20px " v-for="(u,i) in user.choices" :key="i">
        <h3>
          <el-tag type="success">{{u.choice_text}} {{u.count_votes}}</el-tag>
        </h3>
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
      user: null
    };
  },
  mounted() {
    this.showData = false;
    this.getData();
  },
  methods: {
    
    getData() {
      axios
        .get("http://127.0.0.1:8000/api/question/" + this.id)
        .then(response => {
          this.user = response.data;
          this.showData = true;
        });
    }
  }
};
</script>

<style scoped>
</style>