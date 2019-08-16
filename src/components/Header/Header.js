import React, { Component } from 'react';
import "./Header.css"
import Modal from '../Modal/Modal';
import Folder from "../folder.png";

class Header extends Component {
    state = {
        open: false,
        openModal : false,
        type: null
    }


    handleOpenDropDown = () => {
        this.setState({ open: !this.state.open})
    }

    handleAddFile = () => {
        this.handleType("File");
        this.openModal();
    }

    handleAddFolder = () => {
        this.handleType("Folder");
        this.openModal();
    }

    openModal = () => {
        this.setState({ openModal : true})
    }

    closeModal = () => {
        this.setState({ openModal : false})
    }

    handleType = (type) => {
        if(this.handleAddFile){
            this.setState({ type })
        }else if(this.handleAddFolder){
            this.setState({ type })
        }
    }


     render() {
        return (
            <nav>
            <div className="Header">
                <div className="header-content">
                <p className="file" onClick={this.handleOpenDropDown}>File</p>
                <div className="file_manager"><img src={Folder} className="icon" /> X-FileManger</div>
                </div>
                {this.state.open &&  (
                <div className="file_children">
                    <p onClick={this.handleAddFile}>Add File</p>
                    <p onClick={this.handleAddFolder}>Add Folder</p>
                    <p>About fileManager</p>
                    <p>Exit</p>
                </div>)}
                {this.state.openModal && <Modal type={this.state.type} closeModal={this.closeModal}  /> }
                
            </div>
            <div className="navigation_bar">
                <div className="nav-btns">
                    <span>{`<`}</span>
                    <span>{`>`}</span>
                </div>
                <div className="search-container">
                    <input type="text" className="search_input" placeholder="Search box" />
                </div>
            </div>
            </nav>
        )
    }
}

export default Header;
