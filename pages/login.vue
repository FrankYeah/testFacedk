<template>
  <div class="login">
    <div class="login-box">
      <img class="login-logo" src="@/assets/img/logo-2.png" alt="logo">
      <input class="login-input"
        v-model.trim="account.account"
        placeholder="帳號"
        type="text"
      >
      <input class="login-input login-password"
        v-model.trim="account.password"
        placeholder="密碼"
        type="password"
      >

      <button @click="loginTo" class="login-btn">登入</button>
      <div class="login-func">
        <div>註冊帳號</div>
        ｜
        <div>忘記密碼</div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  head: {
    title: 'Login',
  },
  auth: false,
  layout: 'default',
  components: {

  },
  props: {

  },
  data () {
    return {
      account: {
        account: null,
        password: null
      }
    }
  },
  created () {
    // console.log(this.$auth.loggedIn)
    // if(this.$auth.loggedIn) {
    //   this.$router.push('/')
    // }
  },
  mounted () {
    
  },
  destroyed () {
    
  },
  computed: {
    
  },
  methods: {
    loginTo() {
      this.$axios.get(`/status`)
      .then( res => {
        
      })
      .catch(res => {
        
      })

      this.$auth.loginWith('local', { data:
        {
          phoneNumber: '0900000001',
          password: '!ExamplePassw0rd'
        }
      })

      // this.$axios.post(`/auth/login`,{
      //   phoneNumber: '0900000001',
      //   password: '!ExamplePassw0rd'
      // })
      // this.$router.push({
      //   path: '/'
      // })
    }
  }
}
</script>

<style lang="scss" scoped>

.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #1e5178, #2c90c4 25%, #31ccb0 84%, #00efd1);

  &-box {
    display: flex;
    flex-direction: column;
    padding: 0px 50px;
    border-radius: 10px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #fff;
  }

  &-logo {
    width: 250px;
    height: 100%;
    margin-top: 40px;
  }

  &-input {
    margin-top: 46px;
    padding: 12px 0px;
    border-radius: 10px;
    padding: 15px 0px 15px 30px;
    font-size: 20px;
    color: #707070;
    background-color: #f4f8fb;
  }

  &-password {
    margin-top: 13px;
  }

  &-btn {
    margin-top: 40px;
    padding: 12px 0px;
    border-radius: 10px;
    text-align: center;
    color: #fbfbfb;
    background-color: #009ef7;
  }

  &-func {
    display: flex;
    justify-content: center;
    margin: 15px 0px 47px;

    & div {
      margin: 0px 7.5px;
      color: #6f6f6f;
      cursor: pointer;

      &:last-child {
        color: #009ef7;
      }

      &:hover {
        opacity: 0.8;
      }
    }

  }

}


@media( max-width: 500px ){

  .login {
    
  }

}

</style>
