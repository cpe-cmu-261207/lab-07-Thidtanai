import { randomPainted, resetPainted } from "../stores/PixelPainterStore"

const Utility = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button onClick={() => {resetPainted()}} className="w-36">Clear</button>
      <button onClick={() => {randomPainted()}} className="w-36">Random color</button>
    </div>
  )
}

export default Utility