<template>
  <div class="book-size">
    <v-flex>
      <v-row>
        <v-title class="books-title mb-8">Books ({{this.booksQuantity}})</v-title>
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
              class="nuxt-link"
              :to="{ path: 'addToBag', query: { book: item } }"
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
                  <v-list-item
                    class="book-price mb-5"
                    style="text-decoration: none"
                    >{{ "Rs." + item.books.price }}</v-list-item
                  >
                </v-row>
              </v-card>
            </nuxt-link>
          </v-flex>
        </v-layout>
      </v-row>
      <!-- <v-row align="center" justify="center">
      <a @click="nextPage" class="mr-5"> Next Page </a>
      <a @click="prevPage"> Previous Page</a>
    </v-row> -->
      <v-row>

      <nav
        class="pagination is-right"
        role="navigation"
        aria-label="pagination"
      >
        <ul class="pagination">
          <li>
            <a @click="prev"> Prev </a>
          </li>
          <li>
            <span
              class="pagination-link go-to has-text-orange"
              aria-label="Goto page 1"
              >{{ current }}</span
            >
          </li>
          <li>
            <a @click="next()"> Next </a>
          </li>

          <li>
            <input type="text" class="pagination-link" />
          </li>
          <li>
            <button class="button">Go</button>
          </li>
        </ul>
      </nav>


      </v-row>
    </v-flex>
    <SnackbarNotify v-show="false" ref="snack" />
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



  // methods: {
  //   // prev() {
  //   //   this.current--;
  //   // },
  //   // next() {
  //   //   this.current++;
  //   // }
  // }




export default class books extends Vue {
    current: number= 1;
      pageSize: number =10;
  //current_page: number = 1;
  //itemsPagination: any = this.current_page;
  @Prop() allBooks : any[];
  @Prop() booksQuantity : number
 computed: object = {
    indexStart() {
      return (this.current - 1) * this.pageSize;
    },
    indexEnd() {
      return this.indexStart + this.pageSize;
    },
    paginated() {
      this.displayAllBooks();
      console.log("sloce", this.allBooks.slice(this.indexStart, this.indexEnd));
      return this.allBooks.slice(this.indexStart, this.indexEnd);
    }
  };
  beforeMount() {
    console.log("before mount");
    this.displayAllBooks();
  }


 prev() {
      this.current--;
    }
    next() {
      this.current++;
    }



  public displayAllBooks = () => {
    user
      .getBooks()
      .then((result) => {
        console.log("Success", result.data.data);

        this.allBooks = result.data.data.filter(
          (book) => book.books.isAddedToBag == false
        );

        this.booksQuantity = this.allBooks.length;
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