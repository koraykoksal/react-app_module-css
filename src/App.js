
import { Card } from "./components/card/Card"
import data from "./data"


function App() {


  console.log(data);

  return (
    <>

      {/* jsx içinde js kodu yazılacak sa süslü içinde belirtmek gerekiyor */}

      {/* tek satırlık işlem yani single statement işlemi yapılacaksa normal parantez içinde yapılır. */}
      
      
      {/* {data.map(({ id, language, img, btnName }) => (
        <Card key={id} lang={language} img={img} btn={btnName} />
      ))} */}


      {/* birden fazla satırlı işlem yapılacaksa return ifadesi ile işlem yapılmalıdır */}
      {data.map((item) =>{

        const { id, language, img, btnName } = item

        return <Card key={id} lang={language} img={img} btn={btnName} />

      })}


      
    </>
  )
}

export default App
