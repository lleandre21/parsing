import React from 'react';
import Papa from 'papaparse';

bookinfo = [];

class FileReader extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        csvfile: undefined,
        printContent: undefined
      };
      this.updateData = this.updateData.bind(this);
      this.printTable = this.printTable.bind(this);
    }

    handleChange = event => {
      this.setState({
        csvfile: event.target.files[0]
      });
    };

    printTable() {
      this.setState({
        printContent: bookinfo
      })
    }

    importCSV = () => {
      const { csvfile } = this.state;
      Papa.parse(csvfile, {
        complete: this.updateData,
        header: true
      });
    };

    updateData(info) {
      var data = info.data;

      bookinfo = data;
      console.log(bookinfo);
    }


    printData() {
      if(this.state.printContent){
        return (
          this.state.printContent.map((contentinfo) =>
            <div>
              <h3>Author: {contentinfo.Author}</h3>
              <h3>Title: {contentinfo.Title}</h3>
              <h3>ISBN:  {contentinfo.ISBN}</h3>
              <h3>Format:  {contentinfo.Format}</h3>
              <h3>Pages:  {contentinfo.Pages}</h3>
              <h3>Publisher: {contentinfo.Publisher}</h3>
              <h3>Genre:  {contentinfo.Genre}</h3>
            </div>
          )
        );
      }
      else {
        // console.log(this.state.printContent);
        return(
          <div>
            <h3>Author: </h3>
            <h3>Title: </h3>
            <h3>ISBN:  </h3>
            <h3>Format:  </h3>
            <h3>Pages:  </h3>
            <h3>Publisher: </h3>
            <h3>Genre:  </h3>
          </div>
        )
      }
    }

    render() {
      //console.log(this.state.csvfile);
      return (
        <div className="App">
          <h2>Import CSV File!</h2>
          <input
            className="csv-input"
            type="file"
            ref={input => {
              this.filesInput = input;
            }}
            name="file"
            placeholder={null}
            onChange={this.handleChange}
          />
          <p />
          <button onClick={this.importCSV}> Upload now!</button>
          <button onClick={this.printTable}>Show table</button>
          <div>
            {this.printData()}
          </div>
        </div>
      );
    }
  }

  export default FileReader;