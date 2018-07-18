// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import * as firebase from 'firebase';
import Buefy from 'buefy';

import SuiVue from 'semantic-ui-vue';
import 'buefy/lib/buefy.css';

import Vue from 'vue';
import App from './App';
import router from './router';
import {
  store,
} from './store';


Vue.use(SuiVue);
Vue.use(Buefy);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDS_1RBjtJc8vVyXLgZZnbfBxojD_XExjI',
      authDomain: 'exp02-takeoff.firebaseapp.com',
      databaseURL: 'https://exp02-takeoff.firebaseio.com',
      projectId: 'exp02-takeoff',
      storageBucket: 'exp02-takeoff.appspot.com',
    });
  },
});
