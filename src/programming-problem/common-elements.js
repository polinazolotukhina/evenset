import React from 'react';
import { intersection } from './functions';
// DO NOT MODIFY THIS FILE
class Question extends React.Component {
    render () {
        const elements = intersection(this.props.arr1, this.props.arr2);
        return (
          <div className="question">
              We have two lists: <br/>
              {this.props.arr1.join()}<br/>
              {this.props.arr2.join()}<br/>
              The items that are in each list at least once, <br/>
              sorted lowest to highest, are:<br/>
              {elements.join()}
          </div>
        );
    }
}

export default Question;
