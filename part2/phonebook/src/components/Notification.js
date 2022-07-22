 const Notification =({message}) =>{
  if(message === null){
    return null
  }
  const notification  = message.includes('removed') ?  <div className='error'>{message}</div> : <div className ='success'>{message}</div>
  return notification

}
export default Notification
