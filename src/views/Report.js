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
                  <big>שליחת דיווח</big>
                </div>
                <div className="text-center text-muted mb-4">
                  <small>פרטי מדווח</small>
                </div>
                <Form role="form">
                  <FormGroup dir="rtl">
                    <Input
                      placeholder="שם פרטי"
                      name="name"
                      type="text"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup dir="rtl">
                    <Input
                      placeholder="שם משפחה"
                      name="lastname"
                      type="text"
                      value={data.lastname}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup className="mb-3" dir="rtl">
                    <Input
                      placeholder="מספר אישי"
                      name="personalnumber"
                      type="string"
                      maxlength="7"
                      value={data.personalnumber}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup className="mb-3" dir="rtl">
                    <Input
                      placeholder="טלפון נייד"
                      name="cellphone"
                      type="tel"
                      maxlength="10"
                      value={data.cellphone}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup dir="rtl">
                    <Input
                      placeholder="יחידה"
                      name="yhida"
                      type="string"
                      value={data.yhida}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <div className="text-center text-muted mb-4">
                    <small>פרטי אירוע</small>
                  </div>

                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    סוג אירוע
                  </div>
                  <FormGroup>
                    <Input
                      placeholder="סוג אירוע"
                      type="select"
                      name="typevent"
                      value={data.typevent}
                      onChange={handleChange}
                      id="seltype"
                    >
                      <option value={"בחר"}>בחר</option>
                      <option value={"1"}>תאונת כלי רכב</option>
                      <option value={"2"}>התהפכות</option>
                      <option value={"3"}>הנתקות גלגל</option>
                      <option value={"4"}>שריפה</option>
                      <option value={"5"}>אירועי נשק / תחמושת</option>
                      <option value={"6"}>תאונת עבודה אנשי טנ"א</option>
                      <option value={"7"}>פריקת מטפים</option>
                      <option value={"8"}>אפידמיה</option>
                      <option value={"9"}>חילוץ</option>
                      <option value={"10"}>נזק לתשתיות אחזקה / הח"י</option>
                      <option value={"11"}>אי קיום שגרת אחזקה</option>
                      <option value={"12"}>אחר</option>
                    </Input>
                  </FormGroup>

                  {/* תאונת כלי רכב */}

                  {data.typevent === "1" && (
                    <>
                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    סיבת האירוע
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="resevent"
                      value={data.resevent}
                      onChange={handleChange}
                      id="res"
                    >
                      <option value={"0"}>בחר</option>
                      <option value={"1"}>תאונה</option>
                      <option value={"2"}>כשל טכני</option>
                      <option value={"3"}>לא ידוע</option>
                    </Input>
                  </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        סוג הכלי
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="cli"
                          value={data.cli}
                          onChange={handleChange}
                          id="sel"
                        >
                          <option value={"0"}>בחר</option>
                        </Input>
                      </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        האם נגרם נזק לכלי
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
                          כן  
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
                        לא
                        </div>
                      </FormGroup>
                      </div>
                    </>
                  )} 

                  {/* התהפכות */}

                  {data.typevent === "2" && (
                    <>
                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    סיבת האירוע
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="resevent"
                      value={data.resevent}
                      onChange={handleChange}
                      id="res"
                    >
                      <option value={"0"}>בחר</option>
                      <option value={"1"}>תאונה</option>
                      <option value={"2"}>כשל טכני</option>
                      <option value={"3"}>לא ידוע</option>
                    </Input>
                  </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        סוג הכלי
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="cli"
                          value={data.cli}
                          onChange={handleChange}
                          id="sel"
                        >
                          <option value={"0"}>בחר</option>
                        </Input>
                      </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        האם נגרם נזק לכלי
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
                          כן  
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
                        לא
                        </div>
                      </FormGroup>
                      </div>
                    </>
                  )} 

                {/* הנתקות גלגל */}

                {data.typevent === "3" && (
                    <>
                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    סיבת האירוע
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="resevent"
                      value={data.resevent}
                      onChange={handleChange}
                      id="res"
                    >
                      <option value={"0"}>בחר</option>
                      <option value={"1"}>תאונה</option>
                      <option value={"2"}>כשל טכני</option>
                      <option value={"3"}>לא ידוע</option>
                    </Input>
                  </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        סוג הכלי
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="cli"
                          value={data.cli}
                          onChange={handleChange}
                          id="sel"
                        >
                          <option value={"0"}>בחר</option>
                        </Input>
                      </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        האם נגרם נזק לכלי
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
                          כן  
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
                        לא
                        </div>
                      </FormGroup>
                      </div>
                    </>
                  )}

                 {/* שריפה */}

                  {data.typevent === "4" && (
                    <>
                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    סיבת האירוע
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="resevent"
                      value={data.resevent}
                      onChange={handleChange}
                      id="res"
                    >
                      <option value={"0"}>בחר</option>
                      <option value={"1"}>תאונה</option>
                      <option value={"2"}>כשל טכני</option>
                      <option value={"3"}>לא ידוע</option>
                    </Input>
                  </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        סוג הכלי
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="cli"
                          value={data.cli}
                          onChange={handleChange}
                          id="sel"
                        >
                          <option value={"0"}>בחר</option>
                        </Input>
                      </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        האם נגרם נזק לכלי
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
                          כן  
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
                        לא
                        </div>
                      </FormGroup>
                      </div>
                    </>
                  )}

                  {/* אירוע נשק */}

                   {data.typevent === "5" && (
                    <>
                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        סוג הנשק
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="selneshek"
                          value={data.selneshek}
                          onChange={handleChange}
                          id="neshek"
                        >
                          <option value={"0"}>בחר</option>
                        </Input>
                      </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        האם נגרם נזק לנשק
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
                          כן  
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
                        לא
                        </div>
                      </FormGroup>
                      </div>

                   <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    מה התרחש באירוע
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="whap"
                      value={data.whap}
                      onChange={handleChange}
                      id="what"
                    >
                      <option value={"0"}>בחר</option>
                      <option value={"1"}>פיצוץ נשק</option>
                      <option value={"2"}>פיצוץ תחמושת</option>
                      <option value={"3"}>פליטת כדור</option>
                      <option value={"4"}>גרימת נזק לנשק</option>
                      <option value={"5"}>אחר</option>
                    </Input>
                  </FormGroup>

                    </>
                  )} 


                  {/*  תאונת עבודה אנשי טנ"א */}
 
                  {data.typevent === "6" && (
                    <>
                    <p style={{textAlign: "right", color:"red", fontSize: "10px"}}>הגדרה תאונת עבודה*</p>

                  <FormGroup dir="rtl">
                    <Input
                      placeholder="תיאור האירוע"
                      name="tior"
                      type="textarea"
                      value={data.tior}
                      onChange={handleChange}
                    />
                  </FormGroup> 

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        מתי נפגע
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="wnifga"
                          value={data.wnifga}
                          onChange={handleChange}
                          id="when"
                        >
                          <option value={"0"}>בחר</option>
                          <option value={"1"}>במהלך פעילות אחזקתית</option>
                          <option value={"2"}>במהלך פעילות שגרתית</option>
                          <option value={"3"}>תרגיל</option>
                          <option value={"4"}>פעילות מבצעית</option>
                          <option value={"5"}>אחר</option>
                        </Input>
                      </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        ממה נפגע
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="amlahtype"
                          value={data.amlahtype}
                          onChange={handleChange}
                          id="amlah"
                        >
                          <option value={"0"}>בחר</option>
                        </Input>
                      </FormGroup>

                    </>
                  )} 

                  {/* פריקת מטפים*/}

                  {data.typevent === "7" && (
                    <>
                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    סוג המטף
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="mataftype"
                      value={data.mataftype}
                      onChange={handleChange}
                      id="mataf"
                    >
                      <option value={"0"}>בחר</option>
                    </Input>
                  </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        סוג הרק"ם
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="rekemtype"
                          value={data.rekemtype}
                          onChange={handleChange}
                          id="rekem"
                        >
                          <option value={"0"}>בחר</option>
                        </Input>
                      </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        מצב הרק"ם במהלך הפריקה
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="mazavrekem"
                          value={data.mazavrekem}
                          onChange={handleChange}
                          id="mazav"
                        >
                          <option value={"0"}>בחר</option>
                          <option value={"1"}>סטטי</option>
                          <option value={"2"}>בתנועה</option>
                        </Input>
                      </FormGroup>


                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        האם בוצע במהלך עבודה
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="dwork"
                          value={data.dwork}
                          onChange={handleChange}
                          id="dwork"
                        >
                          <option value={"0"}>בחר</option>
                          <option value={"1"}>אחזקתית טנ"א</option>
                          <option value={"2"}>תקשוב</option>
                        </Input>
                      </FormGroup>


                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        במהלך פירוק / הרכבה
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
                          כן  
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
                        לא
                        </div>
                      </FormGroup>
                      </div>
                    </>
                  )}
 
                  {/* אפידמיה */}

                  {data.typevent === "8" && (
                    <>
                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    סוג האפידמיה
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="apitype"
                      value={data.apitype}
                      onChange={handleChange}
                      id="apidmia"
                    >
                      <option value={"0"}>בחר</option>
                      <option value={"1"}>תפעולית</option>
                      <option value={"2"}>אחזקתית</option>
                    </Input>
                  </FormGroup>
                    </>
                  )} 

                  {/* חילוץ */}

                  {data.typevent === "9" && (
                    <>
                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    סוג הכלי המחולץ
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="mholaztype"
                      value={data.mholaztype}
                      onChange={handleChange}
                      id="mholaz"
                    >
                      <option value={"0"}>בחר</option>
                    </Input>
                  </FormGroup>
                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    סוג הכלי המחלץ
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="mhalztype"
                      value={data.mhalztype}
                      onChange={handleChange}
                      id="mhalz"
                    >
                      <option value={"0"}>בחר</option>
                    </Input>
                  </FormGroup>

                    </>
                  )}

                  {/* נזק לתשתיות אחזקה/הח"י */}

                  {data.typevent === "10" && (
                    <>
                  <FormGroup dir="rtl">
                    <Input
                      placeholder="פירוט האירוע"
                      name="pirotnezek"
                      type="textarea"
                      value={data.pirotnezek}
                      onChange={handleChange}
                    />
                  </FormGroup> 
                    </>
                  )}
 
                 {/* נזק לתשתיות אחזקה/הח"י */}

                 {data.typevent === "11" && (
                    <>
                  <FormGroup dir="rtl">
                    <Input
                      placeholder="פירוט האירוע"
                      name="pirotshigra"
                      type="textarea"
                      value={data.pirotshigra}
                      onChange={handleChange}
                    />
                  </FormGroup> 
                    </>
                  )}


                  {/* אחר */}

                  {data.typevent === "12" && (
                    <>
                  <FormGroup dir="rtl">
                    <Input
                      placeholder="פירוט האירוע"
                      name="pirotother"
                      type="textarea"
                      value={data.pirotother}
                      onChange={handleChange}
                    />
                  </FormGroup> 
                    </>
                  )} 


                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    תאריך אירוע
                  </div>
                  <FormGroup dir="rtl">
                    <Input
                      placeholder="תאריך אירוע"
                      name="datevent"
                      type="datetime-local"
                      value={data.datevent}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup dir="rtl">
                    <Input
                      placeholder="מיקום האירוע"
                      name="mikom"
                      type="string"
                      value={data.mikom}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup dir="rtl">
                    <Input
                      placeholder="כמה נפגעים היו באירוע"
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
                      placeholder="שם הנפגע"
                      name="namenifga"
                      type="string"
                      value={data.namenifga}
                      onChange={handleChange}
                    />
                  </FormGroup> 

                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    דרגת הנפגע
                  </div>
                 <FormGroup>
                    <Input
                      type="select"
                      name="dargaNifga"
                      value={data.dargaNifga}
                      onChange={handleChange}
                      id="darga"
                    >
                      <option value={"0"}>בחר</option>
                    </Input>
                  </FormGroup>

                      <div style={{ textAlign: "right", paddingTop: "10px" }}>
                        מצב הנפגע
                      </div>
                      <FormGroup>
                        <Input
                          type="select"
                          name="mazavnifga"
                          value={data.mazavnifga}
                          onChange={handleChange}
                          id="mazav"
                        >
                          <option value={"0"}>בחר</option>
                          <option value={"1"}>קל</option>
                          <option value={"2"}>בינוני</option>
                          <option value={"3"}>קשה</option>
                          <option value={"4"}>נהרג</option>
                        </Input>
                      </FormGroup>

                      <FormGroup dir="rtl">
                    <Input
                      placeholder="מיקום הפגיעה בגוף"
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
                    צירוף מסמך של התחקיר
                  </div>
                  <input
                    placeholder="צירוף מסמך של התחקיר"
                    name="tahkirFile"
                    type="file"
                    id="upfile"
                    value={data.tahkirFile}
                    onChange={handleChange}
                    accept=".pdf, .doc, .docx, .txt, .xls"
                  />

                  <div style={{ textAlign: "right", paddingTop: "10px" }}>
                    צירוף תמונות האירוע
                  </div>
                  <input
                    placeholder="צירוף תמונות האירוע"
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
                      שליחה
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
