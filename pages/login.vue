<template>
  <v-form ref="validattion" v-model="valid" :lazy-validation="lazy">
    <br />

    <v-text-field
      outlined
      dense
      v-model="form.email"
      :rules="[emailRules.required, emailRules.email_validation]"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      outlined
      dense
      v-model="form.password"
      :counter="10"
      :rules="[passwordRules.required, passwordRules.minLength]"
      label="password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'text' : 'password'"
      @click:append="showPassword = !showPassword"
      required
    ></v-text-field>
    <v-btn x-large block :disabled="!valid" class="submitButton" @click="validatee"
      >Login</v-btn
    >
  </v-form>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import user from "../services/user";
import Dashboard from "./dashboard.vue";
@Component({
//  Dashboard
})
export default class login extends Vue {
  valid: boolean = true;
  lazy: boolean = false;
  name: string = "";
  showPassword: boolean = false;

  form: any = {
    email: null,
    password: null,
  };

  passwordRules = {
    required: (v: string) => !!v || "Name is required",
    minLength: (v: string) =>
      (v && v.length > 7) || "password must be 8 characters",
  };
  emailId: string = "";
  password: string = "";
  emailRules = {
    required: (v: string) => !!v || "E-mail is required",
    email_validation: (v: string) =>
      /.+@.+\..+/.test(v) || "E-mail must be valid",
  };

  public validatee = () => {
    console.log("inside vv");
    if ((<any>this.$refs.validattion).validate()) {
      var data = {
        emailId: this.form.email,
        password: this.form.password,
      };
      console.log("data ", data);
      user
        .loginUser(data)
        .then((data) => {
            console.log("data", data)
          sessionStorage.setItem("token", data.data.token);
          sessionStorage.setItem("firstName", data.data.user[0].firstName);
          sessionStorage.setItem("lastName", data.data.user[0].lastName);
          sessionStorage.setItem("emailId", data.data.user[0].emailId);
          window.setTimeout(() => {
            
             this.reset();
           // this.$nuxt.$options.router.push()({ name: 'Dashboard' });
          });
        })
        .catch((error) => {
          
          //this.userNotLoggedIn = true;
          // this.sending = false;
          console.warn("error for login is ", error);
        });
//router.push({ name: 'Dashboard' });
      
    }
  };

  reset() {
    (<any>this.$refs.validattion).reset();
  }
  resetValidation() {
    (<any>this.$refs.validattion).resetValidation();
  }
}
</script>


<style lang="scss">
.submitButton {
    background:  #A03037 0% 0% no-repeat padding-box;
    border-radius: 3px;
    opacity: 1;
  }


@import url("../assets/scss/register.scss");
</style>