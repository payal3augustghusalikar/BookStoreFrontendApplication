
<template>
  <v-app class="full-layout">
    <v-content>
      <v-row>
        <AppBar ref="appbar" />
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
              <v-flex>
              <v-card class="mx-auto mycart-card" outlined>
                <v-card-title>{{
                  "My cart (" + allCartBooks1.length + ")"
                }}</v-card-title>
                <v-flex
                  v-for="item in allCartBooks1"
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
   <v-form class="address-form1" > 
                <OrderSummary  ref="orderSummary" @onCheckOut="checkOut"  />
           </v-form> 
            </v-row>
              </v-flex>
         
        </v-layout>
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
@Component({
  components: {
    AppBar,
    AddressDetails,
    OrderSummary
  },
})


export default class myCart extends Vue {
  // @Prop() private addedToCartItems!: object;
  // addedCartItems: any;
  private newAddedToCartItems: any = [];
  newArray2: any;
  private items: any;
  private wishlist: any;
  private isOrderPlaced: boolean = false;
  @Prop() private counter_value!: number;
  private orderList: any=[];

  allCartBooks1: any = [
    {
      books: {
        adminId: "da20dd33-dda1-4ffa-8dd1-c71524d03450",
        author: "Dan Brown",
        bookId: "3bda1b8d-9684-407c-85ec-c82fe51763ad",
        description:
          "*Sunday Times #1 Bestseller New York Times #1 Bestseller The global bestseller - Origin is the latest Robert Langdon novel cliffhanger’ Wall Street Journal ‘As engaging a hero as you could wish for’ Mail on Sunday ‘For anyone who wants more brain-food than thrillers normally provide’ Sunday Times' to oblivion.",
        image:
          "http://books.google.com/books/content?id=95wnDQAAQBAJ&printsec=frontcover&img=1&zoom=5",
        isAddedToBag: true,
        isWishListed: false,
        price: "218",
        quantity: "16",
        title: "Origins",
      },
    },
    // {
    //   books: {
    //     adminId: "da20dd33-dda1-4ffa-8dd1-c71524d03450",
    //     author: "Dan Brown",
    //     bookId: "3bda1b8d-9684-407c-85ec-c82fe51763ad",
    //     description:
    //       "*Sunday Times #1 Bestseller New York Times #1 Bestseller The global bestseller - Origin is the latest Robert Langdon novel cliffhanger’ Wall Street Journal ‘As engaging a hero as you could wish for’ Mail on Sunday ‘For anyone who wants more brain-food than thrillers normally provide’ Sunday Times' to oblivion.",
    //     image:
    //       "http://books.google.com/books/content?id=95wnDQAAQBAJ&printsec=frontcover&img=1&zoom=5",
    //     isAddedToBag: true,
    //     isWishListed: false,
    //     price: "218",
    //     quantity: "16",
    //     title: "Origins",
    //   },
    // },
  ];

  //   beforeMount() {
  //     console.log("before mount");
  //     this.displayAllBooks();
  //   }

  // Mounted() {
  //     console.log("before mount");
  //     this.displayAllBooks();
  //   }
  // created () {

  // }

  incrementCounter = (item: any) => {
    item.counter = item.counter + 1;
  };
  decrementCounter = (item: any) => {
    item.counter = item.counter - 1;
    if (item.counter <= 0) item.counter = 1;
  };
  // allCartBooks2 :any
  //   // public displayAllBooks = () => {
  //   //   user
  //   //     .getBooks()
  //   //     .then((result) => {

  //   //     //  this.allCartBooks= result.data.data.filter(
  //   //         (book) => book.books.isAddedToBag == true
  //   //       );
  //   //       console.log("Success1", this.allCartBooks);

  //   //     })
  //   //     .catch((error) => {
  //   //       var snack: any = {
  //   //         text: "error , try again!",
  //   //         timeout: 3500,
  //   //       };

  //   //       this.$refs.snack.setSnackbar(snack);
  //   //     });
  //   // };
  //  //@Prop() private allCartBooks!: any
  //  //= this.allCartBooks2
  //   mounted() {

  //     //this.displayAllBooks();
  //   }

  //   setAddedToCartItems(cartItems: any) {

  //    // this.addedCartItems = cartItems;

  //   }

  placeOrder = (item: any) => {
    // this.isOrderPlaced = true;

    // item.books.bookCount = this.counter_value;

    // const addressdetails: any = this.$refs.addressdetails;
    // addressdetails.showDetails();

this.isOrderPlaced = true;
    const orderSummary: any = this.$refs.orderSummary;
    item.books.bookCount = this.counter_value;
    orderSummary.setBook(item);
    const addressdetails: any = this.$refs.addressdetails;
    addressdetails.showDetails();


  };

  @Prop() allBooks1: any;

  beforeMount() {
    console.log("before mount");
    this.displayAllBooks();
  }
  public displayAllBooks = () => {
    user
      .getBooks()
      .then((result) => {
        console.log("Success", result.data.data);
        // console.log("Success1", result.data.data[0].books.isAddedToBag);
        this.allBooks1 = result.data.data.filter(
          (book) => book.books.isAddedToBag == true
        );

        //   this.itemsPagination = this.allBooks;
        // var snack: any = {
        //   text: "register Successful!",
        //   timeout: 3500,
        // };
      })
      .catch((error) => {
        var snack: any = {
          text: "error , try again!",
          timeout: 3500,
        };
        this.$refs.snack.setSnackbar(snack);
      });
  };

checkOut(book: any) {
    if (
      (this.$refs.addressForm as Vue & { validate: () => boolean }).validate()
    ) {
         console.log("this.$refs.addressForm", this.$refs.addressForm)
      console.log("ordrelist", this.orderList)
      this.orderList.push(book);
    //  const filteredItems = this.items.filter((item: any) => item !== book);
         console.log("ordrelist1", this.orderList)
    this.$router.push({
        path: "/confirmOrder",
     //   query: {
         // books: filteredItems,
       //   wishlistBooks: this.wishlist,
      //    orderedBooks: this.orderList
      //  }
      });
    }
  }



}
</script>

<style lang="scss" >
@import url("../assets/scss/myCart.scss");
</style>


