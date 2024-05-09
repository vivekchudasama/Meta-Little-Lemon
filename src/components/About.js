import React from "react";
import Chef from "./icons_assets/chef.webp";
import Tables from "./icons_assets/Tables.webp";

export default function About() {
  return (
    <section className="about mt-2" id="about">
      <div className="container m-0 p-0">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <h1> Little Lemon Restaurant</h1>
            <h2>Chicago</h2>
            <div className="">
              <img
                className="img-fluid mx-auto d-sm-none rounded-4"
                src={Chef}
                alt="Delicius Dish in Little Lemon Restaurant"
                width={350}
              />
            </div>
            <p className="mt-2">
              {" "}
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p>
              {" "}
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="col-md-5 d-md-block d-none">
            <div className="tables-chef position-relative">
              <img
                className="position-absolute img-fluid top-50 start-0 mb-5 rounded-4"
                src={Chef}
                alt="View of the Restaurant"
                width={250}
              />
              <img
                className="position-absolut img-fluid mt-2 rounded-4"
                src={Tables}
                alt="Delicius Dish in Little Lemon Restaurant"
                width={250}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
