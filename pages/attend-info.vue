<template>
  <div class="index">
    <div class="index-info">
      <div class="index-info-rowbetween">
        <div class="index-info-title">出勤資訊</div>
        <div class="index-info-btn">
          <el-button type="success">匯出</el-button>
          <el-button type="primary">查詢</el-button>
        </div>
      </div>
      <div class="global-line"></div>
      <div class="index-info-row">
        <div class="index-info-vertical">
          <div>選擇部門：</div>
          <div @click="select.isShowDepartment = true" class="index-info-input">{{ select.department }}</div>
        </div>
        <div class="index-info-vertical">
          <div>日期篩選：</div>
          <el-date-picker
            class="index-info-date"
            v-model="select.date"
            type="month"
            placeholder="日期">
          </el-date-picker>
        </div>
      </div>
    </div>

    <div class="index-status">
      <div class="index-status-title">出勤狀況</div>
      <div class="global-line"></div>
      <div class="index-status-box">
        <div class="index-status-card"
          v-for="(card, index) in cardData"
          :key="index"
        >
          <div class="index-status-orange">
            <div>{{ card.factory }}</div>
            <div>{{ card.name }}</div>
          </div>
          <div class="index-status-inner">
            <div class="index-status-chart" :id="`echart${index}`"></div>
            <div class="index-status-text">當前出勤總時數：</div>
            <div class="index-status-time">
              <div>
                {{ card.hour }} 
                <span class="index-status-hint">hr</span> 
              </div>
              <div>
                {{ card.min }}
                <span class="index-status-hint">hr</span> 
              </div>
            </div>
            <div @click="seeMore(index)" class="index-status-btn">
              <div>查看更多</div>
            </div>
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

import * as echarts from 'echarts'
export default {
  head: {
    title: 'Dashboard',
  },
  layout: 'default',
  components: {
    boardCard: require('~/components/board-card.vue').default,
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
      cardData: [
        {
          factory: 'A廠',
          name: '林嶺成 廠長',
          total: 333,
          hour: 2534,
          min: 2434,
          chart: [900, 400, 960, 550]
        },
        {
          factory: 'B廠',
          name: '林嶺成 廠長',
          total: 333,
          hour: 4562,
          min: 265,
          chart: [200, 600, 550, 220]
        },
        {
          factory: 'C廠',
          name: '林嶺成 廠長',
          total: 333,
          hour: 12123,
          min: 22,
          chart: [100, 200, 220, 210]
        },
        {
          factory: 'D廠',
          name: '林嶺成 廠長',
          total: 333,
          hour: 2123,
          min: 2322,
          chart: [700, 400, 220, 100]
        },
      ],
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
      chartData: [800, 400, 720, 200]
    }
  },
  mounted () {
    for (let i = 0; i < this.cardData.length; i++) {
      this.$echarts.init(document.getElementById(`echart${i}`)).setOption(this.completeChart(
        this.cardData[i].chart
      ), true)
      
    }

    


    
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
    seeMore(key) {
      this.$router.push({
        path: '/attend-detail', 
        query: {
            id: key
        }
      });
    },
    completeChart(chartData) {
      let chart = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine:{
          lineStyle:{
            color:'rgb(47, 49, 50)'
          }
        },
        // x 座標值的顏色/大小
        axisLabel: {
          textStyle: {
            color: '#e6e7e9',
            fontSize:'14'
          },
        },
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      yAxis: {
        type: 'category',
        data: ['所有人數', '實到人數', '未到人數', '請假人數'],
        axisTick: {
          show: false
        },
        axisLine:{
          show: false,
        },
        
      },
      series: [
        {
          type: 'bar',
          data: chartData,
          barWidth : 14,
          // 圓柱體顏色
          itemStyle: {   
            normal:{  
              color: function (params){
                  var colorList = ['#fecf27','#f35d82','#6bd49b','#5ba7ff'];
                  return colorList[params.dataIndex];
              }
            },
            //滑鼠經過：
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
        },
      ]
      }
      return chart
    }
  }
}
</script>

<style lang="scss" scoped>

.index {

  &-info {
    border-radius: 4px;
    background-color: white;
    
    &-rowbetween {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
    }
    
    &-title {
      font-size: 25px;
    }
    
    &-btn {
      
      & button {
        margin-left: 6px;
      }
    }
    
    &-row {
      display: flex;
      margin-top: 20px;
      padding: 0px 0px 20px 20px;
    }
    
    &-vertical {
      margin-right: 20px;
    }
    
    &-input {
      width: 200px;
      margin-top: 10px;
      padding: 12px 0px 12px 16px;
      border: 1px solid #DCDFE6;
      border-radius: 4px;
      background-color: white;
    }

    &-date {
      margin-top: 10px;
    }


  }

  &-status {
    margin-top: 20px;
    border-radius: 4px;
    background-color: white;

    &-title {
      padding: 20px;
      font-size: 25px;
    }

    &-box {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
      padding: 10px 0px 40px;
    }

    &-card {
      width: 340px;
      margin: 20px 16px;
      border: solid 1px #f2f3f7;
      border-radius: 3px;
    }

    &-orange {
      padding: 5px;
      text-align: center;
      background-color: #ff9a1f;
      color: white;

      & div:first-child {
        font-size: 25px;
      }

      & div:last-child {
        margin-top: 4px;
      }
    }

    &-inner {
      margin: 0px 20px 10px;
    }

    &-chart {
      width: 100%;
      height: 300px;
      padding: 20px 0px;
      transform: translateY(-64px);
    }

    &-text {
      margin-top: -60px;
    }

    &-time {
      display: flex;
      justify-content: space-between;
      margin-top: 12px;
      color: #4a4c75;
      font-size: 40px;
    }

    &-hint {
      font-size: 15px;
    }

    &-btn {
      width: 100%;
      margin-top: 30px;
      padding: 7px 0px;
      text-align: center;
      color: #5ba7ff;
      border-radius: 23px;
      border: solid 1px #f2f3f7;
      cursor: pointer;

      &:hover {
        cursor: pointer;
      }
    }

  }
}


@media( max-width: 500px ){

}

</style>
