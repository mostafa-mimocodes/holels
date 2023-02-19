import { createStore } from 'vuex'
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import getters from "@/store/getters";

// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 0,
            rtl:false,
            currentComponent:''
        }
    },
    mutations,
    actions,
    getters

})

export default store;
