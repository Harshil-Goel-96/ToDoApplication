import React from 'react';
import FlipMove from 'react-flip-move';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";


class DisplayItems extends React.Component{

//constructor(props)
//{
//  super(props);
// this.delete = this.delete.bind(this);
//}

    //delete(key)
    // {
    //     this.props.delete(key);
    // }
    
    render(){
       
       
        var listitems = this.props.itemArray.map((litem) => {

            return(<li key={litem.key}><input type="text" value={litem.text} onChange={(e) => this.props.edit(e.target.value,litem.key)} /><span onClick={() => {this.props.delete(litem.key)}}><FontAwesomeIcon icon={faTrash} /></span></li>);
         });
         
        return(
            
            <ul className="theList">
                <FlipMove duration={250} easing="ease-in">
                {listitems}
                </FlipMove>
            </ul>
            
        );
    }
}

export default DisplayItems;