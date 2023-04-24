import React from "react";
import styles from "@/styles/Services.module.scss";
import Navbar from "@/components/Navbar";
import Table, { TableHeaders } from "@/components/Table";
import Link from "next/link";

interface Requests {
  [key: string]: any;
}

const Services = () => {
  const requests: Requests[] = [
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      location: "accra, ghana",
      status: "Pending",
      id: 1,
    },
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      location: "accra, ghana",
      status: "Pending",
      id: 2,
    },
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      location: "accra, ghana",
      status: "Pending",
      id: 3,
    },
    {
      name: "Farm A",
      service: "plowing",
      date: "2021-04-20",
      location: "accra, ghana",
      status: "Pending",
      id: 4,
    },
  ];

  return (
    <div className={styles.services}>
      <Navbar />
      <div className={styles.requests}>
        <div className={styles.links}>
          <Link href="#">Active Request(20)</Link>
          <Link href="#">Purchase Order</Link>
          <Link href="#">Service Rendered</Link>
          <Link href="#">Cancelled</Link>
        </div>
        <h2>Recent Service Request</h2>

        <>
          <TableHeaders
            column1="NAME"
            column2="SERVICE TYPE"
            column3="DATE"
            column4="LOCATION"
            column5="STATUS"
          />

          <>
            {requests.map((request) => {
              return (
                <>
                  <Table
                    key={request.id}
                    col1={request.name}
                    col2={request.service}
                    col3={request.date}
                    col4={request.location}
                    col5={request.status}
                    src={"/arrow-down.png"}
                  />
                </>
              );
            })}
          </>
        </>
      </div>
    </div>
  );
};

export default Services;
