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
import {
  getAllData,
  sortData,
  filterData,
  filterDataOther,
} from "../Redux/action";
import { PaginatedComponent } from "./PaginatedComponent";
import { MdImportExport } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdUpload, MdDownload } from "react-icons/md";

const Prac = () => {
  const dispatch = useDispatch();
  const { data, page } = useSelector((state) => state.AppReducer);
  //means till now on first landing on the website there is no sorted order data.
  const [notsort, setnotSort] = useState(false);
  const [sort, setSort] = useState("none");
  const [val, setVal] = useState("");
  const [filterr, setFilter] = useState("");
  const [otherFilter, setOtherFilter] = useState(0);
  // console.log(otherFilter, "pp");
  console.log(notsort, "notsortttt");
  console.log(val, "valll");
  // console.log(data, "data....");

  useEffect(() => {
    dispatch(getAllData());
  }, [getAllData]);

  const handleSortData = (val) => {
    //  means now you want something in dsc or asc.
    console.log(val, "val.....");
    if (!notsort) {
      setVal(val);
      setSort("asc");
      setnotSort(!notsort);
    } else {
      setVal(val);
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
  useEffect(() => {
    if (otherFilter !== 0) {
      dispatch(filterDataOther(otherFilter));
    }
    if (otherFilter === "") {
      dispatch(getAllData());
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
                    <option value="">All</option>
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
              {data?.length &&
                data.map((item) => {
                  return (
                    <tr key={item.id}>
                      {/* <div><input type="checkbox"></input></div> */}
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
                })}
            </tbody>
          </table>
        </div>
        <div className="paginatedComponet">
          {sort === "none" ? <PaginatedComponent></PaginatedComponent> : ""}
        </div>
      </div>
    </div>
  );
};

export default Prac;
