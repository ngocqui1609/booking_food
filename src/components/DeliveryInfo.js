import React, { useContext } from "react";
import { itemContext } from "../App";
import { Modal, Button } from "react-bootstrap";

import { useState } from "react";

var store = require("store");

function DeliveryInfo() {
  //console.log("delvry-info rendered");
  const iL = useContext(itemContext);
  const { loggedIn } = iL.state;
  const getUserDetails = store.get("user");
  const getItems = store.get("orderedItems");
  const totalCost = store.get("totalCost") ?? 0;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="deliveryInfo d-flex flex-column">
      <div className="beforeh2"></div>
      <h4 className="delTitle text-primary fw-400 text-center d-flex justify-content-center">
        {loggedIn
          ? "Thanks For Your Order. We will reach you soon with your delicious food"
          : "Your Cart is Empty..!!"}
      </h4>

      {getUserDetails && getItems.length > 0 ? (
        <div className="summaryBill d-flex flex-column">
          <div className="orderDetails p-3">
            <h3>Order Details</h3>
            <div className="table-responsive">
              <table className="table-light m-2">
                <tbody>
                  <tr>
                    <td colSpan="3">Status:</td>
                    <td>Delivery Pending</td>
                  </tr>
                  <tr>
                    <td colSpan="3">Payment Mode:</td>
                    <td>Cash</td>
                  </tr>
                  <tr>
                    <td colSpan="3">Order Time:</td>
                    <td>{new Date().toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td colSpan="3">Delivery To:</td>
                    <td>{getUserDetails ? getUserDetails["addr"] : ""}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="orderSummary p-3">
            <h3>Order Summary</h3>

            <div className="items">
              <div className="table-responsive">
                <table className="table-light m-2">
                  <thead>
                    <tr>
                      <th scope="col">Item Name</th>
                      <th scope="col">Item Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getItems.map(l => (
                      <tr key={l.itemName}>
                        <td>{l.itemName}</td>
                        <td>{l.price}</td>
                        <td>{l.quantity}</td>
                        <td>{l.quantity * l.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center p-2">
                <div>Subtotal</div>
                <div>&#36;{totalCost}</div>
              </div>
              <div className="d-flex justify-content-between align-items-center p-2">
                <div>Delivery Charges</div>
                <div>&#36;20</div>
              </div>
              <div className="d-flex justify-content-between align-items-center p-2 mb-1 totalamt">
                <div>Total</div>
                <div>&#8377;{totalCost + 20}</div>
              </div>
              <div className="d-inline-flex">
                <button
                  onClick={handleShow}
                  type="button"
                  class="btn btn-success"
                >
                  ODER
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-3 text-center h4 text-danger border-danger">
          Something went wrong. Please visit the page after sometime.
        </div>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Invoice has been sent to your email. Thank you!</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeliveryInfo;
