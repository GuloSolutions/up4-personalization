            <div id="survey-social-public">

            <div class="wizard-navigation">

            {{ counter }} / {{ counterMax }}

            </div>

            <form-wizard @on-complete="onComplete"
                @on-change="incrementCounter"
                     color="gray"
                     error-color="#a94442"
                     title=""
                     subtitle=""
                    >

            <tab-content
                         icon="ti-user" :before-change="validateAgeTab">
               <vue-form-generator :model="model"
                                   :schema="ageTabSchema"
                                   :options="formOptions"
                                   ref="ageTabForm"
                                   >
               </vue-form-generator>
            </tab-content>';



            <tab-content

                icon="ti-settings" :before-change="validateGenderTab">
                <vue-form-generator :model="model"
                                   :schema="genderTabSchema"
                                   :options="formOptions"
                                   ref="genderTabForm"
                                   >
                </vue-form-generator>
            </tab-content>';


            <tab-content
                         icon="ti-user" :before-change="validateTravelTab">
                <vue-form-generator :model="model"
                                   :schema="travelTabSchema"
                                   :options="formOptions"
                                   ref="travelTabForm"
                                   >
                </vue-form-generator>
            </tab-content>';


            <tab-content
                         icon="ti-user" :before-change="validateChildrenTab">
                <vue-form-generator :model="model"
                                   :schema="childrenTabSchema"
                                   :options="formOptions"
                                   ref="childrenTabForm"
                                   >
                </vue-form-generator>
            </tab-content>;


            <tab-content
                         icon="ti-user" :before-change="validateExerciseTab">
                <vue-form-generator :model="model"
                                   :schema="exerciseTabSchema"
                                   :options="formOptions"
                                   ref="exerciseTabForm"
                                   >
                </vue-form-generator>
            </tab-content>;

            </form-wizard>
        </div>
