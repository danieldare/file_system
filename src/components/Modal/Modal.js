import React, { Component } from 'react';
import "./Modal.css";
import { addType } from '../../Redux/actions/fileSystem';
import { connect } from 'react-redux';

class Modal extends Component {
    state = {
        type: "",
        creator: "",
        open: false
    }

    handleModalOpen = (bool) => {
        this.setState({open:  bool})
    }

    handleChange = (e) => {
        this.setState({ [e.target.name ] : e.target.value})
    }

    handleSubmit = (e, type) => {
        e.preventDefault();
        
        const newType = {
            ...this.state
        }
        this.props.addType(this.state, );
    }

    render() {
        const { type } = this.props;
        return (
            <div className="Modal">
                <h3 className="add_title">{`Add ${type}`}</h3>
                <form onSubmit={this.handleSubmit}>
                <input  name="type" onChange={this.handleChange}type="text" className="text_input" placeholder={`${type} Name`}/>
                <input  name="creator" onChange={this.handleChange} type="text" className="text_input" placeholder="Creator"/>
                <div className="btn-group">
                    <button className="btn btn-cancel">Cancel</button>
                    <button className="btn btn-add">{`Add ${type}`}</button>
                </div>
                </form>
            </div>

        )
    }
}



export default connect( undefined,{ addType })(Modal)
