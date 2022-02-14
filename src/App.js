import {HashRouter as Router,Switch,Route} from "react-router-dom";
import Adduser from "./Components/Adduser";
import Allusers from "./Components/Allusers";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Allusers} exact/>
          <Route path="/allusers" component={Allusers} exact />
          <Route path="/adduser" component={Adduser} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
