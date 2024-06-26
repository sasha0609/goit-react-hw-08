import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeFilter,
  selectNameFilter,
} from "../../redux/filter/filtersSlice";

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleFilter} />
    </>
  );
}
