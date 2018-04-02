import Vue from 'vue';
import VueFormWizard from 'vue-form-wizard';
import VueFormGenerator from 'vue-form-generator';
import axios from 'axios';

Vue.use(VueFormWizard)
Vue.use(VueFormGenerator)
Vue.config.devtools = false;
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

window.app = vm;

var vm = new Vue({
 el: '#survey-social-public',
 ref:'wizard',
 data:{
   counter: 1,
   counterMax: 0,
   male_gender: false,

   model:{
    age: null,
    gender: null,
    travels_often: null,
    has_children: null,
    exercises_often: null,
    health_needs: null,
   },

   formOptions: {
    validationErrorClass: "has-error",
    validationSuccessClass: "has-success",
    validateAfterChanged: true
   },

   ageTabSchema:{
     fields:[{
        type: "radios",
        model: "age",
        required:true,
        values: [
          "Under 25",
          "25-39",
          "40-49",
          "50+"
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
        model: "gender",
        required:true,
        values: [
          "Female",
          "Male",
          "Other"
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
        model: "travels_often",
        required:true,
        values: [
          "Go-getter",
          "Jet setter",
          "Homebody",
          "Free spirit"
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
        model: "has_children",
        required:true,
        values: [
          "Yes, and they’re out of the house",
          "Yes, and they're growing so fast",
          "Yes, little rugrats",
          "Nope"
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
        model: "exercises_often",
        required:true,
        values: [
          "I train to compete",
          "The gym is my domain",
          "Hey, life is busy",
          "I like my couch"
        ],
        validator: VueFormGenerator.validators.required,
        styleClasses:'col-xs-9'
     },
     ]
   },
   healthTabSchema:{
     fields:[
     {
        type: "checklist",
        model: "health_needs",
        listBox: true,
        required:true,
        values: [
          "Digestive",
          "Immune",
          "Vaginal",
          "Urinary tract",
          "Heart health"
        ],
        checklistOptions: {
          name: "Digestive",
          name: "Immune",
          name: "Vaginal",
          name: "Urinary tract",
          name: "Heart health"
        },
        validator: VueFormGenerator.validators.required,
        styleClasses:'col-xs-9',
     },
     ]
   },
      healthTabSchemaMale:{
     fields:[
     {
        type: "checklist",
        model: "health_needs",
        listBox: true,
        required:true,
        values: [
          "Digestive",
          "Immune",
          "Heart health"
        ],
        checklistOptions: {
          name: "Digestive",
          name: "Immune",
          name: "Heart health"
        },
        validator: VueFormGenerator.validators.required,
        styleClasses:'col-xs-9'
     },
     ]
   },

    counterMax: document.querySelectorAll(' ul.wizard-nav.wizard-nav-pills li').length,
    computed: {
    dynamicAge: function () {
      return this.model.age;
      }
  }
 },
 methods: {
  onComplete: function(event) {

if (this.model.age === "Under 25"){
    this.model.age = 20;
}

if (this.model.age === "25-39"){
    this.model.age = 30;
}

if (this.model.age === "40-49"){
    this.model.age = 45;
}

if (this.model.age === "50+"){
    this.model.age = 50;
}

if (this.model.gender === "Other") {
    this.model.gender = "null";
}

if (this.model.has_children === "Yes, and they're growing so fast" || this.model.has_children === "Yes, little rugrats" ){
    this.model.has_children = 1;
};

if (this.model.has_children === "Yes, and they’re out of the house" || this.model.has_children === "Nope" ){
    this.model.has_children = 0;
};

if (this.model.travels_often === "Go-getter" || this.model.travels_often === "Jet setter"){
    this.model.travels_often = 1;
};

if (this.model.travels_often === "Homebody" || this.model.travels_often === "Free spirit" ) {
      this.model.travels_often = 0;
};

if (this.model.exercises_often === "I train to compete" || this.model.exercises_often === "The gym is my domain" ){
    this.model.exercises_often = 1;
};

if (this.model.exercises_often === "Hey, life is busy" || this.model.exercises_often === "I like my couch" ){
    this.model.exercises_often = 0;
};

    var after_hash = window.location.href.split('#')[1];
    var before_hash = window.location.href.split('#')[0];
    if (after_hash != undefined) {
      window.location.href = before_hash;
    }

var params = {
  'action' :'survey_receiver',
  'response[age]': this.model.age,
  'response[gender]' :this.model.gender,
  'response[has_children]' :this.model.has_children,
  'response[travels_often]' :this.model.travels_often,
  'response[exercises_often]':this.model.exercises_often,
  'response[health_needs]' :this.model.health_needs
}

var recursiveDecoded = decodeURIComponent( $.param( params ) );

axios.post(ajax_receiver.ajax_url, recursiveDecoded,
    {
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
    .then(function (response) {
        var redirect = '/';

        if (!ajax_receiver.is_front_page && response.data.redirect) {
            redirect = response.data.redirect;
        }

        window.location = redirect;
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
   validateHealthTab: function(){
     return this.$refs.healthTabForm.validate();
   },
   incrementCounter: function(tabIndex, activeTabIndex, prevIndex, nextIndex){
      this.counter = activeTabIndex + 1;
      this.$forceUpdate();
      return [this.counter, this.counterMax];
   },
   restartSurvey: function (event, tabIndex, activeTabIndex, prevIndex, nextIndex) {
      if (event) {
        this.$refs.wizard.navigateToTab(0);
      }
   },
   hideSurveyDiv: function (event){
    if (event){
        $('#survey-social-public').removeClass('active');
        $('.site-header').removeClass('under');

        var after_hash = window.location.href.split('#')[1];
        var before_hash = window.location.href.split('#')[0];
        if (after_hash != undefined) {
          var no_reload = {'url' : before_hash};

          window.history.pushState({}, null, before_hash);
        }
      }
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

  mounted: function(event, tabIndex, activeTabIndex, prevIndex, nextIndex) {
      this.$nextTick(function (event) {
      this.counterMax = $('ul.wizard-nav.wizard-nav-pills li').length;

    }),
        $('#start-over').onclick = function() {
          vm.$refs.wizard.reset();
      };

    $("#survey-social-public input:radio").click(function (event) {
      setTimeout(function(){
        vm.$refs.wizard.nextTab();
     }, 500);
    });

    $("#survey-social-public button:contains('Next')").attr('id', 'wizard-survey-next');
  },

  updated: function(){

      $("#survey-social-public input:checkbox").click(function(event) {
        if(($("#survey-social-public input:checkbox:checked").length === 0)) {
          $("#survey-social-public button:contains('Finish')").removeClass('pulse');
        } else {
          $("#survey-social-public button:contains('Finish')").addClass('pulse');
        }
      });

      $("#survey-social-public button:contains('Back')").attr('id', 'wizard-survey-back');
      $("#survey-social-public button:contains('Finish')").attr('id', 'wizard-survey-finish');

  },
})
