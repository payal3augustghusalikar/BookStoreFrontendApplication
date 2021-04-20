<template>
  <v-app>
    <v-main>
      <div class="display-card" >
        <v-flex >
          <v-row>
            <v-card class="main-card mx-auto shopping-card mt-9 pl-5 pr-5">
              <v-row align="start">
                <v-col class="shrink">
                  <v-img max-width="80" class="ml-3 image"></v-img>
                </v-col>
                <v-col>
                  <v-card-title class="pa-0">Title</v-card-title>
                  <v-card-subtitle>shoppnh</v-card-subtitle>
                </v-col>
              </v-row>
            </v-card>

            <v-card class="main-card mx-auto mt-9 pl-5 pr-5">
              <v-tabs centered>
                <v-tab>Login</v-tab>
                <v-tab-item key="login">
                  <Login />
                </v-tab-item>
                <v-tab>Sign up</v-tab>
                <v-tab-item key="signUp">
                  <SignUp />
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-row>
        </v-flex>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SignUp from "./signUp.vue";
import Login from "./login.vue";
@Component({
  components: {
    SignUp,
    Login,
  },
})
export default class loginOrRegister extends Vue {}
</script>

<style lang="scss">
@import url("../assets/scss/register.scss");
</style>