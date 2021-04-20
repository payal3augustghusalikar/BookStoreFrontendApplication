<template>
  <v-form ref="validattion" v-model="valid" :lazy-validation="lazy">
    <br />
    <br />
    <v-text-field
      outlined
      dense
      v-model="form.email"
      :rules="[emailRules.required, emailRules.email_validation]"
      label="E-mail"
      required
      autocomplete="off"
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
    <br />
    <button
      x-large
      block
      :disabled="!valid"
      class="button"
      @click.prevent.stop="validate"
    >
      Login
    </button>
    <SnackbarNotify ref="snack" />
  </v-form>
</template>

<script lang="ts">
import { Component, Vue, namespace } from "nuxt-property-decorator";
import user from "../services/user";
import SnackbarNotify from "../components/snackbarNotify.vue";
@Component({
  components: {
    SnackbarNotify,
  },
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

  public validate = () => {
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
          console.log("success data ", data);
          console.log(
            " data.data.data[0].user[0]",
            data.data.data[0].user.firstName
          );
          console.log(" data.data[0]", data.data[0]);
          sessionStorage.setItem("firstName", data.data.data[0].user.firstName);
          sessionStorage.setItem("lastName", data.data.data[0].user.lastName);
          sessionStorage.setItem("emailId", data.data.data[0].user.emailId);
          sessionStorage.setItem("token", data.data.token);

          console.log(" login is ");
          var snack: any = {
            text: "login Successful!",
            timeout: 3500,
          };
          this.$refs.snack.setSnackbar(snack);
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          var snack: any = {
            text: "error while login, try again!",
            timeout: 3500,
          };
          this.$refs.snack.setSnackbar(snack);
        });
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
@import url("../assets/scss/register.scss");
</style>