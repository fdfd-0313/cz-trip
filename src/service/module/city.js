import CXRequest from "../request"

// 从服务器获取所有城市名称
export function getCityAll() {
  return CXRequest.get({
    url: "/city/all"
  })
}
