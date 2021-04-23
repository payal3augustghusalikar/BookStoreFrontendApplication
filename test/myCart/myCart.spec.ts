
import MyCart from "../../pages/myCart.vue";
import Appbar from "../../components/appbar.vue";
import OrderSummary from "../../components/orderSummary.vue";
import AddressDetails from "../../components/addressDetails.vue";

import { createLocalVue, shallowMount } from '@vue/test-utils';

import Vuetify from 'vuetify';


import addToBag from '../../pages/addToBag.vue';

describe('MyCart.vue', () => {
    let wrapper: any;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
      //  localVue.use(VueMaterial);
        wrapper = shallowMount(MyCart, localVue);

    });




it('check if child AddressDetails exists', () => {
   //expect(wrapper.find(SignUp)).toBe(true)
   expect(wrapper.contains(AddressDetails)).toBe(true);
 });


it('check if child OrderSummary exists', () => {
   //expect(wrapper.find(SignUp)).toBe(true)
   expect(wrapper.contains(OrderSummary)).toBe(true);
 
})

it('check if child Appbar exists', () => {
    //expect(wrapper.find(SignUp)).toBe(true)
    expect(wrapper.contains(Appbar)).toBe(true);
  
 })
})