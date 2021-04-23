<template>
    <v-card class="mx-auto summary-card mt-10 mb-5" id="mySummary" outlined v-show="showDetails">
                <v-card-title>Order Summary</v-card-title>
                <v-card-text>
                  <v-layout class="mb-5">
                    <v-flex md2>
                      <v-img class="cart-image ml-5 mt-2" :src="image"></v-img>
                    </v-flex>
                    <v-flex md10>
                      <v-row class="ml-5 mt-1">
                        <v-list-item>{{title}}</v-list-item>
                        <v-list-item>{{author}}</v-list-item>
                        <v-list-item>{{'Rs.'+price}}</v-list-item>
                        <v-list-item class="mt-5">{{'Quantity: '+bookCount}}</v-list-item>
                      </v-row>
                      <v-row class="d-flex place-order">
                        <v-btn class="check-out-btn" @click="CheckoutOrder">Checkout</v-btn>
                      </v-row>
                    </v-flex>
                  </v-layout>
                </v-card-text>                   
              </v-card>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";
@Component({})
export default class OrderSummary extends Vue{
   @Prop() private image: any="";
   @Prop() private author: any="";
   @Prop() private price: any="";
   @Prop() private title: any="";
   @Prop() private showDetails: boolean=false;
  @Prop() private book: any;
  @Prop() private orderedBooks: any;
  @Prop() private bookCount!: number;
  beforeMount() {
     if(this.$route.query.orderedBooks != undefined)
       this.orderedBooks = this.$route.query.orderedBooks;
    else
      this.orderedBooks = [];
  }
    public setBook = (book: any) => {
    this.title = book.books.title;
    this.image = book.books.image;
    this.price = book.books.price;
    this.author = book.books.author;
    this.showDetails = !this.showDetails;
    this.bookCount = book.books.bookCount;
    this.book = book;
  }

  public CheckoutOrder = () => {
    this.orderedBooks=this.book;
    this.$emit("onCheckOut", this.orderedBooks);
  }
}
</script>


<style lang="scss" scoped >
@import url("../assets/scss/addressDetail.scss");
</style>