import { defineStore } from 'pinia'


export const useSelected = defineStore('selected', {
    state: () => ({
        selectedArr: []
    }),
    actions: {
        addDeleteItem(item) {
            if (!this.selectedArr.includes(item)) {
                this.selectedArr.push(item)
            }else {
                this.selectedArr.splice(this.selectedArr.indexOf(item), 1)
            }
            console.log(this.selectedArr);
        },
    }
})