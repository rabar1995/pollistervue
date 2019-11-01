import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import './plugins/element.js'



Vue.use(Axios)

// Vue.config.productionTip = false

const  accessToken  =  localStorage.getItem('access_token')

if (accessToken) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] =  accessToken
}

Axios.interceptors.response.use(function (response) {

  return response;
}, function (error) {
  
  // if(error.request.status >=400 || error.request.status<500)
  // {
    
    
    // }
// }
  alert(error.request.status);

  return Promise.reject(error);
});


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
