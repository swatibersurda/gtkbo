import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginatedData } from "../Redux/action";

export const PaginatedComponent = () => {
  // as our limit is 10;
  const dispatch = useDispatch();
  const totalPage = useSelector((state) => state.AppReducer.totalbutt);
  let buttonArray = new Array(totalPage).fill(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page !== 0) {
      dispatch(paginatedData(page));
    }
  }, [page]);
  return (
    <div>
      {buttonArray.map((item, index) => {
        return (
          <button value={index + 1} onClick={() => setPage(index + 1)}>
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};
