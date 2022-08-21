import CXRequest from "../request";

export function getHomeHotSuggests(){
  return CXRequest.get({
    url: "/home/hotSuggests"
  })
}