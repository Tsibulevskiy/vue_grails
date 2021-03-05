<template>
  <v-container class="login" fluid>
    <transition name="fade" mode="out-in" duration="300">
     <sign-in/>
    </transition>
  </v-container>
</template>

<script>
import signIn from "@/components/login/signIn"

export default {
  components: {
    signIn
  }
}
</script>

<style scoped lang="scss">
.login {
  background-color: #969493;
  background-size: 20% auto, 20% auto, cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
