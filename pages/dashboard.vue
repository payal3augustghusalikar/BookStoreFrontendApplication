
<template>
  <v-flex>
    <div id="app">
      <v-app id="inspire">
        <Appbar ref="appbar" />
        <v-row>
          <Books ref="books" :allBooks="allBooks" />
        </v-row>
      </v-app>
    </div>
  </v-flex>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import user from "../services/user";
import SnackbarNotify from "../components/snackbarNotify.vue";
import Books from "../components/books.vue";
import Appbar from "../components/appbar.vue";
@Component({
  components: {
    SnackbarNotify,
    Books,
    Appbar,
  },
})
export default class Dashboard extends Vue {
  allBooks: any;

  beforeMount() {
    console.log("before mount");
    // this.displayAllNotes();
   // this.$refs.books.displayAllBooks();
  }

  mounted() {
    console.log("before mount");
    //this.displayAllNotes()
   // 
  }
  // public displayAllNotes = () => {
  //   console.log("disapl");
  //   user
  //     .getBooks()
  //     .then((result) => {
  //       console.log("Success", result);
  //       this.allBooks = result.data.data;
  //       console.log("all", this.allBooks);
  //       //this.$refs.books.setAllBookss(result.data.data);
  //     })
  //     .catch((error) => {
  //       var snack: any = {
  //         text: "error while register, try again!",
  //         timeout: 3500,
  //       };
  //       //  this.$refs.snack.setSnackbar(snack);
  //     });
  // };
}
</script>


<style lang="scss" scoped>
@import url("../assets/scss/dashboard.scss");
</style>