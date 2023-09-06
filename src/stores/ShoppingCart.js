import { defineStore } from 'pinia'

export const useShopCart = defineStore('shopCart', {

    state: () => ({
        shopsArr: JSON.parse(localStorage.getItem('cartItems')) || []
    }),

    actions: {
        addItem(item, amount) {
            if (!this.shopsArr.find(cartItem => cartItem.id === item.id)) {
                this.shopsArr.push({ ...item, amount });
            }
            this.saveCartItems();
        },
        deleteItem(item) {
            const index = this.shopsArr.findIndex(cartItem => cartItem.id === item.id);
            if (index !== -1) {
                this.shopsArr.splice(index, 1);
                this.saveCartItems();
            }
        },
        changeAmount(item, operator) {
            operator === '-' ? item.amount-- : operator === '+' ? item.amount++ : '';
            if (item.amount === 0) {
                const index = this.shopsArr.findIndex(cartItem => cartItem.id === item.id);
                if (index !== -1) {
                    this.shopsArr.splice(index, 1);
                    this.saveCartItems();
                }
            }
        },
        saveCartItems() {
            localStorage.setItem('cartItems', JSON.stringify(this.shopsArr));
        }
    }
});