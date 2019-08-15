import React, { Component } from "react";
import Folder from "../folder.png";
import { Link } from "react-router-dom";



class FileList extends Component {
    render(){
        const { listInfo: { name, path }} = this.props;
        return(
            <Link to={path}>
                <div className="Folder">
                    <img src={Folder} className="img" />
                    <p className="folder_name">{name}</p>
                </div>
            </Link>
        )
    }
}

export default FileList;