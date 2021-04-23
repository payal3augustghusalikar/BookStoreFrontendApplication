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
//import userData from './*.json' ;

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



 describe('login.vue', () => {
     let wrapper: any;
     beforeEach(() => {
         const localVue = createLocalVue();
         localVue.use(Vuetify);
       //  localVue.use(VueMaterial);
         wrapper = shallowMount(login, localVue);
         console.log('localVue', wrapper);
     });
 
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

    it('inGivenPassword_properLastNameandhavingSymbol_shouldEvaluateTrue', () => {
        wrapper.vm.password = user.properPassword.password;

        expect((wrapper.vm).password).toBe(user.properPassword.password)
    });

    
    it('inGivenPassword_properLastNameandhavingSymbol_shouldEvaluateFalse', () => {
        wrapper.vm.password = user.properPassword.password;

        expect((wrapper.vm).password).toBe(user.properPassword.password)
    });




 });
