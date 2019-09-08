import {
  ADD_NUM_TEST
} from './mutation-types'

export default {
  addNumTest({ commit }, payload) {
    commit(ADD_NUM_TEST, payload)
  }
}
