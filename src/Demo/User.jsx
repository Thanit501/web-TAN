import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";
import View from "./View";

const User = () => {
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
              <Card.Body>
                <Card.Title>User: 1</Card.Title>
                <Card.Text>Firstname: Thanit Lastname: Nookao</Card.Text>

                <Link variant="outline-dark" size="lg" block to="/View">
                  View
                </Link>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center-md-center">
          <Col md-4>
            <Card className="mb-3 p-2 m-4">
              <Card.Body>
                {/* <Card.Title>User: 1</Card.Title> */}
                <Card.Text>
                  <BsFillPlusCircleFill />
                </Card.Text>
                {/* <Button variant="primary text-center">View</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center-md-center">
          <Col md-4>
            <Card className="mb-3 p-2 m-4">
              <Card.Body>
                {/* <Card.Title>User: 1</Card.Title> */}
                <Card.Text>
                  <BsFillPlusCircleFill />
                </Card.Text>
                {/* <Button variant="primary text-center">View</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center-md-center">
          <Col md-4>
            <Card className="mb-3 p-2 m-4">
              <Card.Body>
                {/* <Card.Title>User: 1</Card.Title> */}
                <Card.Text>
                  <BsFillPlusCircleFill />
                </Card.Text>
                {/* <Button variant="primary text-center">View</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default User;
