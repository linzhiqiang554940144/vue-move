import {fetch} from '@/utils/http'

export const homeApi = (formObj) => {
  return fetch({
    url: 'app/zhgdSy/getSy',
    method: 'POST',
    data: {
      ...formObj
    },
    loading: true
  })
}