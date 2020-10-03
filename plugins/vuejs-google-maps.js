import Vue from 'vue'
import VueGoogleMap from 'vuejs-google-maps'

Vue.use(VueGoogleMap, {
  load: {
    apiKey: 'AIzaSyCi7HAyuIbYI4CctN_lXszWSvZfrRw65SM',
    libraries: ['places']
  }
})
