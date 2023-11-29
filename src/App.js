import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import "bulma/css/bulma.css";

function App() {

  return (
    <div>
      <Header/>
      <section className="hero">
        <div className="hero-body">
      <ItemListContainer greeting={'No pierdas la oportunidad y contactate con nosotros!'}/>
        </div>
      </section>

    </div>
  )
}


export default App;
