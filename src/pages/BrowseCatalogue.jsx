import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "../components/Search";

import { selectCatalogue, selectSearch, swapEnquiry } from "../slices/appSlice";

import "../styles/search.css";

const BrowseCatalogue = () => {
  const catalogue = useSelector(selectCatalogue);
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();

  let filtered = [...catalogue];

  if (search) {
    filtered = catalogue.filter((item) => {
      const values = Object.values(item).toString();
      console.log(values);
      if (values.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
    });
  }

  //

  return (
    <>
      <section className="catalogueContainer">
        <div className="filters">
          <Search />
        </div>
        <div className="catalogueGrid">
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          <div className="blank"></div>
          {/* 
          {filtered.map((item) => {
            console.log(`url("${item.image}")`);
            if (!item.show) {
              //prevents item with show = false being rendered
              return;
            }
            return (
              <section className="catalogue card" key={item.id}>
                <img
                  className="imageContainer"
                  loading="lazy"
                  src={`./assets/images/catalogue${item.image}`}
                  // onClick={() => {
                  //   showModal("./assets/images/catalogue" + item.image);
                  // }}
                ></img>
                <div className="details">
                  <h2>{item.title}</h2>
                  <h3>{item.medium}</h3>
                  <p>
                    {item.date}, {item.size}
                  </p>

                  {item.sold ? (
                    <button
                      onClick={() => {
                        dispatch(swapEnquiry(item.id));
                      }}
                    >
                      Swap?
                    </button>
                  ) : (
                    <p className="sold">SOLD</p>
                  )}
                </div>
              </section>
            );
          })} */}
        </div>
      </section>
    </>
  );
};

export default BrowseCatalogue;
