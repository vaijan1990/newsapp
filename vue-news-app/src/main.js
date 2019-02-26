import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// add this two import statements
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created() {
    AOS.init({ disable: "phone" });  }, // add this to initialize AOS
  components: { App },
  template: '<App/>'
})
