<template>
  <div name="snackbar">
    <v-snackbar v-model="show" :timeout="timeout">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="show = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  show: (Boolean = false),
  text: (string = ""),
  timeout: (Number = 0),
 

  reset() {
      (this.show = false), (this.text = ""), (this.timeout = 0);
    },
  

  mounted() {
    this.$store.subscribe((mutation, state) => {
      console.log(
        mutation.type === "snackBar/SHOW_MESSAGE",
        mutation.type === "snackbar/SHOW_MESSAGE"
      );
      console.log("mutation.type", mutation.type);
      if (mutation.type === "snackbar" || mutation.type === "SHOW_MESSAGE") {
        console.log("snackbar display");
        this.text = state.snackBar.text;
        this.timeout = 2500;
        this.show = true;
      }
      //this.reset();
    });
  },
};
</script>