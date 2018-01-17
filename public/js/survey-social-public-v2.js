import Vue from 'vue';
import VueFormWizard from 'vue-form-wizard';
import VueFormGenerator from 'vue-form-generator';
import axios from 'axios';

Vue.use(VueFormWizard)
Vue.use(VueFormGenerator)
Vue.prototype.$http = axios;
new Vue({
 el: '#app',
 data:{
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
   firstTabSchema:{
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
   secondTabSchema:{
     fields:[
     {
        type: "radios",
        label: "Are you a woman?",
        model: "gender",
        'prop': "diaabled",
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
   thirdTabSchema:{
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
   fourthTabSchema:{
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
   fifthTabSchema:{
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
 },
 methods: {
  onComplete: function() {

var params = new URLSearchParams();

if (this.model.age == "under 24"){
    this.model.age = 30;
}


params.append('action', 'survey_receiver');
params.append('response[age]', this.model.age);
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
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

   },
   validateFirstTab: function(){
     return this.$refs.firstTabForm.validate();
   },
   validateSecondTab: function(){
     return this.$refs.secondTabForm.validate();
   },
      validateThirdTab: function(){
     return this.$refs.thirdTabForm.validate();
   },
      validateFourthTab: function(){
     return this.$refs.fourthTabForm.validate();
   },
      validateFifthTab: function(){
     return this.$refs.fifthTabForm.validate();
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
  }
})
