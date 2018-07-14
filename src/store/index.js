/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import d from './'
Vue.use(Vuex)

export const store = new Vuex.store({
  modules: {
    d: d,
  }
})
