<template>
  <div class="book-size">
    <v-flex>
      <v-row>
        <v-title class="books-title mb-8"
          >Books ({{ this.booksQuantity }})</v-title
        >
        <!-- <v-title class="books-title-quantity mb-8">({{allBooks.length}} items)</v-title> -->
        <v-layout row wrap class="book-layout">
          <v-flex
            v-for="item in paginated_Data"
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

      <v-row align="center" justify="center">
  
        <a @click="prevPage"> Previous Page </a> <span> >>
             </span
            >
              <a @click="nextPage" class="mr-5"> Next Page</a> >>
      </v-row>
    </v-flex>
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
  @Prop() pageNumber: number = 1;
  @Prop() pageSize: number = 10;
  @Prop() current_page: number = 1;
  // @Prop() private paginated!: any[];
  @Prop() current: number = 1;
  ///itemsPagination: any = this.current_page;
  @Prop() private size: number = 10;
  @Prop() allBooks: any[];
  @Prop() booksQuantity: number;
  @Prop() private page_Count: number = 0;
  @Prop() private paginated_Data!: any[];

  //  @Prop() private items!: any[];
  //   @Prop() private cartItems!: any[];
  //   @Prop() private wishlist!: any[];
  //   @Prop() private orderList!: any[];
  //   @Prop() private size: number = 10;
  //   private pageNumber: number = 0;
  //   private page_Count: number = 0;
  //   private lists: Array<object> = [];
  //  @Prop() private paginated_Data!: any[];

  // compute: Object = {
  //   indexStart() {
  //     console.log("inside computed start");
  //     return (this.current - 1) * this.pageSize;
  //   },
  //   indexEnd() {
  //     console.log("inside computed ind");
  //     return this.indexStart + this.pageSize;
  //   },
  // paginated() {
  //   console.log("inside computed "), this.displayAllBooks();
  //   console.log("sloce", this.allBooks.slice(this.indexStart, this.indexEnd));
  //   this.paginated_Data = this.allBooks.slice(this.indexStart, this.indexEnd);
  // },
  //};

  // indexEnd() {
  //     console.log("inside computed ind");
  //     return this.indexStart + this.pageSize;
  //   };

  //   get paginated(): any {
  //     console.log("inside computed "), this.displayAllBooks();
  //     console.log("sloce", this.allBooks.slice(this.indexStart, this.indexEnd));
  // return this.allBooks.slice(this.indexStart, this.indexEnd);
  //   }

  beforeMount() {
    console.log("before mount");
    this.displayAllBooks();
    // this.computed;
  }

  nextPage = () => {
    this.pageNumber++;
    this.current_page++;
    this.paginatedData();
  };

  prevPage = () => {
    console.log("this", this.pageNumber);
    this.pageNumber--;
    this.current_page--;
    this.paginatedData();
  };
 paginatedData = () => {
    const start = this.pageNumber * this.size,
      end = start + this.size;
    this.paginated_Data = this.allBooks.slice(start, end);
  };

  pageCount = () => {
    let length = this.allBooks.length,
      size = this.size;
    this.page_Count = Math.ceil(length / size);
    this.paginatedData();
  };

 
  // public setBook = (books: any) => {
  //   this.allBooks = books.data.data;
  //   this.paginatedData();
  // };

  public displayAllBooks = () => {
    user
      .getBooks()
      .then((result) => {
        console.log("Success", result.data.data);

        this.allBooks = result.data.data.filter(
          (book) => book.books.isAddedToBag == false
        );

        this.booksQuantity = this.allBooks.length;
        this.paginatedData();
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