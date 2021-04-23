import { Component, Vue } from "nuxt-property-decorator";

import SnackbarNotify from "../../components/snackbarNotify.vue";
import Books from "../../components/books.vue";
import Appbar from "../../components/appbar.vue";


import { createLocalVue, shallowMount } from '@vue/test-utils';

import Vuetify from 'vuetify';


import dashboard from '../../pages/dashboard.vue';

describe('Appbar.vue', () => {
    let wrapper: any;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
      //  localVue.use(VueMaterial);
        wrapper = shallowMount(Appbar, localVue);
        console.log('dashboard', wrapper);
    });


    // it('check if CheckoutOrder event emits', () => {
    //     wrapper.vm.$emit('CheckoutOrder')
    //     expect(wrapper.emitted().CheckoutOrder).toBeTruthy()
    // })

    it('check if text Booksrenders', () => {
       expect(wrapper.text()).toContain('Books')
    })

it('check if child SnackbarNotify exists', () => {
   //expect(wrapper.find(SignUp)).toBe(true)
   expect(wrapper.contains(SnackbarNotify)).toBe(true);
 });

 it('check if title name renders', () => {
    expect(wrapper.text()).toContain('BookStore')
})


// it('check if child Appbar exists', () => {
//     //expect(wrapper.find(SignUp)).toBe(true)
//     expect(wrapper.contains(Appbar)).toBe(true);
  
//  })
})