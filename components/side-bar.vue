<template>
  <div class="side">
    <router-link to="/">
      <img class="side-logo" src="@/assets/img/logo.png" alt="logo">
    </router-link>
    
    <div class="side-dashboard">
      <img class="side-icon" src="@/assets/img/icon/dashboard.png" alt="logo">
      <router-link to="/" :class="[{'side-selected': currentRoute == ''}]">Dashboard</router-link>
    </div>

    <div class="side-box">
      <div class="side-title">客戶管理</div>
      <div class="side-link">
        <img class="side-icon" src="@/assets/img/icon/department-build.png" alt="logo">
        <router-link to="/department-build" :class="[{'side-selected': currentRoute == 'department-build'}]">部門建置</router-link>
      </div>
      <div class="side-link">
        <img class="side-icon" src="@/assets/img/icon/personnel-list.png" alt="logo">
        <router-link to="/personnel-list" :class="[{'side-selected': currentRoute == 'personnel-list'}]">人員名單</router-link>
      </div>
    </div>

    <div class="side-box">
      <div class="side-title">考勤管理</div>
      <div class="side-link">
        <img class="side-icon" src="@/assets/img/icon/attend-info.png" alt="logo">
        <router-link to="/attend-info" :class="[{'side-selected': currentRoute == 'attend-info'}]">出勤資訊</router-link>
      </div>
      <div class="side-link">
        <img class="side-icon" src="@/assets/img/icon/schedule-info.png" alt="logo">
        <router-link to="/schedule-info" :class="[{'side-selected': currentRoute == 'schedule-info'}]">排班資訊</router-link>
      </div>
      <div class="side-link">
        <img class="side-icon" src="@/assets/img/icon/leave-list.png" alt="logo">
        <router-link to="/leave-list" :class="[{'side-selected': currentRoute == 'leave-list'}]">請假名單</router-link>
      </div>
    </div>

    <div class="side-box">
      <div class="side-title">名單管理</div>
      <div class="side-link">
        <img class="side-icon" src="@/assets/img/icon/list-stranger.png" alt="logo">
        <router-link to="/list-stranger" :class="[{'side-selected': currentRoute == 'list-stranger'}]">陌生名單</router-link>
      </div>
      <div class="side-link">
        <img class="side-icon" src="@/assets/img/icon/list-vip.png" alt="logo">
        <router-link to="/list-vip" :class="[{'side-selected': currentRoute == 'list-vip'}]">白名單</router-link>
      </div>
      <div class="side-link">
        <img class="side-icon" src="@/assets/img/icon/list-black.png" alt="logo">
        <router-link to="/list-black" :class="[{'side-selected': currentRoute == 'list-black'}]">黑名單</router-link>
      </div>
    </div>

    <!-- <div class="side-box">
      <div class="side-title">系統設定</div>
      <div class="side-link">帳號管理</div>
    </div> -->


  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    
  },
  data () {
    return {
      isShow: {
        attend: false,
        schedule: false,
        leave: false
      },
      currentRoute: ''
    }
  },
  mounted () {
    
  },
  computed: {
    
  },
  methods: {
    
  },
  watch: {
    '$route.name': {
      handler: function(route) {
        console.log(route)
        this.currentRoute = route
      },
      deep: true,
      immediate: true
    },
  }
}
</script>

<style lang="scss">

.side {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 180px;
  height: 100vh;
  font-size: 14px;
  color: #ABABAB;
  background-color: #1F1E2C;

  &-logo {
    width: 140px;
    margin: 20px 0px 0px 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  &-dashboard {
    display: flex;
    align-items: center;
    margin: 30px 0px 20px 0px;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }

  &-icon {
    width: 30px;
  }

  &-box {
    margin: 14px 0px 0px 0px;
  }

  &-title {
    font-size: 14px;
  }

  &-link {
    display: flex;
    align-items: center;
    margin: 0px 0px 0px 20px;
    cursor: pointer;

    &:hover {
      color: white;
    }
    
  }

  &-drop {
    margin: 0px 0px 0px 10px;
  }

  &-drop-title {
    margin: 14px 0px 0px 10px;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }

  &-drop-link {
    margin: 14px 0px 0px 20px;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }

  &-selected {
    color: white;
  }
}


@media( max-width: 500px ){

  .side {
    
  }

}

</style>