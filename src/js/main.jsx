import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import { SecondsCounter } from './components/SecondsCounter';

// let counter = 0

// setInterval(() => {
//   counter++

//   const one = Math.floor(counter / 1)
//   const two = Math.floor(counter / 10)
//   const three = Math.floor(counter / 100)
//   const four = Math.floor(counter / 1000)

//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <SecondsCounter
//       numberOne={one}
//       numberTwo={two}
//       numberThree={three}
//       numberFour={four}
//     />,
//   )

// }, 100)


ReactDOM.createRoot(document.getElementById('root')).render(
  <SecondsCounter />,
)
