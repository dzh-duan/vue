<template>
  <div class="index">
    <div class="content">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  data () {
    return {}
  },
  created () {
  },
  methods: {},
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.index{
  font-size: 16px;
}
</style>
