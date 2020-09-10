import React,{Component} from 'react';
import ExcerciseTypeList from './components/ExcerciseTypeList';

const defaultValue = 5;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      exercises :[ 
        {
          title : 'Squart',
          weight : '',
          //sets : new Array(5).fill(null)
          sets : new Array(5).fill(null)
          //new Array(5).fill(null)
        },
        {
          title : 'Bench Press',
          weight : '',
          sets : new Array(5).fill(null)
        },
        {
          title : 'Barbell Row',
          weight : '',
          sets : new Array(5).fill(null)
          
          //new Array(5).fill(null)
        },
      ]
    }
  }

  // this.setState({
  //   information: information.map(
  //     info => id === info.id
  //       ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
  //       : info // 기존의 값을 그대로 유지
  //   )

  calculate(exercise, index){
    const num = exercise.sets[index];
    let result;

   
    if(num === null) result = defaultValue;
    else if(num < 1) result = null;
    else result =  num -1;

    exercise.sets[index] = result;

    return exercise;
  }

  countDown = (exercise, index) => {
    const {exercises} = this.state;

    exercise = this.calculate(exercise, index);


    this.setState({
      exercises : exercises.map(
        ex => ex.title === exercise.title ? {...exercises, ...exercise} : ex
      )
    })

    console.log(this.state.excercises)

    // this.setState({
    //   excercises : excercises.map(
    //     ex => ex.title === excercise.title
    //      ? {...ex, ...exercise}
    //      : ex
    //    )
    //   })
  }
     
  render(){
    return (
      <ExcerciseTypeList list={this.state.exercises} countDown={this.countDown} />
    )
  }
}

export default App;
