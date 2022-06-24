import "./Application_css/App.css";
// import Counter from "./SimpleState/Counter";
// import Notes from "./UseCallBackandMemo/Notes";
// import UseEffectHook from "./UseEffectHook/useEffectHook";
// import Random from "./JsonApi/Random";
import ContextComponent from "./Context";
import UseRef from "./UseRef";
import UseReducer from "./UseReducer";
import UseMemo from "./UseMemo";
const App = () => {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <UseEffectHook /> */}
      {/* <Random /> */}
      {/* <ContextComponent />
      <UseRef /> */}
      {/* <UseReducer /> */}
      <UseMemo />
    </div>
  );
};

export default App;
