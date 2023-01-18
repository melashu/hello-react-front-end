import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGreet, fetchGeetingAsyncThank } from "./redux/reducer";

function Greeting() {
    const greet = useSelector(getGreet);

  const dispatch = useDispatch();
  useEffect(() => {
        dispatch(fetchGeetingAsyncThank());
  }, [dispatch]);

    return (
      <ul>
        <li>{greet.message}</li>
      </ul>
    );
}

export default Greeting;
