import { Component, Vue } from "nuxt-property-decorator";

import SnackbarNotify from "../../components/snackbarNotify.vue";
import Books from "../../components/books.vue";
import Appbar from "../../components/appbar.vue";


import { createLocalVue, shallowMount } from '@vue/test-utils';

import Vuetify from 'vuetify';


import dashboard from '../../pages/dashboard.vue';

describe('dashboard.vue', () => {
    let wrapper: any;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
      //  localVue.use(VueMaterial);
        wrapper = shallowMount(dashboard, localVue);
       
    });




it('check if child SnackbarNotify exists', () => {
   //expect(wrapper.find(SignUp)).toBe(true)
   expect(wrapper.contains(SnackbarNotify)).toBe(true);
 });


it('check if child Books exists', () => {
   //expect(wrapper.find(SignUp)).toBe(true)
   expect(wrapper.contains(Books)).toBe(true);
 
})

it('check if child Appbar exists', () => {
    //expect(wrapper.find(SignUp)).toBe(true)
    expect(wrapper.contains(Appbar)).toBe(true);
  
 })
})