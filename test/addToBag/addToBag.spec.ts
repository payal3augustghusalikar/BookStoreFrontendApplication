import { Component, Vue } from "nuxt-property-decorator";

import Snackbar from "../../components/snackbarNotify.vue";
import MyCart from "../../pages/myCart.vue";
import Appbar from "../../components/appbar.vue";


import { createLocalVue, shallowMount } from '@vue/test-utils';

import Vuetify from 'vuetify';


import addToBag from '../../pages/addToBag.vue';

describe('addToBag.vue', () => {
    let wrapper: any;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
      //  localVue.use(VueMaterial);
        wrapper = shallowMount(addToBag, localVue);
        
    });




it('check if child Snackbar exists', () => {
   //expect(wrapper.find(SignUp)).toBe(true)
   expect(wrapper.contains(Snackbar)).toBe(true);
 });


it('check if child MyCart exists', () => {
   //expect(wrapper.find(SignUp)).toBe(true)
   expect(wrapper.contains(MyCart)).toBe(true);
 
})

it('check if child Appbar exists', () => {
    //expect(wrapper.find(SignUp)).toBe(true)
    expect(wrapper.contains(Appbar)).toBe(true);
  
 })
})