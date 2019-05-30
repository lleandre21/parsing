import React from 'react';
import Papa from 'papaparse';

bookinfo = [];

class FileReader extends React.Component {
    constructor() {
      super();
      this.state = {
        csvfile: undefined,
        print : undefined
      };
      this.updateData = this.updateData.bind(this);
    }
  
    handleChange = event => {
      this.setState({
        csvfile: event.target.files[0]
      });
    };

    change(event) {
      this.setState({
        print : 'yes',
      })
      console.log(event.target.print);
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
      if(this.state.print == 'yes'){
      return (
      this.bookinfo.map((contentinfo) => 
      //<Content>
      //</Content>
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
      );}
      else {
        <div>
            <h3>Author: </h3>      
            <h3>Title: </h3>   
            <h3>ISBN:  </h3>   
            <h3>Format:  </h3>   
            <h3>Pages:  </h3>   
            <h3>Publisher: </h3>
            <h3>Genre:  </h3>   
      </div>
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
          <button onClick={this.printData()}> Show Data</button>
          
            
        </div>
      );
    }
  }
  
  export default FileReader;