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
  Col
} from "reactstrap";
import { toast } from "react-toastify";

export default function Report() {
    const [data, setData] = useState({
      name: "",
      lastname: "",
      personalnumber: "",
      cellphone: "",
      yhida: "",
      typevent: "",
      resevent:"",
      cli:"",
      carYN:"",
      neshekYN:"",
      matafYN:"",
      selneshek:"",
      whap:"",
      tior:"",
      wnifga:"",
      amlahtype:"",
      rekemtype:"",
      mazavrekem:"",
      dwork:"",
      mataftype:"",
      apitype:"",
      mholaztype:"",
      mhalztype:"",
      pirotnezek:"",
      pirotshigra:"",
      pirotother:"",
      datevent: "",
      mikom: "",
      tahkirFile: "",
      tahkirimg: "",
      iddivoah: "",
      password: "",
      role: "",
      error: false,
      successmsg: false,
      loading: false,
      redirectToReferrer: false,
    });

    function handleChange(evt) {
        const value = evt.target.value;
        setData({ ...data, [evt.target.name]: value });
      }

    const Reporter = () => (
        <>
              <div className="content">
      <Row className="justify-content-center">
          <Col lg="5" md="7">
            <Card className="shadow border-0">
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <big>?????????? ??????????</big>
                </div>
                <div className="text-center text-muted mb-4">
                  <small>???????? ??????????</small>
                </div>
                <Form role="form">
                  <FormGroup dir="rtl">
                    <Input
                      placeholder="???? ????????"
                      name="name"
                      type="text"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup dir="rtl">
                    <Input
                      placeholder="???? ??????????"
                      name="lastname"
                      type="text"
                      value={data.lastname}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup className="mb-3" dir="rtl">
                    <Input
                      placeholder="???????? ????????"
                      name="personalnumber"
                      type="string"
                      maxlength="7"
                      value={data.personalnumber}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup className="mb-3" dir="rtl">
                    <Input
                      placeholder="?????????? ????????"
                      name="cellphone"
                      type="tel"
                      maxlength="10"
                      value={data.cellphone}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup dir="rtl">
                    <Input
                      placeholder="??????????"
                      name="yhida"
                      type="string"
                      value={data.yhida}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <div className="text-center text-muted mb-4">
                    <small>???????? ??????????</small>
                  </div>

                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    ?????? ??????????
                  </div>
                  <FormGroup>
                    <Input
                      placeholder="?????? ??????????"
                      type="select"
                      name="typevent"
                      value={data.typevent}
                      onChange={handleChange}
                      id="seltype"
                    >
                      <option value={"??????"}>??????</option>
                      <option value={"1"}>?????????? ?????? ??????</option>
                      <option value={"2"}>??????????????</option>
                      <option value={"3"}>???????????? ????????</option>
                      <option value={"4"}>??????????</option>
                      <option value={"5"}>???????????? ?????? / ????????????</option>
                      <option value={"6"}>?????????? ?????????? ???????? ????"??</option>
                      <option value={"7"}>?????????? ??????????</option>
                      <option value={"8"}>??????????????</option>
                      <option value={"9"}>??????????</option>
                      <option value={"10"}>?????? ?????????????? ?????????? / ????"??</option>
                      <option value={"11"}>???? ???????? ???????? ??????????</option>
                      <option value={"12"}>??????</option>
                    </Input>
                  </FormGroup>

                  {/* ?????????? ?????? ?????? */}

                  {data.typevent === "1" && (
                    <>
                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    ???????? ????????????
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="resevent"
                      value={data.resevent}
                      onChange={handleChange}
                      id="res"
                    >
                      <option value={"0"}>??????</option>
                      <option value={"1"}>??????????</option>
                      <option value={"2"}>?????? ????????</option>
                      <option value={"3"}>???? ????????</option>
                    </Input>
                  </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????? ????????
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="cli"
                          value={data.cli}
                          onChange={handleChange}
                          id="sel"
                        >
                          <option value={"0"}>??????</option>
                        </Input>
                      </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????? ???????? ?????? ????????
                      </div>
                      <div style={{ textAlign: "right"}}>
                      <FormGroup check inline >
                        <div style={{ textAlign: "right", paddingTop: "10px" }}>
                          <Input
                            type="radio"
                            name="carYN"
                            value={data.yes}
                            onChange={handleChange}
                            id="carYES"
                          />
                          ????  
                        </div>
                        </FormGroup>

                      <FormGroup check inline >
                        <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        <Input
                          type="radio"
                          id="carNO"
                          name="carYN"
                          value={data.no}
                          onChange={handleChange}
                        />
                        ????
                        </div>
                      </FormGroup>
                      </div>
                    </>
                  )} 

                  {/* ?????????????? */}

                  {data.typevent === "2" && (
                    <>
                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    ???????? ????????????
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="resevent"
                      value={data.resevent}
                      onChange={handleChange}
                      id="res"
                    >
                      <option value={"0"}>??????</option>
                      <option value={"1"}>??????????</option>
                      <option value={"2"}>?????? ????????</option>
                      <option value={"3"}>???? ????????</option>
                    </Input>
                  </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????? ????????
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="cli"
                          value={data.cli}
                          onChange={handleChange}
                          id="sel"
                        >
                          <option value={"0"}>??????</option>
                        </Input>
                      </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????? ???????? ?????? ????????
                      </div>

                      <div style={{ textAlign: "right"}}>
                      <FormGroup check inline >
                        <div style={{ textAlign: "right", paddingTop: "10px" }}>
                          <Input
                            type="radio"
                            name="carYN"
                            value={data.yes}
                            onChange={handleChange}
                            id="carYES"
                          />
                          ????  
                        </div>
                        </FormGroup>

                        <FormGroup check inline >
                        <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        <Input
                          type="radio"
                          id="carNO"
                          name="carYN"
                          value={data.no}
                          onChange={handleChange}
                        />
                        ????
                        </div>
                      </FormGroup>
                      </div>
                    </>
                  )} 

                {/* ???????????? ???????? */}

                {data.typevent === "3" && (
                    <>
                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    ???????? ????????????
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="resevent"
                      value={data.resevent}
                      onChange={handleChange}
                      id="res"
                    >
                      <option value={"0"}>??????</option>
                      <option value={"1"}>??????????</option>
                      <option value={"2"}>?????? ????????</option>
                      <option value={"3"}>???? ????????</option>
                    </Input>
                  </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????? ????????
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="cli"
                          value={data.cli}
                          onChange={handleChange}
                          id="sel"
                        >
                          <option value={"0"}>??????</option>
                        </Input>
                      </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????? ???????? ?????? ????????
                      </div>

                      <div style={{ textAlign: "right"}}>
                      <FormGroup check inline>
                        <div style={{ textAlign: "right", paddingTop: "10px" }}>
                          <Input
                            type="radio"
                            name="carYN"
                            value={data.yes}
                            onChange={handleChange}
                            id="carYES"
                          />
                          ????  
                        </div>
                        </FormGroup>

                        <FormGroup check inline >
                        <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        <Input
                          type="radio"
                          id="carNO"
                          name="carYN"
                          value={data.no}
                          onChange={handleChange}
                        />
                        ????
                        </div>
                      </FormGroup>
                      </div>
                    </>
                  )}

                 {/* ?????????? */}

                  {data.typevent === "4" && (
                    <>
                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    ???????? ????????????
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="resevent"
                      value={data.resevent}
                      onChange={handleChange}
                      id="res"
                    >
                      <option value={"0"}>??????</option>
                      <option value={"1"}>??????????</option>
                      <option value={"2"}>?????? ????????</option>
                      <option value={"3"}>???? ????????</option>
                    </Input>
                  </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????? ????????
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="cli"
                          value={data.cli}
                          onChange={handleChange}
                          id="sel"
                        >
                          <option value={"0"}>??????</option>
                        </Input>
                      </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????? ???????? ?????? ????????
                      </div>

                      <div style={{ textAlign: "right"}}>
                      <FormGroup check inline>
                        <div style={{ textAlign: "right", paddingTop: "10px" }}>
                          <Input
                            type="radio"
                            name="carYN"
                            value={data.yes}
                            onChange={handleChange}
                            id="carYES"
                          />
                          ????  
                        </div>
                        </FormGroup>

                        <FormGroup check inline>
                        <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        <Input
                          type="radio"
                          id="carNO"
                          name="carYN"
                          value={data.no}
                          onChange={handleChange}
                        />
                        ????
                        </div>
                      </FormGroup>
                      </div>
                    </>
                  )}

                  {/* ?????????? ?????? */}

                   {data.typevent === "5" && (
                    <>
                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????? ????????
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="selneshek"
                          value={data.selneshek}
                          onChange={handleChange}
                          id="neshek"
                        >
                          <option value={"0"}>??????</option>
                        </Input>
                      </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????? ???????? ?????? ????????
                      </div>

                      <div style={{ textAlign: "right"}}>
                      <FormGroup check inline>
                        <div style={{ textAlign: "right", paddingTop: "10px" }}>
                          <Input
                            type="radio"
                            name="neshekYN"
                            value={data.yes}
                            onChange={handleChange}
                            id="neshekYES"
                          />
                          ????  
                        </div>
                        </FormGroup>

                        <FormGroup check inline>
                        <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        <Input
                          type="radio"
                          id="neshekNO"
                          name="neshekYN"
                          value={data.no}
                          onChange={handleChange}
                        />
                        ????
                        </div>
                      </FormGroup>
                      </div>

                   <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    ???? ?????????? ????????????
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="whap"
                      value={data.whap}
                      onChange={handleChange}
                      id="what"
                    >
                      <option value={"0"}>??????</option>
                      <option value={"1"}>?????????? ??????</option>
                      <option value={"2"}>?????????? ????????????</option>
                      <option value={"3"}>?????????? ????????</option>
                      <option value={"4"}>?????????? ?????? ????????</option>
                      <option value={"5"}>??????</option>
                    </Input>
                  </FormGroup>

                    </>
                  )} 


                  {/*  ?????????? ?????????? ???????? ????"?? */}
 
                  {data.typevent === "6" && (
                    <>
                    <p style={{textAlign: "right", color:"red", fontSize: "10px"}}>?????????? ?????????? ??????????*</p>

                  <FormGroup dir="rtl">
                    <Input
                      placeholder="?????????? ????????????"
                      name="tior"
                      type="textarea"
                      value={data.tior}
                      onChange={handleChange}
                    />
                  </FormGroup> 

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????? ????????
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="wnifga"
                          value={data.wnifga}
                          onChange={handleChange}
                          id="when"
                        >
                          <option value={"0"}>??????</option>
                          <option value={"1"}>?????????? ???????????? ??????????????</option>
                          <option value={"2"}>?????????? ???????????? ????????????</option>
                          <option value={"3"}>??????????</option>
                          <option value={"4"}>???????????? ????????????</option>
                          <option value={"5"}>??????</option>
                        </Input>
                      </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????? ????????
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="amlahtype"
                          value={data.amlahtype}
                          onChange={handleChange}
                          id="amlah"
                        >
                          <option value={"0"}>??????</option>
                        </Input>
                      </FormGroup>

                    </>
                  )} 

                  {/* ?????????? ??????????*/}

                  {data.typevent === "7" && (
                    <>
                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    ?????? ????????
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="mataftype"
                      value={data.mataftype}
                      onChange={handleChange}
                      id="mataf"
                    >
                      <option value={"0"}>??????</option>
                    </Input>
                  </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????? ??????"??
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="rekemtype"
                          value={data.rekemtype}
                          onChange={handleChange}
                          id="rekem"
                        >
                          <option value={"0"}>??????</option>
                        </Input>
                      </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????? ??????"?? ?????????? ????????????
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="mazavrekem"
                          value={data.mazavrekem}
                          onChange={handleChange}
                          id="mazav"
                        >
                          <option value={"0"}>??????</option>
                          <option value={"1"}>????????</option>
                          <option value={"2"}>????????????</option>
                        </Input>
                      </FormGroup>


                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????? ???????? ?????????? ??????????
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="dwork"
                          value={data.dwork}
                          onChange={handleChange}
                          id="dwork"
                        >
                          <option value={"0"}>??????</option>
                          <option value={"1"}>?????????????? ????"??</option>
                          <option value={"2"}>??????????</option>
                        </Input>
                      </FormGroup>


                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????????? ?????????? / ??????????
                      </div>

                      <div style={{ textAlign: "right"}}>
                      <FormGroup check inline>
                        <div style={{ textAlign: "right", paddingTop: "10px" }}>
                          <Input
                            type="radio"
                            name="matafYN"
                            value={data.yes}
                            onChange={handleChange}
                            id="matafYES"
                          />
                          ????  
                        </div>
                        </FormGroup>

                        <FormGroup check inline>
                        <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        <Input
                          type="radio"
                          id="matafNO"
                          name="matafYN"
                          value={data.no}
                          onChange={handleChange}
                        />
                        ????
                        </div>
                      </FormGroup>
                      </div>
                    </>
                  )}
 
                  {/* ?????????????? */}

                  {data.typevent === "8" && (
                    <>
                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    ?????? ????????????????
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="apitype"
                      value={data.apitype}
                      onChange={handleChange}
                      id="apidmia"
                    >
                      <option value={"0"}>??????</option>
                      <option value={"1"}>??????????????</option>
                      <option value={"2"}>??????????????</option>
                    </Input>
                  </FormGroup>
                    </>
                  )} 

                  {/* ?????????? */}

                  {data.typevent === "9" && (
                    <>
                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    ?????? ???????? ????????????
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="mholaztype"
                      value={data.mholaztype}
                      onChange={handleChange}
                      id="mholaz"
                    >
                      <option value={"0"}>??????</option>
                    </Input>
                  </FormGroup>
                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    ?????? ???????? ??????????
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="mhalztype"
                      value={data.mhalztype}
                      onChange={handleChange}
                      id="mhalz"
                    >
                      <option value={"0"}>??????</option>
                    </Input>
                  </FormGroup>

                    </>
                  )}

                  {/* ?????? ?????????????? ??????????/????"?? */}

                  {data.typevent === "10" && (
                    <>
                  <FormGroup dir="rtl">
                    <Input
                      placeholder="?????????? ????????????"
                      name="pirotnezek"
                      type="textarea"
                      value={data.pirotnezek}
                      onChange={handleChange}
                    />
                  </FormGroup> 
                    </>
                  )}
 
                 {/* ?????? ?????????????? ??????????/????"?? */}

                 {data.typevent === "11" && (
                    <>
                  <FormGroup dir="rtl">
                    <Input
                      placeholder="?????????? ????????????"
                      name="pirotshigra"
                      type="textarea"
                      value={data.pirotshigra}
                      onChange={handleChange}
                    />
                  </FormGroup> 
                    </>
                  )}


                  {/* ?????? */}

                  {data.typevent === "12" && (
                    <>
                  <FormGroup dir="rtl">
                    <Input
                      placeholder="?????????? ????????????"
                      name="pirotother"
                      type="textarea"
                      value={data.pirotother}
                      onChange={handleChange}
                    />
                  </FormGroup> 
                    </>
                  )} 


                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    ?????????? ??????????
                  </div>
                  <FormGroup dir="rtl">
                    <Input
                      placeholder="?????????? ??????????"
                      name="datevent"
                      type="datetime-local"
                      value={data.datevent}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup dir="rtl">
                    <Input
                      placeholder="?????????? ????????????"
                      name="mikom"
                      type="string"
                      value={data.mikom}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup dir="rtl">
                    <Input
                      placeholder="?????? ???????????? ?????? ????????????"
                      name="nifga"
                      type="number"
                      value={data.nifga}
                      onChange={handleChange}
                    />
                  </FormGroup>

                   {data.nifga > "0" && (
                    <>
                  <FormGroup dir="rtl">
                    <Input
                      placeholder="???? ??????????"
                      name="namenifga"
                      type="string"
                      value={data.namenifga}
                      onChange={handleChange}
                    />
                  </FormGroup> 

                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    ???????? ??????????
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="dargaNifga"
                      value={data.dargaNifga}
                      onChange={handleChange}
                      id="darga"
                    >
                      <option value={"0"}>??????</option>
                    </Input>
                  </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ?????? ??????????
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="mazavnifga"
                          value={data.mazavnifga}
                          onChange={handleChange}
                          id="mazav"
                        >
                          <option value={"0"}>??????</option>
                          <option value={"1"}>????</option>
                          <option value={"2"}>????????????</option>
                          <option value={"3"}>??????</option>
                          <option value={"4"}>????????</option>
                        </Input>
                      </FormGroup>

                      <FormGroup dir="rtl">
                    <Input
                      placeholder="?????????? ???????????? ????????"
                      name="mikompgia"
                      type="string"
                      value={data.mikompgia}
                      onChange={handleChange}
                    />
                  </FormGroup> 
                  <div style={{ textAlign: 'right', paddingTop: '10px' }}>
                  <button
                //    onClick={clickSubmit} 
                   className="btn btn-primary">
                      +
                 </button>
                 </div>
                  </>
                  )}


                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    ?????????? ???????? ???? ????????????
                  </div>
                  <input
                    placeholder="?????????? ???????? ???? ????????????"
                    name="tahkirFile"
                    type="file"
                    id="upfile"
                    value={data.tahkirFile}
                    onChange={handleChange}
                    accept=".pdf, .doc, .docx, .txt, .xls"
                  />

                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    ?????????? ???????????? ????????????
                  </div>
                  <input
                    placeholder="?????????? ???????????? ????????????"
                    name="tahkirimg"
                    type="file"
                    value={data.tahkirimg}
                    onChange={handleChange}
                    accept=".jpeg, .png"
                  />

                  <div className="text-center">
                    <button 
                    // onClick={clickSubmit} 
                    className="btn btn-primary">
                      ??????????
                    </button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>

        </>
    );  
    
    return (
        <>
           {Reporter()}
        </>
      );
}  
