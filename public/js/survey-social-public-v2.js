import Vue from 'vue';
import VueFormWizard from 'vue-form-wizard';
import VueFormGenerator from 'vue-form-generator';
import axios from 'axios';

var cMax = document.getElementById('survey-social-public').getElementsByTagName('li').length;

console.log(cMax);

Vue.use(VueFormWizard)
Vue.use(VueFormGenerator)
Vue.prototype.$http = axios;
new Vue({
 el: '#survey-social-public',
 data:{
   counterMax: function() { return document.getElementById('survey-social-public').getElementsByTagName('li').length},
   counter: 1,
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
    this.model.age = 20;
}

if (this.model.age == "24-39"){
    this.model.age = 32;
}

if (this.model.age == "40+"){
    this.model.age = 40;
}

if (this.model.gender == "yes"){
    this.model.gender = "female";
} else if (this.model.gender = "no") {
    this.model.gender = "male";
} else {
  this.model.gender = NULL;
}

if (this.model.has_children == "yes"){
    this.model.has_children = 1;
} else {
    this.model.has_children = 0;
}

if (this.model.travels_often == "yes"){
    this.model.travels_often = 1;
} else {
    this.model.has_children = 0;
}

if (this.model.exercises_often == "yes"){
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
   incrementCounter: function(){
      console.log(this.counter);
      console.log(cMax);

      return this.counter++;
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
