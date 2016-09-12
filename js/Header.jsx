const React = require('react');
const ReactRouter = require('react-router');
const { Link } = ReactRouter;

/**
 * Component that describes the header view with an input box where user can search for movie.
 */
class Header extends React.Component {
	
	constructor (props) {
		super(props);

		this.state = {
		  searchTerm: 'this is the default searchTerm'
		}

		this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	}
	
	/**
	 * This is an event handler for whenever user changes the text in the input box, it updates the state/search results real time.
	 */
	handleSearchTermChange (event) {
		this.setState({ searchTerm: event.target.value });
	}
  
	render () {
		let utilSpace;
		if (this.props.showSearch) {
			utilSpace = <input type='text' className='search-input' placeholder='Search' value={this.props.searchTerm} onChange={this.props.handleSearchTermChange} />
		} else {
		  utilSpace = (
			<h2 className='header-back'>
			  <Link to='/search'>
				Back
			  </Link>
			</h2>
		  )
		}
		return (
		  <header className='header'>
			<h1 className='brand'>
			  <Link to='/' className='brand-link'>
				svideo
			  </Link>
			</h1>
			{utilSpace}
		  </header>
		)
	}
}

Header.propTypes = {
	handleSearchTermChange: React.PropTypes.func,
	showSearch: React.PropTypes.bool,
	searchTerm: React.PropTypes.string
}

module.exports = Header;