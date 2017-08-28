<template>
  <div class="components-container" >
	<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
	  <el-form-item label="应用名字" prop="name">
	    <el-input v-model="ruleForm.name"></el-input>
	  </el-form-item>
	  <el-form-item label="应用分类" prop="applytype">
	    <el-select v-model="ruleForm.applytype" placeholder="请选择应用分类">
	      <el-option label="智能设备" value="1"></el-option>
	    </el-select>
	  </el-form-item>
	  <el-form-item label="技术方案" prop="tec">
	    <el-radio-group v-model="ruleForm.tec">
	      <el-radio label="wifi"></el-radio>
	      <el-radio label="蓝牙"></el-radio>
	    </el-radio-group>
	  </el-form-item>
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
 //    name:"",//应用名字
 //    creatdate:"",//创建时间
 //    explain:"",//应用说明
 //    tec: 1,//技术方案（1-wifi，2-蓝牙），
 //    type: 1(1-新增,2-编辑) 
  export default {
    name: 'create',
    data() {
      const validateEmail = (rule, value, callback) => {
          callback();
      };
      const validatePass = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能小于6位'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          name: '',
          applytype: '智能设备',
          tec: 'wifi',
          explain: ''
        },
        rules: {
          name: [
            { required: true, message: '应用名字', trigger: 'blur' }
          ]
      	},
        loading: false,
        showDialog: false
      }
    },
    methods: {
      submitForm(formName) {
      	console.log(this)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>