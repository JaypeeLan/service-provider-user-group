import React from "react";
import RightSideBar from "../components/RightSideBar";
import styles from "@/styles/Home.module.scss";

interface Activities {
  [key: string]: any;
}
const Overview = () => {
  const activities: Activities[] = [
    {
      src: "/avatar.png",
      alt: "user avatar",
      activity: "New service request from Farm X for Plowing service",
      timestamp: "10 min ago",
      id: 1,
    },
    {
      src: "/avatar.png",
      alt: "user avatar",
      activity: "New service request from Farm X for Plowing service",
      timestamp: "10 min ago",
      id: 2,
    },
    {
      src: "/user-icon-avatar.png",
      alt: "user avatar",
      activity: "New service request from Farm X for Plowing service",
      timestamp: "10 min ago",
      id: 3,
    },
    {
      src: "/avatar.png",
      alt: "user avatar",
      activity: "New service request from Farm X for Plowing service",
      timestamp: "10 min ago",
      id: 4,
    },
    {
      src: "/user-icon-avatar.png",
      alt: "user avatar",
      activity: "New service request from Farm X for Plowing service",
      timestamp: "10 min ago",
      id: 5,
    },

    {
      src: "/user-icon-avatar.png",
      alt: "user avatar",
      activity: "New service request from Farm X for Plowing service",
      timestamp: "10 min ago",
      id: 6,
    },
  ];

  return (
    <div className={styles.home}>
      <div className={styles.details}>
        <div className={styles.navbar}>
          <form action="#" className={styles.form}>
            <button>
              <img src="/overview-icon.png" alt="menu" />
            </button>
            <input type="text" placeholder="Hinted Search Text" />
            <button type="submit">
              <img src="/search-icon.png" alt="search button" />
            </button>
          </form>
        </div>
        <div className={styles.service}>
          <h2>Service Summary</h2>
          <div className={styles.grid}>
            {/* =================== 1 =================== */}
            <div>
              <p>822</p>
              <div>
                <img src="/growth-up.png" alt="arrow up" />
                <div>
                  <p>+23.8%</p>
                  <p>growth in review from the last week</p>
                </div>
              </div>
            </div>
            {/* ====================== 2 =================== */}
            <div>
              <div>
                <img src="/star-icon.png" alt="star" />
                <img src="/star-icon.png" alt="star" />
                <img src="/star-icon.png" alt="star" />
                <img src="/star-icon.png" alt="star" />
                <img src="/star-icon.png" alt="star" />
              </div>
              <div>
                <p>+52</p>
                <p>Positive review more than the last week</p>
              </div>
            </div>
            {/* ======================= 3 =================== */}
            <div>
              <img src="/sun-icon.png" alt="sun" />
              <p>18 - 24c</p>
              <div>
                <img src="/temperature.png" alt="temperature" />
                <p>Today's Temperature</p>
              </div>
            </div>
          </div>
        </div>
        {/* ================= Activity ====================== */}
        <div className={styles.activity}>
          <div>
            <h2>Recent Activity</h2>
            <a href="#">Sell All</a>
          </div>
          {/* =========================================== */}
          <div className={styles.activities}>
            {activities.map((activity) => {
              return (
                <div key={activity.id}>
                  <img src={activity.src} alt={activity.alt} />
                  <div>
                    <p>{activity.activity}</p>
                    <span>{activity.timestamp}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* --------------------------------------- */}
      </div>
      <RightSideBar />
    </div>
  );
};

export default Overview;
