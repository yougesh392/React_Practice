import "./Application_css/App.css";
import Counter from "./SimpleState/Counter";
import Notes from "./UseCallBackandMemo/Notes";
import UseEffectHook from "./UseEffectHook/useEffectHook";
import Random from "./JsonApi/Random";
import ContextComponent from "./Context";
import UseRef from "./UseRef";
import UseReducer from "./UseReducer";
import UseMemo from "./UseMemo";
import FormUsage from "./UseStateCustomHook/usage";
import LoadingUsage from "./JsonApi/useFetch";
import UseCallBack from "./UseCallBackandMemo/UseCallBack";
import UseLayoutEffect from "./UserLayoutEffect";
const App = () => {
  return (
    <div className="App">
      {/* <Notes />
      <Counter />
      <UseEffectHook />

      <Random />
      <ContextComponent />
      <UseRef />
      <UseReducer />
      <UseMemo />

      <FormUsage />

      <LoadingUsage /> */}
      <UseCallBack />
      <UseLayoutEffect />
    </div>
  );
};

export default App;
