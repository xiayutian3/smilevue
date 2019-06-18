<template>
  <div class="wrapper">
    <van-nav-bar
    title="用户注册"
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
        <van-button type="primary" @click="axiosRegisterUser" :loading="openLoading" size="large">马上注册</van-button>
      </div>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import url from '@/serverAPI.config.js'
  import {Toast} from 'vant'
export default {
  props:{},
  data(){
    return {
      username:'',
      password:'',
      openLoading:false  //是否开启用户的Loading
    }
  },
  created(){},
  mounted(){},
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    axiosRegisterUser(){
      this.openLoading = true
      axios({
        url: url.registerUser,
        method: 'post',
        data:{
          userName:this.username,
          password:this.password
        }
      })
      .then(res=>{
        console.log('register',res)
        if(res.data.code ==200){
            Toast.success('注册成功')
            this.$router.push('/')
        }else{
          console.log(res.data.message)
          Toast.fail('注册失败')
          this.openLoading = false
        }
      })
      .catch(err=>{
        console.log(error)
        Toast.fail('注册失败')
         this.openLoading = false
      })
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