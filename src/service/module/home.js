import CXRequest from "../request"

export function getHomeHotSuggests() {
  return CXRequest.get({
    url: "/home/hotSuggests"
  })
}

export function getHomeCategories() {
  return CXRequest.get({
    url: "/home/categories"
  })
}

export function getHomeHouselist(currentPage) {
  return CXRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}
