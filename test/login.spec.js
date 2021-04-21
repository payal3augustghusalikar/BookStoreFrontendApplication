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
 import login from '../pages/login.vue';
 import Vuetify from 'vuetify';
 //import VueMaterial from 'vue-material';
 
 describe('login.vue', () => {
     let wrapper;
     beforeEach(() => {
         const localVue = createLocalVue();
         localVue.use(Vuetify);
       //  localVue.use(VueMaterial);
         wrapper = shallowMount(login, localVue);
         console.log('localVue', wrapper);
     });
 
     it('givenPage_ifFundooTitleIsPresent_shouldReturnTrue', () => {
         expect(wrapper.contains(fundooTitle)).toBe(true);
     });
 
     // Inspect the raw component options
     it('has data', () => {
         expect(typeof login.data).toBe('function');
     });
 
     it('has a button', () => {
         expect(wrapper.contains('md-button')).toBe(true);
     });
  it('inGivenEmail_whenProper_shouldEvaluateTrue', () => {
         wrapper.vm.firstName = 'Payal';

         expect((wrapper.vm).firstName).toBe(wrapper.vm.firstName)
     });
 
 
     it('inGivenEmail_whenProper_shouldEvaluateTrue', () => {
         wrapper.vm.email = 'payalghusalikar9655@gmail.com';
         expect((wrapper.vm).email).toBe(wrapper.form.email)
     });
 
    //  it('givenEmailId_ifEmpty_shouldEvaluateFalse', () => {
    //      wrapper.vm.form.email = '';
    //      expect(wrapper.vm.$v.form.email.required).toBe(false);
    //  });
 
    //  it('inGivenEmail_whenImproper_shouldEvaluateFalse', () => {
    //      wrapper.vm.form.email = ',,.,.,.@gmail.com';
    //      expect(wrapper.vm.$v.form.email.email).toBe(false);
    //  });
 
    //  it('inGivenEmail_when"@"isNotPresent_shouldEvaluateFalse', () => {
    //      wrapper.vm.form.email = 'payalghusalikar9gmail.com';
    //      expect(wrapper.vm.$v.form.email.email).toBe(false);
    //  });
 
    //  it('inGivenEmail_when".com"NotPresent_shouldEvaluateFalse', () => {
    //      wrapper.vm.form.email = 'payalghusalikar9gmail';
    //      expect(wrapper.vm.$v.form.email.email).toBe(false);
    //  });
 
    //  it('inGivenEmail_whenImproper_shouldEvaluateFalse', () => {
    //      wrapper.vm.form.email = 'pl123&&&';
    //      expect(wrapper.vm.$v.form.email.email).toBe(false);
    //  });
 
 
    //  it('inGivenPassword_whenNotPresent_shouldEvaluateFalse', () => {
    //      wrapper.vm.form.password = '';
    //      expect(wrapper.vm.$v.form.password.required).toBe(false);
    //  });
 
    //  it('inGivenPassword_whenGivenMoreThan6char_shouldEvaluate"$invalid"False', () => {
    //      wrapper.vm.form.password = 'AAAAAAAA';
    //      expect(wrapper.vm.$v.form.password.$invalid).toBe(false);
    //  });
 
    //  it('inGivenPassword_whenGivenLessThan3char_shouldEvaluate"$invalid"True', () => {
    //      wrapper.vm.form.password = 'AAAAA';
    //      expect(wrapper.vm.$v.form.password.$invalid).toBe(true);
    //  });
 
 
 });