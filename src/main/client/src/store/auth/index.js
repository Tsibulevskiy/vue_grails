import axios from "axios";
import { XML } from "../../config/AuthXML";

export default {
    state: {
        errorMessage: null,
        status: '',
    },
    getters: {
      getErrorMessage: (state) => state.errorMessage,
      isLoggedIn: state => !!state.status,
    },
    mutations: {
        errorMessage(state, payload) {
            state.errorMessage = payload
        },
        status(state, payload) {
            state.status = payload
        }
    },
    actions: {
        auth({commit}, user) {
            return new Promise((resolve, reject) => {
                const data = XML(user)
                axios({url: 'http://localhost:8080/auth/auth/', data: data, method: 'POST', headers: {
                        "Access-Control-Allow-Origin": "*",
                        'Content-Type': 'application/json;charset=UTF-8'
                    }})
                    .then(response => {
                        commit('status', response.data.success)
                        const token = response.data.token;
                        localStorage.setItem('token', token);
                        resolve(response)
                    })
                    .catch(error => {
                        commit('errorMessage', error.response.data)
                        localStorage.removeItem('token')
                        reject(error)
                    })
            })

        }
    }
}