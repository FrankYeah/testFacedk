<template>
  <div class="card">
    <div class="card-rowsame">
      <img class="card-star" src="@/assets/img/logo.png" alt="star">
      <div>
        <div class="card-head">A廠</div>
        <div class="card-sub">白白廠長</div>
      </div>
      <div class="card-device">設備明細</div>
    </div>
    <div class="card-row">
      <div>所有人數：</div>
      <div>{{ cardData.all }}</div>
    </div>
    <div class="card-dotline"></div>
    <div class="card-row">
      <div>實到人數：</div>
      <div>{{ cardData.real }}</div>
    </div>
    <div class="card-dotline"></div>
    <div class="card-row">
      <div>未到人數：</div>
      <div>{{ cardData.noShow }}</div>
    </div>
    <div class="card-dotline"></div>
    <div class="card-row">
      <div>請假人數：</div>
      <div>{{ cardData.leave }}</div>
    </div>
    <div class="card-dotline"></div>
    <div class="card-word">當前出勤總時數：</div>
    <div class="card-total">
      <div>{{ cardData.hour }}</div>
      <div>{{ cardData.min }}</div>
    </div>
    <div @click="seeMore()" class="card-more">查看更多</div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {
    cardData: {
      type: Object,
      default () {
        return {}
      }
    },
    cardDataKey: {
      type: Number
    }
  },
  data () {
    return {
      isShow: {
        attend: false,
        schedule: false,
        leave: false
      }
    }
  },
  mounted () {
    
  },
  computed: {
    
  },
  methods: {
    seeMore() {
      this.$emit('seeMore', this.cardDataKey)
    }
  },
  watch: {
    
  }
}
</script>

<style lang="scss">

.card {
    width: 300px;
    margin: 0px 20px 60px;
    border: 1px solid black;
    border-radius: 4px;

    &-rowsame {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background-color: #E6E7E9;
      color: #707070;
    }

    &-star {
      width: 25%;
    }

    &-head {
      font-size: 30px;
      text-align: center;
    }

    &-sub {
      margin-top: 4px;
      text-align: center;
    }

    &-device {
      width: 25%;
    }

    &-row {
      display: flex;
      margin: 20px 0px 20px 10px;

      & div:last-child {
        margin-left: 20px;
      }
    }

    &-dotline {
      width: 100%;
      height: 2px;
      border-bottom: 1px dotted #E6E7E9;

    }

    &-word {
      margin: 20px 0px 0px 10px;
    }


    &-total {
      display: flex;
      margin: 10px 0px 20px 10px;
      font-size: 34px;

      & div:first-child {
        margin-right: 20px;

        &::after {
          content: 'hr';
          font-size: 14px;
        }
      }

      & div:last-child {

        &::after {
          content: 'min';
          font-size: 14px;
        }
        
      }
    }

    &-more {
      width: calc(100% - 30px);
      margin: 0px 15px 20px;
      padding: 10px 0px;
      border: 1px solid;
      border-radius: 4px;
      text-align: center;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }

  }


@media( max-width: 500px ){

  .side {
    
  }

}

</style>