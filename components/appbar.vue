<template>
  <div>
    <v-card class="mx-auto overflow-hidden topBar" color="brown">
      <v-row>
      
        <v-app-bar color="#A03037" class="main-bar" fixed elevation="1">
          <v-img
            class="mx-2 book-icon"
            max-height="60"
            max-width="60"
          
            contain
            :src="require('@/assets/scss/images/education.svg')"
          ></v-img>

        

          <div id="top-search-bar">
            <v-text-field
              label="Search"
              prepend-inner-icon="mdi-magnify"
              fixed
              filled
              autocomplete="off"
              dense
              solo
            ></v-text-field>
          </div>

          <v-bottom-navigation v-model="value" dense background-color="#A03037" dark>
            <v-btn>
              <span> Profile</span>

              <div class="avatar">
                <v-icon class="mr-8 account-icon">mdi-account-outline</v-icon>
              </div>
            </v-btn>
            <v-btn>
              <span>Cart</span>

              <v-img
                class="mx-2 supermarket-icon"
                max-height="25"
                max-width="25"
                contain
                :src="require('@/assets/scss/images/supermarket.svg')"
              ></v-img>
            </v-btn>
          </v-bottom-navigation>
        </v-app-bar>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import url("../assets/scss/appbar.scss");
</style>