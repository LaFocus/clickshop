import axios from 'axios'
import { defineStore } from 'pinia'


export const useShopCart = defineStore('shopCart',{
    state: () => ({
        shopsArr: []
    }),
    actions: {
       addItem(item) {
        if (!this.shopsArr.includes(item)) {
            this.shopsArr.push(item)
            item.amount = 1
        }
       }
    }
})