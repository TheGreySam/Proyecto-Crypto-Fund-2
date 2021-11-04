export const criptoInfoModule = {
    namespaced: true,
    state: {
        data: [],

    },
    mutations: {
        SET_DATA(state, newData) {
            state.data = newData
        }
    },
    actions: {
        subscribe(context) {
            setInterval(async () => {
                const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false")
                const data = await res.json();
                context.commit("SET_DATA", data)
            }, 10000)
        }
    }
}