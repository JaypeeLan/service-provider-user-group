import React from "react";
import style from "@/styles/Certificate.module.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Certificate {
    [key: string]: any;
}

const JobCert = () => {
    const certificate: Certificate[] = [
        {
            farm: "Farm A",
            service: "Service Type",
            id: "Certificate ID",
            date: "Date",
            tmpId: 1,
        },

        {
            farm: "Farm A",
            service: "Service Type",
            id: "Certificate ID",
            date: "Date",
            tmpId: 2,
        },

        {
            farm: "Farm A",
            service: "Service Type",
            id: "Certificate ID",
            date: "Date",
            tmpId: 3,
        },
    ];

    return (
        <div className={style.cert}>
            <Navbar />
            <div className={style.position}>
                {certificate.map((cert) => {
                    return (

                        <div className={style.box}>
                            <div className={style.flex}>
                                <div key={cert.tmpId}>
                                    <p>{cert.farm}</p>
                                    <p>{cert.service}</p>
                                    <p>{cert.id}</p>
                                    <p>{cert.date}</p>
                                </div>
                                <div className={style.click}>
                                    <Link href={"/certificate/" + cert.tmpId}>
                                        <h2>View</h2>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    );
                })}
            </div>
            <Footer />
        </div>
    );
};
export default JobCert;
