import React from 'react';
import DisplayItems from './DisplayItems';
import './App.css';


class App extends React.Component {

  constructor(){
    super();
    this.state = {
      data : []
    };
  }

addItem = (e) =>{
if(this.inputElement.value !== "")
{
  var item = {
    text : this.inputElement.value,
    key : Date.now()
  };

  this.state.data.push(item);
  this.setState({data:this.state.data});

  this.inputElement.value = "";
}
//console.log(this.state.data);
e.preventDefault();
}

deleteItem = (key) => {

  var finalItems = this.state.data.filter((item) => {return (item.key !== key)});
  //console.log(finalItems);
  this.setState({data:finalItems});
  
}

editItem = (text,key) => {

  var edititems = this.state.data.map((item) => {

    if(item.key === key)
    {
      item.text = text;
    }
    return item;

  });

  this.setState({data:edititems});

}

  render(){
    console.log("change");
    return (
      <div className="myApp">
        <div className="header">
        <form onSubmit = {this.addItem}>
          <input type="text" placeholder="ToDo...." ref={(ref_node) => {this.inputElement = ref_node}} />
          <button type="submit">ADD</button>
        </form>
        </div>

      <DisplayItems itemArray={this.state.data} delete={this.deleteItem} edit={this.editItem} />
      
      </div>
    
  );
  
}
}
export default App;

