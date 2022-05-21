<template>
    <div class="Home">
     <img class="img" src="../../assets/index.jpg" alt=""/>
     <!-- <div class="img"></div> -->
     <div class="container top-50"></div>
    </div>
</template>

<script>
export default {
  name: 'Home',
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
  .img{
    width: 100%;
    height: 280px;
    background-color: black;
  }
  .container{
    width: 100%;
    height: 90px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    background-color: blue;
    z-index: 2;
    position: relative;
  }
  .top-50{
    margin-top:-50px;
  }
  
</style>
