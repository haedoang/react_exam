import React, {Component} from 'react';
import './ExcerciseType.css';


import ExcerciseButton from './ExcerciseButton';

class ExcerciseType extends Component {


    render(){
        const {info} = this.props;
        return (
            <div className="ExcerciseType-container">
                <div className="ExcerciseType-container-header">
                    <div className="ExcerciseType-container-header-title">
                        {this.props.info.title}
                    </div>
                    <div className="ExcerciseType-container-header-weight">
                        5x5 97.5kg
                    </div>
                </div>    
                <div className="excerciseType-container-body">
                    <ExcerciseButton info={this.props.info} countDown={this.props.countDown}  />    
                </div>    
            </div>
        )
    }



}

export default ExcerciseType;