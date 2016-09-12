const React = require('react');
const ReactDOM = require('react-dom');
const Landing = require('./Landing');
const Search = require('./Search');
const Layout = require('./Layout');
const Details = require('./Details');
const data = require('../public/data');
const ReactRouter = require('react-router');
const {Router, Route, hashHistory, IndexRoute} = ReactRouter;

//var MyTitle = require('./MyTitle');

/**
 * The root component of the application.
 * 
 * Uses ES6 syntax to create React component.
*/
class App extends React.Component {

	/**
	 * onEnter handler that is called when user wants to go to details route, gets information for the correct show based on user's request
	 * This is how parameters are handled in react-router, by a function which takes in the nextState and replace.
	 * 
	 * @param nextState The next router state
	 * @param replace Function that redirects to the next path
	 */
	assignShow(nextState, replace) {
		const show = data.shows[nextState.params.id];
		if (!show) {
			return replace('/');
		}
		Object.assign(nextState.params, show);
		return nextState;
	}
	
	constructor(props) {
		super(props);
		
		this.assignShow = this.assignShow.bind(this);
	}
	
	/** 
	 * React element which lays out the routes in the application.
	 * Layout is the background which will be in all pages in the app.
	 * Landing is the start page.
	 * /search describes the search page where user can search for movie titles.
	 * /details describes the details page where user selects a movie title after searching for it.
	 */
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Layout}>
					<IndexRoute component={Landing}/>
					<Route path='/search' component={Search} shows={data.shows}/>
					<Route path='/details/:id' component={Details} onEnter={this.assignShow}/>
				</Route>
			</Router>
		);
	}
	
}

ReactDOM.render(<App/>, document.getElementById('app'));


/*
const MyFirstComponent = () => (
	<div>
		<MyTitle title='Props are great!' color='rebeccapurple'/>
		<MyTitle title='Use props everywhere!' color='mediumaquamarine'/>
		<MyTitle title='Props are the best!' color='peru'/>
	</div>

);
*/
/*
var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitleFact = React.createFactory(MyTitle);

var MyFirstComponent = (
	div(null,
		MyTitleFact({title: 'Props are great!', color: 'rebeccapurple'}),
		MyTitleFact({title: 'Use props everywhere!', color: 'mediumaquamarine'}),
		MyTitleFact({title: 'Props are the best!', color: 'peru'})	
	)
);
*/

//ReactDOM.render(<MyFirstComponent/>, document.getElementById('app'));