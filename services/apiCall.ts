/**
 * @module       services
 * @file         apiCall.js
 * @description  holds the methods calling from user.js
 * @author       Payal Ghusalikar <payal.ghusalikar9@gmail.com>
*  @since        05/03/2021  
-----------------------------------------------------------------------------------------------*/

import axios from 'axios';
//axios.defaults.baseURL = 'http://localhost:4000/';
axios.defaults.baseURL = process.env.VUE_BASEURL;
//const commonHeaders = 'Bearer ' + sessionStorage.getItem('token');

export default {
//commonHeaders : any  = 'Bearer ' + sessionStorage.getItem('token');

//commonHeaders: any ='Bearer ' + sessionStorage.getItem('token');

    /**
     * @description takes the data from user.js file and call the axios post method and return response to user.js
     * @param {*} data holds the userinput and endPoint
     * @returns the response from axios methods
     */
    post(userData:any) {
      console.log("apicall")
        return axios.post(userData.endPoint, userData.userInput);
    },


    
    /**
     * @description get all notes from database and return responce to caller file
     * @returns the response from axios methods
     */
     get(userData: any) {
       console.log("call")
      return axios.get(userData.endPoint, {
          headers: {
              Authorization: 'Bearer ' + sessionStorage.getItem('token')

          },
      });
  },

}