import React, { useState } from "react";
import NavStatus from "../components/NavStatus";
import BranchCard from "../components/BranchCard";
import { branchesData } from "../data/branchesData";
import "./ConceptSpace.css"
const ConceptBranches = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");

  const locations = branchesData;

  // Pagination logic
  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filtering logic
  const filteredLocations = locations
    .filter(
      (location) =>
        (selectedCity === "All" || location.city === selectedCity) &&
        location.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(startIndex, endIndex);

  // Page numbers
  const totalPages = Math.ceil(filteredLocations.length / itemsPerPage);

  return (
    <div style={{backgroundColor:"#f9fafa"}}>
    <NavStatus/>
    <div className="container ">
      
      <h2 style={{
        marginBottom:"40px"
      }}>TBC Concept Branches</h2>

      
      <div style={{
        marginBottom:"40px"
      }} className="branch-filter-container">

      {/* Dropdown Filter */}
      <select
      className="branch-dropdown"
      
        onChange={(e) => setSelectedCity(e.target.value)}
        value={selectedCity}
      >
        <option value="All">ყველა</option>
        <option value="თბილისი">თბილისი</option>
        <option value="ქუთაისი">ქუთაისი</option>
        <option value="ზუგდიდი ">ზუგდიდი</option>
        <option value="ბათუმი">ბათუმი</option>
        <option value="გორი">გორი</option>
        <option value="თელავი">თელავი</option>
        <option value="ბორჯომი">ბორჯომი</option>
        {/* Add more options as needed */}
      </select>
      <input
        className="branch-search"
        type="text"
        placeholder="🔍 მოძებნე"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      {/* Display Locations */}
      <div style={{ display: "flex", flexDirection: "column", gap:"30px", paddingBottom:"50px"}}>
        {filteredLocations.map((location, index) => (
          // <div key={index} style={{ marginBottom: "10px" }}>
          //   <h2>{location.name}</h2>
          //   <p>Hours: {location.hours}</p>
          //   <p>City: {location.city}</p>
          //   <p>Additional Info: {location.additionalInfo}</p>
          // </div>
          <BranchCard data={location} key={index}/>
        ))}
      </div>

      {/* Pagination */}
      <div className="branch-card-pagination">
      <button
            className="branch-pagination-arrow"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            &laquo; 
          </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <div>
          <button
          className="branch-pagination-button"
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
          <button
          className="branch-pagination-button pagination-button"
            key={index + 1}
            onClick={() => setCurrentPage(index + 2)}
          >
            {index + 2}
          </button>
          <button
          className="branch-pagination-button"
            key={index + 1}
            onClick={() => setCurrentPage(index + 3)}
          >
            {index + 3}
          </button>
          </div>
        ))}
        <button
            className="branch-pagination-arrow"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            &raquo; 
          </button>
      </div>
    </div>
    </div>
  );
};

export default ConceptBranches;
