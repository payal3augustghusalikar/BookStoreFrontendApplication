import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
interface SnackbarData {
    text: string,
    color: string,
    timeout: number,
}
@Module({
    name: 'snackbar',
    stateFactory: true,
    namespaced: true
})



export default class Snackbar extends VuexModule {
    user: SnackbarData[] = []
    // state: {
    //     SnackbarData : {}
    // }

//commit : string = ""
@Action
   public showSnack({commit}: {commit : Function}, payload: any) {
        console.log('show snackbar');
        console.log('payload', payload);
        commit('SHOW_MESSAGE', payload);
    }

    @Mutation
    public SHOW_MESSAGE(state: any, payload: any) {
        console.log('payload', payload);
        console.log('payload.text', payload.text);
        state.text = payload.text;
    }

}
   


    //= {
    //     first: 'Preetish',
    //     last: 'HS',
    //     address1: '',
    //     address2: '',
    //     state: '',
    //     country: '',
    //     phone: 9000000009
    //   }
    //   get fullName(): string {
    //     return this.info.first + ' ' + this.info.last
    //   }
    



















// const state = {
//     text: '',
//     color: '',
//     timeout: '',
// };

// const actions = {
//     showSnack({ commit }, payload) {
//         console.log('show snackbar ');
//         console.log('payload', payload);
//         commit('SHOW_MESSAGE', payload);
//     },
// };

// const mutations = {

//     SHOW_MESSAGE(state, payload) {
//         console.log('payload', payload);
//         console.log('payload.text', payload.text);
//         state.text = payload.text;
//     },
// };

// export default {
//     state,
//     actions,
//     mutations
// };