import { defineStore } from "pinia"

const startDate = new Date() //当前日期
const endDate = new Date() // 新日期
endDate.setDate(startDate.getDate() + 1)

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    startDate: startDate,
    endDate: endDate
  })
})
