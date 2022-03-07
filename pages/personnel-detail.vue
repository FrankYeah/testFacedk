<template>
  <div class="personnel">
    <div class="personnel-row">
      <div class="global-title">基本資料</div>
      <el-button size="mini" type="danger">刪除</el-button>
    </div>
    <div class="global-line"></div>
    <div class="personnel-profile">
      <div class="personnel-profile-box">
        <img class="personnel-profile-img" src="@/assets/img/logo-2.png" alt="person">
      </div>
      <div class="personnel-intro">
        <div class="personnel-intro-box">
          <div class="personnel-intro-text">員工名稱</div>
          <el-input v-model="profile.name" type="text"></el-input>
        </div>
        <div class="personnel-intro-box">
          <div class="personnel-intro-text">所屬部門</div>
          <el-select style="width: 100%;" v-model="profile.department" placeholder="請選擇">
            <el-option v-for="(schedule, index) in departmentSelect"
            :key="index"
              labe
              :label="schedule.label"
              :value="schedule.value">
            </el-option>
          </el-select>
        </div>
        <div class="personnel-intro-box">
          <div class="personnel-intro-text">員工職稱</div>
          <el-input v-model="profile.title" type="text"></el-input>
        </div>
        <div class="personnel-intro-box">
          <div class="personnel-intro-text">聯絡方式</div>
          <el-input v-model="profile.contact" type="text"></el-input>
        </div>
        <div class="personnel-intro-box">
          <div class="personnel-intro-text">班表</div>
          <el-select style="width: 100%;" v-model="profile.schedule" placeholder="請選擇">
            <el-option v-for="(schedule, index) in scheduleSelect"
            :key="index"
              labe
              :label="schedule.label"
              :value="schedule.value">
            </el-option>
          </el-select>
        </div>
        <div class="personnel-intro-box">
          <div class="personnel-intro-text">E-mail</div>
          <el-input v-model="profile.mail" type="text"></el-input>
        </div>
        <div class="personnel-intro-box">
          <div class="personnel-intro-text">員工薪資</div>
          <el-input v-model="profile.salary" type="text"></el-input>
        </div>
        <div class="personnel-intro-row">
          <div class="personnel-intro-text">打卡方式</div>
          <el-radio v-model="profile.punchWay" label="0">外勤打卡</el-radio>
          <el-radio v-model="profile.punchWay" label="1">人臉打卡</el-radio>
        </div>
        <div class="personnel-intro-row">
          <div class="personnel-intro-text">收信狀態</div>
          <el-radio v-model="profile.punchWay" label="0">開</el-radio>
          <el-radio v-model="profile.punchWay" label="1">關</el-radio>
        </div>
        <div class="personnel-intro-row">
          <div class="personnel-intro-text">員工狀態</div>
          <el-radio v-model="profile.punchWay" label="0">開啟</el-radio>
          <el-radio v-model="profile.punchWay" label="1">停用</el-radio>
        </div>
      </div>
    </div>

    <statusMonth v-if="isStatusMonth" @switchStatus="switchStatus" />
    <statusDay v-else @switchStatus="switchStatus" />
    
  </div>
</template>

<script>


export default {
  head: {
    title: 'Dashboard',
  },
  layout: 'default',
  components: {
    statusMonth: require('~/components/personnel/status-month.vue').default,
    statusDay: require('~/components/personnel/status-day.vue').default,
  },
  props: {

  },
  data () {
    return {
      isStatusMonth: true,
      profile: {
        name: '',
        department: '四處',
        title: '',
        contact: '',
        schedule: '早班',
        mail: '',
        salary: '',
        punchWay: '',
        recieveStatus: '',
        employeeStatus: ''
      },
      scheduleSelect: [
        { label: '早班', value: '早班' },
        { label: '午班', value: '午班' },
        { label: '晚班', value: '晚班' },
      ],
      departmentSelect: [
        { label: '四處', value: '四處' },
        { label: '三處', value: '三處' },
        { label: '設計部', value: '設計部' },
      ],
    }
  },
  mounted () {
    
  },
  destroyed () {
    
  },
  computed: {
    
  },
  methods: {
    switchStatus(swith) {
      this.isStatusMonth = swith
    }
  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>

.personnel {
  background-color: white;
  border-radius: 3px;

  &-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 23px 30px;
  }

  &-profile {
    display: flex;
    padding: 23px 30px;

    &-box {
      margin-right: 95px;
    }

    &-img {
      width: 150px;
    }
  }

  &-intro {
    display: flex;
    flex-wrap: wrap;

    &-box {
      margin: 0px 50px 15px 0px;
    }

    &-text {
      margin: 0px 20px 10px 0px;
    }

    &-row {
      display: flex;
      width: 100%;
      margin: 15px 0px 0px;
    }
    
  }

  

}

@media( max-width: 500px ){

}

</style>
