import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
    let personalDetails = ref({});
    let planDetails = ref({});
    let addOns = ref({});
    return{

    }
})