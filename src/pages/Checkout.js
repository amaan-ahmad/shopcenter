import React, { useContext } from "react";
import Tabs from "../components/Nav/Tabs";
import { BrandHeader } from "../components/Nav/Headers";
import { useQuery } from "@apollo/client";
import { GET_ADDRESS } from "../graphql/queries";
import { PaperCard } from "../components/Styles/PaperCard";
import { ScrollView } from "../components/Styles/ScrollView";
import { CartContext } from "../context/CartProvider";
import { BtnAction } from "../components/Styles/Common";

export default function Checkout() {
  const [addresses, setAddresses] = React.useState([]);
  const handleCompleted = (data) => setAddresses(data.buyer.address);
  const handleError = (error) => console.error(error);
  const { cartItems, isUpdated } = useContext(CartContext);
  useQuery(GET_ADDRESS, { onCompleted: handleCompleted, onError: handleError });
  console.log("from checkout: ", cartItems);
  const calculateBill = () => {
    if (cartItems.length === 0) {
      return 0;
    }
    let grandTotal = 0;
    cartItems.forEach((item) => {
      grandTotal += item.product.price * item.qty;
    });
    return grandTotal;
  };

  return (
    <>
      <BrandHeader />
      <Tabs />
      <ScrollView>
        <div style={{ margin: "0 1em" }}>
          <h2>Select an address for shipping.</h2>
          {addresses.length === 0
            ? "Kindly add an address from settings."
            : addresses.map((address, index) => {
                return (
                  <>
                    <PaperCard>
                      <input
                        type="radio"
                        id={`address-${index}`}
                        name="address"
                        value={index}
                        defaultChecked={index === 0}
                      />
                      <label
                        htmlFor={index}
                      >{`${address.line1}, ${address.line2}, ${address.city}, ${address.state} - ${address.zipcode}`}</label>
                    </PaperCard>
                    {console.log(addresses)}
                  </>
                );
              })}
          <PaperCard>
            <h4> Total bill</h4>
            {cartItems.length !== 0 ? (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ flex: 1 }}>Name</p>
                  <p style={{ flexShrink: 1 }}>Price</p>
                </div>
                {cartItems.map((item) => {
                  return (
                    <>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <p style={{ flex: 1 }}>{item.product.name}</p>

                        <p style={{ flexShrink: 1 }}>
                          Rs. {item.qty * item.product.price}
                        </p>
                      </div>
                    </>
                  );
                })}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <p>
                    <strong>Total</strong>
                  </p>
                  <p>
                    <strong>Rs. {calculateBill()}</strong>
                  </p>
                </div>
                <BtnAction>Checkout</BtnAction>
              </>
            ) : (
              "Nothing to checkout"
            )}
          </PaperCard>
        </div>
      </ScrollView>
    </>
  );
}
