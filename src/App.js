import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

marked.setOptions({
  breaks: true,
  sanitize: true,
});

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        rawInput:initialValue,
        markdown:marked(initialValue),
    }
  }
  handleChange(e){
    let newValue = e.target.value;
    this.setState({
      rawInput: newValue,
      markdown: marked(newValue.replace("\\n","\n")),
    });
  }
  render() {
    console.log(this.state.test);
    return (
     
      <div id="container">
          <div id = "markdown" className="flex-content">
              <textarea onChange={this.handleChange.bind(this)} value={this.state.rawInput}></textarea>
          </div>
          <div id = "preview" className="flex-content" dangerouslySetInnerHTML = {{__html:this.state.markdown}}>
            
          </div>
      </div>

    );
  }
}
const initialValue = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
export default App;
