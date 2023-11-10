import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
import Meals from "./components/Meals";
import Categories from "./components/Categories";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meals />      
      <Categories />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
