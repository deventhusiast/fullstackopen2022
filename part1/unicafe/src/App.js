import {useState} from 'react'

const StatisticLine  = ({name, value}) =><tr><td>{name} {value}</td></tr>
const Statistics = (props) =>{
  const [good,neutral,bad] =props.v
  if(good === 0 && neutral ===0 && bad === 0){
    return <h2>No feedback given</h2>
  }
  return(
    <>
    <h2>statistics</h2>
    <table>
    <tbody>
    <StatisticLine name='good' value ={good}/>
    <StatisticLine  name='neutral' value={neutral}/>
    <StatisticLine  name='bad' value={bad}/>
    <StatisticLine  name='all' value={good+neutral+bad}/>
    <StatisticLine name='average' value={(good-bad)/(good+neutral+bad)}/>
    <StatisticLine name='positive' value={good/(good+neutral+bad)*100 +'%'}/>
    </tbody>
    </table>
    </>
  )

}
const Header = ({feedback}) =><h1>{feedback}</h1>
const Button =({handleClick,text})=><button onClick={handleClick}>{text}</button>
const App =()=> {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] =useState(0)
  let v = [good,neutral,bad]
  return (
    <div>
    <Header feedback='give feedback'/>
    <Button handleClick={() => setGood(good+1)} text='good'/>
    <Button handleClick ={() =>setNeutral(neutral+1)} text='neutral'/>
    <Button handleClick={() =>setBad(bad+1)} text='bad'/>
    <Statistics v={v}/>
    </div>
  );
}

export default App;
