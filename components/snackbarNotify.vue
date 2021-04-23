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
