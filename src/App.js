import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

// const TopicDetail = (props) => {
//   return (
//     <div>
//       <h1>Topic detail page: {props.match.params.topicId}</h1>
//     </div>
//   );
// };
function App() {
  return (
    <div>
      <Switch>
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/' component={HomePage} />
        {/*<Route path='/topics/:topicId' component={TopicDetail} />*/}
      </Switch>
    </div>
  );
}

export default App;
