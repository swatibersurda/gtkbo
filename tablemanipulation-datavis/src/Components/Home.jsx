import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData, sortData, filterData } from "../Redux/action";
import {PaginatedComponent} from "./PaginatedComponent";
export const Home = () => {
  const dispatch = useDispatch();
  const { data, sortD } = useSelector((state) => state.AppReducer);
  //   means till now on first landing on the website there is no sorted order data.
  const [notsort, setnotSort] = useState(false);
  const [sort, setSort] = useState("none");
  const [val, setVal] = useState("NO");
  const [filterr, setFilter] = useState("");
  const [page, setPage] = useState(1);

  
  const handleSortData = (val) => {
    //  means now you want something in dsc or asc.
    if (!notsort) {
      setVal(val);
      setSort("asc");
      setnotSort(!notsort);
      console.log("i am reaching herer...");
      // dispatch(sortData({sort,val}))
    } else {
      setSort("desc");
      setnotSort(!notsort);
    }
    dispatch(sortData({ sort, val }));
  };

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  useEffect(() => {
    dispatch(sortData({ sort, val }));
  }, [sort, notsort]);

  useEffect(() => {
    if (filterr !== "") {
      console.log("reaching here...");
      dispatch(filterData(filterr));
    }
  }, [filterr]);

  return (
    <>
    <PaginatedComponent/>
      <div className="parentDiv">
        <input
          value={filterr}
          type="text"
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="tablee">
          <table>
            <thead>
              <tr>
                <th>-</th>
                <th onClick={() => handleSortData("id")}>ID</th>
                <th onClick={() => handleSortData("name")}>Name</th>
                <th onClick={() => handleSortData("rank")}>Rank</th>
                <th onClick={() => handleSortData("price_usd")}>Price(USD)</th>
                <th onClick={() => handleSortData("percent_change_24h")}>
                  Percent Change (24h)
                </th>
                <th onClick={() => handleSortData("price_btc")}>Price (BTC)</th>
                <th onClick={() => handleSortData("market_cap_usd")}>
                  Market Cap (USD)
                </th>
              </tr>
            </thead>

            <tbody>
              {data?.length &&
                data.map((item) => {
                  return (
                    <tr key={item.id}>
                      {/* <div><input type="checkbox"></input></div> */}
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.rank}</td>
                      <td>{item.price_usd}</td>
                      <td>{item.percent_change_24h}</td>
                      <td>{item.price_btc}</td>
                      <td>{item.market_cap_usd}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        {/* <div><PaginatedComponent/></div> */}
      </div>
    
    </>
  );
};
