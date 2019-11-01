<template>
<el-col :span="10">
    <h3>Create choice for</h3>
    <h4>{{id}}</h4>
    
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="choice">
        <el-input v-model="form.choice"></el-input>
      </el-form-item>

       <el-form-item>
        <el-button type="primary" @click="postCh">Create</el-button>
      </el-form-item>
</el-form>
  </el-col>
</template>

<script>
import axios from 'axios'
export default {
    props:['id'],
    data() {
    return {
    // qusetionid:this.qid.id,
      form: {
        choice: "",
       
      },
      
    };
  },
  methods:{
      postCh(){
          axios
          .post('http://127.0.0.1:8000/api/choice/',{
            choice_text:this.form.choice,
            question:this.id,
            
          })

      }
  }
}
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