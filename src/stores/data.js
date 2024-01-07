import { ref } from 'vue'
import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  let personalDetails = ref({})
  let planDetails = ref({})
  let addOns = ref({})
  let route = useRoute()
  let isSummary = isRouteActive('summary').value
  let isThank = !isRouteActive('thankyou').value
  let pathName = route.name
  let showBtn = pathName === 'info' ? false : true
  function saveDetails(credentials, detail) {
    localStorage.setItem(detail, credentials.value)
    console.log(credentials.value)
  }

  function isRouteActive(routeName) {
    return computed(() => {
      return route.name === routeName // Check if the path matches the route name
    })
  }

  return {
    saveDetails,
    personalDetails,
    planDetails,
    addOns,
    isSummary,
    isThank,
    pathName,
    showBtn
  }
})
