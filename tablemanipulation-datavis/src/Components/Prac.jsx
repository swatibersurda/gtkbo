import React from "react";
import "./home.css";
import { FaTrashAlt } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsFilter } from "react-icons/bs";
import { TbFileExport } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
const Prac = () => {
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
                <input className="inpu" />
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
                  <AiOutlinePlus color="white" className="delIconsDiv"></AiOutlinePlus>
                </div>
                <div className="addctaDiv">Add new CTA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prac;
