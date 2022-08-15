// 工具函数--基于 Vite 获取资源
export const getAssetURL = image => {
  // 参数1：绝对路径
  // 参数2：当前路径的RRL
  return new URL(`../assets/img/${image}`, import.meta.url).href
}
