const Header =(props) =>{
  return (
    <h1>{props.course}</h1>
  )
}
const Part =(props) =>{
  return(
    <p>{props.name} {props.excerises}</p>
  )
}
const Content = (props) =>{
  return(
    <>
    <Part name={props.parts[0].name} excerises={props.parts[0].excerises}/>
    <Part name={props.parts[1].name} excerises={props.parts[1].excerises}/>
    <Part name={props.parts[2].name} excerises={props.parts[2].excerises}/>
    </>
  )
}
const Total =(props) =>{
  return(
    <p>Number of excerises {props.parts[0].excerises + props.parts[1].excerises +props.parts[2].excerises}</p>
  )
}
const App = ()=> {
  const course ={
    name:"Half Stack application development",
   parts:[
    {
    name: 'Fundamentals of React',
    excerises: 10
  },
  {
    name:'Using props to pass data',
    excerises: 7
  },
  {
    name:'State of a component',
    excerises: 14
  }
]
}
  return(
  <div>
      <Header course= {course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
  </div>
);

}

export default App;
