
<template>
      <v-card class="mx-auto address-card mt-5" outlined v-show="isShow">
          <v-card-title> Address Details </v-card-title>
          <v-card-text>
        <v-row class="mt-5">
            <v-text-field label="Full Name" v-model="fullName" dense outlined  :rules="[rules.required]" class="mr-5 ml-5"></v-text-field>
            <v-text-field label="Mobile Number" v-model="mobileNumber" dense outlined :rules="[rules.required]" class="mr-5 mob-state-field"></v-text-field>
        </v-row>
        <v-row class="ml-2">1.WORK</v-row>
        <v-row class="mt-5">
            <v-text-field label="Address" v-model="address" dense outlined :rules="[rules.required]" class="mr-5 ml-5"></v-text-field>
        </v-row>
        <v-row class="mt-5">
            <v-text-field label="city/town" v-model="city" dense outlined :rules="[rules.required]" class="mr-5 ml-5"></v-text-field>
            <v-text-field label="state" v-model="state" dense outlined :rules="[rules.required]" class="mr-5 mob-state-field"></v-text-field>
        </v-row>
          </v-card-text>
     </v-card>
</template>

<script lang="ts">
import { Prop, Vue, Component } from "vue-property-decorator";
@Component({})
export default class AddressDetails extends Vue{
    private fullName: string = "";
    private mobileNumber: string = "";
    private address: string = "";
    private city: string = "";
    private state: string = ""; 

    rules = {
    required: (v: string) => !!v || "This field is required"
    };

    @Prop() private isShow: boolean=false;
    public showDetails = () => {
        this.isShow = !this.isShow;
    }
}
</script>


<style lang="scss" scoped >
@import url("../assets/scss/addressDetail.scss");
</style>