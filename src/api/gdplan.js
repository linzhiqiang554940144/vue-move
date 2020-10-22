import {fetch} from '@/utils/http'

export const getPlan = (formObj) => {
  return fetch({
    url: 'app/zhgdSy/getGdjh',
    method: 'POST',
    data: {
      ...formObj
    },
    loading: false
  })
}