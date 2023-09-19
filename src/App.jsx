import Panel from "../src/component/panel/panel";
import Topbar from "./component/topbar/topbar";
import Info from "./component/info/info";

function App() {

  return (
    <>
     <Topbar/>
     <div className="appContainer">
      <Panel/>
      <Info />
     </div>
    </>
  );
}

export default App;
