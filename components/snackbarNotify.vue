<template>
  <div name="snackbar">
    <v-snackbar v-model="showSnackbar" :timeout="timeout">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="showSnackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>


// export default {
//   show: (Boolean = false),
//   text: (string = ""),
//   timeout: (Number = 0),
 


  // mounted() {
  //   this.$store.subscribe((mutation, state) => {
  //     console.log(
  //       mutation.type === "snackBar/SHOW_MESSAGE",
  //       mutation.type === "snackbar/SHOW_MESSAGE"
  //     );
  //     console.log("mutation.type", mutation.type);
  //     if (mutation.type === "snackbar" || mutation.type === "SHOW_MESSAGE") {
  //       console.log("snackbar display");
  //       this.text = state.snackBar.text;
  //       this.timeout = 2500;
  //       this.show = true;
  //     }
  //     //this.reset();
  //   });
  


<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
@Component({})
export default class SnackbarNotify extends Vue {
  @Prop() text!: string;
  @Prop() showSnackbar!: boolean;
  @Prop() timeout!: number;

  reset() {
      (this.showSnackbar = false), (this.text = ""), (this.timeout = 0);
    }
  

  public setSnackbar = (snackbarData: any) => {
    console.log("inside set")
    this.text = snackbarData.text;
    this.timeout = snackbarData.timeout;
     this.showSnackbar = true;
  };
};
</script>