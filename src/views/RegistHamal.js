/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

// reactstrap components
import {
  //   Button,
  Card,
  //   CardHeader,
  CardBody,
  //   Label,
  //   CardFooter,
  //   CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
// import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function RegistHamal() {
  const [values, setValues] = useState({
    personalnumber: "",
    password: "",
    errortype: "",
    error: false,
    successmsg: false,
    loading: false,
    redirectToReferrer: false,
  });

  const { personalnumber, password, error, loading, redirectToReferrer } =values;



  const handleChange = (name) => (event) => {
    console.log(name);
    setValues({ ...values, [name]: event.target.value });
  };
  const history = useHistory();

  const routeChange = () =>{ 
    let path = "/admin/hamalpage"; 
    history.push(path);
  }

  const Regist = () => (
    <>
      <div className="content">
        <Row className="justify-content-center">
          <Col lg="5" md="7">
            <Card className="shadow border-0">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>התחברות חמ"ל</small>
                </div>
                <Form role="form">
                  <FormGroup className="mb-3">
                    <Input
                      maxlength="8"
                      name="personalnumber"
                      onChange={handleChange("personalnumber")}
                      placeholder="מספר אישי"
                      type="string"
                      value={personalnumber}
                    />
                  </FormGroup>
                  {loading ? (
                    <></>
                  ) : (
                    <div className="text-center">
                      <button
                        onClick={routeChange}
                        className="btn btn-primary"
                      >
                        התחבר
                      </button>
                    </div>
                  )}
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );


  return <>{Regist()}</>;
 }
    
