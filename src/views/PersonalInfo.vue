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
      v-if="!useAuth.isSummary"
      @click="createUser"
      class="next"
      type="submit"
      :class="{ leftPos: useAuth.showBtn === false }"
    >
      next step
    </button>
    <button
      v-else
      class="next"
      @click="useAuth.goBack"
      :class="{ leftPos: useAuth.showBtn === false, color: useAuth.isSummary }"
    >
      Confirm
    </button>
  </div>
</template>
<script setup lang="ts">
// import {ref} from "vue"
import { Form as VForm, ErrorMessage, Field } from "vee-validate"
import * as Yup from "yup"
import { useAuthStore, type User } from "../stores/auth"
import HeaderIntro from "../components/HeaderIntro.vue"
import Swal from "sweetalert2/dist/sweetalert2.js"
import { useRoute } from "vue-router"
const route = useRoute()

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
const Uname = defineModel("uname")
const email = defineModel("email")
const phone = defineModel("phone")

async function createUser() {
  const unameValue = await Uname.value
  const emailValue = await email.value
  const phoneValue = await phone.value
  const pathName = route.name
  useAuth.showBtn = pathName === "info" ? false : true

  const user = { name: unameValue, email: emailValue, phone: phoneValue } as User
  userSchema
    .validate(user)
    .then(() => {
      useAuth.saveDetails(JSON.stringify(user), "personal", "plan")
      Swal.fire({
        text: "You have successfully Entered  in details!",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "STEP 2",
        heightAuto: false,
        customClass: {
          confirmButton: "alert  btn-light-primary"
        }
      }).then(() => {
        // router.push({ name: "plan" })
      })
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .catch((err) => {
      // useAuth.validUser = false
      Swal.fire({
        text: "Fields cannot be empty",
        icon: "error",
        buttonsStyling: false,
        confirmButtonText: "Try again!",
        heightAuto: false,
        customClass: {
          confirmButton: "alert  btn-light-danger"
        }
      }).then(() => {
        // store.errors = {}
      })
    })
  return user
}
</script>
