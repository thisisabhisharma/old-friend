import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SchoolList from "../components/schoolList";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listSchools, schoolInfoAction } from "../actions/schoolAction";
import { useState } from "react";

export default function HomeScreen(props) {
  const usertoken = localStorage.getItem("userInfo");
  const dispatch = useDispatch();
  const schoolList = useSelector((state) => state.schoolList);
  const user = useSelector((state) => state.userSignin);
  const { userInfo } = user;
  const { loading, error, schools } = schoolList;
  const [sid, setSid] = useState("");

  useEffect(() => {
    if (usertoken == null) {
      props.history.push("/signin");
    }
    dispatch(listSchools());
  }, [dispatch, props.history, usertoken, sid]);

  const onClickHandler = (sid) => {
    console.log(sid, "onclickHandler called");
    setSid(sid);
    dispatch(schoolInfoAction(sid, userInfo));
  };

  return (
    <div>
      <h2>Featured schools</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {schools.length === 0 && <MessageBox>No school Found</MessageBox>}
          <div>
            {schools.data.map((school) => {
              return (
                <div
                  onClick={() => onClickHandler(school.sid)}
                  className="row center"
                >
                  <SchoolList key={school.sid} school={school}></SchoolList>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
