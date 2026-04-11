import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// function MyApp() {
//   return (
//    <div>
//     <h1>Praveen Kumar</h1>
//     </div>
//   )
// }

// const createReactelement = React.createElement(
//   'a',
//   {"href": "http://www.google.com",
//     "target" : "_blank"
//   },
//   "Click To Visit Google"
// )

const AnotherElement = () => (
  <a href="https://google.com" target='_blank'> Click Me</a>
)

createRoot(document.getElementById('root')).render(
  <>
   
    <AnotherElement />
    </>
  )
  