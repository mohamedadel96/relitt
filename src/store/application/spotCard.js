// import appServices from '../../services/application'

// export default {
//   state: {
//     centercard: [],
//     filter:{
//       page: 1
//     }
    
//   },
//   getters: {
//     getCenterCard(state) {
//       return state.centercard
//     }
//   },
//   mutations: {
//     saveCenterCard(state, data) {
//       state.filter.page += 1
//       state.centercard.push(...data)
//     }
//   },
//   actions:{
//     CENTERCARD( { commit ,state}  ) {
//       return new Promise((resolve, reject) => {
//         appServices.centerCard(state.filter).then(res => {
//           if (res.data.status === 401) {
//             // we will handle logout option // call logout function
//           }
//           if (res.data.code !== 200) return reject(res.data.errors)
//           if (!res.data.data.length){   return resolve('end')}
          
//           commit('saveCenterCard', res.data.data)
//           resolve('done')
//         })  
//       })
//     }
//   }
// }
