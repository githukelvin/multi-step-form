<template>
  <div class="form">
    <HeaderIntro
      title="Personal info"
      description="Please provide yor name, email address, and phone number "
    />
    <VForm :validation-schema="userSchema">
      <div class="form__input">
        <div class="form__input--group">
          <div class="combined">
            <label>Name</label>

            <div class="message">
              <div class="info">
                <ErrorMessage name="name" />
              </div>
            </div>
          </div>
          <Field
          v-model.lazy="Uname"
            type="text"
            placeholder="e.g stephen king"
            name="name"
            autocomplete="off"
            class="input-field"
          />
        </div>
        <div class="form__input--group">
          <div class="combined">
            <label>Email Address</label>

            <div class="message">
              <div class="info">
                <ErrorMessage name="email" />
              </div>
            </div>
          </div>
          <Field
          v-model.lazy="email"
            type="email"
            placeholder="e.g stephenking@lorem.com"
            name="email"
            autocomplete="off"
            class="input-field"
          />
        </div>
        <div class="form__input--group">
          <div class="combined">
            <label>Phone number</label>

            <div class="message">
              <div class="info">
                <ErrorMessage name="phone" />
              </div>
            </div>
          </div>
          <Field
          v-model.lazy="phone"
            type="text"
            placeholder="e.g +1 234 567 890"
            name="phone"
            autocomplete="off"
            class="input-field"
          />
        </div>
      </div>
    </VForm>
  </div>
  <div class="btns" v-show="useAuth.isThank" :class="{ width: useAuth.showBtn === true }">
    <button class="back" :class="{ actives: useAuth.showBtn === true }">go back</button>

    <button
      @click="ClickToDisplay"
      v-if="!useAuth.isSummary"
      class="next"
      type="submit"
      :class="{ leftPos: useAuth.showBtn === false }"
    >
      next step
    </button>
    <button
      v-else
      class="next"
      :class="{ leftPos: useAuth.showBtn === false, color: useAuth.isSummary }"
    >
      Confirm
    </button>
  </div>
</template>
<script setup lang="ts">
import { Form as VForm, ErrorMessage, Field } from "vee-validate"
import * as Yup from "yup"
import { useAuthStore,type User } from "../stores/auth"
import HeaderIntro from "../components/HeaderIntro.vue"
const userSchema = Yup.object().shape({
	name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Name is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	phone: Yup.number()
		.min(10, "Too Short!")
	// .max(14, 'Too Long!')
		.required("Phone number is required")
})
const useAuth = useAuthStore()

// get data from schema  yup object
const Uname = defineModel()
const email = defineModel()
const phone = defineModel()

// parse and assert validity
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const user = {
	name:Uname.value,
	email:email.value,
	phone:phone.value
} as User

function ClickToDisplay(){
	console.log(user)
}




</script>
