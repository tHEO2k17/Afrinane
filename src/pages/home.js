import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../components/sidebar";
import "./content.css";
import circle from "../images/circle.svg";
import down from "../images/down.svg";
import up from "../images/up.svg";
import topdown from "../images/topdown.svg";

import { docs } from "firebase/firestore";
import db from "../firebase.config";

function Home() {
//   const [transactions, setTransactions] = useState([]);
//   const transactionsCollectionRef = collection(db, "transactions");

//   useEffect(() => {
   
//     const getTransactions = async () => {
//     const data = await getDoc(transactionsCollectionRef);
//       console.log(data);

//       getTransactions();
//        };
    
   
   
    
     
//   }, []);

// const [transaction, setTransaction] = useState([]);

// const fetchTransaction = async () => {
//   const response = db.collection("transactions");
    
//   const data = await response.get();

//   data.docs.forEach((item) => {
//     setTransaction([...transaction, item.data()]);

//     console.log(data);
//   });
// };


//  useEffect(() => {
//    fetchTransaction();
//  }, []);


  const analyticsStyle = {
    backgroundColor: "#35415E",
    width: "200px",
    height: "250px",
    border: "none",
    borderRadius: "20px",
  };

  return (
    <div lassName="Main-Home">
      <div class="home-content">
        <Sidebar />
        <div className="page-container">
          <Row>
            <Col>
              <div className="stat-cards">
                <div className="cards">
                  <div classname="analytics" style={analyticsStyle}>
                    <div className="img-on-cards" style={{ display: "flex" }}>
                      <div className="img-icon">
                        <img
                          src={down}
                          style={{ height: "16px" }}
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="img">
                        <img
                          src={circle}
                          style={{ height: "50px" }}
                          alt="BigCo Inc. logo"
                        />
                      </div>
                    </div>

                    <span>Total Amount Received</span>
                    <div className="currency">(GHS)</div>
                    <div
                      class="amount-1"
                      style={{
                        fontSize: "35px",
                        color: "#D79AD7",
                        fontWeight: "Bold",
                        paddingLeft: "10px",
                      }}
                    >
                      5.6m
                    </div>
                    <span>Exchange Rate</span>
                    <div
                      className="currency-rate"
                      style={{ fontWeight: "bold" }}
                    >
                      USD 1 = GHS 7.4333
                    </div>
                  </div>
                </div>

                <div className="cards">
                  <div classname="analytics" style={analyticsStyle}>
                    <div className="img-on-cards" style={{ display: "flex" }}>
                      <div className="img-icon">
                        <img
                          src={up}
                          style={{ height: "16px" }}
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="img">
                        <img
                          src={circle}
                          style={{ height: "50px" }}
                          alt="BigCo Inc. logo"
                        />
                      </div>
                    </div>

                    <span>Total Amount Received</span>
                    <div className="currency">(GHS)</div>
                    <div
                      class="amount-1"
                      style={{
                        fontSize: "35px",
                        color: "#9FDFCD",
                        fontWeight: "Bold",
                        paddingLeft: "10px",
                      }}
                    >
                      5.6m
                    </div>
                    <span>Exchange Rate</span>
                    <div
                      className="currency-rate"
                      style={{ fontWeight: "bold" }}
                    >
                      USD 1 = GHS 7.4333
                    </div>
                  </div>
                </div>

                <div className="cards">
                  <div classname="analytics" style={analyticsStyle}>
                    <div className="img-on-cards" style={{ display: "flex" }}>
                      <div className="img-icon">
                        <img
                          src={topdown}
                          style={{ height: "16px" }}
                          alt="BigCo Inc. logo"
                        />
                      </div>
                      <div className="img">
                        <img
                          src={circle}
                          style={{ height: "50px", marginLeft: "-15px" }}
                          alt="BigCo Inc. logo"
                        />
                      </div>
                    </div>

                    <span>Total Amount Received</span>
                    <div className="currency">(GHS)</div>
                    <div
                      class="amount-1"
                      style={{
                        fontSize: "35px",
                        color: "#F3BE18",
                        fontWeight: "Bold",
                        paddingLeft: "10px",
                      }}
                    >
                      2,356.00m
                    </div>
                    <span>Exchange Rate</span>
                    <div
                      className="currency-rate"
                      style={{ fontWeight: "bold" }}
                    >
                      USD 1 = GHS 7.4333
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="transaction-type-button">
                <div className="top-up">
                  <button class="deposit">Top Up</button>
                </div>

                <div className="withdrawal">
                  <button className="receive">Withdraw</button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="transaction-table">
                <table className="gfg">
                  <thead>
                    <tr>
                      <th>RECENT TRANSACTION</th>
                      <th>ACCOUNT NO.</th>
                      <th>TYPE</th>
                      <th>AMOUNT</th>
                      <th>DATE</th>
                      <th>REFERENCE</th>
                      <th>STATS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ border: "1px solid black" }}>
                      <td>Theophilus</td>
                      <td>233555190488</td>
                      <td>Deposit</td>
                      <td>GHS 5220</td>
                      <td>Thu 26 Oct,</td>
                      <td>N/A</td>
                      <td className="in-progress">
                        <span>In Progress</span>
                      </td>
                    </tr>

                    <tr
                      style={{
                        marginBottom: "20px",
                        border: "1px solid black",
                      }}
                    >
                      <td>Paintsil</td>
                      <td>233555190488</td>
                      <td>Withdrwal</td>
                      <td>GHS 5220</td>
                      <td>Thu 26 Oct,</td>
                      <td>N/A</td>
                      <td className="complete">
                        <span>Complete</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Target</td>
                      <td>233555190488</td>
                      <td>Withdrwal</td>
                      <td>GHS 52,2055</td>
                      <td>Thu 26 Oct,</td>
                      <td>N/A</td>
                      <td className="in-progress">
                        <span>In Progress</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Gramma Limited</td>
                      <td>233555190488</td>
                      <td>Deposit</td>
                      <td>GHS 84,552,255</td>
                      <td>Thu 26 Oct,</td>
                      <td>N/A</td>
                      <td className="complete">
                        <span>Complete</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
export default Home;
