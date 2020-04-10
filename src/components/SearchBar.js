import React, {Component} from "react";

import { Paper, TextField } from "@material-ui/core"

class SearchBar extends Component{
    state ={
        searchTerm: "",
    }

    changeHandle = (event) => this.setState({searchTerm: event.target.value})

    submitHandler = (event) =>{
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault()
    }

    render(){
        return(
            <Paper elevation={6} style={{padding: "20px 60px", width: "85%", margin: "5px auto"}}>
                <form onSubmit={this.submitHandler}>
                    <TextField fullWidth label="Search..." onChange={this.changeHandle}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;