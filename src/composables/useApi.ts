import { ref } from 'vue'
import axios from 'axios'
import type { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://679497ddaad755a134e9dd20.mockapi.io/api/kog',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  },
)

export function useApi() {
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const get = async <T>(endpoint: string, params = {}): Promise<T | null> => {
    isLoading.value = true
    error.value = null

    try {
      const response: AxiosResponse<T> = await axiosInstance.get(endpoint, { params })
      return response.data
    } catch (err) {
      const axiosError = err as AxiosError
      if (axiosError.response) {
        error.value = axiosError.response.data as string
      } else {
        error.value = axiosError.message || 'Unknown error occurred'
      }
      return null
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    error,
    get,
  }
}
