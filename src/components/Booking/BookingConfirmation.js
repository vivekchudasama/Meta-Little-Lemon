import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Booking.css";

const BookingConfirmation = () => {

  const [localStorageData, setLocalStorageData] = useState(null);
  const [submit, setSubmit] = useState(false);


  useEffect(() => {

    const storedData = localStorage.getItem("formData");

    setLocalStorageData(storedData ? JSON.parse(storedData) : null);
  }, []); 
  const handleBackButtonClick = () => {
    // Remove the data from local storage
    localStorage.removeItem("formData");
    setSubmit(false);
  };

  return (
    <section>
      <div className="booking-form pb-3">
        <div className="container mx-auto">
          <h2 className="pb-4 mx-2 text-center">Confirm the data</h2>
          {localStorageData && (
            <>
              <div className="mb-4">
                <strong>Name:</strong> {localStorageData.name}
              </div>
              <div className="mb-4">
                <strong>Email:</strong> {localStorageData.email}
              </div>
              <div className="mb-4">
                <strong>Phone:</strong> {localStorageData.phone}
              </div>
              <div className="mb-4">
                <strong>Date:</strong> {localStorageData.date}
              </div>
              <div className="mb-4">
                <strong>Time:</strong> {localStorageData.time}
              </div>
              <div className="mb-4">
                <strong>Guests:</strong> {localStorageData.guests}
              </div>
              <div className="mb-4">
                <strong>Occasion:</strong> {localStorageData.occasion}
              </div>
              <div className="mb-4">
                <strong>Additional information:</strong>{" "}
                {localStorageData.description}
              </div>
            </>
          )}
          <div className="text-center">
            <Link
              to="/bookingForm"
              className="btn btn-edit mx-1 mt-3"
              onClick={handleBackButtonClick}
            >
              Edit
            </Link>
            <button
              type="button"
              onClick={() => setSubmit(true)}
              className="btn btn-book mx-1 mt-3"
            >
              Book Now
            </button>
          </div>
          {submit && (
            <p className="mt-4 text-center">
              <strong>Great! Reservation completed successfully.</strong>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingConfirmation;
