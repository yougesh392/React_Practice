import "./Application_css/App.css";
// import Counter from "./SimpleState/Counter";
// import Notes from "./UseCallBackandMemo/Notes";
// import UseEffectHook from "./UseEffectHook/useEffectHook";
// import Random from "./JsonApi/Random";
// import FormUsage from "./UseStateCustomHook/usage";
import LoadingUsage from "./JsonApi/useFetch";
const App = () => {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <UseEffectHook /> */}
      {/* <FormUsage /> */}
      {/* <Random /> */}
      <LoadingUsage />
    </div>
  );
};

export default App;
