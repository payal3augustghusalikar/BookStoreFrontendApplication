
<template>
<v-form ref="validation_check">
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
            label="name"
            v-model="text"
            :rules="[textValidation.required,textValidation.limit_lemgth]"
            counter="10"
          ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field
            label="phone"
            v-model="phone"
            :rules="[textValidation.required,textValidation.text_length2]"
            counter="7"
          ></v-text-field>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="6">
        <v-btn @click="submit">submit</v-btn>
        <span v-if="success">ConguratsValidation is no prob!!</span>
      </v-col>
    </v-row>
  </v-container>
</v-form>
</template>


<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
@Component({})
export default class form extends Vue {
  text: string = "";
  phone?: number;
  success:boolean=false;
  textValidation={
     required:(v:string)=>!!v||'this is required',
     limit_lemgth:(v:string)=>v.length<=10||'Name must be less than 10 characters',
     text_length2:(v:string)=>v.length<=10||'Phone number must be less than 7 characters',
  };


 
  submit(){
    if((this.$refs.validation_check as any).validate()){
        this.success=true
    }else{
        this.success=false;
    }
}
}
</script>
<style lang="scss" scoped>
@import url("../assets/scss/register.scss");
</style>





