import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addYourself } from '../actions/schoolAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function AddYourselfScreen(props) {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [special_note, setSpecial_note] = useState('');

  const id = useSelector((state) => state.schoolId);
  const { schoolId } = id;
  const sid = schoolId;

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitHandler called');
    dispatch(addYourself(sid, name, year, special_note, userInfo));
  };
  useEffect(() => {
      console.log(userInfo, 'this is userinfo');
      console.log(schoolId, 'this is sid');
    if (!userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo,schoolId]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Add Yourself as Student</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="year">year</label>
          <input
            type="text"
            id="year"
            placeholder="Enter Year"
            required
            onChange={(e) => setYear(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">special note</label>
          <input
            type="text"
            id="text"
            placeholder="special note"
            required
            onChange={(e) => setSpecial_note(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sumbit
          </button>
        </div>
      </form>
    </div>
  );
}