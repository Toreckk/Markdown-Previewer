import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

marked.setOptions({
  breaks: true,
  sanitize: true
});

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
      markdown:'',
      test:'',
    }
  }
  handleChange(e){
    // let newMarkdown = e.target.value.replace(/\r?\n/g, '<br />');
    let newValue = e.target.value;
    this.setState({
      markdown: newValue,
      test: marked(newValue.replace("\\n","\n")),
    });
  }
  render() {
    
    // let newValue = this.state.test.replace("\\n","<br/>")
    console.log(this.state.test);
    return (
     
      <div id="container">
        <div id="well">
          <div id = "markdown" className="flex-content">
              <textarea onChange={this.handleChange.bind(this)} value={this.state.markdown}></textarea>
          </div>
          <div id = "preview" className="flex-content" dangerouslySetInnerHTML = {{__html:this.state.test}}>
            
          </div>
        </div>
      </div>

    );
  }
}

export default App;
