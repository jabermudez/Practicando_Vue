import { createStore } from 'vuex'
import {db} from '../firebase'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    getTareas({commit}){
      db.collection('tareas').get()
        .then(res => {
          res.forEach(doc => {
            console.log(doc.id)
            console.log(doc.data())
          });
        })
    }
  },
  modules: {
  }
})
