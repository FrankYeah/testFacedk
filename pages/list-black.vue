<template>
  <div class="stranger">
    <div class="stranger-list">
      <div class="stranger-row">
        <div class="stranger-title">名單列表</div>
        <el-button type="primary">查詢</el-button>
      </div>
      <div class="global-line"></div>
      <div class="stranger-date-box">
        <div>日期篩選：</div>
        <el-date-picker
          v-model="select.date"
          type="date"
          placeholder="日期">
        </el-date-picker>
      </div>
    </div>

    <div class="stranger-status">
      <div class="stranger-title">黑名單人員名單</div>
      <div class="global-line"></div>
      <div class="stranger-table-main">
        <div class="stranger-table-row">
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
            prop="key"
            label="編號"
            sortable
            min-width="15">
          </el-table-column>
          <el-table-column
            label="頭像照片"
            sortable
            min-width="20"
          >
            <template slot-scope="scope">
              <img class="stranger-table-img" :src="scope.row.photo" alt="star">
            </template>
          </el-table-column>
          <el-table-column
            prop="num"
            label="機器序號"
            sortable
            min-width="15">
          </el-table-column>
          <el-table-column
            prop="time"
            label="出現時間"
            sortable
            min-width="15">
          </el-table-column>

          <el-table-column label="操作"
            min-width="30">
            <template slot-scope="scope">
              <el-button
                @click="remove(scope.$index)"
                size="mini"
                type="danger"
              >移除</el-button>
              <el-button
                @click="ManiData(scope.$index)"
                size="mini"
                type="danger"
                icon="el-icon-edit"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="stranger-table-hint">
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
      select: {
        date: null
      },
      filter: {
        dataAll: [],
        text: ''
      },
      tableHead: [
        {
          name: 'key',
          label: '編號'
        },
        {
          name: 'photo',
          label: '頭像照片'
        },
        {
          name: 'num',
          label: '機器序號'
        },
        {
          name: 'time',
          label: '出現時間'
        },
        {
          name: 'mani',
          label: '操作'
        },
      ],
      tableData: [
        {
          key: '123',
          photo:require('@/assets/img/logo-2.png'),
          num: 1111,
          time: 20210202,
          mani: true
        },
        {
          key: '456',
          photo:require('@/assets/img/logo-2.png'),
          num: 22222,
          time: 20240404,
          mani: true
        },
        {
          key: '789',
          photo:require('@/assets/img/logo-2.png'),
          num: 33333,
          time: 20220303,
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
    ManiData(key) {
      console.log(key)
    },
    remove(key) {
      console.log(key)
    }
  },
  watch: {
    'filter.text': {
      handler(search) {
        this.filter.dataAll = this.tableData.filter(data => !search || data.key.toLowerCase().includes(search.toLowerCase()))
      },
    }
  }
}
</script>

<style lang="scss" scoped>

.stranger {

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

  &-date-box {
    padding-left: 20px;
    
    & div:first-child {
      padding: 27px 0px 20px;
    }
    
    & div:last-child {
      margin: 0px 0px 30px;
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
