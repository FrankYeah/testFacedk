<template>
  <div class="dialog">
    <div class="dialog-row">
      <div class="dialog-box">
        <div class="dialog-hint">請選擇部門</div>
        <div class="dialog-card">
          <input class="dialog-input" type="text" v-model="filterLabel">
          <el-tree
            ref="tree"
            :data="departmentData"
            show-checkbox
            node-key="id"
            :props="defaultProps"
            @check='selectData'
            :default-expanded-keys="[4]"
            :filter-node-method="filterNode"
          >
          </el-tree>
        </div>
      </div>
      <div class="dialog-box">
        <div class="dialog-rowtext">
          <div>已選擇部門（{{ selectedData.label.length }}）</div>
          <div @click="cleanData">全部清除</div>
        </div>
        <div class="dialog-card">
          <div class="dialog-rowselected" v-for="(label, index) in selectedData.label"
            :key="index"
          >
            <div>{{ label }}</div>
            <div @click="deleteData(selectedData.id[index], index)">X</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dialog-btn">
      <el-button @click="closeDialog()" type="info">取消</el-button>
      <el-button @click="sendData()" type="primary">確定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    departmentData: {
      type: Array,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      filterLabel: null,
      selectedData: {
        label: [],
        id: []
      },
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted () {
    
  },
  computed: {
    
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    selectData() {
      this.selectedData.label = []
      let tempData = this.$refs.tree.getCheckedNodes()
      tempData.forEach((value) =>{
        this.selectedData.label.push(value.label)
      })
      this.selectedData.id = this.$refs.tree.getCheckedKeys()
    },
    deleteData(key, index) {
      this.$refs.tree.setChecked(key, false)
      this.selectedData.label.splice(index, 1)
      this.selectedData.id.splice(index, 1)
    },
    cleanData() {
      this.selectedData.id.forEach((id) =>{
        this.$refs.tree.setChecked(id, false)
      })
      this.selectedData.label = []
      this.selectedData.id = []
    },
    closeDialog() {
      this.$emit('switchDialog', false)
    },
    sendData() {
      this.$emit('getData', this.selectedData)
      this.closeDialog()
    }
  },
  watch: {
    filterLabel(val) {
      this.$refs.tree.filter(val);
    }
  }
}
</script>

<style lang="scss">

.dialog {

  &-row {
    display: flex;
    justify-content: space-between;
  }

  &-box {
    width: 100%;

    &:first-child {
      margin-right: 5px;
    }

    &:last-child {
      margin-left: 5px;
    }
  }

  &-hint {
    color: #6F6F6F;
  }

  &-card {
    min-height: 300px;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #707070;
  }

  &-input {
    width: calc(100% - 8px);
    margin-bottom: 10px;
    padding: 6px 0px 6px 8px;
    border: 1px solid #707070;
    border-radius: 4px;
  }

  &-rowtext {
    display: flex;
    justify-content: space-between;

    & div:nth-child(2) {
      color: red;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  &-rowselected {
    margin: 10px 0px;
    padding: 0px 5px;
    display: flex;
    justify-content: space-between;

    & div:nth-child(2) {
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  &-btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
  
}


@media( max-width: 500px ){

  .side {
    
  }

}

</style>