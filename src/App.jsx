import Footer from "./footer"
import Movies from "./movies"
import NavBar from "./NavBar"
import Series from "./series"
import TrendingWeekElement from './TrendingWeekElement'

function App() {
  return (
    <>
      <NavBar />
      <p id="websiteTitle">Trending this week:</p>
      <TrendingWeekElement />
      <div id="SetiesTitle">
        <p>~ Series ~</p>
      </div>
      <Series />
      <div id="MoviesTitle">
        <p>~ Movies ~</p>
      </div>
      <Movies />
      <Footer />
    </>
  )
}

export default App
