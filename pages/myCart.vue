
<template>
  <v-app>
    <v-content>
      <v-row>
        <AppBar ref="appbar" />
      </v-row>
      <v-row>
        <v-layout row wrap class="mt-5">
          <v-flex xs24 md12>
            <v-row class="mt-10 cart-title">
              <v-col class="mt-5">
                <nuxt-link :to="{ path: 'dashboard' }">Home</nuxt-link>|
                <nuxt-link :to="{ path: 'myCart' }">My Cart</nuxt-link>
              </v-col>
            </v-row>
            <v-row>
              <v-card class="mx-auto cart-card" outlined>
                <v-layout class="mb-5">
                  <v-flex md2>
                    <!-- <v-img class="cart-image ml-5 mt-2" :src="item.books.image"></v-img> -->
                  </v-flex>
                  <v-flex md10>
                    <v-row class="ml-5 mt-1">
                      <v-list-item>title</v-list-item>
                      <v-list-item>author</v-list-item>
                      <v-list-item>price</v-list-item>
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
                <v-divider class="mt-5" />
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
export default class MyCart extends Vue {}
</script>

<style lang="scss">
@import url("../assets/scss/myCart.scss");
</style>



