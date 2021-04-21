<template>
  <div>
    <v-card class="mx-auto overflow-hidden topBar">
      <v-row>
        <v-app-bar color="#A03037" class="main-bar" fixed elevation="1">
          <div class="book-icon">
            <v-img
              class="mx-2 book-icon"
              contain
              :src="require('@/assets/scss/images/education.svg')"
            ></v-img>
          </div>
          <v-card-title class="white--text headline"> BookStore </v-card-title>
          <div id="top-search-bar">
            <v-text-field
              label="Search"
              prepend-inner-icon="mdi-magnify"
              autocomplete="off"
              dense
              collaps
              solo
            ></v-text-field>
          </div>
          <ul>
            <div class="avatar">
              <v-icon class="white--text mr-8 account-icon"
                >mdi-account-outline</v-icon
              >

              <p id="bottom-name">Payal</p>
            </div>
          </ul>

          <ul>
             <nuxt-link
        :to="{ path: 'myCart', query: {books: items, wishlistBooks: wishlist, orderedBooks: orderList }}"
      >
            <v-img
              class="mx-2 supermarket-icon white--text headline"
              contain
              :src="require('@/assets/scss/images/supermarket.svg')"
            > {{cartItemCounter}}</v-img>

            <p id="bottom-name-cart">cart</p> 
             </nuxt-link>
          </ul>
            <v-badge id="counter" color="#A03037" :content.sync="this.cartItemCounter"></v-badge>
        </v-app-bar>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
 import { Prop } from "vue-property-decorator";
export default class appbar extends Vue {
  @Prop() private cartItemCounter!: any;
    // cartItemCounter: number=0;


beforeMount() {
  console.log("cartItemCounter in mount", this.cartItemCounter)
  // this.cartItemCounter = addedToCartItems.length;
}

  setAddedToCartItems(addedToCartItems: any) {
   // if (addedToCartItems != undefined) {
    this.cartItemCounter =addedToCartItems.length;
        console.log("cartItemCounter", this.cartItemCounter)
   // }
  }
}
</script>

<style lang="scss" scoped>
@import url("../assets/scss/appbar.scss");
</style>










