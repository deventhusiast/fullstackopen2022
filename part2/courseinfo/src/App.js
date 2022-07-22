import Course from './components/Course'
const App = ()=> {
  const courses =[
    {
    id: 1,
    name:"Half Stack application development",
    parts:[
      {
        name: 'Fundamentals of React',
        excerises: 10,
        id: 1
      },
      {
        name:'Using props to pass data',
        excerises: 7,
        id: 2
      },
      {
        name:'State of a component',
        excerises: 14,
        id: 3
      },
      {
        name: 'Redux',
        excerises: 11,
        id: 4
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        excerises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        excerises: 7,
        id: 2
      }
    ]
  }
]
  return <Course courses={courses}/>

}

export default App;
