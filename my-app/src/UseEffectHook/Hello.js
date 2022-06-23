import { useEffect } from "react";
export default function Hello() {
  useEffect(() => {
    //adds the logic to use useEffect
    // dependency array to make it component did mount
    console.log("Mounted ");
    return () => {
      //return to make it unmount its called clean up function
      console.log("unmounted");
    };
    //setting the dependeny lets the react know that only fire when the dependent is changed
  }, []);
  return <div>Hello form Hello</div>;
}
