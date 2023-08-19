import axios from 'axios'
import { defineStore } from 'pinia'


export const useIndex = defineStore('index',{
    state: () => ({
        url: 'https://dummyjson.com/products',
    }),
    actions: {
       async getIndex() {
        try {
            let res = await axios.get(this.url)
            console.log(res);
        } catch (error) {
            console.log('Ошибка при получении актеров', error);
        }
       }
    }
})