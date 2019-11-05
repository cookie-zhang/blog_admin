<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login-form" autocomplete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">Weclome To Admin</h3>
      </div>
      <el-form-item prop="name">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.name"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="pass">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.pass"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="on"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button :loading="loading" type="primary"  @click.native.prevent="handleLogin">登陆</el-button>
      <el-button  :loading="loading"  type="primary"  @click.native.prevent="handleRegister">注册</el-button>
    </el-form>
    <el-dialog
      title="提示"
      :visible.sync="registerVisible"
      width="30%"
      center
      class="registerDilog"
     >
        <el-form :model="regist" :rules="registRules" ref="regist" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
            <el-input style="color: #ccc" v-model="regist.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input style="color: #ccc" type="password" v-model="regist.pass" auto-complete="off"></el-input>
          </el-form-item>
        </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="registerVisible = false">取 消</el-button>
        <el-button type="primary" @click="registerSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { login, register } from '@/api/admin/login'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        name: null,
        pass: null
      },
      registerVisible:false,
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      },
      registRules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
      regist: {
        name: null,
        pass: null
      },
    }
  },
  watch: {
  },
  methods: {
    // 眼睛查看密码
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    // 登陆
    handleLogin() {
       this.$refs.loginForm.validate(valid => {
          if (valid) {
            login(this.loginForm).then(res=>{
              if(res.code == 200){
                this.$message({
                  type: 'success',
                  message: '登录成功'
                })
                this.$store.dispatch('user/login', this.loginForm)
                .then(() => {
                  this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
                  this.loading = false
                })
              }else if(res.code == 412){
                this.$message({
                  type: 'waring',
                  message: '密码错误'
                })
              }else if(res.code == 413){
                this.$message({
                  type: 'waring',
                  message: '用户不存在'
                })
              }
            }).catch(error=>{
              this.$message({
                  type: 'waring',
                  message: '用户不存在'
                })
            })
          }
        })
    },
    // 注册
    handleRegister(){
      this.registerVisible=true;
    },
    registerSubmit(){
       this.$refs.regist.validate(valid => {
          if (valid) {
            register(this.regist).then(res=>{
              if(res.code == 200){
                this.$message({
                  type: 'waring',
                  message: '注册成功！'
                })
              }else if(res.code == 201){
                this.$message({
                  type: 'waring',
                  message: '注册失败,用户已存在！'
                })
              }
              this.registerVisible=false
            }).catch(error=>{
              console.log(error)
            })
          }
        })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    },
  }
}
</script>

<style lang="scss">
$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .registerDilog{
    border-radius: 20px;
    .demo-ruleForm{
      .el-input__inner{
        color: #283443
      }
    }
  }
  
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
