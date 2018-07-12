<template>
  <div class="page" v-tabbar="{'menus': menus, menuColor: '#B5B5B5', activeMenuColor: '#4A90E2', onMenuClick: menuClicked}">
    <router-view></router-view>
  </div>

</template>
<script>
export default {
  data() {
    return {
      menus: [
        {
          iconOn: "ion-ios-home",
          iconOff: "ion-ios-home-outline",
          text: "首页",
          path: "/home",
        },
        {
          iconOn: "ion-ios-pricetags",
          iconOff: "ion-ios-pricetags-outline",
          text: "发现",
          path: "/discover",
        },
        {
          iconOn: "ion-ios-cart",
          iconOff: "ion-ios-cart-outline",
          text: "分享",
          path: "/share",
        },
        {
          iconOn: "ion-ios-person",
          iconOff: "ion-ios-person-outline",
          text: "我的",
          path: "/center",
        },
      ],
    };
  },
  created() {
    this.changePath(0)
  },
  methods: {
    menuClicked(index) {
      this.changePath(index)
    },
    changePath(index) {
      this.$router.push({ path: this.menus[index].path })
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>
