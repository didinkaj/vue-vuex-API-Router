import axios from 'axios';

const state = {
    jokes: [],
    loading: false
};

const mutations = {

    GET_JOKES(state, data) {

        state.loading = true;

        axios.get('http://api.icndb.com/jokes/random/10')
            .then( ({ data }) => {
                state.jokes = data.value;

            }, () => {

            })
    }
};

const getters = {
    jokes: state => state.jokes,
};
const actions = {

};

export default {
    state, getters, mutations, actions
}