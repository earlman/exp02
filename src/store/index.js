/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: {
            id: null
        },
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
                        id:user.user.uid,
                        email: user.user.email,
                    }
                    commit('setUser', newUser)


                    firebase.firestore().collection("users").doc(newUser.id).set(
                        newUser
                    ).then(function (docRef) {
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
            payload.user=state.user;

            //a lot more needs to be done here, but it will probably have to start with implementing the movie database stuff.
            firebase.firestore().collection("items").doc("types").collection(payload.items.type).add({
                payload
            }).then(doc => {
                console.log("Document successfully written!");
                console.log(doc.id);
                firebase.firestore().collection("users").doc(payload.user.id).collection("items").doc(doc.id).set(payload);


            }).catch(function(error) {
                commit('setError', payload)
            });
            

        },

        logError({commit}, payload){
            commit('setError', payload)
        },

        clearError({commit}){
            commit('clearError')
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

