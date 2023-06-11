import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginatedData } from "../Redux/action";
import {v4 as uuid} from "uuid"

export const PaginatedComponent = () => {
  // as our limit is 10;
  const dispatch = useDispatch();
  const totalPage = useSelector((state) => state.AppReducer.totalbutt);
  let buttonArray = new Array(totalPage).fill(0);
  const data= useSelector((state) => state.AppReducer.data);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // if (page >=1 && totalPage>=1) {
      console.log("i am rendering 2")
      // FROM HERE PAGINATED
      dispatch(paginatedData(page));
    // }
  }, [page,totalPage,data?.length]);

  return (
    <div>
      {buttonArray.map((item, index) => {
        return (
          <button key={uuid()} value={index + 1} onClick={() => setPage(index + 1)}>
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};
