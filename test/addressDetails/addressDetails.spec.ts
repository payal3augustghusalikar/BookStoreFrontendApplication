import { shallowMount, createLocalVue } from '@vue/test-utils';
import AddressDetails from '../../components/addressDetails.vue';
import Vuetify from 'vuetify';

const factory = (values = {}) => {
    return shallowMount(AddressDetails, {
        data() {
            return {
                ...values
            }
        }
    })
}

describe('AddressDetails', () => {
    it('renders an error when name is empty', () => {
        const wrapper = factory({ fullName: '' })
        expect((wrapper.vm as any).fullName).toBe('')
    })
    it('renders an error when mobileNumber is empty', () => {
        const wrapper = factory({ mobileNumber: '' })
        expect((wrapper.vm as any).mobileNumber).toBe('')
    })
    it('renders an error when address is empty', () => {
        const wrapper = factory({ address: '' })
        expect((wrapper.vm as any).address).toBe('')
    })
    it('renders an error when city is empty', () => {
        const wrapper = factory({ city: '' })
        expect((wrapper.vm as any).city).toBe('')
    })
    it('renders an error when state is empty', () => {
        const wrapper = factory({ state: '' })
        expect((wrapper.vm as any).state).toBe('')
    })
})