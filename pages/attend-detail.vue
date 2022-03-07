<template>
  <div class="attend">
    <div class="attend-summary">
      <div class="attend-summary-title">A廠 業務部</div>
      <div class="global-line"></div>
      <div class="attend-summary-row">
        <div class="attend-summary-detail">
          <div>主管名稱</div>
          <div>陳白白</div>
        </div>
        <div class="attend-summary-detail">
          <div>當前出勤總時數：</div>
          <div>58650  hr     360  min</div>
        </div>
      </div>
    </div>

    <div class="attend-table">
      <div class="attend-table-title">A廠 業務部  人員名單</div>
      <div class="global-line"></div>
      <div class="attend-table-bread">
        <div>所有人數：305</div>
        <div>實到人數：230</div>
        <div>未到人數：25</div>
        <div>請假人數：50</div>
      </div>

      <div class="attend-table-main">
        <div class="attend-table-row">
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
            min-width="12">
          </el-table-column>
          <el-table-column
            prop="key"
            label="操作"
            sortable
            min-width="12"
          >
            <template slot-scope="scope">
              <i @click="ManiData(scope.row.key)"
                class="el-icon-edit"
                style="cursor: pointer;"
              ></i>
            </template>
          </el-table-column>
        </el-table>
        <div class="attend-table-hint">
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

  </div>
</template>

<script>


export default {
  head: {
    title: 'Dashboard',
  },
  layout: 'default',
  components: {

  },
  props: {

  },
  data () {
    return {
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
          name: 'schedule',
          label: '班表'
        },
        {
          name: 'department',
          label: '所屬部門'
        },
        {
          name: 'date',
          label: '建立時間'
        },
      ],
      tableData: [
        {
          name: '王小華',
          phone: '0409-991-233',
          title: '主管',
          status: '在職',
          schedule: '早班',
          department: '四處',
          date: '2022-02-26 15:56:23',
          key: 0
        },
        {
          name: '王大方',
          phone: '0209-991-233',
          title: '員工',
          status: '離職',
          schedule: '晚班',
          department: '四處',
          date: '2022-02-26 15:56:23',
          key: 1
        },
        {
          name: '王中美',
          phone: '0609-991-233',
          title: '主管',
          status: '在職',
          schedule: '中班',
          department: '四處',
          date: '2022-02-26 15:56:23',
          key: 2
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
    ManiData(key) {
      this.$router.push({
        path: '/personnel-detail', 
        query: {
            id: key
        }
      })
    }
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

.attend {

  &-summary {
    border-radius: 4px;
    background-color: white;

    &-title {
      padding: 20px;
      font-size: 25px;
    }

    &-row {
      display: flex;
      padding: 20px;
    }

    &-detail {
      width: 50%;

      & div:last-child {
        margin-top: 10px;
        font-size: 24px;
      }
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

    &-bread {
      display: flex;
      margin: 20px 0px 0px 10px;

      & div {
        margin-right: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #A8ACBB;
        color: #A8ACBB;
        font-weight: bold;
        cursor: pointer;

        &:hover {
          border-bottom: 1px solid #3C8CB9;
          color: #3C8CB9;
        }
      }
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
