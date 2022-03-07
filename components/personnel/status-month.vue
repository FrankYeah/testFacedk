<template>
  <div class="status">
    
    <div class="status-box">
      <div class="status-title-box">
        <div class="global-title">出勤狀態</div>
        <div>
          <el-button type="warning">匯出</el-button>
          <el-button type="primary">查詢</el-button>
        </div>
      </div>
      <div class="global-line"></div>

      <div class="status-date-row">
        <div class="status-date">
          <div>年份篩選：</div>
          <el-date-picker
            class="status-date-date"
            v-model="date.year"
            type="year"
            placeholder="日期">
          </el-date-picker>
        </div>
        <div class="status-date">
          <div>月份篩選：</div>
          <el-date-picker
            class="status-date-date"
            v-model="date.month"
            type="month"
            placeholder="日期">
          </el-date-picker>
        </div>
      </div>

      <div class="status-row">
        <div class="status-item">
          <div>上班天數</div>
          <div class="status-sub status-text1">22</div>
        </div>
        <div class="status-item">
          <div>請假天數</div>
          <div class="status-sub status-text2">02</div>
        </div>
        <div class="status-item">
          <div>遲到次數</div>
          <div class="status-sub status-text3">01</div>
        </div>
        <div class="status-item">
          <div>早退次數</div>
          <div class="status-sub status-text4">06</div>
        </div>
        <div class="status-item">
          <div>累積工時</div>
          <div class="status-sub status-text5">49</div>
        </div>
        <div class="status-item">
          <div>預算薪資(時薪)</div>
          <div class="status-sub status-text6">12364</div>
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
          prop="date"
          label="日期"
          sortable
          min-width="16">
          <template slot-scope="scope">
            <div style="cursor: pointer;" @click="goToDay(scope.$index)">{{ scope.row.date }}</div>
          </template>
        </el-table-column>
        <el-table-column label="最高體溫" min-width="16">
          <template slot-scope="scope">
            <div @click="goToDay(scope.$index)" :style="`cursor: pointer;
              ${Number(scope.row.temp) > 38 ? `color: red;`  : ''}
            `">{{ scope.row.temp }}℃</div>
          </template>
        </el-table-column>
        <el-table-column
          prop="work"
          label="上班時間"
          sortable
          min-width="16">
          <template slot-scope="scope">
            <div style="cursor: pointer;" @click="goToDay(scope.$index)">{{ scope.row.work }}</div>
          </template>
        </el-table-column>
        <el-table-column
          prop="offwork"
          label="下班時間"
          sortable
          min-width="16">
            <template slot-scope="scope">
              <div style="cursor: pointer;" @click="goToDay(scope.$index)">{{ scope.row.offwork }}</div>
            </template>
        </el-table-column>
        <el-table-column
          prop="time"
          label="上班工時"
          sortable
          min-width="16"
        >
          <template slot-scope="scope">
            <div style="cursor: pointer;" @click="goToDay(scope.$index)">{{ scope.row.time }}</div>
          </template>
        </el-table-column>
        <el-table-column label="上班狀態" min-width="16">
          <template slot-scope="scope">
            <div @click="goToDay(scope.$index)"
            :style="`cursor: pointer;
              ${scope.row.status == '遲到' || '早退' || '事假' ? `color: red;`  : ''}
            `">{{ scope.row.status }}</div>
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
  layout: 'default',
  components: {

  },
  props: {

  },
  data () {
    return {
      date: {
        year: '',
        month: ''
      },
      filter: {
        dataAll: [],
        text: ''
      },
      tableHead: [
        {
          name: 'date',
          label: '日期'
        },
        {
          name: 'temp',
          label: '最高體溫'
        },
        {
          name: 'work',
          label: '上班時間'
        },
        {
          name: 'offwork',
          label: '下班時間'
        },
        {
          name: 'time',
          label: '上班工時'
        },
        {
          name: 'status',
          label: '上班狀態'
        },
      ],
      tableData: [
        {
          date: '2022/01/12',
          temp: '32.1',
          work: '14:45',
          offwork: '12:30',
          time: '04時15分',
          status: '遲到'
        },
        {
          date: '2022/01/14',
          temp: '39.1',
          work: '15:45',
          offwork: '12:30',
          time: '05時15分',
          status: '遲到'
        },
        {
          date: '2022/01/11',
          temp: '32.1',
          work: '15:45',
          offwork: '16:30',
          time: '07時15分',
          status: '遲到'
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
    goToDay(index) {
      console.log(index)
      this.$emit('switchStatus', false)
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

.status {

  &-box {
    margin-top: 20px;
    border-radius: 4px;
    background-color: white;
  }

  &-title-box {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }

  &-date-row {
    display: flex;
  }

  &-date {
    margin: 20px 20px 20px 20px;

    & div {
      margin-bottom: 20px;
    }
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
    margin: 20px 10px 10px;
    font-size: 35px;
    color: #51438f;
  }

  &-sub::after {
    color: black;
    font-size: 16px;
  }

  &-text1::after {
    content: '天';
  }

  &-text2::after {
    content: '天';
  }

  &-text3::after {
    content: '天';
  }

  &-text4::after {
    content: '天';
  }

  &-text5::after {
    content: '時';
  }

  &-text6::after {
    content: '元';
  }

  &-text6 {
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
