import { Route, Switch } from "react-router-dom";
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/cocktail/:id' component={SingleCocktail} />
                <Route path='*' component={Error} />
            </Switch>
        </div>
    )
}

export default App