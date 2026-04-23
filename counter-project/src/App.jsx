import { useState } from 'react'



let App = () => {
  const [counter, setCounter] = useState(0)
  // const addvalue = () => {
  //   if (counter < 20) {
  //     setCounter(counter + 1)
  //   }

  // }
  // const decreasevalue = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1)
  //   }

  let maxval = 20

  let minval = 0

  const addvalue = () => {
    if(counter < maxval)
    setCounter(counter + 1)
  }
  const decreasevalue = () => {
    if(counter > minval){
    setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Counter</h1>

      <p>Counter Value : {counter}</p>
      <button onClick={addvalue}>+ Add Value</button>
      <button onClick={decreasevalue}>- Decrease Value</button>
    </>
  )
}

export default App
