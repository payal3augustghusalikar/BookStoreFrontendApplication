

import { createLocalVue, shallowMount } from '@vue/test-utils';
//import fundooTitle from '../../src/components/fundooTitle.vue';
import loginorsignup from '../../pages/loginorsignup.vue';
import Vuetify from 'vuetify';
//import VueMaterial from 'vue-material';
//import userData from './*.json' ;
import Login from '../../pages/login.vue';
import SignUp from '../../pages/signUp.vue';


describe('loginOrSignUp.vue', () => {
    let wrapper: any;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        //  localVue.use(VueMaterial);
        wrapper = shallowMount(loginorsignup, localVue);
       
    });




    it('check if child SignUp exists', () => {
        //expect(wrapper.find(SignUp)).toBe(true)
        expect(wrapper.contains(SignUp)).toBe(true);
    });


    it('check if child Login exists', () => {
        //expect(wrapper.find(SignUp)).toBe(true)
        expect(wrapper.contains(Login)).toBe(true);

    })
})