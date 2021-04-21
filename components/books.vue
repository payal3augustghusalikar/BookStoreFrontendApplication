<template>
  <div>
    <v-flex>
      <v-row class="book-size">
        
           <v-title class="books-title mb-8">Books</v-title>
           <!-- <v-title class="books-title-quantity mb-8">({{allBooks.length}} items)</v-title> -->
        <v-layout row wrap class="book-layout">
          
          <v-flex
            v-for="item in allBooks"
            :key="item.books.title"
            md3
            xs2
            class="mb-5 mr--25 mt-2"
          >
           <nuxt-link
            :to="{ path: 'addToBag', query: {book: item}}"
          >
            <v-card class="mx-auto b-card" outlined>
              <v-row class="book-image">
                <v-img
                  class="mx-auto mt-4 mb-4"
                  :src="item.books.image"
                ></v-img>
              </v-row>
              <v-row class="book-content mt-5">
                <v-list-item class="book-title">{{
                  item.books.title
                }}</v-list-item>
                <v-list-item class="book-author">{{
                  item.books.author
                }}</v-list-item>
                <v-list-item class="book-price mb-5">{{
                  "Rs." + item.books.price
                }}</v-list-item>
              </v-row>
            </v-card>
              </nuxt-link>
          </v-flex>
        </v-layout>
      </v-row>
    </v-flex>
    <SnackbarNotify ref="snack" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import user from "../services/user";
import SnackbarNotify from "../components/snackbarNotify.vue";

@Component({
  components: {
    SnackbarNotify,
  },
})
export default class books extends Vue {
  current_page : number =1;
  itemsPagination: any = this.current_page
  @Prop() allBooks: any;

  beforeMount() {
    console.log("before mount");
    this.displayAllBooks();
  }
  public displayAllBooks = () => {
    user
      .getBooks()
      .then((result) => {
        console.log("Success", result.data.data);
        this.allBooks = result.data.data;
        this.itemsPagination =this.allBooks
        var snack: any = {
          text: "register Successful!",
          timeout: 3500,
        };
      })
      .catch((error) => {
        var snack: any = {
          text: "error , try again!",
          timeout: 3500,
        };
        this.$refs.snack.setSnackbar(snack);
      });
  };
}
</script>

<style lang="scss">
@import url("../assets/scss/books.scss");
</style>