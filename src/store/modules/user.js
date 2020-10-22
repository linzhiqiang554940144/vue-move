// import { login, getInfo } from '@/api/userApi'

import {
  SET_TOKEN
} from '@/store/mutation-types'

const state = {
  token: ''
}

const mutations = {

  [SET_TOKEN](state, token) {
    state.token = (token || '')
  }
}

const actions = {
  setToken({ commit }, token){
    commit(SET_TOKEN, token)
  },
  // async login({ commit, dispatch }, userInfo) {
  //   const { username, password, isRemember } = userInfo
  //   const { resultCode, data } = await login(username, password, isRemember)
  //   if (resultCode === 0) {
  //     const { token } = data
  //     commit(SET_TOKEN, token)
  //     //登录成功后自动获取用户信息
  //     dispatch('getInfo')
  //     return data
  //   } else {
  //     return null
  //   }
  // },


  logout({ commit }) {
    commit(SET_TOKEN, '')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}