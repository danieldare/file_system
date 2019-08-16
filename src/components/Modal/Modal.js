import React, { Component } from 'react';
import "./Modal.css";
import { addType } from '../../Redux/actions/fileSystem';
import { connect  } from 'react-redux';
import { withRouter } from "react-router-dom";

class Modal extends Component {
    state = {
        name: "",
        creator: "",
        open: false
    }

    handleModalOpen = (bool) => {
        this.setState({open:  bool})
    }

    handleChange = (e) => {
        this.setState({ [e.target.name ] : e.target.value})
    }

    formatDate = (date) => {
        const formattedDate = new Intl.DateTimeFormat('en-GB', {
          month: 'long', year: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true
        }).format(date);
        return formattedDate;
      }

    handleSubmit = (e) => {
        e.preventDefault();
        let type;
        if(this.props.type === "File"){
            type = "FILE"
        }else{
            type = "FOLDER"
        }

        const num = Object.values(this.props.fileSystem).map(data => {
            if(data.parentPath === this.props.location.pathname){
                console.log(data)
               return data.parentID
            }
        })
        
        console.log(num)
        
        const newType = {
            ...this.state,
            type: type,
            name: this.state.name,
            creator: this.state.creator,
            size: 5,
            date: this.formatDate(new Date()),
            parentID: '1382b6993e9f270cb1c29833be3f5750',
            parentPath: this.props.match.url,
            path: ''
        }
        this.props.addType(newType);
        this.props.closeModal();
    }

    render() {
        console.log(this.props)
        const { type } = this.props;
        return (
            <div className="Modal">
                <h3 className="add_title">{`Add ${type}`}</h3>
                <form onSubmit={this.handleSubmit}>
                <input  name="name" onChange={this.handleChange}type="text" className="text_input" placeholder={`${type} Name`}/>
                <input  name="creator" onChange={this.handleChange} type="text" className="text_input" placeholder="Creator"/>
                <div className="btn-group">
                    <button className="btn btn-cancel" type="button">Cancel</button>
                    <button className="btn btn-add" type="submit">{`Add ${type}`}</button>
                </div>
                </form>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        fileSystem: state.fileSystem
    }
}

export default withRouter(connect( mapStateToProps,{ addType })(Modal))
