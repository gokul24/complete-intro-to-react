const React = require('react');
const ReactRouter = require('react-router');
const {Link, hashHistory} = ReactRouter;

/**
 * Component that describes the home page for the app (ES6 syntax).
 * It is a stateless component.
 */
class Landing extends React.Component {
	render() {
		return (
			<div className='app-container'>
				<div className='home-info'>
					<h1 className='title'>svideo</h1>
					<input onChange={this.handleTermEvent} className='search' type='text' value={this.props.searchTerm} placeholder='Search' />
					<Link to='/search' className='browse-all'>or Browse All</Link>
				</div>
			</div>
		)	
	}

}

/*
const Landing = () => (
	<div className='app-container'>
		<div className='home-info'>
			<h1 className='title'>svideo</h1>
			<form onSubmit={this.goToSearch}>
				<input onChange={this.handleTermEvent} className='search' type='text' value={this.props.searchTerm} placeholder='Search' />
			</form>

			<Link to='/search' className='browse-all'>or Browse All</Link>
		</div>
	</div>
);
*/

Landing.propTypes = {
  setSearchTerm: React.PropTypes.func,
  searchTerm: React.PropTypes.string
}

module.exports = Landing;