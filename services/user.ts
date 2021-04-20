/**
 * @module       services
 * @file         user.js
 * @description  holds the methods calling from pages
 * @author       Payal Ghusalikar <payal.ghusalikar9@gmail.com>
*  @since        05/03/2021  
-----------------------------------------------------------------------------------------------*/

import apiCall from './apiCall';
export default {
    /**
     * @description takes the user input and call the axios post method and return response to register page
     * @param {*} data holds the userinput 
     * @returns the response from api calling methods
     */
    registerUser(data: object) {
        const userData = {
            userInput: data,
            endPoint: '/user-register'
        };
        return apiCall.post(userData);
    },

    /**
     * @description takes the user input and call the axios p[ost method and return response to login page
     * @param {*} data holds the userinput 
     * @returns the response from api calling methods
     */
    loginUser(data: any) {

        const userData = {
            userInput: data,
            endPoint: '/user-login'
        };
        return apiCall.post(userData);
    },



    getBooks() {
        console.log("books")
        const noteData = {
            endPoint: '/books'
        };
        return apiCall.get(noteData);
    }
}