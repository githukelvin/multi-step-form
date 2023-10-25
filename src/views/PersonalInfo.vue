<template>
    <div class="form">
        <div class="form__details">
            <h1>personal info</h1>
            <p>please provide yor name,email address, and phone number</p>
        </div>
        <VForm
            v-slot="{ errors }"
            :validation-schema="validationSchema"
            @submit="submitForm"
    </VForm>

    </div>
</template>

<script setup>
import { Form as VForm, ErrorMessage, Field } from "vee-validate";
import * as Yup from "yup";
</script>

