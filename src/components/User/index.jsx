import React, { useEffect, useState } from "react";
import "./user.css";
import Pagination from "./UserPagination";
export default function User() {
  const [data, setData] = useState({ data: [] });
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getData() {
      await fetch("https://reqres.in/api/users?page="+page, {
        method: "GET",
      }).then(async (res) => {
        setData(await res.clone().json());
      });
    }

    getData();
  }, [page]);

  return (
    <>
      <h2>User table</h2>
      <div className="userlist">
        {data.data.map((user) => (
          <div className="usercard" key={user.id}>
            <div className="avatar">
              <img src={user.avatar} alt="" className="avatar child" />
            </div>

            <h3>
              {user.first_name} - {user.last_name}
            </h3>
            <span className="email">{user.email}</span>
          </div>
        ))}
      </div>
      <Pagination page={page} switch={(page)=>{setPage(page)}} />
    </>
  );
}
