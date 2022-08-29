import VueCompositionApi from '@vue/composition-api';
import Vue from 'vue'
import App from './App.vue'

Vue.use(VueCompositionApi);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
