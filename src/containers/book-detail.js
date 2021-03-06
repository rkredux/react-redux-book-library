import React, {Component} from "react"; 
import { connect } from "react-redux"; 


class BookDetail extends Component{
	
	render(){

		if (!this.props.book){
			return <div>Select a book to get started</div>
		} else {
			return(
				<div>
					<h3>Details for:</h3>
					<div>Title: {this.props.book.title}</div>
					<div>Pages: {this.props.book.page}</div>
					<div>Author: {this.props.book.author}</div>
				</div>
			);
		}
	}

}


function mapStateToProps(state){
	return {
		book: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail); 

