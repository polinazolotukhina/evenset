import React from 'react';
import './alignment.css';
/*
display this as closely as you can using react
fill the entire component
small buttons are exactly square
large buttons are 2X1

|-------------------------------|
|       |       |       |       |
|   7   |   8   |   9   |       |
|       |       |       |       |
|-------|-------|-------|   +   |
|       |       |       |       |
|   4   |   5   |   6   |       |
|       |       |       |       |
|-------|-------|-------|-------|
|       |       |       |       |
|   1   |   2   |   3   |       |
|       |       |       |       |
|---------------|-------| ENTER |
|               |       |       |
|       0       |   .   |       |
|               |       |       |
|-------------------------------|
*/
class Question extends React.Component {
    render () {
        return (
          <div className="question">
              <div className="flex-container">
                <div className="myRow">
                    <div>
                      <div className="myRow">
                          <button >7</button>
                          <button>8</button>
                          <button>9</button>
                      </div>
                      <div className="myRow">
                          <button>4</button>
                          <button>5</button>
                          <button>6</button>
                      </div>
                    </div>
                    <button className="long">+</button>
                </div>
                <div className="myRow">
                    <div>
                      <div className="myRow">
                          <button >1</button>
                          <button>2</button>
                          <button>3</button>
                      </div>
                      <div  className="myRow">
                          <button className="zero">0</button>
                          <button className="dot">.</button>
                      </div>
                    </div>
                    <button className="long">enter</button>
                </div>
              </div>
          </div>
        );
    }
}

export default Question;
