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
        <van-button type="primary" size="large">马上注册</van-button>
      </div>

    </div>
  </div>
</template>

<script>
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
      console.log(111)
      this.$router.go(-1)
    }
  },
  computed:{},
  components:{},
  watch:{}
}
</script>
<style lang="less" scoped>
    .register-panel{
        width:96%;
        border-radius: 5px;
        margin:20px auto;
        padding-bottom:50px;
    }
    .register-button{
        padding-top:10px;
    }
</style>