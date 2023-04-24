import React from "react";
import invoice from "@/styles/Invoice.module.scss";
import Navbar from "@/components/Navbar";
import Table, { TableHeaders } from "@/components/Table";
import Footer from "@/components/Footer";

interface ServiceRend {
  [key: string]: any;
}

const ServiceRend = () => {
  const serviceRend: ServiceRend[] = [
    {
      service: "Plowing",
      description:
        "This added functionality provides the service provider with easy access to view",
      quantity: "2",
      unitPrice: "GHS 150",
      total: "GHS 300",
      id: 1,
    },
    {
      service: "Plowing",
      description:
        "This added functionality provides the service provider with easy access to view",
      quantity: "2",
      unitPrice: "GHS 150",
      total: "GHS 300",
      id: 2,
    },
    {
      service: "Plowing",
      description:
        "This added functionality provides the service provider with easy access to view",
      quantity: "2",
      unitPrice: "GHS 150",
      total: "GHS 300",
      id: 3,
    },
  ];

  return (
    <div className={invoice.invoice}>
      <Navbar />

      <div className={invoice.boderline}>
        <div className={invoice.spreadmain}>
          <div className={invoice.up}>
            <h1>CubeSeed</h1>
            <br></br>
            <br></br>
            <h3>RECEPIENT</h3>
            <p className={invoice.name}>Justina Ifeoma</p>
            <p>1901 Cape Coast, Ghana</p>
          </div>
          <div className={invoice.spreadmini}>
            <div>
              <p className={invoice.highlight}>INVOICE </p>
              <p>Issued</p>
              <p>Due</p>
              <p>PO</p>
              <p className={invoice.highlight}>Total</p>
            </div>
            <div>
              <p className={invoice.highlight}>#12345</p>
              <p>Not seen yet</p>
              <p>Feb 26, 2023</p>
              <p>1.0M</p>
              <p className={invoice.highlight}>GHS131.25</p>
            </div>
          </div>
        </div>

        <h3>For Service Rendered</h3>
        <div>
          <TableHeaders
            column1="SERVICE"
            column2="DESCRIPTION"
            column3="QTY"
            column4="UNIT PRICE"
            column5="TOTAL"
          />

          <>
            {serviceRend.map((rend) => {
              return (
                <>
                  <Table
                    key={rend.id}
                    col1={rend.service}
                    col2={rend.description}
                    col3={rend.quantity}
                    col4={rend.unitPrice}
                    col5={rend.total}
                    src=""
                  />
                </>
              );
            })}
          </>
        </div>

        <div className={invoice.spreadmain}>
          <div>
            <p>
              Cubeseed provides a secure platform for transactions<br></br>
              which helps to build a more stable and sustain<br></br>
              business.
            </p>
          </div>
          <div className={invoice.spread}>
            <div>
              <p>Subtotal</p>
              <hr />
              <p>GST(5.0%)</p>
              <hr />
              <p>Total</p>
              <hr />
              <p>Account balance</p>
              <hr />
            </div>
            <div>
              <p>GHS131.25</p>
              <hr />
              <p>GHS0.25</p>
              <hr />
              <p>GHS631.25</p>
              <hr />
              <p>GHS131.25</p>
              <hr />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default ServiceRend;
