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
          <el-button @click="isShowAdd = true" type="primary">新增班次</el-button>
          <el-button  @click="goToDepartment()" type="success">班表</el-button>
          <el-button @click="goToList()" style="background: #f35d82; color: white;">班次清單</el-button>
          <el-button type="warning">匯出當月排班</el-button>
          <el-button type="danger">匯入當月排班</el-button>
        </div>
      </div>
      
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
          <el-table-column
            prop="name"
            label="班表名稱"
            sortable
            min-width="13">
          </el-table-column>
          <el-table-column
            prop="work"
            label="上班時段"
            sortable
            min-width="13">
          </el-table-column>
          <el-table-column
            prop="offwork"
            label="下班時段"
            sortable
            min-width="13">
          </el-table-column>
          <el-table-column
            prop="break"
            label="休息時段"
            sortable
            min-width="13">
          </el-table-column>
          <el-table-column
            prop="time"
            label="工作時數"
            sortable
            min-width="13">
          </el-table-column>
          <el-table-column label="使用狀態"
            min-width="13"
          >
            <template slot-scope="scope">
              <div :style="`
                ${scope.row.status == '停用' ? `color: red;`  : ''}
              `">{{ scope.row.status }}</div>
            </template>
          </el-table-column>
          <el-table-column label="操作"
            min-width="13"
          >
            <template slot-scope="scope">
              <el-button @click="scope.row.mani = false" v-if="scope.row.mani" size="mini" type="danger">啟用</el-button>
              <el-button @click="scope.row.mani = true" v-else size="mini" type="info" plain>停用</el-button>
              <el-button
                @click="ManiData(scope.$index)"
                size="mini"
                type="danger"
                icon="el-icon-edit"
              ></el-button>
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

    <el-dialog title="選擇部門" :visible.sync="select.isShowDepartment">
      <dialogDepartment
        :departmentData="departmentData"
        @switchDialog="switchDialog"
        @getData="getData"
      />
    </el-dialog>
    <el-dialog title="新增班次" width="80%" :visible.sync="isShowAdd">
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
    dialogDepartment: require('~/components/dialog-department.vue').default,
    dialogAdd: require('~/components/schedule/dialog-add.vue').default,
  },
  props: {

  },
  data () {
    return {
      isShowAdd: false ,
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
      filter: {
        dataAll: [],
        text: ''
      },
      tableHead: [
        {
          name: 'name',
          label: '班表名稱'
        },
        {
          name: 'work',
          label: '上班時段'
        },
        {
          name: 'offwork',
          label: '下班時段'
        },
        {
          name: 'break',
          label: '休息時段'
        },
        {
          name: 'time',
          label: '工作時數'
        },
        {
          name: 'status',
          label: '使用狀態'
        },
        {
          name: 'mani',
          label: '操作'
        },
      ],
      tableData: [
        {
          name: '王大美',
          work: '00:00',
          offwork: '02:00',
          break: '01:00 ~ 03:00',
          time: '11小時',
          status: '啟用',
          mani: false,
        },
        {
          name: '王曉美',
          work: '01:00',
          offwork: '01:00',
          break: '02:00 ~ 03:00',
          time: '3小時',
          status: '停用',
          mani: true,
        },
        {
          name: '王中美',
          work: '00:00',
          offwork: '04:00',
          break: '02:00 ~ 03:00',
          time: '2小時',
          status: '啟用',
          mani: true,
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
    addNew() {

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
    switchDialog(isShow) {
      this.select.isShowDepartment = isShow
    },
    switchDialogAdd(isShow) {
      this.isShowAdd = isShow
    },
    getData(data) {
      this.select.department = data.label.join(', ')
    },
    ManiData(key) {
      // this.$router.push({
      //   path: '/personnel-detail', 
      //   query: {
      //       id: key
      //   }
      // });
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

  
}


@media( max-width: 500px ){

}

</style>
