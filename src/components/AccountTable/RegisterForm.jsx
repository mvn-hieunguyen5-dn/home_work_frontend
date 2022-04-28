import React from "react";
// import { generateName, generateCountry } from "../logic/randomname.js";
import useFill from "../../hooks/useFill";
export default function Form(props) {
  const { data, setValue } = useFill();
  // const username = useFill('username');
  function submit(e) {
    const t = data;
    e.preventDefault();
    console.log(t);
    props.addItem(t);
    setValue.clear();
  }
  return (
    <div className="container">
      <h2>Form</h2>
      <form
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <div className="block">
          <label htmlFor="username">Username:</label>
          <input
            className="formInput"
            type="text"
            name="username"
            id="username"
            value={data.username}
            onChange={(e) => setValue.userName(e.target.value)}
            required
          />
        </div>
        <div className="block">
          <label htmlFor="password">Password:</label>
          <input
            className="formInput"
            type="password"
            name="password"
            id="password"
            value={data.passsword}
            onChange={(e) => setValue.passsword(e.target.value)}
            required
          />
        </div>
        <div className="block">
          <label htmlFor="">Gender:</label>
          <div className="flex">
            <input
              className=""
              type="radio"
              name="gender"
              id="Male"
              value="0"
              onChange={(e) => setValue.gender(e.target.value)}
              checked={data.gender === 0}
            />
            <label htmlFor="Male">Male</label>
            <input
              className=""
              type="radio"
              name="gender"
              id="Female"
              value="1"
              onChange={(e) => setValue.gender(e.target.value)}
              checked={data.gender === 1}
            />
            <label htmlFor="Female">Female</label>
          </div>
        </div>
        <div className="block">
          <label htmlFor="country">Country:</label>

          <select
            name="country"
            id="country"
            className="formInput"
            value={data.country}
            onChange={(e) => setValue.country(e.target.value)}
          >
            <option value="VN">Viet Nam</option>
            <option value="US">United State</option>
            <option value="JP">Japon</option>
            <option value="SKR">South korea</option>
          </select>
        </div>
        <div className="block">
          <label htmlFor="description">Description:</label>
          <textarea
            className="formInput description"
            type="password"
            name="description"
            id="description"
            value={data.description}
            onChange={(e) => setValue.description(e.target.value)}
          />
        </div>
        <div className="">
          <input
            type="checkbox"
            name="checked"
            id="accept"
            onChange={(e) => setValue.checked(e.target.checked)}
            value="true"
            required
          />
          <label htmlFor="accept"> I agree to Teams of Service</label>
        </div>
        <div className="block">
          <button
            className="formInput button"
            type="submit"
            onClick={(e) => {
              submit(e);
            }}
          >
            Submit
          </button>
          <button
            className="formInput button"
            type="button"
            onClick={() => {
              alert(JSON.stringify(data, null, 2));
            }}
          >
            View JSON
          </button>
        </div>
      </form>
    </div>
  );
}
