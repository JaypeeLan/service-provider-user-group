import React from "react";
import style from "@/styles/Certificate.module.scss";

const Views = () => {
    return (
        <div className={style.container}>
            <div className={style.topic}>
                <h1 >CERTIFICATE OF COMPLETION</h1>
                <img src="/logo.png" alt="logo" className={style.size}></img>
            </div>
            <section >
                <div className={style.flex}>
                    <div className={style.shift}>
                        <h3 className={style.title}>OWNER INFORMATION</h3>
                        <h4 className={style.name}>Justina Ifeoma</h4>
                        <p>1901 Cape Coast, Ghana</p>
                        <p>Phone Number: +2348123456789</p>
                        <p>Email: justina@gmail.com</p>
                    </div>
                    <div>
                        <h3 className={style.title}>CONTRACTOR INFORMATION</h3>
                        <h4 className={style.name}>Farmer Tochi</h4>
                        <p>1901 Cape Coast, Ghana</p>
                        <p>Phone Number: +2348123456789</p>
                        <p>Email: justina@gmail.com</p>
                    </div>
                </div>
                <div className={style.flex}>
                    <div>
                        <h3 className={style.title}>PROJECT NAME</h3>
                        <h4 className={style.name}>Plowing</h4>
                        <p>Phone Number: +2348123456789</p>
                        <p>Email: justina@gmail.com</p>
                    </div>
                    <div>
                        <h3 className={style.shift}>PROJECT DESCRIPTION</h3>
                        <p>Turning over of the soil</p>
                    </div>
                </div>
            </section>
            <section >
                <h2 className={style.topic}>CERTIFICATION</h2>
                <p>
                    I hearby affirm, to the best of my knowledge and belief, based on inspections, observation,<br></br>
                    testing of the plowin and upon reporrts submitted by others, that this [Project Nmae] is<br></br>
                    substantially complete and operable. The [Project Name] was completed in accordance with the<br></br>
                    department's issued [Detail] permits.
                </p>
                <div className={style.flex}>
                    <p>Signed by</p>
                    <p>Date</p>
                    <hr />
                </div>
                <hr />
                <br></br>
                <br></br>
                <br></br>
                <p>Project Acceptance</p>
                <hr />
                <div className={style.flex}>
                    <p>mmmmmm</p>
                    <p>Date</p>
                    <hr />
                </div>
            </section>
        </div>
    );
};
export default Views;
