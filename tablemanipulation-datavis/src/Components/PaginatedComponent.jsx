import React, { useState } from "react";
import { useSelector } from "react-redux";

export const PaginatedComponent = () => {
  // as our limit is 5;
  const totalPage = useSelector((state) => state.AppReducer.totalPages);
  console.log(totalPage, "toalpagee....");
  const butt = Math.ceil(totalPage / 10);
  console.log(butt,"buttjjjjjj")
//   let buttonArray = new Array().fill(0);
  const [page, setPage] = useState(1);

  return (
    <div>
      {/* {buttonArray.map((item, index) => {
          return (
            <button
              value={index + 1}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </button>
          );
        })} */}
    </div>
  );
};
