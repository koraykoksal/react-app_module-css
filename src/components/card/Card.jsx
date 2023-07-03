import { Button } from "../button/Button"
import "./card.css"


export const Card = ({ lang, btn, img }) => {
  return (
    <div>
    

      <h1>{lang}</h1>
      <img src={img} alt="image" />
      <Button btn={btn} />

    </div>
  )
}
