<template>
  <div class="order">
    <div class="order-card-body" v-for="(order,index) in orderlist" :key="index">
      <div
        class="order-card-wrap"
        @click="$router.push({name:'orderInfo',params:order})"
        v-if="order.orderInfo"
      >
        <img :src="order.shopData.image_path" alt />
        <div class="order-card-content">
          <div class="order-card-head">
            <div class="title">
              <a>
                <span>{{order.shopData.name}}</span>
                <i class="fa fa-angle-right"></i>
              </a>
              <p>订单已完成</p>
            </div>
            <p class="date-time">{{order.date}}</p>
          </div>
          <div class="order-card-detail">
            <p class="detail">{{order.orderInfo.selectFoods[0].name}}</p>
            <p class="price">¥{{order.totalPrice}}</p>
          </div>
        </div>
      </div>
      <div class="order-card-bottom">
        <button class="cardbutton" @click="OneMore(order)">再来一单</button>
      </div>
    </div>
    <div v-if="show" class="order-off">
      <p>暂时没有订单</p>
      <div class="img">
        <img src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "order",
  data() {
    return {
      orderlist: []
    };
  },
  computed: {
    show() {
      if (this.orderlist.length !== 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    // ...
    next(vm => {
      vm.getData();
    });
  },
  methods: {
    getData() {
      this.$axios(`/api/user/orders/`).then(res => {
        this.orderlist = res.data.orderlist;
      });
    },
    OneMore(item) {
      let data = JSON.stringify(item.shopData);
      localStorage.setItem("shopdata", data);
      this.$router.push("/shop");
    }
  }
};
</script>

<style lang="scss" scoped>
.order {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  margin-bottom: 2.666667vw;
  background-color: #fff;
}
.order-card-body {
  margin-top: 2.666667vw;
  background-color: #fff;
  padding: 3.733333vw 0 0 4vw;
}
.order-card-wrap {
  display: flex;
}
.order-card-wrap > img {
  height: 8.533333vw;
  border-radius: 0.533333vw;
  border: 1px solid #eee;
  width: 8.533333vw;
  margin-right: 2.666667vw;
}
.order-card-content {
  flex: 1;
}
.order-card-head {
  border-bottom: 1px solid #eee;
  padding-right: 3.466667vw;
  padding-bottom: 2.666667vw;
}
.order-card-head .title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.order-card-head .title > a {
  font-size: 1rem;
  line-height: 1.5em;
  color: #333;
  text-decoration: none;
}
.order-card-head .title > a > span {
  display: inline-block;
  max-width: 10em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.order-card-head .title > a > i {
  margin-left: 1.333333vw;
  color: #ccc;
  vertical-align: super;
}
.order-card-head .title > p {
  font-size: 0.8rem;
  text-align: right;
  color: #333;
  max-width: 14em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.date-time {
  font-size: 0.6rem;
  color: #999;
}
.order-card-detail {
  display: flex;
  justify-content: space-between;
  padding: 4vw 3.466667vw 4vw 0;
  font-size: 0.8rem;
}
.order-card-detail .detail {
  color: #666;
  display: flex;
  align-items: center;
}
.order-card-detail .price {
  flex-basis: 16vw;
  text-align: right;
  color: #333;
  font-weight: 700;
}
.order-card-bottom {
  display: flex;
  border-top: 1px solid #eee;
  padding: 2.666667vw 4.266667vw;
  justify-content: flex-end;
}
.cardbutton {
  padding: 1.333333vw 2.666667vw;
  border: 1px solid #2395ff;
  border-radius: 0.533333vw;
  background-color: transparent;
  outline: none;
  font-size: 0.8rem;
  color: #2395ff;
  margin-left: 2vw;
}
/* 没有订单 */
.order-off {
  width: 280px;
  height: 280px;
  padding: 20px;
  position: relative;
  margin: 18px auto;
  .img {
    margin-top: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    height: 20px;
    text-align: center;
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
