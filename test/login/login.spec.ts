/*************************************************************************
 *
 *
 * @file : login.spec.js
 * purpose : to test login component
 * @author : payal Ghusalikar<payalghiusalikar9@gmail.com>
 * @version : 1.0
 * @since : 05/03/2021
 *
 **************************************************************************/

 import { createLocalVue, shallowMount } from '@vue/test-utils';
 //import fundooTitle from '../../src/components/fundooTitle.vue';
 import login from '../../pages/login.vue';
 import Vuetify from 'vuetify';
 //import VueMaterial from 'vue-material';
import userData from './login.json' ;


 describe('login.vue', () => {
     let wrapper: any;
     beforeEach(() => {
         const localVue = createLocalVue();
         localVue.use(Vuetify);
       //  localVue.use(VueMaterial);
         wrapper = shallowMount(login, localVue);
       
     });
 
     it('inGivenEmail_whenImproper_shouldEvaluatefalse', () => {
        wrapper.vm.email = userData.user.userWithImproperEmail.emailId;

        expect((wrapper.vm).email).toBe(userData.user.userWithImproperEmail.emailId)
    });

    it('inGivenEmail_whenEmpty_shouldEvaluatefalse', () => {
        wrapper.vm.email = userData.user.userWithEmptyEmail.emailId;

        expect((wrapper.vm).email).toBe(userData.user.userWithEmptyEmail.emailId)
    });

    it('inGivenEmail_whenEmpty_shouldEvaluatefalse', () => {
        wrapper.vm.email = userData.user.emailWithoutAtsigninEmail.emailId;

        expect((wrapper.vm).email).toBe(userData.user.emailWithoutAtsigninEmail.emailId)
    });
    it('inGivenEmail_whenEmpty_shouldEvaluatefalse', () => {
        wrapper.vm.email = userData.user.emailWithoutcom.emailId;

        expect((wrapper.vm).email).toBe(userData.user.emailWithoutcom.emailId)
    });

    it('inGivenPassword_properLastNameandhavingSymbol_shouldEvaluateTrue', () => {
        wrapper.vm.password = userData.user.properPassword.password;

        expect((wrapper.vm).password).toBe(userData.user.properPassword.password)
    });

    
    it('inGivenPassword_properLastNameandhavingSymbol_shouldEvaluateFalse', () => {
        wrapper.vm.password = userData.user.properPassword.password;

        expect((wrapper.vm).password).toBe(userData.user.properPassword.password)
    });




 });
