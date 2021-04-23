import { shallowMount, createLocalVue } from '@vue/test-utils';
import OrderSummary from '../../components/orderSummary.vue';

import Vuetify from 'vuetify';
let wrapper: any

beforeEach(() => {
    const localVue = createLocalVue()
    localVue.use(Vuetify)
    wrapper = shallowMount(OrderSummary, {
        localVue
    })
})

describe('OrderSummary', () => {
    it('check if CheckoutOrder event emits', () => {
        wrapper.vm.$emit('CheckoutOrder')
        expect(wrapper.emitted().CheckoutOrder).toBeTruthy()
    })

    it('check if text Order Summary renders', () => {
       expect(wrapper.text()).toContain('Order Summary')
    })

    it('check if text Checkout', () => {
        expect(wrapper.text()).toContain('Checkout')
     })
})


