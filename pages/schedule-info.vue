<template>
  <div class="schedule">
    <div class="schedule-list">
      <div class="global-line"></div>
      <div class="schedule-row-box">
        <div class="schedule-department-box">
          <div>選擇部門：</div>
          <div class="schedule-row">
            <div @click="select.isShowDepartment = true" class="schedule-department-input">{{ select.department }}</div>
            <el-button @click="choose()" type="primary">選擇</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="schedule-status">
      <div class="schedule-status-row">
        <div class="schedule-title">名單列表</div>
        <div class="schedule-btn-row">
          <el-button @click="goToDepartment()" type="success">班表</el-button>
          <el-button @click="goToList()" style="background: #f35d82; color: white;">班次清單</el-button>
          <el-button type="warning">匯出當月排班</el-button>
          <el-button type="danger">匯入當月排班</el-button>
          
        </div>
      </div>
      
      <div class="global-line"></div>
      
      <div>
        <no-ssr>
          <el-calendar>
            <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
            <template
              slot="dateCell"
              slot-scope="{data}"
            >
              <div @click="goToDepartment(data.day)">
                <div class="schedule-datepick-day">{{ data.day.substring(8, 10) }}</div>
                <div class="schedule-datepick-row">班表A : 13人</div>
                <div class="schedule-datepick-row">班表B : 24人</div>
                <div class="schedule-datepick-row">班表C : 55人</div>
              </div>
            </template>
          </el-calendar>
        </no-ssr>
      </div>
    </div>

    <el-dialog title="選擇部門" :visible.sync="select.isShowDepartment">
      <dialogDepartment
        :departmentData="departmentData"
        @switchDialog="switchDialog"
        @getData="getData"
      />
    </el-dialog>
  </div>
</template>

<script>


export default {
  head: {
    title: 'Dashboard',
  },
  layout: 'default',
  components: {
    dialogDepartment: require('~/components/dialog-department.vue').default,
  },
  props: {

  },
  data () {
    return {
      select: {
        isShowDepartment: false,
        department: '全部'
      },
      departmentData: [
        {
          id: 1,
          label: '三處'
        },
        {
          id: 2,
          label: '四處'
        },
        {
          id: 3,
          label: '營業部'
        },
        {
          id: 4,
          label: '一所',
          children: [
            {
              id: 5,
              label: '三所'
            },
            {
              id: 6,
              label: '四所'
            }
          ]
        },
        {
          id: 7,
          label: '設計部'
        },
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
    choose() {

    },
    exportList() {

    },
    inportList() {

    },
    switchDialog(isShow) {
      this.select.isShowDepartment = isShow
    },
    getData(data) {
      this.select.department = data.label.join(', ')
    },
    goToList() {
      this.$router.push({
        path: '/schedule-list', 
        query: {
            // id: key
        }
      })
    },
    goToDepartment() {
      this.$router.push({
        path: '/schedule-department', 
        query: {
            // id: key
        }
      })
    }
  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>

.schedule {

  &-list {
    border-radius: 4px;
    background-color: white;
  }

  &-title {
    padding: 20px 0px 20px 20px;
    font-size: 25px;
    font-weight: bold;
  }

  &-row-box {
    display: flex;
  }

  &-row {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-department-box {
    padding: 20px 0px 20px 20px;
  }

  &-department-input {
    width: 200px;
    margin: 10px 43px 10px 0px;
    padding: 13px 0px 13px 20px;
    border-radius: 10px;
    background-color: #f4f8fb;
  }

  &-status {
    margin-top: 30px;
    border-radius: 4px;
    background-color: white;
  }

  &-status-row {
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
  }

  &-btn-row {
    display: flex;
    align-items: center;

    & button {
      margin-left: 10px;
    }
  }

  &-datepick {

    &-day {
      text-align: right;
      font-size: 14px;
    }

    &-row {
      padding: 3px 0px;
      font-size: 14px;
      text-align: center;
    }

  }

  
}


@media( max-width: 500px ){

}

</style>
