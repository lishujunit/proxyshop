import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore(
    'user',
    () => {
        const userData = ref(null)
        const updateUserData = (data: any) => {
            userData.value = data;
        }
        return { userData, updateUserData }
    },
    {
        persist: true,
    },
)