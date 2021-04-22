<template>
  <v-form ref="validattion" v-model="valid" :lazy-validation="lazy">
    <br />
    <v-text-field
      outlined
      dense
      v-model="form.firstName"
      :rules="[nameRules.required, nameRules.name_length]"
      label="firstName"
      required
      autocomplete="off"
    ></v-text-field>
    <v-text-field
      outlined
      dense
      v-model="form.lastName"
      :rules="[nameRules.required, nameRules.name_length]"
      label="lastName"
      required
      autocomplete="off"
    ></v-text-field>
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
    <v-text-field
      outlined
      dense
      v-model="form.cpassword"
      :counter="10"
      :rules="[passwordRules.required, passwordRules.minLength]"
      label="confirm Password"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :type="showPassword ? 'text' : 'password'"
      @click:append="showPassword = !showPassword"
      required
    ></v-text-field>
    <button
      x-large
      block
      :disabled="!valid"
      class="button"
      @click.prevent.stop="validatee"
    >
      SignUp
    </button>
    <SnackbarNotify ref="snack" />
  </v-form>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import user from "../services/user";
import SnackbarNotify from "../components/snackbarNotify.vue";

@Component({
components: {
    SnackbarNotify
  }
})
export default class login extends Vue {
  valid: boolean = true;
  lazy: boolean = false;
  name: string = "";
  showPassword: boolean = false;

  form: any = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    cpassword: null,
  };
  nameRules = {
    required: (v: string) => !!v || "field is required",
    name_length: (v: string) =>
      (v && v.length <= 10) || "field must be less than 10 characters",
  };

  passwordRules = {
    required: (v: string) => !!v || "password is required",
    minLength: (v: string) =>
      (v && v.length > 7) || "password must be 8 characters",
  };
  emailId: string = "";
  password: string = "";
  user: string = "";
  emailRules = {
    required: (v: string) => !!v || "E-mail is required",
    email_validation: (v: string) =>
      /.+@.+\..+/.test(v) || "E-mail must be valid",
  };

  public validatee = () => {
    if ((<any>this.$refs.validattion).validate()) {
      var data = {
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        emailId: this.form.email,
        password: this.form.password,
        confirmPassword: this.form.cpassword,
      };

      user
        .registerUser(data)
        .then((result) => {
          console.log("Success", result);
          this.user = `${data.firstName} ${data.lastName}`;
       //   this.$router.push("/dashboard");
          var snack: any = {
            text: "register Successful!",
            timeout: 3500,
          };
          this.$refs.snack.setSnackbar(snack);
        })
        .catch((error) => {
          var snack: any = {
            text: "error while register, try again!",
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

<style lang="scss" scoped>
@import url("../assets/scss/register.scss");
</style>