<template>
  <div id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li :class="{'current': operateType==='login'}"
        @click="toggleMenu('login')">登录</li>
        <li :class="{'current': operateType==='register'}"
        @click="toggleMenu('register')">注册</li>
      </ul>

      <!-- form -->
      <el-form :model="ruleForm" class="login-form"
        status-icon :rules="rules" ref="ruleForm"
      >
        <el-form-item class="form-item" prop="email">
          <label>邮箱</label>
          <el-input type="email" v-model="ruleForm.email"></el-input>
        </el-form-item>

        <el-form-item class="form-item" prop="pass">
          <label>密码</label>
          <el-input type="password" v-model="ruleForm.pass"></el-input>
        </el-form-item>

        <el-form-item class="form-item" prop="pass_2" v-show="operateType==='register'">
          <label>确认密码</label>
          <el-input type="password" v-model="ruleForm.pass_2"></el-input>
        </el-form-item>

        <el-form-item class="form-item" prop="checkPass">
          <label>验证码</label>
          <el-row :gutter="10">
            <el-col :span="15">
              <el-input v-model="ruleForm.checkPass"></el-input>
            </el-col>
            <el-col :span="9">
              <el-button type="success" class="btn">获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item>
          <el-button type="danger" class="btn submit-btn" 
          @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
      <!-- form end -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    var validateEmail = (rule, value, callback) => {
      var reg = /^([A-Za-z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([A-Za-z]{2,4})$/
      if (!value) {
        return callback(new Error('邮箱不能为空'));
      }else if(!reg.test(value)){
        return callback(new Error('邮箱格式错误'))
      }else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }else if (value.length < 6 || value.length > 20){
        callback(new Error('密码长度有误'))
      }else {
        callback();
      }
    }
    var validatePass_2 = (rule, value, callback) => {
      if (this.operateType === 'login') callback()
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    }
    var validateCheckPass = (rule, value, callback) => {
      var reg = /^[a-z0-9]{4}$/
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else if (!reg.test(value)) {
        callback(new Error('验证码格式有误'))
      } else {
        callback();
      }
    }
    return {
      operateType: 'login',
      ruleForm: {
        email: '',
        pass: '',
        pass_2: '',
        checkPass: ''
      },
      rules:{
        email: [{ validator: validateEmail, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        pass_2: [{ validator: validatePass_2, trigger: 'blur' }],
        checkPass: [{ validator: validateCheckPass, trigger: 'blur' }],
      }
    }
  },
  methods: {
    toggleMenu(type){
      this.operateType = type
    },
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    }
  },
}
</script>

<style scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}
.login-wrap {
  width: 330px;
  margin: auto;
}
.menu-tab{
  text-align: center;
}
.menu-tab>li {
  display: inline-block;
  width: 88px;
  line-height: 36px;
  font-size: 14px;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
}
.menu-tab>li.current {
  background-color: rgba(0, 0, 0, .1);
}


.login-form {
  margin-top: 29px;
}
.login-form .form-item {
  margin-bottom: 13px;
}
.login-form label{
  margin-bottom: 3px;
  display: block;
  font-size: 14px;
  color: #fff;
}
.login-form .btn {
  display: block;
  width: 100%;
}
.login-form .submit-btn {
  margin-top: 19px;
}
</style>
