<template>
  <div class="schedule">
    <div class="schedule-list">
      <div class="global-line"></div>
      <div class="schedule-row">
        <el-date-picker
          v-model="date"
          placeholder="日期">
        </el-date-picker>
      </div>
    </div>

    <div class="schedule-func">
      <div class="schedule-func-row">
        <div class="schedule-title">
          <div>員工名單</div>
          <div>班表B：12:00 ~ 20:00 上班人數：13人</div>
        </div>
        <div class="schedule-btn-row">
           <!-- @click="isShowAdd = true" -->
          <nuxt-link to="/personnel-new">
            <el-button type="primary">新增員工</el-button>
          </nuxt-link>
          <el-button @click="goToDepartment()" type="success">班表</el-button>
          <el-button @click="goToList()" style="background: #f35d82; color: white;">班次清單</el-button>
          <el-button type="warning">匯出當月排班</el-button>
          <el-button type="danger">匯入當月排班</el-button>
        </div>
      </div>
      <div class="global-line"></div>
      <div class="schedule-slide">
        <div @click="slideType = 'A'" :class="['schedule-slide-text', {'schedule-slide-select': slideType == 'A'}]">班表A</div>
        <div @click="slideType = 'B'" :class="['schedule-slide-text', {'schedule-slide-select': slideType == 'B'}]">班表B</div>
        <div @click="slideType = 'C'" :class="['schedule-slide-text', {'schedule-slide-select': slideType == 'C'}]">班表C</div>
      </div>
    </div>

    <div class="schedule-status">
      <div class="schedule-title">名單列表</div>
      <div class="global-line"></div>
      <div class="schedule-table-main">
        <div class="schedule-table-row">
          <div></div>
          <div>
            <el-input
              placeholder="搜尋"
              prefix-icon="el-icon-search"
              v-model="filter.text">
          </el-input>
          </div>
        </div>
        <el-table
          :data="filter.dataAll"
          style="width: 100%"
        >
          <el-table-column v-for="(head, index) in tableHead"
            :key="index"
            :prop="head.name"
            :label="head.label"
            sortable
            min-width="14">
          </el-table-column>
          <el-table-column
            prop="mani"
            label="操作"
            min-width="14"
          >
            <template slot-scope="scope">
              <el-button
                @click="ManiData(scope.$index)"
                size="mini"
                type="danger"
              >刪除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="schedule-table-hint">
          <div>目前顯示 1 到 3 全部 3 筆</div>
          <div>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="200">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>

    <el-dialog title="新增員工" width="80%" :visible.sync="isShowAdd">
      <dialogAdd
        @switchDialogAdd="switchDialogAdd"
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
    dialogAdd: require('~/components/schedule/dialog-add.vue').default,
  },
  props: {

  },
  data () {
    return {
      isShowAdd: false,
      date: '',
      slideType: 'A',
      filter: {
        dataAll: [],
        text: ''
      },
      tableHead: [
        {
          name: 'name',
          label: '員工名稱'
        },
        {
          name: 'title',
          label: '員工職稱'
        },
        {
          name: 'way',
          label: '聯絡方式'
        },
        {
          name: 'status',
          label: '就職狀態'
        },
        {
          name: 'schedule',
          label: '班表'
        },
        {
          name: 'director',
          label: '排班主管'
        },
      ],
      tableData: [
        {
          name: '王小美',
          title: '員工',
          way: '0909-991-233',
          status: '在職',
          schedule: '中班',
          director: '王黃明',
          mani: true
        },
        {
          name: '王大美',
          title: '主管',
          way: '0909-991-233',
          status: '不在職',
          schedule: '晚班',
          director: '王黑明',
          mani: true
        },{
          name: '王中美',
          title: '主管',
          way: '0909-991-233',
          status: '在職',
          schedule: '早班',
          director: '王小明',
          mani: true
        },
      ]
    }
  },
  mounted () {
    this.filter.dataAll = this.tableData
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
    },
    addNew() {

    },
    ManiData(key) {
      
    },
    switchDialogAdd(isShow) {
      this.isShowAdd = isShow
    },
    
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px 0px 20px 20px;
    
    & div:first-child {
      margin: 4px 10px 4px 0px;
      font-size: 25px;
      font-weight: bold;
    }

    & div:last-child {
      padding: 4px;
      background-color: #f3f6f9;
    }
  }

  &-row {
    display: flex;
    justify-content: center;
    padding: 10px 0px;
    background-color: white;
    border-radius: 3px;
  }

  &-func {
    margin-top: 30px;
    border-radius: 4px;
    background-color: white;
  }

  &-func-row {
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

  &-slide {
    display: flex;
    align-items: center;
    padding: 20px 0px 20px 20px;

    &-text {
      width: 160px;
      padding-bottom: 6px;
      margin-right: 10px;
      font-size: 20px;
      text-align: center;
      color: #a8acbb;
      border-bottom: 1px solid #a8acbb;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

    &-select {
      font-weight: bold;
      color: #3c8cb9;
      border-bottom: 1px solid #3c8cb9;
    }

  }

  &-status {
    margin-top: 30px;
    border-radius: 4px;
    background-color: white;
  }

  &-table {
    margin-top: 20px;
    border-radius: 4px;
    background-color: white;

    &-title {
      padding: 20px;
      font-size: 25px;
    }

    &-main {
      padding: 20px;
    }

    &-row {
      display: flex;
      justify-content: space-between;
      margin: 20px 0px;
    }

    &-hint {
      display: flex;
      justify-content: space-between;
      margin: 40px 0px 70px;
    }
  }

  
}


@media( max-width: 500px ){

}

</style>
