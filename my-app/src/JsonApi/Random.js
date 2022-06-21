import { useEffect, useRef, useState } from "react";
import axios from "axios";

const AjaxReq = (pageNumber) => {
  return axios
    .get(`https://randomuser.me/api?page=${pageNumber}`)
    .then(({ data }) => {
      //in order to get the as a string i will stringify it.
      // handle success
      console.log(data);
      return data;
    })
    .catch((error) => {
      // handle error
      console.error(error);
    });
};
const getUserFullName = (userInfo) => {
  const {
    name: { first, last },
  } = userInfo;
  return `${first} ${last}`;
};
const Random = () => {
  const [count, setCount] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [userInfos, setUserInfos] = useState([]);
  const [randomUserDataJson, serRandomUserDataJson] = useState();
  const fetchUsersData = useRef();
  fetchUsersData.current = () => {
    AjaxReq().then((data) => {
      //   serRandomUserDataJson(JSON.stringify(data) || "No user Data");
      if (data === undefined) return;
      const newUserInfos = [...userInfos, ...data.results];
      setUserInfos(newUserInfos);
      setNextPage(data.info.page + 1);
    });
  };
  //   useEffect(() => {
  //     fetchUsersData.current();
  //   }, []);
  return (
    <>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <button
        onClick={() => {
          fetchUsersData.current();
        }}
      >
        GetData
      </button>
      {userInfos.map((userInfo, idx) => {
        return (
          <div key={idx}>
            <p>{getUserFullName(userInfo)}</p>
            <img src={userInfo.picture.thumbnail} />
          </div>
        );
      })}
      <>{randomUserDataJson}</>
    </>
  );
};

export default Random;
