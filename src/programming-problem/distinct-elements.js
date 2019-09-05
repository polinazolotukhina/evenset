import React from 'react';
import { distinct } from './functions';
// DO NOT MODIFY THIS FILE
class Question extends React.Component {
    render () {
        const elements = distinct(this.props.arr1, this.props.arr2);
        return (
          <div className="question">
              We have two lists: <br/>
              {this.props.arr1.join()}<br/>
              {this.props.arr2.join()}<br/>
              The items that are in one list but not in both, <br/>
              sorted lowest to highest, are:<br/>
              {elements.join()}
          </div>
        );
    }
}

export default Question;
