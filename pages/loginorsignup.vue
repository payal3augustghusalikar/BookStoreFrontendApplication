<template>
  <v-app>
    <v-main>
      <div class="display-card">
        <v-flex>
          <v-row>

<v-card class="mx-auto shopping-card b-card" >
              <v-row class="book-image1">
                <v-img
                  class="mx-auto mt-4 mb-4"
                  :src="require('@/assets/scss/images/shopping-trolly.png')"
                ></v-img>
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

<style lang="scss" scoped>
@import url("../assets/scss/register.scss");
@import url("../assets/scss/image.scss");
</style>