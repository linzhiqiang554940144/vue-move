import {fetch} from '@/utils/http'

export const loginApi = (formObj) => {
  return fetch({
    url: 'ysqyjzz/auth/login',
    method: 'POST',
    data: {
      ...formObj
    },
    loading: false
  })
}