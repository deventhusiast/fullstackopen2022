import React from 'react'
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
    {props.parts.map(part =><Part key={part.id} name={part.name} excerises={part.excerises}/>)}
    </>
  )
}
const Total =(props) =>{
  const total = props.parts.reduce((prev,curr) => ({excerises: prev.excerises + curr.excerises}))
  return(
    <p>total of {total.excerises} excerises</p>
  )
}
const Course = (props) =>{
  return(
    <div>
    {props.courses.map(course=>
      <div key={course.id}>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
      </div>
    )}

    </div>
  )
}
export default Course
