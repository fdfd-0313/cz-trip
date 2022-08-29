import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from "underscore"
export default function useScroll(elRef) {
  let el = window

  // 用变量判断是否到达底部
  const isReachBottom = ref(false)

  // scrollHeight = scrollTop + clientHeight
  const scrollHeight = ref(0)
  const clientHeight = ref(0)
  const scrollTop = ref(0)

  // 节流处理
  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      // console.log("正在滚动222")
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      // console.log("正在滚动111")
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
    }

    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      // 已经滚到底部了
      console.log("滚动到底部了")
      isReachBottom.value = true
    }
  }, 100)
  onMounted(() => {
    // console.log(elRef)
    if (elRef) el = elRef.value
    // console.log(el)
    el.addEventListener("scroll", scrollListenerHandler)
  })

  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListenerHandler)
  })
  return {
    isReachBottom,
    scrollHeight,
    clientHeight,
    scrollTop
  }
}
