var counterMax = Vue.extend({

template: '<p></p>',

data: function(){
  return {
  }
},
props: {
    counterMax: Object,
},
}

// Register the vue component globally, if you want to:
Vue.component('survey', counterMax);
