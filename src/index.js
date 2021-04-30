import _ from 'lodash'
import './style.css'
// import imgobj from './aaa.jpg'
import txt from './test.txt'
import printMe from './print'

function component(){
  const element = document.createElement('div')
  const btn = document.createElement('button')
  element.innerHTML = _.join(['Hello', 'webpack',txt], ' ')
  element.classList.add('Hello')

  btn.onclick = printMe
  element.appendChild(btn)
  

  // const img = new Image()
  // img.src = imgobj

  // element.appendChild(img)

  return element
}

document.body.appendChild(component())