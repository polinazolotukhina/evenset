import React from 'react';

class Question extends React.Component {
    state = {
        count: 0
    }
    render () {
        const { count }= this.state;
        return (
          <div className="question">
              On click, the count increases by 1.<br/>
              It always starts at 0
              <button  onClick={()=>{ this.setState({ count: count+1 }) }}>
                count={count}
              </button>
          </div>
        );
    }
}

export default Question;
