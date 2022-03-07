<template>
  <div class="department">
    <div class="department-row">
      <div class="global-title">建立部門設置</div>
      <router-link to="/department-structure">
        <el-button type="warning">查看組織架構圖</el-button>
      </router-link>
    </div>
    <div class="global-line"></div>
    <div class="department-table-main">
        <div class="department-table-row">
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
          style="width: 100%;margin-bottom: 20px;"
          row-key="id"
          border
          default-expand-all
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
          <el-table-column
            prop="name"
            label="部門名稱"
            sortable
            min-width="30">
          </el-table-column>
          <el-table-column
            prop="num"
            label="在職人數"
            sortable
            min-width="25">
          </el-table-column>
          <el-table-column
            prop="id"
            label="操作"
            min-width="45">
            <template slot-scope="scope">
              <el-button @click="personnelList(scope.$index, scope.row.id)" type="warning">人員名單</el-button>
              <el-button @click="listInfo(scope.$index, scope.row.id)" type="danger">排班資訊</el-button>
              <el-button @click="editList(scope.$index, scope.row.id)" plain>編輯</el-button>
              <el-button @click="addList(scope.$index, scope.row.id)" type="primary">新增</el-button>
            </template>
          </el-table-column>
        </el-table>

        <div class="department-table-hint">
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

      <el-dialog :title="popup.isEdit ? '編輯部門' : '新增部門'" width="80%" :visible.sync="popup.isPopup">
        <div class="department-popup-title">所屬部門:{{ popup.currentDepartment }}</div>
        <div class="department-popup-box">
          <div class="department-popup-inner">
            <div class="department-popup-title">＊部門名稱:</div>
            <el-input v-model="input.name"></el-input>
          </div>
          <div class="department-popup-inner">
            <div class="department-popup-title">部門電話:</div>
            <el-input v-model="input.phone"></el-input>
          </div>
          <div class="department-popup-inner">
            <div class="department-popup-title">國家:</div>
            <el-input v-model="input.nation"></el-input>
          </div>
          <div class="department-popup-inner">
            <div class="department-popup-title">地址:</div>
            <el-input v-model="input.address"></el-input>
          </div>
          <div class="department-popup-row">
            <el-button @click="cancelPopup" plain>取消</el-button>
            <el-button @click="confirmPopup" type="primary">確定</el-button>
          </div>
        </div>
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

  },
  props: {

  },
  data () {
    return {
      filter: {
        dataAll: [],
        text: ''
      },
      tableData: [
        {
          name: '威寶數位科技',
          num: '10',
          id: 9,
          children: [
            {
              name: '三處',
              num: '2',
              id: 1,
              children: [
                {
                  name: '三所',
                  num: '4',
                  id: 3
                },
                {
                  name: '四所',
                  num: '5',
                  id: 4
                },
              ]
            },
            {
              name: '威寶',
              num: '7',
              id: 6
            },
            {
              name: '數位科技',
              num: '8',
              id: 7
            }
          ]
        },
        {
          name: '福氣數位科技',
          num: '9',
          id: 8,
        }
      ],
      popup: {
        isEdit: false,
        isPopup: false,
        currentDepartment: '三處'
      },
      input: {
        name: '',
        phone: '',
        nation: '',
        address: ''
      }
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
    personnelList(index, id) {
      this.$router.push({
        path: '/personnel-list', 
        // query: {
        //     id: key
        // }
      })
    },
    listInfo(index, id) {
      this.$router.push({
        path: '/schedule-info', 
        // query: {
        //     id: key
        // }
      })
    },
    editList(index, id) {
      this.popup.isEdit = true
      this.popup.isPopup = true
    },
    addList(index, id) {
      this.popup.isEdit = false
      this.popup.isPopup = true
    },
    cancelPopup() {
      this.popup.isPopup = false
    },
    confirmPopup() {
      this.popup.isPopup = false
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

.department {
  border-radius: 4px;
  background-color: white;

  &-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
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

  &-popup {

    &-title {
      padding: 0px 0px 10px 0px;
    }

    &-box {
      display: flex;
      flex-wrap: wrap;
      padding: 10px 0px;
    }

    &-inner {
      width: 40%;
      margin-right: 5%;
      padding: 10px 0px;
    }

    &-row {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding: 20px 0px 0px;
    }
  }


}


@media( max-width: 500px ){

}

</style>
