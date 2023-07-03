import { Button } from "../button/Button"
import CardtStyle from "./Card.module.css"

export const Card = ({ lang, btn, img }) => {
  return (
    <div>
    

      <h1 className={CardtStyle["title"]}>{lang}</h1>
      <img className={CardtStyle["images"]} src={img} alt="image" />
      <Button btn={btn} />

    </div>
  )
}
