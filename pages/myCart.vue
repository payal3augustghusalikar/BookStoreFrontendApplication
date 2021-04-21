
<template>
  <v-app class="full-layout">
    <v-content>
      <v-row>
        <AppBar ref="appbar" />
      </v-row>
      <v-row>
        <v-layout row wrap class="mt-5">
          <v-flex xs24 md12>
            <v-row class="mt-10 book-route-links">
              <v-col class="mt-5">
                  {{addedToCartItems}}
                <nuxt-link :to="{ path: 'dashboard', query: { books: addedCartItems } }"
                  >Home   </nuxt-link
                >
                /
                <nuxt-link :to="{ path: 'myCart' }">My Cart</nuxt-link>
              </v-col>
            </v-row>
            <v-row>
              <v-card class="mx-auto mycart-card" outlined>
                <v-card-title id="title"> My Cart(1)</v-card-title>
                <v-layout class="mb-5">
                  <v-flex md2>
                    <!-- <v-img class="cart-image ml-5 mt-2" :src="item.books.image"></v-img> -->
                  </v-flex>
                  <v-flex md10>
                    <v-row class="ml-5 mt-1">
                      <v-list-item>title</v-list-item>
                      <v-list-item id="author">author</v-list-item>
                      <v-list-item>price</v-list-item>
                    </v-row>
                    <!-- <v-row class="counter">
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
                    </v-row> -->
                    <v-row class="d-flex place-order">
                      <v-btn
                        class="place-order-btn mr-5"
                        @click="placeOrder(item)"
                        >Place order</v-btn
                      >
                    </v-row>
                  </v-flex>
                </v-layout>

                <!-- </v-flex>-->
              </v-card>
            </v-row>
            <v-row> </v-row>
          </v-flex>
        </v-layout>
      </v-row>
    </v-content>
  </v-app>
</template>






<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";
import AppBar from "../components/appbar.vue";

@Component({
  components: {
    AppBar,
    // AddressDetails
  },
})


export default class MyCart extends Vue {

  
      @Prop() private addedToCartItems!: object;
 // addedCartItems: any;
  private newAddedToCartItems: any = [];
newArray2 : any;

  items:any
// mounted() {
//    // this.addedToCartItems=
//     console.log("mounted cart", this.addedToCartItems)
//     this.items= this.addedCartItems
//      this.items= this.addedToCartItems
//     console.log("items", this.items)
//      console.log("items1", this.newAddedToCartItems.push(this.addedCartItems))
// this.newArray1=this.newAddedToCartItems.push(this.addedToCartItems)
// }

// beforeMount() {
//     console.log("mounted cart created", this.addedToCartItems)
//     this.items= this.addedCartItems
//       this.items= this.addedToCartItems
//     console.log("items created", this.items)
//     console.log("items1", this.newAddedToCartItems.push(this.addedCartItems))
// //this.newArray2=this.newAddedToCartItems.push(this.addedCartItems)
// }

created() {
  console.log("this.iten", this.addedToCartItems)
    console.log(" cart created", this.addedToCartItems)
   // this.items= this.addedCartItems
     // this.items= this.addedToCartItems
   // console.log("items created", this.items)
   // console.log("items1", this.newAddedToCartItems.push(this.addedCartItems))
this.newArray2=this.newAddedToCartItems.push(this.addedToCartItems)
console.log("new Array", this.newArray2);
}

  setAddedToCartItems(cartItems: any) {
     // console.log("inside cart")
    this.addedCartItems = cartItems;
   // console.log("this.addedCartItems", this.addedCartItems);
  }


}
</script>

<style lang="scss" >
@import url("../assets/scss/myCart.scss");
</style>


