import React from "react";
import "./home.css";
import { AiOutlineSearch } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsFilter } from "react-icons/bs";
import { TbFileExport } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllData,
  sortData,
  filterData,
  filterDataOther,
} from "../Redux/action";
import { PaginatedComponent } from "./PaginatedComponent";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdUpload, MdDownload } from "react-icons/md";
import { Link } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.AppReducer);
  //means till now on first landing on the website there is no sorted order data.
  const [notsort, setnotSort] = useState(false);
  const [sort, setSort] = useState("none");
  const [val, setVal] = useState("");
  const [filterr, setFilter] = useState("");
  const [otherFilter, setOtherFilter] = useState("none");
  // will run on first render.
  useEffect(() => {
    dispatch(getAllData());
  }, []);
  const handleSortData = (val) => {
    //  means now you want something in dsc or asc.
    // notsort===false="asc" and true=desc
    if (!notsort) {
      setVal(val);
      setSort("asc");
      setnotSort(!notsort);
    } else {
      setVal(val);
      setSort("desc");
      setnotSort(!notsort);
    }
    // dispatch(sortData({ sort, val }));
  };

  // if sort has some value means asc,desc and val means on which basis want to performe
  // sort this useEffect will run.
  useEffect(() => {
    dispatch(sortData({ sort, val }));
  }, [sort, notsort, val]);

  // if input box is not empty menas has something for search
  useEffect(() => {
    if (filterr !== "") {
      dispatch(filterData(filterr));
    }
  }, [filterr]);

  // if otherFilter or dropdown has selected then this useEffect will run.
  useEffect(() => {
    if (otherFilter !== "none") {
      dispatch(filterDataOther(otherFilter));
    }
  }, [otherFilter]);
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
                <div className="textDeleteDiv">
                  <select onChange={(e) => setOtherFilter(e.target.value)}>
                    <option>Filter</option>
                    <option value="all">All</option>
                    <option value="5">top5rank</option>
                  </select>
                </div>
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
          <table className="dataTable" border="8" frame="RHS" rules="NONE">
            <thead>
              <tr>
                <th style={{ marginLeft: "2px" }}>
                  <input type="checkbox" />
                </th>
                <th
                  className={`${val === "id" ? "highLightBorder boldd" : ""}`}
                  onClick={() => handleSortData("id")}
                >
                  ID{" "}
                  {sort === "none" ? (
                    ""
                  ) : sort === "asc" && val === "id" ? (
                    <MdUpload
                      style={{ marginTop: "2px" }}
                      color="black"
                    ></MdUpload>
                  ) : (
                    <MdDownload
                      style={{ marginTop: "2px" }}
                      color="black"
                    ></MdDownload>
                  )}
                </th>
                <th
                  onClick={() => handleSortData("name")}
                  className={`${val === "name" ? "highLightBorder" : ""}`}
                >
                  Name
                  {sort === "none" ? (
                    ""
                  ) : sort === "asc" && val === "name" ? (
                    <MdUpload
                      style={{ marginTop: "2px" }}
                      color="black"
                    ></MdUpload>
                  ) : (
                    <MdDownload
                      style={{ marginTop: "2px" }}
                      color="black"
                    ></MdDownload>
                  )}
                </th>
                <th
                  onClick={() => handleSortData("rank")}
                  className={`${val === "rank" ? "highLightBorder" : ""}`}
                >
                  Rank
                  {sort === "none" ? (
                    ""
                  ) : sort === "asc" && val === "rank" ? (
                    <MdUpload
                      style={{ marginTop: "2px" }}
                      color="black"
                    ></MdUpload>
                  ) : (
                    <MdDownload
                      style={{ marginTop: "2px" }}
                      color="black"
                    ></MdDownload>
                  )}
                </th>
                <th
                  onClick={() => handleSortData("price_usd")}
                  className={`${val === "price_usd" ? "highLightBorder" : ""}`}
                >
                  Price(USD)
                  {sort === "none" ? (
                    ""
                  ) : sort === "asc" && val === "price_usd" ? (
                    <MdUpload
                      style={{ marginTop: "2px" }}
                      color="black"
                    ></MdUpload>
                  ) : (
                    <MdDownload
                      style={{ marginTop: "2px" }}
                      color="black"
                    ></MdDownload>
                  )}
                </th>
                <th
                  onClick={() => handleSortData("percent_change_24h")}
                  className={`${
                    val === "percent_change_24h" ? "highLightBorder" : ""
                  }`}
                >
                  Percent Change (24h)
                  {sort === "none" ? (
                    ""
                  ) : sort === "asc" && val === "percent_change_24h" ? (
                    <MdUpload
                      style={{ marginTop: "2px" }}
                      color="black"
                    ></MdUpload>
                  ) : (
                    <MdDownload
                      style={{ marginTop: "2px" }}
                      color="black"
                    ></MdDownload>
                  )}
                </th>
                <th
                  onClick={() => handleSortData("price_btc")}
                  className={`${val === "price_btc" ? "highLightBorder" : ""}`}
                >
                  Price (BTC)
                  {sort === "none" ? (
                    ""
                  ) : sort === "asc" && val === "price_btc" ? (
                    <MdUpload
                      style={{ marginTop: "2px" }}
                      color="black"
                    ></MdUpload>
                  ) : (
                    <MdDownload
                      style={{ marginTop: "2px" }}
                      color="black"
                    ></MdDownload>
                  )}
                </th>
                <th
                  onClick={() => handleSortData("market_cap_usd")}
                  className={`${
                    val === "market_cap_usd" ? "highLightBorder" : ""
                  }`}
                >
                  Market Cap (USD)
                  {sort === "none" ? (
                    ""
                  ) : sort === "asc" && val === "market_cap_usd" ? (
                    <MdUpload
                      style={{ marginTop: "2px" }}
                      color="black"
                    ></MdUpload>
                  ) : (
                    <MdDownload
                      style={{ marginTop: "2px" }}
                      color="black"
                    ></MdDownload>
                  )}
                </th>
                <th>
                  <BiDotsVerticalRounded></BiDotsVerticalRounded>
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.length === 0 ? (
                // IF NO DATA THEN NO NEED TO RENDER ANYTHING ELSE WILL RENDER "0" LENGTH
                <></>
              ) : (
                data?.length &&
                data?.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td
                        className={`${
                          val === "id" ? "highLightBorder boldd" : ""
                        }`}
                      >
                        {item.id}
                      </td>
                      <td
                        className={`${val === "name" ? "highLightBorder" : ""}`}
                      >
                        {item.name}
                      </td>
                      <td
                        className={`${val === "rank" ? "highLightBorder" : ""}`}
                      >
                        {item.rank}
                      </td>
                      <td
                        className={`${
                          val === "price_usd" ? "highLightBorder" : ""
                        }`}
                      >
                        {item.price_usd}
                      </td>
                      <td
                        className={`${
                          val === "percent_change_24h"
                            ? "highLightBorder"
                            : item.percent_change_24h > 1
                            ? "red"
                            : "green"
                        }`}
                      >
                        {item.percent_change_24h}
                      </td>
                      <td
                        className={`${
                          val === "price_btc" ? "highLightBorder" : ""
                        }`}
                      >
                        {item.price_btc}
                      </td>
                      <td
                        className={`${
                          val === "market_cap_usd" ? "highLightBorder" : ""
                        }`}
                      >
                        {item.market_cap_usd}
                      </td>
                      <td>
                        <BiDotsVerticalRounded></BiDotsVerticalRounded>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        <div className="paginatedComponet">
          {/* sort has no pagination together means if sort has asc or dsc do not apply paginated component */}
          {sort === "none" ? <PaginatedComponent></PaginatedComponent> : ""}
        </div>
        <Link className="anc" to="/datavisual">
          Real Time Data Visualization? Click on the Link.
        </Link>
        <div className="footerDiv">
        <div className="footerInnerDiv">
          
        </div>
      </div>
      </div>
     
    </div>
  );
};
