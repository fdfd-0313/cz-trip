import CXRequest from "../request"

export function getDetailInfos(houseId) {
  return CXRequest.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}
