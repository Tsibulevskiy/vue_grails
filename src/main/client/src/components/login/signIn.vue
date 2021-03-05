<template>
  <v-row class="justify-center ">
    <v-col cols="12" xs="12" sm="9" md="6" lg="3">
      <v-form ref="form" lazy-validation >
        <v-card elevation="4" >
          <v-card-title class="justify-center">
            <h1>{{ title }}</h1>
          </v-card-title>
          <v-row class="justify-center">
            <v-col cols="10">
              <v-text-field v-model="email"
                            :rules="emailRules"
                            label="Email" required>
              </v-text-field>
            </v-col>
            <v-col cols="10">
              <v-text-field v-model="password" type="password"
                            :rules="passwordRules"
                            label="Password" required>
              </v-text-field>
            </v-col>
            <v-col cols="10" class="text-center">
              <v-btn @click.once="Authorization" color="success" :disabled="validate"
              >Sign in</v-btn>
              <v-snackbar v-model="snackbar" :timeout="timeout" bottom right color="blue-grey">
                {{ errorMessage }}</v-snackbar>
            </v-col>
          </v-row>
        </v-card>
      </v-form>
    </v-col>

  </v-row>
</template>

<script>
export default {
  data() {
    return {
      title: 'Sign In',
      snackbar: false,
      timeout: 4000,
      message: '',
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 5) || 'Password must be more 6 characters',
      ]
    }
  },
  computed: {
    validate() {
      return  this.email.length > 0 &&
              this.password.length
          ? false
          : true;
    },
    errorMessage() {
      return this.$store.getters.getErrorMessage
    }
  },
  methods: {
    Authorization() {
      let data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('auth', data)
          .then(() => {
          })
          .catch(() => {
            this.snackbar = true;
          })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
