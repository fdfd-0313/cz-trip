import { getHomeHotSuggests } from "@/service"
import { defineStore } from "pinia"

export const useHomeStore = defineStore({
  id: "home",
  state: () => ({
    hotSuggests: [],
    categories: []
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    }
  }
})
