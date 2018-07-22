/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: "user1",
        loading: false,
        error: null,
    },

    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setUser(state, payload) {
            state.user = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        clearError(state) {
            state.error = null
        },
        clearUser(state) {
            state.user = null
        }
        
    },

    actions: {
        signUserUp({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(
                user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.user.uid,
                        email: user.user.email,
                    }
                    commit('setUser', newUser)
                }
            ).catch(
                error => {
                commit('setLoading', false)
                commit('setError', error)
                console.log(error)
                }
            )
        },

        signUserIn({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(
                user => {
                    commit('setLoading', false) //I guess set loading is used for api loading

                    const newUser = {
                        id: user.user.uid,
                        email: user.user.email,
                    }
                    commit('setUser', newUser)
                }
            ).catch(
                error=> {
                    commit('setLoading', false)
                    commit('setError', error)
                    console.log(error)
                }
            )
        }
    },
    
    getters: {
        user(state) {
            return state.user
        }
    }

})

