import React from 'react';

class Question extends React.Component {
    state ={
        count:this.props.initialValue
    }
    render () {
        const {  count } =  this.state;
        return (
          <div className="question">
              On click, the count increases by 1.<br/>
              It started at {this.props.initialValue}
              <button  onClick = {()=>{ this.setState({ count: count +1 })}}>
                count = {count}
              </button>
          </div>
        );
    }
}

export default Question;
