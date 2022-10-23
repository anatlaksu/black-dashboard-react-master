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
import React , { useState} from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
//   Label,
  Row,
  Col
} from "reactstrap";
import { toast } from "react-toastify";

function UserProfile() {
    return (
      <>
        <div className="content">
        <Row className="justify-content-center">
          <Col lg="10" md="2">
            <Card className="shadow border-0">
                <CardHeader> <h2 className="text-center">עשרת הדיברות בבטיחות בעבודה</h2></CardHeader>
                <CardBody className="text-right">
                <li> t is a long established fact that a reader will be 
                distracted by the readable content of a page when looking
                 at its layout. The point of using Lorem Ipsum is that it 
                 has a more-or-less normal distribution of letters, as opposed
                to using 'Content here, content here', making it look like 
                readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still in their infancy
                . Various versions have evolved over the years, sometimes by accident,
                 sometimes on purpose (injected humour and the like).
                </li>
                <li> t is a long established fact that a reader will be 
                distracted by the readable content of a page when looking
                 at its layout. The point of using Lorem Ipsum is that it 
                 has a more-or-less normal distribution of letters, as opposed
                to using 'Content here, content here', making it look like 
                readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text,
                and a search for 'lorem ipsum' will uncover many web sites still in their infancy
                . Various versions have evolved over the years, sometimes by accident,
                 sometimes on purpose (injected humour and the like).
                </li>

                </CardBody>
            </Card>
          </Col>
        </Row>
        </div>
      </>
    );
  }
  
  export default UserProfile;
  