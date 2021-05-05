import _ from 'lodash'
// import './style.css'
// import imgobj from './aaa.jpg'
// import txt from './test.txt'
import printMe from './print'
// import {cube} from './math'

if(process.env.NODE_ENV !== 'production'){
  console.log('looks like we are in development mode');
}

function component(){
  return import('lodash').then(_ => {
    const element = document.createElement('div')
    const btn = document.createElement('button')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('Hello')

    btn.onclick = printMe.bind(null,'Hello')
    element.appendChild(btn)

    return element
  })

  

  // const img = new Image()
  // img.src = imgobj

  // element.appendChild(img)

}

component().then(component => {
  document.body.appendChild(component())
})

// if(module.hot){
//   module.hot.accept('./print.js',function(){
//     console.log('Accepting the updated printMe module');
//     printMe()
//     document.body.removeChild(element)
//     element = component()
//     document.body.appendChild(element)
//   })
// }