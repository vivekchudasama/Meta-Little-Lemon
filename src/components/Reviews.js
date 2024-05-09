import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Icon from "./icons_assets/icon_review.png";
import "swiper/css";

const Reviews = () => {
  return (
    <section className="reviews mt-5 pt-5">
      <Container fluid className="p-0">
        <Row>
          <Col>
            <h2>Reviews</h2>
          </Col>
        </Row>
        <Row className="mx-auto justify-content-between">
          <div
            className="swiper-button-prev custom-icon p-0"
            tabIndex="0"
            role="button"
            aria-label="Previous slide"
            aria-controls="swiper-wrapper"
            aria-disabled="false"
          >
            <i class="bi bi-arrow-left-circle"></i>
          </div>
          <div
            className="swiper-button-next custom-icon p-0"
            tabIndex="0"
            role="button"
            aria-label="Next slide"
            aria-controls="swiper-wrapper"
            aria-disabled="false"
          >
            <i class="bi bi-arrow-right-circle"></i>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <blockquote className="review-blockquote">
                <div className="mt-2">
                  <div>
                    <img
                      className="mb-1"
                      alt="Photo"
                      src={Icon}
                      width={50}
                      height={50}
                    />
                    <p>
                      <strong>Vivek Chudasama</strong>
                    </p>
                  </div>
                  <div>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </blockquote>
            </SwiperSlide>

            <SwiperSlide>
              <blockquote className="review-blockquote">
                <div className="mt-2">
                  <div>
                    <img
                      className="mb-1"
                      alt="Photo"
                      src={Icon}
                      width={50}
                      height={50}
                    />
                    <p>
                      <strong>Mr. Vivek</strong>
                    </p>
                  </div>
                  <div>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </blockquote>
            </SwiperSlide>
            <SwiperSlide>
              <blockquote className="review-blockquote">
                <div className="mt-2">
                  <div>
                    <img
                      className="mb-1"
                      alt="Photo"
                      src={Icon}
                      width={50}
                      height={50}
                    />
                    <p>
                      <strong>Sir Vivek</strong>
                    </p>
                  </div>
                  <div>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.
                  </p>
                </div>
              </blockquote>
            </SwiperSlide>
          </Swiper>
        </Row>
      </Container>
      <hr />
    </section>
  );
};

export default Reviews;
