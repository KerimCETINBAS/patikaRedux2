import { findItemById } from "./helpers"

export default {
    buyItemAction: (state, action) => { 
        const item = findItemById(state.items, action.payload)
        item.amount++
        state.money -= item.price
        state.total += item.price
    },
    sellItemAction: (state, action) => {
        const item = findItemById(state.items, action.payload)
        item.amount--
        state.money += item.price
        state.total -= item.price
    }
}