import { createStore } from 'vuex'
import axios from "axios";

export interface State {
    cities: any;
    iconWidth: Number;
    iconHeight: Number;
}

export const store = createStore<State>({

    actions: {
        getCitiesAsync ({ commit, state }) {
            if (localStorage.getItem('cities') == null) {
                console.log('CALL API')
                axios
                    .get('https://api.openweathermap.org/data/2.5/find?lat=' + process.env.VUE_APP_DEFAULT_LATITUDE + '&lon=' + process.env.VUE_APP_DEFAULT_LONGITUDE + '&cnt=20&cluster=yes&lang=fr&units=metric&APPID=' + process.env.VUE_APP_OW_APP_ID)
                    .then((citiesData) => {
                        let cities = [];
                        for (const { name, coord: {lat, lon}, weather: [{description: weather, icon: icon}], main: {temp: temperature}, dt: updatedAt } of citiesData.data.list) {
                            cities.push({ name, lat, lon, weather, icon, temperature, updatedAt: new Date(updatedAt) });
                        }
                        commit('SaveCities', cities);
                        localStorage.setItem('cities', JSON.stringify(cities)); //backup
                    })
            } else {
                console.log('PAS CALL API');
                commit('SaveCities', JSON.parse(localStorage.cities));
            }
        }
    },
    mutations: {
        SaveCities(state, citiesData){
            state.cities = citiesData;
        },
    },
    state: {
        cities: [],
        iconWidth: 50,
        iconHeight: 50
    },
})