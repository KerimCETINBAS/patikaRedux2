import { useSelector } from "react-redux";


export const getIsTradable = (id) => {

    const item = useSelector(state => state.store.items.find(i => i.id == id))
    const money = useSelector(state => state.store.money)
    
    return {
        buyable: item.price <= money,
        sellable: item.amount > 0
    }
}


export const getMoney = () => useSelector(state => state.store.money)
export const getItems = () => useSelector(state => state.store.items)
export const getTotalReceipt = () => useSelector(state => state.store.total)
export const getReceipts = () => {
    const items = getItems()
    return items.filter(i => i.amount > 0).map(i => ({
        ...i,
        price: i.price * i.amount
    }))
  
}