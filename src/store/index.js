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
        userItems: {
            completed: [{
                name: 'The Book of Mormon',
                type: 'Book',
                progress: 'Completed',
                dateStarted: new Date(),
                dateCompleted: new Date(),
            }],
            inprogress: [{
                name: 'The Bible',
                type: 'Book',
                progress: 'Completed',
                dateStarted: new Date(),
                dateCompleted: new Date(),
            }],
            onhold: [{
                name: 'Teletubbies',
                type: 'TV Show',
                progress: 'Completed',
                dateStarted: new Date(),
                dateCompleted: new Date(),
            }],
            dropped: [{
                name: 'Van Helsing',
                type: 'Movie',
                progress: 'Completed',
                dateStarted: new Date(),
                dateCompleted: new Date(),
            }], //hmm idk if this is gonna be different than 'onhold'
            future: [{
                name: 'Peter Pan',
                type: 'Movie',
                progress: 'Completed',
                dateStarted: new Date(),
                dateCompleted: new Date(),
            }] 
        }
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
        },
        setItem(state, payload) {
            //accepts {item(s), list}
            console.dir(payload)
            state.userItems[payload.list].push(payload.items)
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
        },

        createItem({commit}, payload){
            console.dir(payload);
            commit('setItem', {items: payload.items, list: payload.list})
        }
    },
    
    getters: {
        user(state) {
            return state.user
        },
        userItems(state){
            return state.userItems
        }
    }

})

