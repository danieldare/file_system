import React, { Component } from "react";
import Folder from "../folder.png";
import Jpg from "../jpg.png";
import NoExt from "../paper.png";
import Pdf from "../pdf.png";
import Docs from "../doc.png";
import { Link } from "react-router-dom";
import { FOLDER, FILE } from "../../Redux/actions/types";



class FileList extends Component {
    render(){
        const { listInfo: { name, path, type }} = this.props;
        return(
            <Link to={type === FOLDER && path }>
                <div className="Folder">
                    {type === FOLDER && <img src={Folder} className="img" />}
                    {(type === FILE && !name.includes(".")) &&  <img src={NoExt} className="img" />}
                    {name.includes("pdf") && <img src={Pdf} className="img" />}
                    {name.includes("docx") && <img src={Docs} className="img" />}
                    {name.includes("jpg")&& <img src={Jpg} className="img" />}
                    <p className="folder_name">{name}</p>
                </div>
            </Link>
        )
    }
}

export default FileList;