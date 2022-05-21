<template>
  <div class="index">
    <div class="content">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <footerview></footerview>
  </div>
</template>

<script>
import footerview from '../components/footer.vue'
export default {
  name: 'index',
  components: {
    footerview
  },
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
