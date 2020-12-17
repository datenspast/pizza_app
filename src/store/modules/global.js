const state = {
    style:"",
    styles:['Italian', 'American'],
    dough: "", 
    doughs:["Standard", "Wholegrain", "Sour dough"]
}

  // Helper for generic mutations from: https://itnext.io/reusable-vuex-mutation-functions-9b4920aa737b
  const set = key => (state, val) => {
    state[key] = val
  }

  const mutations = {
    style: set('style'),
    dough: set('dough')
  }

  const getters = {
    styles(){
        return state.styles
    },
    doughs(){
        return state.doughs
    }
      
  }
  
  const actions = {    
  }
  
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }