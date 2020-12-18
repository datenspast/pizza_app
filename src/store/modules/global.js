const state = {
    style:'Italian',
    styles:['Italian', 'American'],
    dough: "Standard", 
    doughs:["Standard", "Wholegrain", "Sour dough"],
    topping: [{text:"Cheese", cost:0}, ],
    toppings: [
        {text:"Cheese", cost:1, vegi: true}, 
        {text:"Salami", cost:1, vegi: false}, 
        {text: "Olives", cost:2, vegi: true}, 
        {text: "Pinaple", cost:1, vegi: true}, 
        {text:"Garlic", cost:0.5, vegi: true}
    ]
}

  // Helper for generic mutations from: https://itnext.io/reusable-vuex-mutation-functions-9b4920aa737b
  const set = key => (state, val) => {
    state[key] = val
  }

  const mutations = {
    style: set('style'),
    dough: set('dough'),
    topping: set('topping')
  }

  const getters = {
    styles(){
        return state.styles
    },
    doughs(){
        return state.doughs
    },
    toppings(){
        return state.toppings
    },
    summary(){
        let toppingprice= state.topping.map(t=>t.cost).reduce((accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue))
        let price = parseFloat(5) + parseFloat(toppingprice)
        let summary = {
            style: state.style,
            dough: state.dough,
            toppings: state.topping,
            price: price
        }
        return summary
    },
   
    
      
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