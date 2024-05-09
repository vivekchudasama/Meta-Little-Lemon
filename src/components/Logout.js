import React from "react";
import { useUserAuth } from "./Login/UserAuthContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <section id="logout">
        <div className="p-4 box mt-3 text-center">
          <strong>Welcome</strong> <br />
          {user && user.email}
        </div>
        <div className="d-grid gap-2">
          <Button className="btn-out" variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </div>
      </section>
    </>
  );
};

export default Logout;
