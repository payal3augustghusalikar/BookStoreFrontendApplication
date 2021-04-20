
<template>
  <v-flex>
    <div id="app">
      <v-app id="inspire">
        <v-card class="mx-auto overflow-hidden topBar">
          <v-row>
            <v-col>
              <v-app-bar color="white" class="main-bar" fixed elevation="1">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <div id="top-search-bar">
                  <v-text-field
                    label="Search"
                    prepend-inner-icon="mdi-magnify"
                    fixed
                    filled
                    autocomplete="off"
                    dense
                    solo
                  ></v-text-field>
                </div>
                <v-spacer> </v-spacer>
                <md-avatar class="md-avatar-icon">P</md-avatar>
              </v-app-bar>
            </v-col>
          </v-row>
        </v-card>
        <v-row>
          hii
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
@Component({
  components: {
    SnackbarNotify,
    Books,
  },
})
export default class Dashboard extends Vue {
  allBooks: any;

  beforeMount() {
    console.log("before mount");
   // this.displayAllNotes();
  }

  //  mounted() {
  //      console.log("before mount")
  // this.displayAllNotes()

  //  }
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


<style lang="scss">
@import url("../assets/scss/dashboard.scss");
</style>