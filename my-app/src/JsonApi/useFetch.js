import { useEffect, useState } from "react";
function useFetch(url) {
  const [state, setState] = useState({ data: null, loading: true });
  useEffect(() => {
    setState({ data: null, loading: true });
    fetch(url)
      .then((x) => {
        x.text();
      })
      .then((y) => {
        setState({ data: y, loading: false });
      });
  }, [url]);
  return state;
}
export default function LoadingUsage() {
  const { data, loading } = useFetch("http://numbersapi.com/43/trivia");
  return <>{loading ? "loading..." : data}</>;
}
