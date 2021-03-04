<template>
  <v-app app>
    <transition name="fade" mode="out-in">
      <Main v-if="isLoggedIn"/>
      <Login v-else/>
    </transition>
  </v-app>
</template>

<script>
  import Login from "@/views/Login"
  import Main from "@/views/Main"

  export default {
    components: {
      Login,
      Main
    },
    computed: {
      isLoggedIn: function () {
        // return this.$store.getters.isLoggedIn
        return false
      }
    }
  };
</script>
<style>
  @import 'assets/css/reset.css';
</style>