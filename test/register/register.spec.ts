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
//import userData from '@/test/register/register-data.json' ;



const user: any = {
    "registerUserProperData": {
        "firstName": "Payal",
        "lastName": "Payal",
        "emailId": "ghusalikarpayal58@gmail.com",
        "password": "AAAAAAA",
        "confirmPassword": "AAAAAAA"
    },

    "userWithEmptyFirstName": {
        "firstName": "",
        "lastName": "Payal",
        "emailId": "ghusalikarapayal2@gmail.com",
        "password": "AAAAAAA",
        "confirmPassword": "AAAAAAA"
    },

    "userWithEmptyLastName": {
        "firstName": "Payal",
        "lastName": "",
        "emailId": "ghusalikarapayal2@gmail.com",
        "password": "AAAAAAA",
        "confirmPassword": "AAAAAAA"
    },
    "userWithImproperEmail": {
        "firstName": "Payal",
        "lastName": "Payal",
        "emailId": "ghusalikarapayal2gmail.com",
        "password": "AAAAAAA",
        "confirmPassword": "AAAAAAA"
    },

    "emailWithoutAtsigninEmail": {
        "emailId": "ghusalikarapayal2gmail.com",

    },
    "properEmail":
    {
        "emailId": "ghusalikarapayal2@gmail.com",

    },
    "emailWithoutcom": {
        "emailId": "ghusalikarapayal2gmail",

    },
    "havingSymbol" : {
        "firstName": "P%$###$$$#$$",
    },
    "properFirstName":
    {
        "firstName": "Payal"
    },
    "userWithEmptyEmail": {
        "firstName": "Payal",
        "lastName": "Payal",
        "emailId": "",
        "password": "AAAAAAA",
        "confirmPassword": "AAAAAAA"
    },
    "userWithThan3CharInName": {
        "firstName": "Pa",
        "lastName": "Payal",
        "emailId": "ghusalikarapayal2@gmail.com",
        "password": "AAAAAAA",
        "confirmPassword": "AAAAAAA"
    },
    "PasswordAndConfirmPasswordNotSame": {
        "firstName": "Pay",
        "lastName": "Payal",
        "emailId": "ghusalikarapayal5555@gmail.com",
        "password": "AAAAAAA",
        "confirmPassword": ""
    },
    "passwordWithLessThan8char" : {
        "password": "ppppppp"
    },
    "properPassword" : { "password" : "Payaljkkkjjj58544"}
}



describe('signUp.vue', () => {
    let wrapper: any;
    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(Vuetify);
        //  localVue.use(VueMaterial);
        wrapper = shallowMount(signUp, localVue);
        console.log('localVue', wrapper);
    })

    it('inGivenEmail_whenImproper_shouldEvaluatefalse', () => {
        wrapper.vm.email = user.userWithImproperEmail.emailId;

        expect((wrapper.vm).email).toBe(user.userWithImproperEmail.emailId)
    });

    it('inGivenEmail_whenEmpty_shouldEvaluatefalse', () => {
        wrapper.vm.email = user.userWithEmptyEmail.emailId;

        expect((wrapper.vm).email).toBe(user.userWithEmptyEmail.emailId)
    });

    it('inGivenEmail_whenEmpty_shouldEvaluatefalse', () => {
        wrapper.vm.email = user.emailWithoutAtsigninEmail.emailId;

        expect((wrapper.vm).email).toBe(user.emailWithoutAtsigninEmail.emailId)
    });
    it('inGivenEmail_whenEmpty_shouldEvaluatefalse', () => {
        wrapper.vm.email = user.emailWithoutcom.emailId;

        expect((wrapper.vm).email).toBe(user.emailWithoutcom.emailId)
    });

    it('inGivenEmail_whenProper_shouldEvaluatetrue', () => {
        wrapper.vm.email = user.properEmail.emailId;
        expect((wrapper.vm).email).toBe(user.properEmail.emailId)
    });



    it('inGivenfirstName_whenEmptyFirst_shouldEvaluatefalse', () => {
        wrapper.vm.firstName = user.userWithEmptyFirstName.firstName;

        expect((wrapper.vm).firstName).toBe(user.userWithEmptyFirstName.firstName)
    });


    it('inGivenfirstName_improperFirstName_shouldEvaluatefalse', () => {
        wrapper.vm.firstName = user.userWithThan3CharInName.firstName;

        expect((wrapper.vm).firstName).toBe(user.userWithThan3CharInName.firstName)
    });
    it('inGivenfirstName_improperFirstName_shouldEvaluatefalse', () => {
        wrapper.vm.firstName = user.userWithThan3CharInName.firstName;

        expect((wrapper.vm).firstName).toBe(user.userWithThan3CharInName.firstName)
    });


    it('inGivenfirstName_improperFirstNameandhavingSymbol_shouldEvaluatefalse', () => {
        wrapper.vm.firstName = user.userWithThan3CharInName.firstName;

        expect((wrapper.vm).firstName).toBe(user.userWithThan3CharInName.firstName)
    });

    
    it('inGivenfirstName_properFirstNameandhavingSymbol_shouldEvaluateTrue', () => {
        wrapper.vm.firstName = user.properFirstName.firstName;

        expect((wrapper.vm).firstName).toBe(user.properFirstName.firstName)
    });



    it('inGivenfirstName_whenEmptyLast_shouldEvaluatefalse', () => {
        wrapper.vm.lastName = user.userWithEmptyFirstName.firstName;

        expect((wrapper.vm).lastName).toBe(user.userWithEmptyFirstName.firstName)
    });


    it('inGivenfirstName_improperLastName_shouldEvaluatefalse', () => {
        wrapper.vm.lastName = user.userWithThan3CharInName.firstName;

        expect((wrapper.vm).lastName).toBe(user.userWithThan3CharInName.firstName)
    });
    it('inGivenfirstName_improperLastName_shouldEvaluatefalse', () => {
        wrapper.vm.lastName = user.userWithThan3CharInName.firstName;

        expect((wrapper.vm).lastName).toBe(user.userWithThan3CharInName.firstName)
    });


    it('inGivenfirstName_improperLastNameandhavingSymbol_shouldEvaluatefalse', () => {
        wrapper.vm.lastName = user.userWithThan3CharInName.firstName;

        expect((wrapper.vm).lastName).toBe(user.userWithThan3CharInName.firstName)
    });

    
    it('inGivenfirstName_properLastNameandhavingSymbol_shouldEvaluateTrue', () => {
        wrapper.vm.lastName = user.properFirstName.firstName;

        expect((wrapper.vm).lastName).toBe(user.properFirstName.firstName)
    });

 

    it('inGivenPassword_properLastNameandhavingSymbol_shouldEvaluateTrue', () => {
        wrapper.vm.password = user.properPassword.password;

        expect((wrapper.vm).password).toBe(user.properPassword.password)
    });



    
    it('inGivenPassword_properLastNameandhavingSymbol_shouldEvaluateFalse', () => {
        wrapper.vm.password = user.properPassword.password;

        expect((wrapper.vm).password).toBe(user.properPassword.password)
    });




    it('inGivenCPassword_properLastNameandhavingSymbol_shouldEvaluateTrue', () => {
        wrapper.vm.confirmPassword = user.properPassword.password;

        expect((wrapper.vm).confirmPassword).toBe(user.properPassword.password)
    });

    
    it('inGivenCPassword_properLastNameandhavingSymbol_shouldEvaluateFalse', () => {
        wrapper.vm.confirmPassword = user.properPassword.password;

        expect((wrapper.vm).confirmPassword).toBe(user.properPassword.password)
    });
})