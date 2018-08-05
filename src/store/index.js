/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: null,
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
        signUserUp({commit, state}, payload) {
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


                    firebase.firestore().collection("users").add({
                        newUser
                    }).then(function (docRef) {
                        console.log("Document written with ID: ", docRef.id);
                    })
                    .catch(function (error) {
                        console.error("Error adding document: ", error);
                    });



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

        createItem({commit, state}, payload){
            console.dir(payload);
            commit('setItem', {items: payload.items, list: payload.list});
            payload.user=state.user
            firebase.firestore().collection("items").doc("types").collection(payload.items.type).doc().set({
                payload
            }, { merge: true }).then(function() {
                console.log("Document successfully written!");
            }).catch(function(error) {
                commit('setError', payload)
            })
        },

        logError({commit}, payload){
            commit('setError', payload)
        }
    },
    
    getters: {
        user(state) {
            return state.user
        },
        userItems(state){
            return state.userItems
        },
        error(state) {
            return state.error
        }   
    }

})

