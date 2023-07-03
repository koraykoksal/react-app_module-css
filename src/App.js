
import { Card } from "./components/card/Card"
import data from "./data"


function App() {


  console.log(data);

  return (
    <>

      {/* jsx içinde js kodu yazılacak sa süslü içinde belirtmek gerekiyor */}
      
      {data.map(({ id, language, img, btnName }) => (
        <Card key={id} lang={language} img={img} btn={btnName} />
      ))}


      
    </>
  )
}

export default App
