import React from 'react';
import { union } from './functions';
// DO NOT MODIFY THIS FILE
class Question extends React.Component {
    render () {
        const elements = union(this.props.arr1, this.props.arr2);
        return (
          <div className="question">
              We have two lists: <br/>
              {this.props.arr1.join()}<br/>
              {this.props.arr2.join()}<br/>
              The items that are in at least one of the lists, <br/>
              sorted lowest to highest, are:<br/>
              {elements.join()}
          </div>
        );
    }
}

export default Question;
