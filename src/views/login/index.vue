<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- /导航栏 -->

    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="用户名"
        placeholder="请输入手机号"
        label="手机号"
        required
        clearable
      >
        <!--【增加图标】-->
        <template #left-icon>
          <i class="iconfont icon-shouji"></i>
        </template>
      </van-field>
      <van-field
        v-model="user.code"
        name="验证码"
        placeholder="请输入验证码"
        type="number"
        label="验证码"
        required
      >
        <template #left-icon>
          <i class="iconfont icon-yanzhengma"></i>
        </template>
        <!--【增加发送按钮】-->
        <template #button>
          <!--这里注意，要加上native-type,否则也可以实现表单提交-->
          <van-button class="send-sms-btn" round size="small"  native-type="button" type="default">
            发送验证码
          </van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <!--其实van-button按钮如果包裹在van-form里面默认类型就是native-type，这里不加也可以-->
        <van-button class="login-btn" block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <!-- /登录表单 -->
  </div>
</template>

<script>
import { login } from "@/api/user";

export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '18655056237',
        code: '246810'
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onSubmit () {
      const user = this.user
      try {
        const res = await login(user)
        console.log('登录成功', res)

      } catch (err){
        if (err.response.status === 400){
          console.log('账号或者密码有错误',err)
        } else {
          console.log('请稍后再试',err)
        }
      }

    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .iconfont {
    font-size: 37px;
  }
  .send-sms-btn {
    width: 152px;
    height: 46px;
    line-height: 46px;
    background-color: #ededed;
    font-size: 22px;
    color: #666;
  }
  .login-btn-wrap {
    padding: 53px 33px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
    }
  }
}
</style>

