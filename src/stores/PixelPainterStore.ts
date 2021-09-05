import { O_EXCL } from 'constants'
import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][] ,
  selectedColor: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  selectedColor: "#FFFFFF"
})

//SelectColor
export const setSelectedColor = (color: string) =>{
  PixelPainterStore.update(
    x => { x.selectedColor = color }
  )
}

//Cavas
export const paintColor =(i: number, j: number) =>{
  PixelPainterStore.update(
    x => { x.canvas[i][j] = x.selectedColor}
  )
}

//Utility
export const resetPainted =() =>{
  PixelPainterStore.update(
    x => {x.canvas = createEmptyCanvas()}
  )
}

export const randomPainted =() => {
  const Color =['#804000', '#FE0000', '#FE6A00', '#FFD800', '#00FF01', '#FFFFFF', '#01FFFF', '#0094FE', '#0026FE', '#B100FE', '#FF006E']
  let randColor = '#FFFFFF'
  PixelPainterStore.update(x =>{
    for (let i=0; i<16; i++){
      x.canvas[i] = []
      for (let j=0; j<16; j++){
        randColor = Color[Math.floor(Math.random()*Color.length)]
        x.canvas[i].push(randColor)
      }
    }
  })
}