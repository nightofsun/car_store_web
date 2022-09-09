import { piexif } from "piexifjs"
// export function tranfromImage(base64Str) {
//     let canvas = document.getElementById('canvas')
//     let orientation = getOrientation(base64Str)
//     let ctx = canvas.getContext('2d')
//     let img = new Image()
//     img.src = base64Str
//     console.log(orientation)
//     return new Promise(resolve=> {
//         img.onload = () => {
//             ctx.translate(100,100)
//             // switch (orientation) {
//             //     case 8 : /*ctx.rotate(0*Math.PI/180)*/ break;
//             //     case 6 : ctx.rotate(270*Math.PI/180); break;
//             //     case 3 : ctx.rotate(90*Math.PI/180); break;
//             //     default: break;
//             // }
//             // ctx.rotate(90*Math.PI/180)
//             ctx.drawImage(img,0,0)

//             resolve(canvas.toDataURL())
//         }
//     })
// }
export function rotate(srcBase64, callback) {
    const canvas = document.createElement('canvas');
    let ctx = canvas.getContext("2d");
    let image = new Image();
    // let degrees = getOrientation(srcBase64);
    image.onload = function () {
    //   canvas.width = 0 % 180 === 0 ? image.width : image.height;
    //   canvas.height = 0 % 180 === 0 ? image.height : image.width;
    canvas.width = image.width
    canvas.height = image.height
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(0 * Math.PI / 180);
      ctx.drawImage(image, image.width / -2, image.height / -2);
  
      callback(canvas.toDataURL());
    };
  
    image.src = srcBase64;
}
function getOrientation(base64Str) {
    console.log(piexif.load(base64Str))
    let orientation = piexif.load(base64Str)['0th'][274]
    // if(orientation == 8){
    //     return 0
    // }
    // else if(orientation == 3){
    //     return 0
    // }
    // else if(orientation == 6){
    //     return 180
    // }
    return 0
}