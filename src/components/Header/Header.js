import React, { Component } from 'react';
import "./Header.css"
import Modal from '../Modal/Modal';

class Header extends Component {
    state = {
        open: false,
        openModal : false
    }


    handleOpenDropDown = () => {
        this.setState({ open: !this.state.open})
    }

    handleAddFile = () => {
        this.openModal();
    }

    handleAddFolder = () => {
        this.openModal();
    }

    openModal = () => {
        this.setState({ openModal : true})
    }


     render() {
        return (
            <div className="Header">
                <p className="file" onClick={this.handleOpenDropDown}>File</p>
                {this.state.open &&  (
                <div className="file_children">
                    <p onClick={this.handleAddFile}>Add File</p>
                    <p onClick={this.handleAddFolder}>Add Folder</p>
                    <p>Exit</p>
                </div>)}
                {this.state.openModal && <Modal type="File"  /> }
            </div>
        )
    }
}

export default Header
