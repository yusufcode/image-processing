const sharp = require('sharp')

const img1 = './assets/images/importImages/1.jpg'
const img2 = './assets/images/importImages/2.jpg'
const img3 = './assets/images/importImages/3.jpg'
const img4 = './assets/images/importImages/4.png'
const img5 = './assets/images/importImages/5.jpg'
const img6 = './assets/images/importImages/6.jpg'

const img1Export = './assets/images/exportImages/1.jpg'
const img2Export = './assets/images/exportImages/2.jpg'
const img3Export = './assets/images/exportImages/3.jpg'
const img4Export = './assets/images/exportImages/4.png'
const img5Export = './assets/images/exportImages/5.jpg'
const img6Export = './assets/images/exportImages/6.jpg'

const definedFocusArea = {
  x:1500,
  y:130,
  width:2180,
  height:1280
}

const userInput = {
  w:1500,
  ratio: {
    x:16,
    y:9
  },
  q: 60
}

function calculatedData(focus,input){

  let result = {
    w: 0,
    h: 0,
  }

  if(input.w > focus.width){
    result.w = input.w
    result.h = parseInt((input.w / input.ratio.x) * input.ratio.y)
  } else {
    result.w = focus.width
    result.h = parseInt((focus.width / input.ratio.x) * input.ratio.y)
  }
  
  return result
}

sharp(img2).extract({
  left: definedFocusArea.x,
  top: definedFocusArea.y,
  width: calculatedData(definedFocusArea, userInput).w,
  height: calculatedData(definedFocusArea, userInput).h
}).jpeg({
  quality: userInput.q
}).toFile(img2Export).then(()=>{
  console.log('Image has generated.')
})