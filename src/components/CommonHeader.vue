<template>
  <header>
    <div class="l-content">
      <el-button type="primary" icon="el-icon-menu" size="mini" @click="collapse"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="current" :to="current.path">
          {{ current.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link"><img :src="user" class="user"/></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item disabled>双皮奶</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonHeader',
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },
  data() {
    return { user: require('../assets/img/user.jpg') }
  },
  methods: {
    collapse: function() {
      this.$store.commit('collapseMenu')
    }
  }
}
</script>

<style scoped>
div {
  /*background-color: burlywood;*/
}

header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.l-content {
  display: flex;
  align-items: center;
}

.user {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>

<style stylus="scss">
.el-breadcrumb {
  margin-left: 20px;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #fff;
}

.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  font-weight: normal;
  color: #fff;
}
</style>
