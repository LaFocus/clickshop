import { defineStore } from 'pinia'


export const useShopCart = defineStore('shopCart', {
    state: () => ({
        shopsArr: []
    }),
    actions: {
        addItem(item, amount) {
            if (!this.shopsArr.includes(item)) {
                this.shopsArr.push(item)
                item.amount = amount
            }
        },
        deleteItem(item) {
            if (this.shopsArr.includes(item)) {
                this.shopsArr.splice(this.shopsArr.indexOf(item), 1)
            }
        },
        changeAmount(item, operator) {
            
            operator == '-' ? item.amount-- : operator == '+' ? item.amount++ : ''
            if (item.amount == 0) {
                this.shopsArr.splice(this.shopsArr.indexOf(item), 1)

            }
        }

    }
})