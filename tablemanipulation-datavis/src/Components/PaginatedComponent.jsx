import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginatedData } from "../Redux/action";
import { v4 as uuid } from "uuid";

export const PaginatedComponent = ({ sort, filterr }) => {
  const dispatch = useDispatch();
  const totalPage = useSelector((state) => state.AppReducer.totalbutt);
  const data = useSelector((state) => state.AppReducer);
  let buttonArray = new Array(totalPage).fill(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page >= 1) {
      console.log("i am runing");
      dispatch(paginatedData(page));
    }
  }, [page, data?.length]);
  return (
    <div>
      {buttonArray.map((item, index) => {
        return (
          <button className="blueColor"
            key={uuid()}
            value={index + 1}
            onClick={() => setPage(index + 1)}
            disabled={page===index+1}
          > 
          {index+1}
          
          </button>
        );
      })}
    </div>
  );
};
