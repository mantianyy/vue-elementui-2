<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item :index="item.path" v-for="item in noChildrenMenu" :key="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu index="index" v-for="(item, index) in hasChildrenMenu" :key="index">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group :index="subIndex" v-for="(subItem, subIndex) in item.children" :key="subIndex">
        <el-menu-item :index="subItem.path" @click="clickMenu(subItem)">
          <span>{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'CommonAside',
  computed: {
    noChildrenMenu() {
      return this.asideMenu.filter(item => !item.children)
    },
    hasChildrenMenu() {
      return this.asideMenu.filter(item => item.children)
    }
  },
  data() {
    return {
      asideMenu: [
        { path: '/', label: '首页', icon: 's-home' },
        { path: '/video', label: '视频管理', icon: 'video-play' },
        { path: '/user', label: '用户管理', icon: 'user' },
        {
          path: '/other',
          label: '其他',
          icon: 'location-outline',
          children: [
            { path: '/other/other1', label: '其他1', icon: 'dot-square' },
            { path: '/other/other2', label: '其他2', icon: 'line-square' }
          ]
        }
      ]
    }
  },
  methods: {
    clickMenu: function(item) {
      this.$store.commit('selectMenu', item)
    }
  }
}
</script>

<style scoped>
.el-menu {
  height: 100%;
  border: 0px;
}
</style>
