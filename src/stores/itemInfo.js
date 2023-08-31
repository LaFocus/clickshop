import axios from 'axios'
import { defineStore } from 'pinia'


export const useItemInfo = defineStore('itemInfo',{
    state: () => ({
        url: 'https://dummyjson.com/products/',
        itemInfo: null
    }),
    actions: {
       async getItemInfo(id) {
        try {
            let res = await axios.get(this.url+id)
            const data = res.data
            this.itemInfo = data
        } catch (error) {
            console.log('Ошибка при получении товаров', error);
        }
       }
    }
})