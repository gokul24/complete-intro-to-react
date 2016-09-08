const React = require('react');
const ShowCard = require('./ShowCard');
const Header = require('./Header');

class Search extends React.Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			searchTerm: 'this is the default searchTerm'
		}
		
		this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	}
	
	handleSearchTermChange (event) {
		this.setState({ searchTerm: event.target.value })
	}
	
	render() {
		return (
			<div className='container'>
				<Header handleSearchTermChange={this.handleSearchTermChange} showSearch searchTerm={this.state.searchTerm} />
				<div className='shows'>
					{this.props.route.shows
					.filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0) 
					.map((show, index) => (
						<ShowCard {...show} key={index} id={index}/>
					))}
				</div>
			</div>
		
		)
		
	}
	
}


/*
const Search = () => (
	<div className='container'>
		<header className='header'>
			<h1 className='brand'>svideo</h1>
			<input type='text' className='search-input' placeholder='Search'/>
		</header>
		<div className='shows'>
			{data.shows.map((show, index) => (
				<ShowCard {...show} key={index} id={index} />
			))}
		</div>
	</div>
);
*/
module.exports = Search;