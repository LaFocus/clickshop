import axios from 'axios'
import { defineStore } from 'pinia'


export const useIndex = defineStore('index',{
    state: () => ({
        url: 'https://dummyjson.com/products',
        resArray: []
    }),
    actions: {
       async getIndex() {
        try {
            let res = await axios.get(this.url)
            const data = res.data.products
            this.resArray = data
        } catch (error) {
            console.log('Ошибка при получении товаров', error);
        }
       }
       
    }
})