import React from "react";
import "./home.css";
import { FaTrashAlt } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsFilter } from "react-icons/bs";
import { TbFileExport } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData, sortData, filterData } from "../Redux/action";
import { PaginatedComponent } from "./PaginatedComponent";
import { MdImportExport } from "react-icons/md";

const Prac = () => {
  const dispatch = useDispatch();
  const { data, page } = useSelector((state) => state.AppReducer);
  //means till now on first landing on the website there is no sorted order data.
  const [notsort, setnotSort] = useState(false);
  const [sort, setSort] = useState("none");
  const [val, setVal] = useState("NO");
  const [filterr, setFilter] = useState("");
  const [otherFilter, setOtherFilter] = useState("");
  console.log(otherFilter, "pp");

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  const handleSortData = (val) => {
    //  means now you want something in dsc or asc.
    if (!notsort) {
      setVal(val);
      setSort("asc");
      setnotSort(!notsort);
    } else {
      setSort("desc");
      setnotSort(!notsort);
    }
    dispatch(sortData({ sort, val }));
  };

  useEffect(() => {
    dispatch(sortData({ sort, val }));
  }, [sort, notsort]);

  useEffect(() => {
    if (filterr !== "") {
      dispatch(filterData(filterr));
    }
  }, [filterr]);

  return (
    <div className="cover">
      <div className="tablee">
        <div className="cardHeader">
          <div className="contentDiv">
            <div className="textSupportDiv">
              <h4 className="headingDiv">Heading</h4>
              <div className="labelForText">Label for value</div>
              <div className="inputDiv">
                <div className="iconDiv">
                  <AiOutlineSearch></AiOutlineSearch>
                </div>
                <div className="serchTextDiv">Search</div>
                <input
                  className="inpu"
                  value={filterr}
                  type="text"
                  onChange={(e) => setFilter(e.target.value)}
                />
              </div>
            </div>
            <div className="actionss">
              <div className="del">
                <div className="delIconDiv">
                  <RiDeleteBinLine className="delIconsDiv"></RiDeleteBinLine>
                </div>
                <div className="textDeleteDiv">Delete</div>
              </div>
              <div className="filter">
                <div className="delIconDiv">
                  <BsFilter className="delIconsDiv"></BsFilter>
                </div>
                <div className="textDeleteDiv">Filter</div>
              </div>
              {/* export div */}
              <div className="exportDiv">
                <div className="delIconDiv">
                  <TbFileExport className="delIconsDiv"></TbFileExport>
                </div>
                <div className="textDeleteDiv">Export</div>
              </div>
              <div className="buttonDivAddNewCta">
                <div className="delIconDiv">
                  <AiOutlinePlus
                    color="white"
                    className="delIconsDiv"
                  ></AiOutlinePlus>
                </div>
                <div className="addctaDiv">Add new CTA</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tableActual">
          <table className="dataTable">
            <thead>
              <tr>
                <th>-</th>
                <th onClick={() => handleSortData("id")}>
                  ID{" "}
                  <MdImportExport
                    style={{ marginTop: "2px" }}
                    color="black"
                  ></MdImportExport>
                </th>
                <th onClick={() => handleSortData("name")}>
                  Name
                  <MdImportExport
                    style={{ marginTop: "2px" }}
                    color="black"
                  ></MdImportExport>
                </th>
                <th onClick={() => handleSortData("rank")}>
                  Rank
                  <MdImportExport
                    style={{ marginTop: "2px" }}
                    color="black"
                  ></MdImportExport>
                </th>
                <th onClick={() => handleSortData("price_usd")}>
                  Price(USD)
                  <MdImportExport
                    style={{ marginTop: "2px" }}
                    color="black"
                  ></MdImportExport>
                </th>
                <th onClick={() => handleSortData("percent_change_24h")}>
                  Percent Change (24h)
                  <MdImportExport
                    style={{ marginTop: "2px" }}
                    color="black"
                  ></MdImportExport>
                </th>
                <th onClick={() => handleSortData("price_btc")}>
                  Price (BTC)
                  <MdImportExport
                    style={{ marginTop: "2px" }}
                    color="black"
                  ></MdImportExport>
                </th>
                <th onClick={() => handleSortData("market_cap_usd")}>
                  Market Cap (USD)
                  <MdImportExport
                    style={{ marginTop: "2px" }}
                    color="black"
                  ></MdImportExport>
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
      </div>
    </div>
  );
};

export default Prac;
