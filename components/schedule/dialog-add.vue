<template>
  <div class="add">
    <div class="add-box">
      <div class="add-inner">
        <div class="add-text">班表名稱:</div>
        <el-input v-model="input.name" placeholder="班表名稱"></el-input>
      </div>
      <div class="add-inner">
        <div class="add-text">上班時段:</div>
        <el-input v-model="input.time" placeholder="上班時段"></el-input>
      </div>
      <div class="add-inner">
        <div class="add-text">下班時段:</div>
        <el-input v-model="input.offwork" placeholder="下班時段"></el-input>
      </div>
      <div class="add-inner">
        <div class="add-text">休息時段:</div>
        <el-input v-model="input.rest" placeholder="休息時段"></el-input>
      </div>
      <div class="add-inner">
        <div class="add-text">工作時數</div>
        <el-input v-model="input.hour" placeholder="工作時數"></el-input>
      </div>
      <div class="add-inner">
        <div class="add-text">使用狀態:</div>
        <div>
          <el-radio v-model="input.status" label="0">啟用</el-radio>
          <el-radio v-model="input.status" label="1">停用</el-radio>
        </div>
      </div>
    </div>
    <div class="add-btn-box">
      <el-button @click="cancel" plain>取消</el-button>
      <el-button @click="confirm" type="primary">確定</el-button>
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
      input: {
        name: '',
        time: '',
        offwork: '',
        rest: '',
        hour: '',
        status: "0"
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
    cancel() {
      this.$emit('switchDialogAdd', false)
    },
    confirm() {
      this.$emit('switchDialogAdd', false)
    }
  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>

.add {
  width: 1000px;
  margin-bottom: 12px;

  &-box {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  }

  &-inner {
    width: 24%;
    margin: 0px 10% 30px 0px;

    &:nth-child(3) {
      margin-right: 0px;
    }

    &:nth-child(6) {
      margin-right: 0px;
    }
  }

  &-text {
    margin-bottom: 12px;
  }

  &-btn-box {
    display: flex;
    justify-content: flex-end;
  }

}

@media( max-width: 500px ){

}

</style>
