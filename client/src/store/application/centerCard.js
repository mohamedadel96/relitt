import appServices from '../../services/application'

export default {
  state: {
    centercard: [],
    page: 1
    
  },
  getters: {
    getCenterCard(state) {
      return state.centercard
    }
  },
  mutations: {
    saveCenterCard(state, data) {
      state.centercard.push(...data)
    },
    addPage(state){
      state.page += 1
    }
  },
  actions:{
    CENTERCARD( { commit }, state ) {
      return new Promise((resolve, reject) => {
        
        appServices.centerCard(this.page).then(res => {
          if (res.data.status === 401) {
            // we will handle logout option // call logout function
          }
          if (res.data.code !== 200) return reject(res.data.errors)
          if (!res.data.data.length){ 
          return resolve('end')}
          
          commit('saveCenterCard', res.data.data)
          commit('addPage')
          resolve('done')
        })
      })
    }
  }
}
