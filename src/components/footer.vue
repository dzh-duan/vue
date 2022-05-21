
<template>
  <div id="boby">
    <router-link class="home"  to="/home"><span>home</span> </router-link>
    <router-link class="activity"  to="/activity"><span>activity</span></router-link>
    <router-link class="pay"  to="/pay"><span>pay</span></router-link>
    <router-link class="service"  to="/service"><span>service</span></router-link>
    <router-link class="user" to="/user"><span>user</span></router-link>
  </div>
</template>
<style lang="scss" scoped>
    #boby {
        width:100%;
        display: flex;
        justify-content: space-between;
        padding:0 1px;
        a{
            color: red;
            width: 20%;
            height: 60px;

        };
        };
</style>