const redux = require('redux');
const reactRedux = require('react-redux');

const SET_SEARCH_TERM = 'setSearchTerm';

const reducer = (state = {searchTerm: ''}, action) => {
	switch(action.type) {
		case SET_SEARCH_TERM:
			const newState = {};
			Object.assign(newState, state, {searchTerm: action.value});
			return newState;
		default:
			return state;
	}

}

const store = redux.createStore(reducer);

const mapStateToProps = (state) => ({searchTerm: state.searchTerm});
const mapDispatchToProps = (dispatch) => {
	return {
		setSearchTerm: (term) => {
			dispatch({type: SET_SEARCH_TERM, value: term});
		}
	}

}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps);

module.exports = { connector, store };