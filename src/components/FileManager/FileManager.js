import React, { Component } from 'react';
import "./FileManager.css";
import Header from '../Header/Header';
import FileList from "../FileList/FileList"
import generatedefaultFileSystem from '../../utils/defaultFiles';
import md5 from 'md5';
import { connect } from "react-redux";

class FileManager extends Component {
    state =  {
        fileSystem: generatedefaultFileSystem()
    }

    componentDidMount(){
        // console.log(this.props)
        // const { location: path } = this.props;
        // if (!localStorage.getItem('all-files')) {
        //     localStorage.setItem('all-files', JSON.stringify({ folders: [], files: [] }));
        //   }
        // this.getFiles(path)
    }


    handleOpen = (location) => {
        this.setState({directory: location})
    }

    getFiles = (path) => {
        const directory = path.split('/').pop();
        const directoryObj = { files: [], folders: [] };
        const files = JSON.parse(localStorage.getItem(directory)) || directoryObj;
        this.setState({directory: files});
    }



    showPathEntries = (parentPath, fileSystem) => {
    return fileSystem[md5(parentPath + '__folder__')]
      ? fileSystem[md5(parentPath + '__folder__')].children.map(
          childrenID => fileSystem[childrenID]
        )
      : [];
  };
  

    render() {
        const { fileSystem } = this.props;
        return (
            <div>
            <Header /> 
            <div className="FileManager">
                {this.showPathEntries(this.props.location, fileSystem).map(list => {
                    return (
                        <FileList  key={`${list.date}_${list.name}`} listInfo={list} />
                    )
                })}
                
            </div>
            
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        fileSystem: state.fileSystem
    }
}

export default connect(mapStateToProps)(FileManager);
