import Header from '../header/header'
import Dogs from '../pets/dogs'
import Cats from '../pets/cats'
import Banner from '../banner/banner'
import Footer from '../footer/footer'

import './App.css'

function App() {
  return (
    <div className="allPage">
      <Header />

      <main className="layout">
        <div className="pets-area">
          <Dogs />
          <Cats />
        </div>

        <Banner />
      </main>

      <Footer />
    </div>
  )
}
export default App