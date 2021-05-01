import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import View from "./View";
import axios from "axios";
import ReactDom from "react-dom";
import React, { useState, useEffect } from "react";

const User = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    age: "",
  });

  useEffect(() => {
    axios
      .get("http://192.168.0.110:4500/api/Blind/60878306b0c6f846882fd2d4")
      .then((res) => {
        // console.log("Sometext");
        // console.log(res);
        setUser(res.data);
      });
    // .catch((err) => {
    //   console.log(err);
    // });
  }, []);

  return (
    <>
      <Router>
        <div className="content">
          <Route exact path="/View" component={View} />
        </div>
      </Router>

      <Container fluid pd-2>
        <Row className="justify-content-center-md-center">
          <Col mb-2 md-4>
            <Card className="mb-3 p-2 m-4" style={{ width: "80rem" }}>
              <Card.Body className="mb-0">
                <Card.Title>Your Blind: 01</Card.Title>
                <Card.Text>Firstname: {user.first_name} </Card.Text>
                <Card.Text>Lastname: {user.last_name}</Card.Text>
                <Card.Text>Gender: {user.gender}</Card.Text>
                <Card.Text>Age: {user.age}</Card.Text>

                <Link variant="outline-dark" size="lg" block to="/View">
                  View
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default User;
