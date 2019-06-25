<template>
  <div class="wrapper">
    <van-nav-bar
    title="用户登录"
    left-arrow
    left-text="返回"
    @click-left="goBack"
    />
    <div class="register-panel">
      <van-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名"
        required
        clearable
        @click-icon="username = ''"
        />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        clearable
        @click-icon="password = ''"
      />
      <div class="register-button">
        <van-button type="primary" @click="loginAction" :loading="openLoading" size="large">马上登录</van-button>
      </div>

    </div>
  </div>
</template>

<script>
  // import axios from 'axios'
  import axios from '@/request/request.js'
  import url from '@/serverAPI.config.js'
  import {Toast} from 'vant'
export default {
  props:{},
  data(){
    return {
      username:'',
      password:'',
      openLoading:false,   //是否开启用户的Loading
      usernameErrorMsg:'', //当用户名出现错误的时候
      passwordErrorMsg:''  //当密码出现错误的时候
    }
  },
  created(){
    if(localStorage.userInfo){
      Toast.success('您已经登录')
      this.$router.push('/')
    }
  },
  mounted(){},
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    loginAction(){
      this.checkForm && this.axiosLoginUser()
    },
    axiosLoginUser(){
      this.openLoading = true
      axios({
        url: url.login,
        method: 'post',
        data:{
          userName:this.username,
          password:this.password
        }
      })
      .then(res=>{
        console.log('login',res)
        if(res.data.code ==200 && res.data.message){
          new Promise((resolve,reject)=>{
            localStorage.userInfo = {userName:this.username}
            setTimeout(()=>{
              resolve()
            },500)
          }).then(()=>{
            Toast.success('登录成功')
            this.$router.push('/')
          }).catch(err=>{
            Toast.fail('登录状态保存失败')
            console.log(err)
          })
            
        }else{
          console.log(res.data.message)
          Toast.fail('登录失败')
          this.openLoading = false
        }
      })
      .catch(err=>{
        console.log(error)
        Toast.fail('登录失败')
         this.openLoading = false
      })
    },
    checkForm(){
      let isOk = true
      if(this.username.trim().length<5){
        this.usernameErrorMsg = '用户名不能小于5位'
        isOk = false
      }else{
        this.usernameErrorMsg = ''
      }
      if(this.password.trim().length<6){
        this.passwordErrorMsg = '密码不能少于6位'
        isOk = false
      }else{
        this.passwordErrorMsg = ''
      }
      return isOk
    }
  },
  computed:{},
  components:{},
  watch:{}
}
</script>
<style lang="less" scoped>
    .register-panel{
        box-sizing: border-box;
        width:96%;
        border-radius: 5px;
        margin:20px auto;
        padding-bottom:50px;
    }
    .register-button{
        box-sizing: border-box;
        padding-top:10px;
    }
</style>