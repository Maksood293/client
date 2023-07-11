import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodoAction } from "../../actions/addressAction";

export default function ContactList() {
  const { address, loading, error } = useSelector((state) => state.getAddress);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoAction());
  }, []);

  return (
    <div>
      <table id="customers">
        <tr>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ADDRESS</th>
          <th>CITY</th>
          <th>PIN</th>
          <th>ACTION</th>
        </tr>
        {loading ? (
            <div class="loader"></div>
        ):address ?
          address.map((data) => (
            <tr key={data._id}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.address}</td>
              <td>{data.city}</td>
              <td>{data.pin}</td>
              <td>
                <button>Edit</button> <button>Delete</button>
              </td>
            </tr>
          )):null}
      </table>
    </div>
  );
}
