import React,{ Component } from 'react';
import './ExcerciseButton.css';


class ExcerciseButton extends Component{
    
    buttonHandler = (e) => {
        if(!e.target.id) {
            e.target.parentElement.click()
        return;
        }
        const {info} = this.props;

        console.log(e.target.text);
        const index = (!e.target.id) ? e.target.ParentNode.id : e.target.id; 
        this.props.countDown(info,index);

        //this.props.countDown(info, )

        //this.props.countDown((!e.target.id) ? e.target.parentNode.id : e.target.id, this.props.info.title);
    }
    
    render(){
        const {info} = this.props;
        return(
            <div>
            {info.sets.map((set,index)=> (
                               <div className={set === null ? ("excercise-button color-grey") : ("excercise-button color-red")}  
                                    onClick={this.buttonHandler}
                                    id={index} key={index}
                                    
                               >
                                    <div  
                                        className="excercise-button-number no-drag"
                                    >{set}</div>
                                </div>)
                                )
                }</div>
        )

    }
    
}

export default ExcerciseButton;