
<template>
  <v-app class="full-layout">
    <v-content>
      <v-row>
        <AppBar ref="appbar" :cartItemQuantity="cartItemQuantity" />
      </v-row>
      <v-flex>
        <v-row>
          <v-layout row wrap class="mt-5">
            <v-flex xs24 md12>
              <v-row class="mt-10 book-route-links">
                <v-col class="mt-5">
                  <nuxt-link :to="{ path: 'dashboard' }">Home </nuxt-link>
                  /
                  <nuxt-link :to="{ path: 'myCart' }">My Cart</nuxt-link>
                </v-col>
              </v-row>
              <v-row>
                <v-flex row class="mt-2">
                  <v-card class="mx-auto mycart-card" outlined>
                    <!-- <v-card-title>{{
                      "My cart (" + allBooks1.length + ")"
                    }}</v-card-title> -->

                    <v-card-title>{{
                      "My cart (" + this.cartItemQuantity + ")"
                    }}</v-card-title>

                    <v-flex
                      v-for="item in allBooks1"
                      :key="item.books.title"
                      class="mt-2"
                    >
                      <v-layout class="mb-5">
                        <v-flex md2>
                          <v-img
                            class="cart-image ml-5 mt-2"
                            :src="item.books.image"
                          ></v-img>
                        </v-flex>
                        <v-flex md10>
                          <v-row class="ml-5 mt-1">
                            <v-list-item id="title">{{
                              item.books.title
                            }}</v-list-item>
                            <v-list-item id="author">{{
                              item.books.author
                            }}</v-list-item>
                            <v-list-item id="price">{{
                              "Rs." + item.books.price
                            }}</v-list-item>
                          </v-row>
                          <v-row class="counter">
                            <v-icon
                              class="counter-minus"
                              @click="decrementCounter(item)"
                              >mdi-minus-circle-outline</v-icon
                            >
                            <v-text-field
                              dense
                              outlined
                              v-model="item.counter"
                              class="counter-field"
                            ></v-text-field>
                            <v-icon
                              class="counter-plus"
                              @click="incrementCounter(item)"
                              >mdi-plus-circle-outline</v-icon
                            >
                            <v-btn @click="removeItemFromCart(item)">
                              Remove
                            </v-btn>
                          </v-row>
                          <v-row class="d-flex place-order">
                            <v-btn
                              class="place-order-btn mr-5"
                              @click="placeOrder(item)"
                              >Place order</v-btn
                            >
                          </v-row>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-card>
                </v-flex>
              </v-row>
            </v-flex>
            <v-flex md2>
              <v-row>
                <!-- <v-card> </v-card>
              <v-card class="address-form" outlined> -->
                <v-form ref="addressForm" v-show="true" class="address-form">
                  <AddressDetails ref="addressdetails" />
                </v-form>
                <!-- </v-card> -->
              </v-row>

              <v-row>
                <v-form class="address-form1">
                  <OrderSummary ref="orderSummary" @onCheckOut="checkOut" />
                  <!-- <AddToBag ref="addToBag"  /> -->
                </v-form>
              </v-row>
            </v-flex>
          </v-layout>
          <Snackbar ref="snack" />
        </v-row>
      </v-flex>
    </v-content>
  </v-app>
</template>






<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";
import AppBar from "../components/appbar.vue";
import user from "../services/user";
import AddressDetails from "../components/addressDetails.vue";
import OrderSummary from "../components/orderSummary.vue";
//import AddToBag from "./addToBag.vue";
import AddToBag from "./addToBag.vue";
import Snackbar from "../components/snackbarNotify.vue";
@Component({
  components: {
    AppBar,
    AddressDetails,
    OrderSummary,
    AddToBag,
    Snackbar,
  },
})
export default class myCart extends Vue {
  newArray2: any;
  @Prop() private counter_value!: number;
  private orderList: any = [];
  bookInput: any = {};

  // allCartBooks1: any = [
  //   {
  //     books: {
  //       adminId: "da20dd33-dda1-4ffa-8dd1-c71524d03450",
  //       author: "Dan Brown",
  //       bookId: "3bda1b8d-9684-407c-85ec-c82fe51763ad",
  //       description:
  //         "*Sunday Times #1 Bestseller New York Times #1 Bestseller The global bestseller - Origin is the latest Robert Langdon novel cliffhanger’ Wall Street Journal ‘As engaging a hero as you could wish for’ Mail on Sunday ‘For anyone who wants more brain-food than thrillers normally provide’ Sunday Times' to oblivion.",
  //       image:
  //         "http://books.google.com/books/content?id=95wnDQAAQBAJ&printsec=frontcover&img=1&zoom=5",
  //       isAddedToBag: true,
  //       isWishListed: false,
  //       price: "218",
  //       quantity: "16",
  //       title: "Origins",
  //     },
  //   },
  //   // {
  //   //   books: {
  //   //     adminId: "da20dd33-dda1-4ffa-8dd1-c71524d03450",
  //   //     author: "Dan Brown",
  //   //     bookId: "3bda1b8d-9684-407c-85ec-c82fe51763ad",
  //   //     description:
  //   //       "*Sunday Times #1 Bestseller New York Times #1 Bestseller The global bestseller - Origin is the latest Robert Langdon novel cliffhanger’ Wall Street Journal ‘As engaging a hero as you could wish for’ Mail on Sunday ‘For anyone who wants more brain-food than thrillers normally provide’ Sunday Times' to oblivion.",
  //   //     image:
  //   //       "http://books.google.com/books/content?id=95wnDQAAQBAJ&printsec=frontcover&img=1&zoom=5",
  //   //     isAddedToBag: true,
  //   //     isWishListed: false,
  //   //     price: "218",
  //   //     quantity: "16",
  //   //     title: "Origins",
  //   //   },
  //   // },
  // ];

  incrementCounter = (item: any) => {
    item.counter = item.counter + 1;
  };
  decrementCounter = (item: any) => {
    item.counter = item.counter - 1;
    if (item.counter <= 0) item.counter = 1;
  };

  placeOrder = (item: any) => {
    //this.isOrderPlaced = true;
    const orderSummary: any = this.$refs.orderSummary;
    //  item.books.bookCount = this.counter_value;
    orderSummary.setBook(item);
    const addressdetails: any = this.$refs.addressdetails;
    addressdetails.showDetails();
  };

  //@Prop() allBooks1: any;
  @Prop() allBooks1: any;
  @Prop() cartItemQuantity: any;
  timeout: number = 3500;
  beforeMount() {
    console.log("before mount");
    this.displayAllBooks();
  }

public displayAllBooks = () => {
    user
      .getBooks()
      .then((result) => {
        console.log("Success", result.data.data);

        this.allBooks1 = result.data.data.filter(
          (book: any) => book.books.isAddedToBag == true
        );
        this.cartItemQuantity = this.allBooks1.length;
        console.log("length ", this.allBooks1.length);
        this.$refs.appbar.setAddedToCartItems(this.cartItemQuantity);
        //   this.itemsPagination = this.allBooks;
      })
      .catch((error) => {
        var snack: any = {
          text: "error , try again!",
          timeout: this.timeout,
        };
        this.$refs.snack.setSnackbar(snack);
      });
  };


  public removeItemFromCart(item: any) {

    console.log("adding to cart", item.books.bookId);
    const child: any = this.$refs.snack;
    try {
       if (item.books.isAddedToBag == true)
        this.bookInput = {
          isAddedToBag: false,
        };
  console.log("isaddedto bag" , this.bookInput.isAddedToBag )
      // console.log(
      //   "noteData, id",
      //   id,
      //   (this.bookInput = {
      //     isAddedToBag: true,
      //   })
      // );
      return user
        .addToBag(this.bookInput,  item.books.bookId)
        .then((result) => {
          result = result.data.data;
          console.log("Moved To bag", result);
          const snackbarData = {
            text: "Book added to cart",
            timeout: this.timeout,
          };

      
          //   setTimeout(() => {
          //     this.isAddedToCart = true;
          // //    this.addToBagText = "ADDED TO BAG";
          //   }, 1000);

         
            this.$refs.snack.setSnackbar(snackbarData);
            this.$refs.books.displayAllBooks();
           //this.$refs.myCart.displayAllBooks();
          this.displayAllBooks()
        })
        .catch((error) => {
          const snackbarData = {
            text: error,
            timeout: this.timeout,
          };
          this.$refs.snack.setSnackbar(snackbarData);
        });

    
    } catch (error) {
      const snackbarData = {
        text: error,
        timeout: this.timeout,
      };
      this.$refs.snack.setSnackbar(snackbarData);
    }
  };



    // //  this.$refs.addToBag.addToBag(item);

    // console.log("adding to cart", item.books.bookId);
    // const child: any = this.$refs.snack;
    // try {
    //   if (item.books.isAddedToBag == true)
    //     this.bookInput = {
    //       isAddedToBag: false,
    //     };
    //   console.log("isaddedto bag", this.bookInput.isAddedToBag);
    //   // console.log(
    //   //   "noteData, id",
    //   //   id,
    //   //   (this.bookInput = {
    //   //     isAddedToBag: true,
    //   //   })
    //   // );
    //   return user
    //     .addToBag(this.bookInput, item.books.bookId)
    //     .then((result) => {
    //       result = result.data.data;
    //       console.log("Moved To bag", result);
    //       const snackbarData = {
    //         text: "Book removed from cart",
    //         timeout: this.timeout,
    //       };
    //  this.displayAllBooks();
    //       setTimeout(() => {
    //         this.isAddedToCart = false;
    //            this.$refs.snack.setSnackbar(snackbarData);
    //       }, 1000);

    //       // this.$refs.books.displayAllBooks();
    //       this.displayAllBooks();
    //    //   this.$refs.snack.setSnackbar(snackbarData);
    //       //   this.$refs.myCart.displayAllBooks();
    //     })
    //     .catch((error) => {
    //       const snackbarData = {
    //         text: error,
    //         timeout: this.timeout,
    //       };
    //       this.$refs.snack.setSnackbar(snackbarData);
    //     });
    // } catch (error) {
    //   const snackbarData = {
    //     text: error,
    //     timeout: this.timeout,
    //   };
    //   this.$refs.snack.setSnackbar(snackbarData);
    // }
  

  

  checkOut(book: any) {
    if (
      (this.$refs.addressForm as Vue & { validate: () => boolean }).validate()
    ) {
      console.log("this.$refs.addressForm", this.$refs.addressForm);
      console.log("ordrelist", this.orderList);
      this.orderList.push(book);
      //  const filteredItems = this.items.filter((item: any) => item !== book);
      console.log("ordrelist1", this.orderList);
      this.$router.push({
        path: "/confirmOrder",
      });
    }
  }
}
</script>

<style lang="scss" >
@import url("../assets/scss/myCart.scss");
</style>


