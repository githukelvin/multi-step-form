<template>
  <div class="form">
    <div class="form__details">
      <h1>Personal info</h1>
      <p>Please provide yor name,email address, and phone number</p>
    </div>
    <VForm
    :validation-schema="schema"
    >
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
            type="text"
            placeholder="e.g stephen king"
            name="name"
            autocomplete="off"
            class="input-field"
          />
        </div>
        <div class="form__input--group">
           <div class="combined">
                  <label>Email</label>

                         <div class="message">
                    <div class="info">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                </div>
          <Field
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
</template>
<script setup>
import { Form as VForm, ErrorMessage, Field } from 'vee-validate'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.number()
    .min(10, 'Too Short!')
    // .max(14, 'Too Long!')
    .required('Phone number is required'),
})
</script>
