import { Fragment } from "react";

import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    // JSX expression must have one parent element : like <div>
    //<div>
    // Or can use Fragment, for having any unnecessary div in the browser
    // or juste have <> </> for remplace div/fragment in the code (alternative to the fragment)
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
    //</div>
  );
}

export default App;
