import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Student from "../components/Students";

export default function SchoolScreen() {
  const school = useSelector((state) => state.school);
  const { loading, error, schoolInfo } = school;

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Back to result</Link>
          <h2>Featured people</h2>
          <>
            {schoolInfo.length === 0 && (
              <MessageBox>No school Found</MessageBox>
            )}
            <div className="row center">
              {schoolInfo.data.uid.map((school) => (
                <Student key={school.sid} student={school}></Student>
              ))}
            </div>
          </>
        </div>
      )}
    </div>
  );
}
