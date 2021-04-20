<template>
  <div>
    <v-flex>
      <v-row class="book-size" >
        <v-layout row wrap class="book-layout">
          <v-flex
            v-for="item in allBooks"
            :key="item.books.title"
            md3
            xs2
            class="mb-5 mr--25 mt-2"
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
//import { Component,  Vue } from "vue-property-decorator";
@Component({
  components: {
    SnackbarNotify,
  },
})
export default class books extends Vue {
     @Prop() allBooks!: any

  //   books: any
  //     mounted() {
  //        this.books = this.allBooks

  //        console.log("books in boook", books)
  //     }

  //   allBookss: any;
  //   setAllBookss(books: any) {
  //     this.allBookss = books;
  //     console.log("books in set", this.allBookss);
  //     console.log("uuu", this.allBookss[0].books.title);
  //   }
  //   created() {
  //     console.log("books in setttt", this.allBookss);
  //   }

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

        //  this.user = `${data.firstName} ${data.lastName}`;
        //  this.$router.push("/dashboard");
        var snack: any = {
          text: "register Successful!",
          timeout: 3500,
        };
        //   this.$refs.snack.setSnackbar(snack);
      })
      .catch((error) => {
        var snack: any = {
          text: "error while register, try again!",
          timeout: 3500,
        };
        //  this.$refs.snack.setSnackbar(snack);
      });
  };
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/books.scss");
</style>