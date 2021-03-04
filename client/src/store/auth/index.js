import axios from "axios";

export default {
    state: {
        errorMessage: null
    },
    getters: {
      getErrorMessage: (state) => state.errorMessage
    },
    mutations: {
        errorMessage(state, payload) {
            state.errorMessage = payload
        }
    },
    actions: {
        auth({commit}, user) {
            return new Promise((resolve, reject) => {
                axios({url: 'http://localhost:8080/auth', data: user, method: 'POST'})
                    .then(response => {
                        const token = response.data.access;
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