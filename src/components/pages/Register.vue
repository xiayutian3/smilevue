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
      />
      <div class="register-button">
        <van-button type="primary" @click="axiosRegisterUser" size="large">马上注册</van-button>
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
      password:''
    }
  },
  created(){},
  mounted(){},
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    axiosRegisterUser(){
      axios({
        url: url.registerUser,
        method: 'post',
        data:{
          userName:this.username,
          password:this.password
        }
      })
      .then(res=>{
        console.log('res',res)
        if(res.data.code ==200){
            Toast.success('注册成功')
        }else{
          console.log(res.data.message)
          Toast.fail('注册失败')
        }
      })
      .catch(err=>{
        console.log(error)
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