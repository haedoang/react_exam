import React, {Component} from 'react';
import ExcerciseType from './ExcerciseType';
import './ExcerciseTypeList.css';

class ExcersiceTypeList extends Component {
    render(){
        const {list} = this.props;

        const result =  list.map( ex => (<ExcerciseType info={ex}  countDown={this.props.countDown}/>));

        return(
            <div>
                <div className="excercise-type-container">
                    {result}
                </div>
                <div className="body-weight-container">
                    body Weight
                </div>
            </div>
            )
        
    }



}

export default ExcersiceTypeList;