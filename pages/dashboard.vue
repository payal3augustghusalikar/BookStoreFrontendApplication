
<template>
  <v-flex>
    <div id="app" >
      <v-app id="inspire" >
        <v-card class="mx-auto overflow-hidden topBar">
          <v-row>
            <v-col>
              <v-app-bar color="white" class="main-bar" fixed elevation="1">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

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
                <v-spacer> </v-spacer>
                <md-avatar class="md-avatar-icon">P</md-avatar>
              </v-app-bar>
            </v-col>
          </v-row>
        </v-card>
      </v-app>
    </div>
  </v-flex>
</template>



<style lang="scss">
@import url("../assets/scss/dashboard.scss");
</style>