import { Commit } from 'vuex';
import { RouteConfig } from 'vue-router'

export interface Tag {
  title: string,
  path: string,
  name?: string | undefined
}

interface State {
  tagsList: Tag[]
}
const state: State = {
  tagsList: [{ title: 'xx', path: 'xx', name: 'xx' }]
}

const getters = {
  tagsList: (state: State): Tag[] => state.tagsList
}

const mutations = {
  ADD_TAG: (state: State, route: RouteConfig) => {
    if (state.tagsList.length >= 8) {
      state.tagsList.shift()
    }
    state.tagsList.push({
      title: route.meta.title,
      path: route.path,
      name: route.name
    })
  },
  DELETE_TAG: (state: State, index: number) => {
    state.tagsList.splice(index, 1)
  },
  DELETE_ALL_TAG: (state: State) => {
    state.tagsList = []
  },
  DELETE_OTHER_TAG: (state: State, index: number) => {
    state.tagsList = state.tagsList.splice(index, 1)
  }
}
const actions = {
  deleteTag(context: { commit: Commit }, index: number) {
    return new Promise((resolve, reject) => {
      context.commit('DELETE_TAG', index)
      resolve(state.tagsList)
      reject(state.tagsList)
    })
  },
  addTag(context: { commit: Commit }, route: RouteConfig) {
    context.commit('ADD_TAG', route)
  },
  deleteAllTag(context: { commit: Commit }) {
    context.commit('DELETE_ALL_TAG')
  },
  deleteOtherTags(context: { commit: Commit }, index: number) {
    context.commit('DELETE_OTHER_TAG', index)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
