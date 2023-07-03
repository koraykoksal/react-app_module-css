import ButtonStyle from "./Button.module.css"

export const Button = ({btn}) => {
  return (

    <div className={ButtonStyle["title"]}>
    
    <button className={ButtonStyle["btn-blue"]}>{btn}</button>

    </div>
  )
}
