import React from "react";
import "./home.css";
import {FaTrashAlt} from "react-icons/fa"
import {IoFilterSharp} from "react-icons/io5"
const Prac = () => {
  return (
    <div className="cover">
      <div className="tablee">
        <div className="cardheader">
            <div className="content1">
                <div className="Textandsupportingtext"></div>
                <div className="actionss">
                    <div className="actionChild">
                        <div className="buttonbase">
                            <div className="trash">
                            <FaTrashAlt className="tra"></FaTrashAlt>
                           
                            </div>
                            <div className="deltext">
                                Delete
                            </div>
                        </div>
                        <div className="buttonbase">
                            <div className="trash">
                            <IoFilterSharp className="tra"></IoFilterSharp>
                           
                            </div>
                            <div className="deltext">
                                Filters
                            </div>
                        </div>
                        <div className="buttonbase">
                            <div className="trash">
                            <IoFilterSharp className="tra"></IoFilterSharp>
                           
                            </div>
                            <div className="deltext">
                                Filters
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
        {/* cardheader or row colums */}
        <div className="content2"></div>
       </div>
    </div>
  );
};

export default Prac;
