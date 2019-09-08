import Vue from 'vue'
import Vuex from 'vuex'
import {
  ADD_NUM_TEST
} from './mutation-types'
import {
  getSessionStorage,
  setSessionStorage
  // transfromStorage
} from '@/utils/common'
import actions from './actions'

Vue.use(Vuex)
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    NUM_TEST: getSessionStorage('NUM_TEST')
  },
  mutations: {
    [ADD_NUM_TEST](state, payload) {
      state.NUM_TEST = payload.NUM_TEST
      setSessionStorage('NUM_TEST', state.NUM_TEST)
    }
  },
  actions
})

export default store
