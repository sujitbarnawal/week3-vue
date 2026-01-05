<script setup lang="ts">
import { computed, reactive } from 'vue';
import InputField from './InputField.vue';
import type { FormState } from '@/types/FormType';
import SubmitButton from './SubmitButton.vue';

const form = reactive<FormState>({
    name: "",
    email: "",
    password: ""
})

const errors = computed(() => ({
    name: form.name.length < 5 ? "Name must be at least 5 characters" : "",
    email: !form.email.includes("@") ? "Invalid Email" : "",
    password: form.password.length < 8 ? "Password is too short" : ""

}))

const isValid = computed(() => {
    return Object.values(errors.value).every(err => err === "")
}



)
function submitForm() {
    alert(`Form submitted successfully!
    Name : ${form.name} 
    Email : ${form.email}
    `)
    form.name=""
    form.email=""
    form.password=""


}

</script>

<template>
    <InputField label="Name" v-model="form.name" :error="errors.name" type="text" />
    <InputField label="Email" v-model="form.email" :error="errors.email" type="text" />
    <InputField label="Password" v-model="form.password" :error="errors.password" type="password" />
    <SubmitButton :disabled="!isValid" @submit-form="submitForm" />

</template>

<style scoped></style>