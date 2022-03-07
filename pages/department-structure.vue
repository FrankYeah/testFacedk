<template>
  <div class="department">
    <div class="department-title-box">
      <div class="global-title">組織架構圖</div>
    </div>
    <div class="global-line"></div>
    <div class="department-main">
      <no-ssr>
        <el-tree
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
        ></el-tree>
      </no-ssr>
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
      data: [{
          label: '威寶數位科技 (1)',
          children: [{
            label: '設計部 (14)',
            children: [{
              label: '三所 (20)'
            }]
          }]
        }, {
          label: '三處 (10)',
          children: [{
            label: '四所 (10)',
            children: [{
              label: '五所 (10)'
            }]
          }, {
            label: '四處 (10)',
            children: [{
              label: '六所 (10)'
            }]
          }]
        }, {
          label: '業務部 (18)',
          children: [{
            label: '七所 (10)',
            children: [{
              label: '八所 (10)'
            }]
          }, {
            label: '一所 (30)',
            children: [{
              label: '九所 (10)'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
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
    handleNodeClick(data) {
      console.log(data);
    }
  }
}
</script>

<style lang="scss" scoped>

.department {
  padding: 0px 20px 20px;
  border-radius: 4px;
  background-color: white;

  &-title-box {
    padding: 10px;
  }

  &-main {
    min-height: 400px;
    padding: 20px 0px;
    overflow: scroll;
  }

}

@media( max-width: 500px ){

}

</style>

<style lang="scss">

.el-tree-node__content {
  margin-bottom: 10px;
}

.el-tree-node__label {
  font-size: 18px;
}

</style>