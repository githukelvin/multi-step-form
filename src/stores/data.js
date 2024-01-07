import { ref } from 'vue'
import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  let personalDetails = ref({})
  let planDetails = ref({})
  let addOns = ref({})
  let route = useRoute()
  let router = useRouter()
  let isSummary = isRouteActive('summary').value
  let isThank = !isRouteActive('thankyou').value
  let pathName = route.name
  let showBtn = pathName === 'info' ? false : true
  function saveDetails(credentials, detail, nextroute) {
    localStorage.setItem(detail, credentials)
    console.log(credentials.value)
    if (!localStorage.getItem(detail).length < 1) {
      isSummary = isRouteActive('summary')
      isThank = isRouteActive('thankyou')
      router.push(nextroute)
    }
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
