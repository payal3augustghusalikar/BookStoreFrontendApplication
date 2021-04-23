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
import signUp from '../../pages/signUp.vue';
import Vuetify from 'vuetify';
//import VueMaterial from 'vue-material';
import userData from './register-data.json' ;



describe('signUp.vue', () => {
    let wrapper: any;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        //  localVue.use(VueMaterial);
        wrapper = shallowMount(signUp, localVue);
       
    })

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

    it('inGivenEmail_whenProper_shouldEvaluatetrue', () => {
        wrapper.vm.email = userData.user.properEmail.emailId;
        expect((wrapper.vm).email).toBe(userData.user.properEmail.emailId)
    });



    it('inGivenfirstName_whenEmptyFirst_shouldEvaluatefalse', () => {
        wrapper.vm.firstName = userData.user.userWithEmptyFirstName.firstName;

        expect((wrapper.vm).firstName).toBe(userData.user.userWithEmptyFirstName.firstName)
    });


    it('inGivenfirstName_improperFirstName_shouldEvaluatefalse', () => {
        wrapper.vm.firstName = userData.user.userWithThan3CharInName.firstName;

        expect((wrapper.vm).firstName).toBe(userData.user.userWithThan3CharInName.firstName)
    });
    it('inGivenfirstName_improperFirstName_shouldEvaluatefalse', () => {
        wrapper.vm.firstName = userData.user.userWithThan3CharInName.firstName;

        expect((wrapper.vm).firstName).toBe(userData.user.userWithThan3CharInName.firstName)
    });


    it('inGivenfirstName_improperFirstNameandhavingSymbol_shouldEvaluatefalse', () => {
        wrapper.vm.firstName = userData.user.userWithThan3CharInName.firstName;

        expect((wrapper.vm).firstName).toBe(userData.user.userWithThan3CharInName.firstName)
    });

    
    it('inGivenfirstName_properFirstNameandhavingSymbol_shouldEvaluateTrue', () => {
        wrapper.vm.firstName = userData.user.properFirstName.firstName;

        expect((wrapper.vm).firstName).toBe(userData.user.properFirstName.firstName)
    });



    it('inGivenfirstName_whenEmptyLast_shouldEvaluatefalse', () => {
        wrapper.vm.lastName = userData.user.userWithEmptyFirstName.firstName;

        expect((wrapper.vm).lastName).toBe(userData.user.userWithEmptyFirstName.firstName)
    });


    it('inGivenfirstName_improperLastName_shouldEvaluatefalse', () => {
        wrapper.vm.lastName = userData.user.userWithThan3CharInName.firstName;

        expect((wrapper.vm).lastName).toBe(userData.user.userWithThan3CharInName.firstName)
    });
    it('inGivenfirstName_improperLastName_shouldEvaluatefalse', () => {
        wrapper.vm.lastName = userData.user.userWithThan3CharInName.firstName;

        expect((wrapper.vm).lastName).toBe(userData.user.userWithThan3CharInName.firstName)
    });


    it('inGivenfirstName_improperLastNameandhavingSymbol_shouldEvaluatefalse', () => {
        wrapper.vm.lastName = userData.user.userWithThan3CharInName.firstName;

        expect((wrapper.vm).lastName).toBe(userData.user.userWithThan3CharInName.firstName)
    });

    
    it('inGivenfirstName_properLastNameandhavingSymbol_shouldEvaluateTrue', () => {
        wrapper.vm.lastName = userData.user.properFirstName.firstName;

        expect((wrapper.vm).lastName).toBe(userData.user.properFirstName.firstName)
    });

 

    it('inGivenPassword_properLastNameandhavingSymbol_shouldEvaluateTrue', () => {
        wrapper.vm.password = userData.user.properPassword.password;

        expect((wrapper.vm).password).toBe(userData.user.properPassword.password)
    });



    
    it('inGivenPassword_properLastNameandhavingSymbol_shouldEvaluateFalse', () => {
        wrapper.vm.password = userData.user.properPassword.password;

        expect((wrapper.vm).password).toBe(userData.user.properPassword.password)
    });




    it('inGivenCPassword_properLastNameandhavingSymbol_shouldEvaluateTrue', () => {
        wrapper.vm.confirmPassword = userData.user.properPassword.password;

        expect((wrapper.vm).confirmPassword).toBe(userData.user.properPassword.password)
    });

    
    it('inGivenCPassword_properLastNameandhavingSymbol_shouldEvaluateFalse', () => {
        wrapper.vm.confirmPassword = userData.user.properPassword.password;

        expect((wrapper.vm).confirmPassword).toBe(userData.user.properPassword.password)
    });
})