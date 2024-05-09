import React from "react";
import bannerImgB from "./icons_assets/header_big.webp";
import bannerImgS from "./icons_assets/header_s.webp";

export default function Header() {
  return (
    <header className="header">
      <section>
        <div className="container m-0">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-7 m-0 px-3">
              <h1 className=" mb-2">Little Lemon Restaurant</h1>
              <h2>Chicago</h2>
              <p className="mt-4 mb-4">
                We are a family-owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist
              </p>
              <a href="/bookingForm">
                <button className="btn-reserve mb-3">Reserve a table</button>
              </a>
            </div>
            <div className="col-md-5 m-0 p-0">
              <div className="d-block d-md-none">
                <img
                  className="img-fluid mx-auto rounded-4 mb-3"
                  src={bannerImgS}
                  alt="Delicious Dish in Little Lemon Restaurant"
                  width={350}
                />
              </div>

              <div className="d-md-block d-none py-4 my-3 me-xxl-auto">
                <img
                  className="d-block rounded-4"
                  src={bannerImgB}
                  alt="Delicious Dish in Little Lemon Restaurant"
                  width={650}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
