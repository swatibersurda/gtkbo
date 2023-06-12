import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginatedData, filterAndPagination } from "../Redux/action";
import { v4 as uuid } from "uuid";

export const PaginatedComponent = () => {
  const dispatch = useDispatch();
  const totalPage = useSelector((state) => state.AppReducer.totalbutt);
  const data = useSelector((state) => state.AppReducer.data);
  const filtering = useSelector((state) => state.AppReducer.filtering);
  const otherFiltering = useSelector((state) => state.AppReducer.otherFiltering);
  let buttonArray = new Array(totalPage).fill(0);
  const [page, setPage] = useState(1);
  // console.log(filtering, "filterringggggg..");
  console.log(otherFiltering,"oooo")

  // this useEffect will render on first render
  useEffect(() => {
    if (page >= 1 && !filtering && !otherFiltering) {
      dispatch(paginatedData(page));
    }
  }, [page, data?.length, totalPage]);

  // this will run only when filter button is clicked then along with it we will apply pagination
  useEffect(() => {
    dispatch(filterAndPagination(page));
  }, [filtering, page]);
  return (
    <div>
      {buttonArray.map((item, index) => {
        return (
          <button 
            className="blueColor"
            key={uuid()}
            value={index + 1}
            onClick={() => setPage(index + 1)}
            disabled={page === index + 1}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};
