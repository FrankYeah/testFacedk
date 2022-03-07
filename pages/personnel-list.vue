<template>
  <div class="leave">
    <div class="leave-list">
      <div class="global-line"></div>
      <div class="leave-row-box">
        <div class="leave-department-box">
          <div>選擇部門：</div>
          <div class="leave-row">
            <div @click="select.isShowDepartment = true" class="leave-department-input">{{ select.department }}</div>
            <el-button @click="choose()" type="primary">選擇</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="leave-status">
      <div class="leave-status-row">
        <div class="leave-title">名單列表</div>
        <div class="leave-btn-row">
          <el-button @click="exportList()" type="warning">匯出員工名單</el-button>
          <el-button @click="inportList()" type="danger">匯入員工名單</el-button>
          <router-link to="/personnel-new">
            <el-button type="primary">新增員工</el-button>
          </router-link>
          
        </div>
      </div>
      
      <div class="global-line"></div>
      <div class="leave-table-main">
        <div class="leave-table-row">
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
            label="員工名稱"
            sortable
            min-width="10">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="聯絡方式"
            sortable
            min-width="12">
          </el-table-column>
          <el-table-column
            prop="title"
            label="員工職稱"
            sortable
            min-width="12">
          </el-table-column>
          <el-table-column label="就職狀態" min-width="12">
            <template slot-scope="scope">
              <div :style="`
                ${scope.row.status == '離職' ? `color: red;`  : ''}
              `">{{ scope.row.status }}</div>
            </template>
          </el-table-column>
          <el-table-column
            prop="time"
            label="建立時間"
            sortable
            min-width="15">
          </el-table-column>
          <el-table-column label="操作" min-width="25">
            <template slot-scope="scope">
              <el-button @click="scope.row.mani.use = false" v-if="scope.row.mani.use" size="mini" type="danger">啟用</el-button>
              <el-button @click="scope.row.mani.use = true" v-else size="mini" type="info" plain>停用</el-button>
              <el-button
                @click="ManiData(scope.$index)"
                size="mini"
                type="danger"
                icon="el-icon-edit"
              ></el-button>
              <el-button
                @click="ManiData(scope.$index)"
                size="mini"
                icon="el-icon-view"
                style="backgroundColor: #51438f; color: white;"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="leave-table-hint">
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
          name: 'phone',
          label: '聯絡方式'
        },
        {
          name: 'title',
          label: '員工職稱'
        },
        {
          name: 'status',
          label: '就職狀態'
        },
        {
          name: 'time',
          label: '建立時間'
        },
        {
          name: 'mani',
          label: '操作'
        },
      ],
      tableData: [
        {
          name: '王小美',
          phone: '0909-991-233',
          title: '主管',
          status: '在職',
          time: '2022-02-26 15:56:23',
          mani: {
            use: false,
            edit: true,
            watch: true
          }
        },
        {
          name: '王大美',
          phone: '0909-991-233',
          title: '主管',
          status: '離職',
          time: '2022-02-26 15:56:23',
          mani: {
            use: true,
            edit: true,
            watch: true
          }
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
    switchDialog(isShow) {
      this.select.isShowDepartment = isShow
    },
    getData(data) {
      this.select.department = data.label.join(', ')
    },
    ManiData(key) {
      this.$router.push({
        path: '/personnel-detail', 
        query: {
            id: key
        }
      });
    },
  },
  watch: {
    'filter.text': {
      handler(search) {
        this.filter.dataAll = this.tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))
      },
    }
  }
}
</script>

<style lang="scss" scoped>

.leave {

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

    &-img {
      width: 70%;
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
