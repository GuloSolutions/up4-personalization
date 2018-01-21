import Vue from 'vue';
import VueFormWizard from 'vue-form-wizard';
import VueFormGenerator from 'vue-form-generator';
import axios from 'axios';


Vue.use(VueFormWizard)
Vue.use(VueFormGenerator)
Vue.config.devtools = false;
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

var vm = new Vue({
 el: '#survey-social-public',
 data:{
   counter: 1,
   counterMax: 0,
   model:{
    age: null,
    gender: null,
    travels_often: null,
    has_children: null,
    exercises_often: null,
   },
   formOptions: {
    validationErrorClass: "has-error",
    validationSuccessClass: "has-success",
    validateAfterChanged: true
   },
   ageTabSchema:{
     fields:[{
        type: "radios",
        label: "How old are you?",
        model: "age",
        required:true,
        values: [
          "under 24",
          "24-39",
          "40+"
        ],
        validator: VueFormGenerator.validators.required,
        styleClasses:'col-xs-6'
     },
     ]
   },
   genderTabSchema:{
     fields:[
     {
        type: "radios",
        label: "Are you a woman?",
        model: "gender",
        required:true,
        values: [
          "yes",
          "no",
          "Prefer not to say"
        ],
        validator: VueFormGenerator.validators.required,
        styleClasses:'col-xs-9'
     },
     ]
   },
   travelTabSchema:{
     fields:[
     {
        type: "radios",
        label: "Do you travel often?",
        model: "travels_often",
        required:true,
        values: [
          "yes",
          "no"
        ],
        validator: VueFormGenerator.validators.required,
        styleClasses:'col-xs-9'
     },

     ]
   },
   childrenTabSchema:{
     fields:[
     {
        type: "radios",
        label: "Do you have children?",
        model: "has_children",
        required:true,
        values: [
          "yes",
          "no"
        ],
        validator: VueFormGenerator.validators.required,
        styleClasses:'col-xs-9'
     },
     ]
   },
   exerciseTabSchema:{
     fields:[
     {
        type: "radios",
        label: "Do you exercise often?",
        model: "exercises_often",
        required:true,
        values: [
          "yes",
          "no"
        ],
        validator: VueFormGenerator.validators.required,
        styleClasses:'col-xs-9'
     },
     ]
   },
    counterMax: document.querySelectorAll(' ul.wizard-nav.wizard-nav-pills li').length,
 },
 methods: {
  onComplete: function() {

var params = new URLSearchParams();

if (this.model.age === "under 24"){
    this.model.age = 20;
}

if (this.model.age === "24-39"){
    this.model.age = 32;
}

if (this.model.age === "40+"){
    this.model.age = 40;
}

if (this.model.gender === "yes"){
    this.model.gender = "female";
} else if (this.model.gender === "no") {
    this.model.gender = "male";
} else {
  this.model.gender = NULL;
}

if (this.model.has_children === "yes"){
    this.model.has_children = 1;
} else {
    this.model.has_children = 0;
}

if (this.model.travels_often == "yes"){
    this.model.travels_often = 1;
} else {
    this.model.has_children = 0;
}

if (this.model.exercises_often === "yes"){
    this.model.exercises_often = 1;
} else {
    this.model.has_children = 0;
}


params.append('action', 'survey_receiver');
params.append('response[age]', this.model.age);
params.append('response[gender]', this.model.gender);
params.append('response[has_children]', this.model.has_children);
params.append('response[travels_often]', this.model.travels_often);
params.append('response[exercises_often]', this.model.exercises_often);

axios.post(ajax_receiver.ajax_url,
    params,
    {
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }

  )
  .then(function (response) {
        window.location = window.location.href;
  })
  .catch(function (error) {
    console.log(error);
  });

   },
   validateAgeTab: function(){
     return this.$refs.ageTabForm.validate();
   },
   validateGenderTab: function(){
     return this.$refs.genderTabForm.validate();
   },
      validateTravelTab: function(){
     return this.$refs.travelTabForm.validate();
   },
      validateChildrenTab: function(){
     return this.$refs.childrenTabForm.validate();
   },
      validateExerciseTab: function(){
     return this.$refs.exerciseTabForm.validate();
   },
    incrementCounter: function(tabIndex, activeTabIndex, prevIndex, nextIndex){
      this.counter = activeTabIndex + 1;
      this.$forceUpdate();
      return [this.counter, this.counterMax];
   },

   prettyJSON: function(json) {
            if (json) {
                json = JSON.stringify(json, undefined, 4);
                json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
                return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
                    var cls = 'number';
                    if (/^"/.test(match)) {
                        if (/:$/.test(match)) {
                            cls = 'key';
                        } else {
                            cls = 'string';
                        }
                    } else if (/true|false/.test(match)) {
                        cls = 'boolean';
                    } else if (/null/.test(match)) {
                        cls = 'null';
                    }
                    return '<span class="' + cls + '">' + match + '</span>';
                });
            }
        }
  },

  mounted: function() {
      this.$nextTick(function () {
      this.counterMax = document.querySelectorAll(' ul.wizard-nav.wizard-nav-pills li').length;
      document.getElementById('survey-social-public').style.display = "none";

  })
}

})
