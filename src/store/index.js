import Vue from 'vue'
import Vuex from 'vuex'
import {
  ADD_NUM_TEST,
  ADD_NUM
} from './mutation-types'
import {
  getSessionStorage,
  setSessionStorage,
  transfromStorage
} from '@/utils/common'
// import actions from './actions'

Vue.use(Vuex)
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    testObj: {
      NUM_TEST: transfromStorage('testObj', 'NUM_TEST'),
      test2: transfromStorage('testObj', 'test2'),
      test3: transfromStorage('testObj', 'test3')
    },
    num: getSessionStorage('num'),
    num2: getSessionStorage('num2')
  },
  mutations: {
    [ADD_NUM_TEST](state, payload) {
      state.testObj = Object.assign({}, state.testObj, payload)
      setSessionStorage('testObj', state.testObj)
    },
    [ADD_NUM](state, payload) {
      state.num = payload
      setSessionStorage('num', state.num, false)
    }
  },
  getters: { // 相当于计算属性
    getNumTest: state => state.testObj.NUM_TEST
  },
  // actions: actions,
  actions: {
    addNumTest({ commit }, payload) {
      commit(ADD_NUM_TEST, payload)
    },
    addNum({ commit }, payload) {
      commit(ADD_NUM, payload)
    }
  }
})

export default store
