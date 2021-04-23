<template>
  <v-app>
    <v-content>
      <v-row>
        <AppBar ref="appBar" />
      </v-row>
       <v-row>
           <v-container grid-list-md text-xs-center>
        <v-layout row wrap class="mt-9">
            <v-col>
            <v-row class="mt-10 ml-10 confirmation-image" align="center" justify="center">
                  <v-img class="orderConfirmImage mt-10"   :src="require('@/assets/scss/images/order-confirm.png')"></v-img>
            </v-row>
              <v-row class="mt-2 ml-10" align="center" justify="center">
                  <h3>Order Placed Successfully</h3>
              </v-row>
              <v-row class="mt-5 ml-12" align="center" justify="center">
                  <pre>      hurray!!! your order is confirmed
    the order id is #12345 save the order id for
            further communication..</pre>
              </v-row>
              <v-row class="mt-15 ml-10" align="center" justify="center"> 
                <table>
                    <tbody>
                        <tr>
                            <th> Email us</th>
                            <th> Contact us</th>
                            <th> Address</th>
                        </tr>

                        <tr>
                            <td>admin@bookstore.com</td>
                            <td>+91 2222222222 </td>
                            <td>new layout, Pune</td>
                        </tr>
                    </tbody>
                </table>
             </v-row>
             <v-row class="mt-15 ml-10" align="center" justify="center">
                 <v-btn class="continue-shopping" @click="goToHome">Continue Shopping</v-btn>
            </v-row>
              </v-col>
        </v-layout>
         </v-container>
       </v-row>
    </v-content>
  </v-app>
</template>
            
<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";
import AppBar from "../components/AppBar.vue";
@Component({
  components: {
    AppBar
  }
})
export default class ConfirmOrder extends Vue {
    private orderList: any;
    private wishlist: any;
    private items: any;
   // private orderConfirmImage: any = require('../assets/images/orderConfirm.png');

    beforeMount(){
        if(this.$route.query.books != undefined)
            this.items = this.$route.query.books;
        else
            this.items = [];

        if(this.$route.query.orderedBooks != undefined)
            this.orderList = this.$route.query.orderedBooks
        else
            this.orderList = [];

        if(this.$route.query.wishlistBooks != undefined)
            this.wishlist = this.$route.query.wishlistBooks
        else
            this.wishlist = [];
    }

    mounted(){
      if(this.wishlist !=undefined){
      const appBar: any = this.$refs.appBar;
    //  appBar.setWishlistItems(this.wishlist);
    }

    if(this.items !=undefined){
      const appBar: any = this.$refs.appBar;
    //  appBar.setBook(this.items);
    }

    if(this.orderList !=undefined){
      const appBar: any = this.$refs.appBar;
     // appBar.setOrderedBooks(this.orderList);
    }
  }

   goToHome(){
    this.$router.push({path:'/dashboard',query:{books:this.items, wishlistBooks:this.wishlist, orderedBooks: this.orderList}});
  }
}
</script>