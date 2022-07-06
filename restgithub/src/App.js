import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-material.css";
function App() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const [isReady, setReady] = useState(false);
  const fetchData = () => {
    setReady(false);
    fetch(`https://api.github.com/search/repositories?q=${keyword}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.items);
        setReady(true);
        // console.log(JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const renderData = () => {
    if (isReady) {
      return (
        <table>
          <tbody>
            {data.map((repo) => {
              return (
                <tr key={repo.id}>
                  <td>{repo.fullName}</td>
                  <td>
                    <a href={repo.html_url}>{repo.html_url}</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    } else {
      return <>Loading...</>;
    }
  };
  return (
    <div className="App">
      <input
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      />
      <button onClick={fetchData}>FetchData</button>
      {renderData()}
    </div>
  );
}

export default App;
