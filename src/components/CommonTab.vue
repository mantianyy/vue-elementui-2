<template>
  <div class="tags">
    <el-tag
      :key="tag.name"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeSelect(tag)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CommonTab',
  computed: {
    ...mapState({
      tags: state => state.tab.tabList
    })
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations({
      close: 'closeTab'
    }),
    handleClose(tag) {
      // this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      this.close(tag)
    },
    changeSelect(tag) {
      this.$router.push({ name: tag.name, path: tag.path })
      this.$store.commit('selectMenu', tag)
    }
  }
}
</script>

<style stylus="scss" scoped>
.tags {
  padding: 10px;
}

.el-tag {
  margin-left: 10px;
}
</style>
