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

class App extends React.Component {
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