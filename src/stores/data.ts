import { computed ,ref} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { defineStore } from 'pinia';

export interface User {
  name: string
  email: string
  phone: number
}

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
  const user = ref<User>({} as User)

  function saveDetails(credentials, detail, nextroute) {
    console.log(credentials)

    localStorage.setItem(detail, credentials)
    if (localStorage.getItem(detail).length > 1) {
      // Fix: Update the condition to check if the length is greater than 1
      isSummary = isRouteActive('summary').value // Fix: Assign the value of the computed property
      isThank = isRouteActive('thankyou').value // Fix: Assign the value of the computed property
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
    showBtn,
    user
  }
})
