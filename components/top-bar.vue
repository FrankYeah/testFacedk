<template>
  <div class="top">
    <div class="top-row">
      <div class="top-title">{{ title }}</div>
      <div class="top-log">Hi, 威寶</div>
    </div>
    <div class="global-line"></div>
    <div class="top-head">
      <img class="top-icon" :src="require(`@/assets/img/icon/${currentRoute}.png`)" alt="logo">
      <div>．{{ head }}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    
  },
  data: () => ({
    title: null,
    head: null,
    currentRoute: ''
  }),
  mounted () {
    
  },
  destroyed () {
    
  },
  methods: {

  },
  computed: {
    
  },
  watch: {
    '$route.name': {
      handler: function(route) {
        
        switch (route) {
          case 'department-build':
            this.currentRoute = route
            this.title = '部門建置'
            this.head = '部門建置'
            break;
          case 'department-structure':
            this.currentRoute = 'department-build'
            this.title = '部門建置'
            this.head = '部門建置'
            break;
          case 'attend-info':
            this.currentRoute = route
            this.title = '出勤資訊'
            this.head = '出勤資訊'
            break;
          case 'attend-detail':
            this.title = '出勤資訊'
            this.head = '出勤資訊‧A廠‧業務部'
            break;
          case 'personnel-detail':
            this.title = '人員名單'
            this.head = '人員名單‧員工名單‧查看員工'
            break;
          case 'list-stranger':
            this.currentRoute = route
            this.title = '陌生名單'
            this.head = '陌生名單'
            break;
          case 'list-vip':
            this.currentRoute = route
            this.title = '貴賓名單'
            this.head = '貴賓名單'
            break;
          case 'list-black':
            this.currentRoute = route
            this.title = '黑名單'
            this.head = '黑名單'
            break;
          case 'leave-list':
            this.currentRoute = route
            this.title = '請假名單'
            this.head = '請假列表'
            break;
          case 'leave-detail':
            this.currentRoute = 'leave-list'
            this.title = '請假名單'
            this.head = '請假列表．查看更多'
            break;
          case 'personnel-list':
            this.currentRoute = route
            this.title = '人員名單'
            this.head = '部門建置．員工名單'
            break;
          case 'personnel-new':
            this.currentRoute = 'personnel-list'
            this.title = '人員名單'
            this.head = '部門建置．員工名單．新增員工'
            break;
          case 'personnel-detail':
            this.currentRoute = 'personnel-list'
            this.title = '人員名單'
            this.head = '部門建置．員工名單．編輯員工'
            break;
          case 'schedule-info':
            this.currentRoute = route
            this.title = '排班資訊'
            this.head = '排班資訊'
            break;
          case 'schedule-department':
            this.currentRoute = 'schedule-info'
            this.title = '排班資訊'
            this.head = '排班資訊．部門排班'
            break;
          case 'schedule-list':
            this.currentRoute = 'schedule-info'
            this.title = '排班資訊'
            this.head = '排班資訊．班次清單'
            break;
          default:
            this.title = '總覽'
            this.head = 'Dash'
            this.currentRoute = 'dashboard'
        }
        
      },
      deep: true,
      immediate: true
    },
  }
}
</script>

<style lang="scss">

  .top {
    position: fixed;
    width: calc(100% - 180px);
    top: 0px;
    right: 0px;
    background-color: white;
    z-index: 2;

    &-row {
      padding: 20px 50px 10px 30px;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    &-title {
      font-size: 28px;
      font-weight: bold;
    }

    &-icon {
      width: 40px;
      transform: translate(10px, 0px);
    }

    &-log {
      
    }

    &-head {
      display: flex;
      align-items: center;
      margin: 10px 0px 10px 30px;
    }

  }

@media( max-width: 500px ){

  .top {
  
  }

}

</style>