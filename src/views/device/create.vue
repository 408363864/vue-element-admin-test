<template>
  <div class="components-container" >
	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
	  <el-form-item label="应用名称" prop="name">
	    <el-input v-model="ruleForm.name"></el-input>
	  </el-form-item>
	  <el-form-item label="应用分类" prop="applytype">
	    <el-select v-model="type[ruleForm.applytype]" placeholder="请选择应用分类">
	      <el-option label="智能设备" value="1"></el-option>
	    </el-select>
	  </el-form-item>
	  <!-- <el-form-item label="技术方案" prop="tec">
	    <el-radio-group v-model="ruleForm.tec">
	      <el-radio label="wifi"></el-radio>
	      <el-radio label="蓝牙"></el-radio>
	    </el-radio-group>
	  </el-form-item> -->
	  <el-form-item label="应用说明" prop="explain">
	    <el-input type="textarea" v-model="ruleForm.explain"></el-input>
	  </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
	    <el-button @click="resetForm('ruleForm')">重置</el-button>
	  </el-form-item>
	</el-form>
  </div>
</template>
<script>
 // 	applytype: 0,//应用类别
 //    name:"",//应用名称
 //    creatdate:"",//创建时间
 //    explain:"",//应用说明
 //    tec: 1,//技术方案（1-wifi，2-蓝牙），
 //    type: 1(1-新增,2-编辑) 
  export default {
    name: 'create',
    props: ['ruleForm'],
    data() {
      return {
        type: {
          0: "智能设备"
        },
        ruleForm: {
          name: '',
          applytype: 0,
          // tec: 'wifi',
          explain: '',
          type: 1
        },
        rules: {
          name: [
            { required: true, message: '应用名称', trigger: 'blur' }
          ]
      	},
        loading: false,
        showDialog: false
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      setOptions(opt){
        this.$data.ruleForm = opt;
      }
    }
  }
</script>