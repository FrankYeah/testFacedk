<template>
  <div class="new">
    <div class="global-title new-head">新增員工</div>
    <div class="global-line"></div>
    <div class="new-row">
      <div class="new-title">員工頭像</div>
      <img class="new-img" src="@/assets/img/logo-2.png" alt="logo">
    </div>
    <div class="new-row">
      <div class="new-title">員工名稱</div>
      <el-input v-model="profile.name"></el-input>
    </div>
    <div class="new-row">
      <div class="new-title">員工職稱</div>
      <el-input v-model="profile.title"></el-input>
    </div>
    <div class="new-row">
      <div class="new-title">所屬部門</div>
      <el-select style="width: 100%;" v-model="profile.department" placeholder="請選擇">
        <el-option
          labe
          label="123"
          value="123">
        </el-option>
      </el-select>
    </div>
    <div class="new-row">
      <div class="new-title">班表</div>
      <el-select style="width: 100%;" v-model="profile.department" placeholder="請選擇">
        <el-option
          labe
          label="123"
          value="123">
        </el-option>
      </el-select>
    </div>
    <div class="new-row">
      <div class="new-title">聯絡方式</div>
      <el-input v-model="profile.contact"></el-input>
    </div>
    <div class="new-row">
      <div class="new-title">E-mail</div>
      <el-input v-model="profile.mail"></el-input>
    </div>
    <div class="new-row">
      <div class="new-title">員工薪資</div>
      <el-input v-model="profile.salary"></el-input>
    </div>
    <div class="new-row">
      <div class="new-title">打卡方式</div>
      <el-radio v-model="profile.punchWay" label="0">外勤打卡</el-radio>
      <el-radio v-model="profile.punchWay" label="1">人臉打卡</el-radio>
    </div>
    <div class="new-row">
      <div class="new-title">收信狀態</div>
      <el-radio v-model="profile.letterStatus" label="0">開</el-radio>
      <el-radio v-model="profile.letterStatus" label="1">關</el-radio>
    </div>
    <div class="new-btn-box">
      <el-button type="primary" plain>取消</el-button>
      <el-button type="primary">確認</el-button>

    </div>

    <!-- <div class="new-"></div> -->
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
      profile: {
        img: [],
        name: '',
        title: '',
        department: '',
        schedule: '',
        contact: '',
        mail: '',
        salary: '',
        punchWay: '',
        letterStatus: true
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
    
  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>

.new {
  background-color: white;
  border-radius: 4px;

  &-head {
    padding: 23px 30px;
  }

  &-row {
    display: flex;
    align-items: center;
    padding: 13px 20px;
  }

  &-title {
    width: 120px;
  }

  &-img {
    width: 200px;
  }

  &-btn-box {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
  }
}

@media( max-width: 500px ){

}

</style>
