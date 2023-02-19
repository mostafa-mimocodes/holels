const getters = {
    numberToMoney(state){
        return state.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

export default getters;
