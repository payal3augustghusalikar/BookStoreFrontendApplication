<template>
  <v-app>
    <v-content>
      <v-row>
        <AppBar ref="appbar" />
      </v-row>
      <v-col>
        <v-row class="book-route-links mb-2">
          <a @click="goToHome">Home</a> |
          <nuxt-link :to="{ path: 'addToBag', query: {book: item} }">Book</nuxt-link>
        </v-row>
        <v-row>
          <v-layout row wrap class="mt-5">
            <v-flex xs12 sm6 md6>
              <v-row>
                <v-card class="mx-auto book-wishlist-card" outlined>
                  <v-img
                    class="mx-auto book-item-image mt-4"
                    :src="item.books.image"
                  ></v-img>
                </v-card>
              </v-row>
              <v-row class="d-flex">
                <v-btn
                  class="add-to-bag white--text mt-5"
                  @click="addToCart"
                  :disabled="isAddedToCart"
                  >{{addToBagText}}</v-btn
                >
                <v-btn
                  class="wish-list-btn white--text mt-5"
                  @click="addToWishlist"
                   :disabled="isWishlisted"
                  ><v-icon class="mr-2">mdi-heart</v-icon>{{wishlistText}}</v-btn
                >
              </v-row>
            </v-flex>
            <v-flex xs12 sm6 md6 class="book-description">
              <v-row class="book-details">
                <v-list-item class="add-bag-book-title">{{
                  item.books.title
                }}</v-list-item>
                <v-list-item class="add-bag-book-author">{{
                  item.books.author
                }}</v-list-item>
              </v-row>
              <v-row>
                <v-list-item class="add-bag-book-price">{{
                  "Rs. " + item.books.price
                }}</v-list-item>
              </v-row>
              <v-divider class="mt-5" />
              <v-row>
                <v-list-item class="add-bag-book-description mt-5"
                  >Book Detail</v-list-item
                >
                <v-list-item class="description">{{
                  item.books.description
                }}</v-list-item>
              </v-row>
              <v-divider class="mt-5" />
              <v-row class="cust-feedback mb-5">
                <v-list-item class="mt-5">Customer Feedback</v-list-item>
                <v-card class="mt-5 feedback-card ml-3">
                  <h5 class="ml-5 mt-2 mb-2">Overall rating</h5>
                  <br />
                  <v-textarea
                    autocomplete="off"
                    placeholder="write Your review"
                    flat
                    solo
                    dense
                    auto-grow
                    rows="1"
                    row-height="10"
                    required
                  />
                </v-card>
              </v-row>
              <v-row>
                <v-col cols="12" md="8"></v-col>
                <v-col cols="12" md="4">
                  <v-btn class="feedback-submit-button mb-5">Submit</v-btn>
                </v-col>
              </v-row>
              <br />
              <br />
            </v-flex>
            <MyCart ref="mycart" v-show="false" />
          </v-layout>
        </v-row>
      </v-col>
      <Snackbar ref="snack" />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Prop, Vue, Component, Watch } from "vue-property-decorator";
import AppBar from "../components/appbar.vue";
import MyCart from "./myCart.vue";
import Snackbar from "../components/snackbarNotify.vue";
@Component({
  components: {
    AppBar,
    MyCart,
    Snackbar,
  },
})
export default class AddToBag extends Vue {
 
  private item: any = {};
  private book: any;
  private timeout: number = 3500;
  private addedToCartItems: any = [];
  private addedToWishlistItems: any = [];
 private wishlistText: string= "WISHLST";
 private  addToBagText: string= "ADD TO BAG";
   private isWishlisted: Boolean = false;

 private isAddedToCart: Boolean = false;
  beforeMount() {
    console.log("before mount");
    this.book;
    console.log(this.$route.query.book);
    this.item = this.$route.query.book;
  }
  mounted() {
    console.log(" mount");
    this.book;
    console.log("item", this.book);
  }

  goToHome() {
    this.$router.push("/dashboard");
  }

  addToCart() {
    const child: any = this.$refs.snack;
    try {
      this.addedToCartItems.push(this.item);
      this.$refs.appbar.setAddedToCartItems(this.addedToCartItems);
      // const appBar: any = this.$refs.appBar;
      // appBar.setBook(this.items);
      console.log("this.aaddedToCartItems", this.addedToCartItems.length);
      const snackbarData = {
        text: "Book added to cart",
        timeout: this.timeout,
      };
      child.setSnackbar(snackbarData);
      setTimeout(() => {
          this.isAddedToCart = true;
        this.addToBagText = "ADDED TO BAG"
      }, 1000);
    } catch (error) {
      const snackbarData = {
        text: error,
        timeout: this.timeout,
      };
      child.setSnackbar(snackbarData);
    }
  }

  addToWishlist() {
    try {

 if(this.isWishlisted==true) {
  this.wishlistText = "WISHLIST";
   // this.addedToWishlistItems.pull(this.item);
 } else {
 this.addedToWishlistItems.push(this.item);
      // const appBar: any = this.$refs.appBar;
      //appBar.setWishlistItems(this.wishlist);

      console.log("this.addedToWishlistItems", this.addedToWishlistItems);
      const snackbarData = {
        text: "added to wishlist",
        timeout: this.timeout,
      };
      this.$refs.snack.setSnackbar(snackbarData);
      setTimeout(() => {
          this.isWishlisted = true;
         this.wishlistText = "WISHLISTED";
      }, 1000);
 }
      
     
    } catch (error) {
      const snackbarData = {
        text: error,
        timeout: this.timeout,
      };
      this.$refs.snack.setSnackbar(snackbarData);
    }
  }
}
</script>

<style lang="scss" >
@import url("../assets/scss/addToBag.scss");
</style>