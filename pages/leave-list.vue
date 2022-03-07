<template>
  <div class="leave">
    <div class="leave-list">
      <div class="leave-row">
        <div class="leave-title">名單列表</div>
        <el-button type="primary">查詢</el-button>
      </div>
      <div class="global-line"></div>
      <div class="leave-row-box">
        <div class="leave-date-box">
          <div>選擇部門：</div>
          <div @click="select.isShowDepartment = true" class="leave-department-input">{{ select.department }}</div>
        </div>
        <div class="leave-date-box">
          <div>日期篩選：</div>
          <el-date-picker
            v-model="select.date"
            type="date"
            placeholder="日期">
          </el-date-picker>
        </div>
      </div>
    </div>

    <div class="leave-status">
      <div class="leave-title">名單列表</div>
      <div class="global-line"></div>

      <div class="leave-slide">
        <div @click="slideType = 'A'" :class="['leave-slide-text', {'leave-slide-select': slideType == 'A'}]">待審核</div>
        <div @click="slideType = 'B'" :class="['leave-slide-text', {'leave-slide-select': slideType == 'B'}]">已同意</div>
        <div @click="slideType = 'C'" :class="['leave-slide-text', {'leave-slide-select': slideType == 'C'}]">已駁回</div>
      </div>

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
          <el-table-column v-for="(head, index) in tableHead"
            :key="index"
            :prop="head.name"
            :label="head.label"
            sortable
            min-width="16">
          </el-table-column>
          <el-table-column
            prop="key"
            label="操作"
            min-width="16"
          >
            <template slot-scope="scope">
              <el-button
                @click="ManiData(scope.$index)"
                size="mini"
                type="danger"
              >查看更多</el-button>
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
        department: '全部',
        date: null
      },
      slideType: 'A',
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
          name: 'title',
          label: '員工職稱'
        },
        {
          name: 'way',
          label: '聯絡方式'
        },
        {
          name: 'time',
          label: '請假時間'
        },
        {
          name: 'type',
          label: '請假類別'
        },
      ],
      tableData: [
        {
          name: '王小美',
          title: '主管',
          way: '0909-991-233',
          time: '2022/01/07 ~ 2022/01/08',
          type: '事假',
          mani: true
        },
        {
          name: '王大美',
          title: '員工',
          way: '0909-991-233',
          time: '2022/01/07 ~ 2022/01/08',
          type: '事假',
          mani: true
        },
        {
          name: '王中美',
          title: '副主管',
          way: '0909-991-233',
          time: '2022/01/07 ~ 2022/01/08',
          type: '事假',
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
    switchDialog(isShow) {
      this.select.isShowDepartment = isShow
    },
    getData(data) {
      this.select.department = data.label.join(', ')
    },
    ManiData(key) {
      this.$router.push({
        path: '/leave-detail', 
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

  &-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px 0px 0px;
  }

  &-title {
    padding: 20px 0px 20px 20px;
    font-size: 25px;
    font-weight: bold;
  }

  &-row-box {
    display: flex;
  }

  &-date-box {
    padding-left: 20px;
    
    & div:first-child {
      padding: 27px 0px 20px;
    }
    
    & div:last-child {
      margin: 0px 0px 30px;
    }
  }

  &-department-input {
    width: 200px;
    margin: 19px 43px 0 0;
    padding: 13px 0px 13px 20px;
    border-radius: 10px;
    background-color: #f4f8fb;
  }

  &-status {
    margin-top: 30px;
    border-radius: 4px;
    background-color: white;
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
