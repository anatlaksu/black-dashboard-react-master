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
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
// eslint-disable-next-line no-unused-vars
import { Line, Bar, Pie } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
      <Row>
      <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h3 className="text-center text-muted mb-4">מספר אירועים חריגים בשנה</h3>
              </CardHeader>
              <CardBody>
              <h3 className="text-center mb-4">22</h3>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h3 className="text-center text-muted mb-4">מספר אירועי רק"ם בשנה</h3>
              </CardHeader>
              <CardBody>
              <h3 className="text-center mb-4">5</h3>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h3 className="text-center text-muted mb-4">מספר נפגעים בשנה</h3>
              </CardHeader>
              <CardBody>
              <h3 className="text-center mb-4">20</h3>
              </CardBody>
            </Card>
          </Col>
      </Row>
        <Row>
        <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category text-center">מספר אירועים לפי פיקוד</h5>
              </CardHeader>
              <CardBody>
                <div >
                  <Pie
                    data={chartExample1.data}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category text-center">סוגי אירועים</h5>
              </CardHeader>
              <CardBody>
                <div >
                  <Pie 
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category text-center">פילוח רמת פציעה</h5>
              </CardHeader>
              <CardBody>
                <div>
                  <Pie
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
        <Col md="12">
            <Card style={{width: "50%"}}>
              <CardHeader>
                <CardTitle tag="h4" className="text-center ">גדודים עם הכי הרבה אירועים</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th className="text-center">גדוד</th>
                      <th className="text-center">מספר אירועים</th>
                      <th className="text-center">סה"כ מספר נפגעים</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">101</td>
                      <td className="text-center">2</td>
                      <td className="text-center">2</td>
                    </tr>
                    <tr>
                      <td className="text-center">55</td>
                      <td className="text-center">2</td>
                      <td className="text-center">1</td>
                    </tr>
                    <tr>
                      <td className="text-center">12</td>
                      <td className="text-center">1</td>
                      <td className="text-center">0</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
