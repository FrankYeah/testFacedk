<template>
  <div class="status">
    
    <div class="status-box">
      <div class="status-title">
        <div @click="goToDay" class="global-title">＜出勤狀態</div>
        <div class="status-time">(2022/01/12)</div>
      </div>
      <div class="global-line"></div>
      <div class="status-row">
        <div class="status-item">
          <div>上班工時</div>
          <div class="status-sub">07：30</div>
        </div>
        <div class="status-item">
          <div>打卡次數</div>
          <div class="status-sub status-text1">04</div>
        </div>
        <div class="status-item">
          <div>上班班次</div>
          <div class="status-sub status-text2">A</div>
          <div>(08:00-23:00)</div>
        </div>
        <div class="status-item">
          <div>休息時數</div>
          <div class="status-sub status-text3">02</div>
        </div>
        <div class="status-item">
          <div>上班狀態</div>
          <div class="status-sub status-text4">遲到</div>
        </div>
      </div>
    </div>

    <div class="status-table-main">
      <div class="status-table-row">
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
          prop="code"
          label="編號"
          sortable
          min-width="14">
        </el-table-column>
        <el-table-column
          prop="photo"
          label="偵測畫面"
          sortable
          min-width="14">
          <template slot-scope="scope">
            <img class="status-table-img" :src="scope.row.photo" alt="star">
          </template>
        </el-table-column>
        <el-table-column
          prop="punchTime"
          label="打卡時間"
          sortable
          min-width="14">
        </el-table-column>
        <el-table-column
          prop="machineKey"
          label="機器序號"
          sortable
          min-width="14">
        </el-table-column>
        <el-table-column
          prop="tempRecord"
          label="體溫紀錄"
          sortable
          min-width="14">
        </el-table-column>
        <el-table-column
          prop="recordStatus"
          label="紀錄狀態"
          sortable
          min-width="14">
        </el-table-column>
        <el-table-column
          prop="mani"
          label="操作"
          sortable
          min-width="17">
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.mani"
              size="mini"
              type="danger"
            >上班</el-button>
            <el-button
              v-else
              size="mini"
              @click="maniList(scope.$index, true)"
            >上班</el-button>
            <el-button
              v-if="!scope.row.mani"
              size="mini"
              type="danger"
            >下班</el-button>
            <el-button
              v-else
              size="mini"
              @click="maniList(scope.$index, false)"
            >下班</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="status-table-hint">
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
          name: 'code',
          label: '編號'
        },
        {
          name: 'photo',
          label: '偵測畫面'
        },
        {
          name: 'punchTime',
          label: '打卡時間'
        },
        {
          name: 'machineKey',
          label: '機器序號'
        },
        {
          name: 'tempRecord',
          label: '體溫紀錄'
        },
        {
          name: 'recordStatus',
          label: '紀錄狀態'
        },
        {
          name: 'mani',
          label: '操作'
        },
      ],
      tableData: [
        {
          code: '1',
          photo: require('@/assets/img/logo-2.png'),
          punchTime: '06:30',
          machineKey: 'VTY20165',
          tempRecord: '36.5℃',
          recordStatus: '上班',
          mani: true
        },
        {
          code: '2',
          photo: require('@/assets/img/logo-2.png'),
          punchTime: '08:30',
          machineKey: 'VTY20169',
          tempRecord: '38.5℃',
          recordStatus: '下班',
          mani: false
        },
        {
          code: '3',
          photo: require('@/assets/img/logo-2.png'),
          punchTime: '11:30',
          machineKey: 'VTY20139',
          tempRecord: '33.5℃',
          recordStatus: '下班',
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
    goToDay() {
      this.$emit('switchStatus', true)
    },
    maniList(key, isMani) {
      this.tableData[key].mani = isMani
      this.filter.dataAll = this.tableData
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

.status {

  &-box {
    margin-top: 20px;
    border-radius: 4px;
    background-color: white;
  }

  &-title {
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 25px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  &-time {
    margin-left: 10px;
    font-size: 20px;
    color: #707070;
  }

  &-row {
    display: flex;
    margin: 20px 0px 0px 20px;
    padding-bottom: 30px;
  }

  &-item {
    margin-right: 30px;
    padding: 20px;
    border: 1px dotted #E9EAED;
  }

  &-sub {
    margin: 30px 10px 10px;
    font-size: 35px;
  }

  &-text1::after {
    content: '次';
    font-size: 16px;
  }

  &-text2::after {
    content: '班表';
    margin-left: 30px;
    font-size: 16px;
  }

  &-text3::after {
    content: '時';
    font-size: 16px;
  }

  &-text4 {
    content: '';
    color: red;
  }

  &-table {
    margin-top: 20px;
    border-radius: 4px;
    background-color: white;
  
    &-main {
      padding: 20px;
    }

    &-row {
      display: flex;
      justify-content: space-between;
      margin: 20px 0px;
    }

    &-img {
      width: 120px;
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
