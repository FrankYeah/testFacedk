<template>
  <div class="leave">
    <div class="leave-title-row">
      <div class="global-title">請假明細</div>
      <div>
        <el-button @click="refuse()" type="danger">駁回</el-button>
        <el-button @click="agree()" type="primary">同意</el-button>
      </div>
    </div>
    <div class="global-line"></div>
    <div class="leave-row">
      <div class="leave-input-box">
        <div class="leave-name">員工名稱:</div>
        <div class="leave-input">{{ input.name }}</div>
      </div>
      <div class="leave-input-box">
        <div class="leave-name">所屬部門:</div>
        <div class="leave-input">{{ input.department }}</div>
      </div>
      <div class="leave-input-box">
        <div class="leave-name">員工職稱:</div>
        <div class="leave-input">{{ input.title }}</div>
      </div>
      <div class="leave-input-box">
        <div class="leave-name">請假時間:</div>
        <div class="leave-input">{{ input.time }}</div>
      </div>
      <div class="leave-input-box">
        <div class="leave-name">請假類別:</div>
        <div class="leave-input">{{ input.type }}</div>
      </div>
      <div class="leave-input-box">
        <div class="leave-name">審核狀態:</div>
        <div class="leave-input">{{ input.status }}</div>
      </div>
    </div>
    <div>
      <div class="leave-name">審核狀態:</div>
      <div class="leave-textarea">{{ input.reason }}</div>
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
      input: {
        name: '大華',
        department: '行政部',
        title: '主管',
        time: '2022-02-11',
        type: '事假',
        status: '審核中',
        reason: '打疫苗'
      }
    }
  },
  mounted () {
    
  },
  destroyed () {
    
  },
  computed: {
    
  },
  methods: {
    refuse() {

    },
    agree() {

    }
  }
}
</script>

<style lang="scss" scoped>

.leave {
  margin-top: 30px;
  padding: 10px 20px 100px;
  border-radius: 3px;
  background-color: white;

  &-title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 0px 10px;
  }

  &-row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &-input-box {
    width: 28%;
    padding: 25px 0px;
  }

  &-name {
    margin-bottom: 20px;
  }

  &-input {
    padding: 16px 0px 16px 20px;
    background-color: #f4f8fb;
  }

  &-textarea {
    width: calc(100% - 20px);
    height: 200px;
    padding: 16px 0px 16px 20px;
    background-color: #f4f8fb;
  }
}



@media( max-width: 500px ){

}

</style>
