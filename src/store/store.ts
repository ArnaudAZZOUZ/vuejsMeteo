import {createStore} from "vuex"
import axios from "axios";

export interface State {
    cities: Array<Object>
}

export const store = createStore<State>({

    state: {
        cities: []
    },

    mutations: {
        loadCities(state,cities): void {

            for (const {
                state,
                weather: [{description: weather}],
                main: {temp: temperature},
                dt: updatedAt
            } of cities) {
                state.cities.push({name, weather, temperature, updatedAt: new Date(updatedAt * 1000)});
            }
        }
    },
    // action: {
    //     axios
    //     .get(`https://api.openweathermap.org/data/2.5/find?lat=${process.env.VUE_APP_DEFAULT_LATITUDE}&lon=${process.env.VUE_APP_DEFAULT_LONGITUDE}&cnt=20&cluster=yes&lang=fr&units=metric&APPID=${process.env.VUE_APP_OW_APP_ID}`)
    //         .then((resp) => this.loadCities(resp.data.list));
    // }

})

export default store
