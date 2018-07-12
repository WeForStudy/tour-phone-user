<template>
    <div>
      IM home
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
  },
  methods: {
    ...mapActions([
      'collapse'
    ])
  },

  computed: {
     ...mapState([
      'slide',
      'login'
    ]),

    sStyle() {
      const flag = this.slide.isCollapse
      if (flag) {
        return {
          width: 80,
          minWidth: 80,
        }
      } else {
        return {
          width: 200,
          minWidth: 200,
        }
      }
    },

    btnIcon() {
      return this.slide.isCollapse ? 'el-icon-arrow-right both--100' : 'el-icon-arrow-left both--100'
    },

  }

}
</script>

<style lang="stylus" scoped>
@import '../../common/colors.styl'
.main {
  padding: 10px
  background-color: bgcolor
  .router--wrapper {
    padding 10px
    overflow-y auto
    background-color #fff
  }
}
.slide {
  min-width 200px
  width 200px
  &.collapse--true {
    width 80px
    min-width 80px
  }
}
.header {
  align-items center
  .icon--wrapper {
    .both--100 {
      font-size 30px
      cursor pointer
    }
  }
}

</style>
