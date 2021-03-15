import React from 'react';
import NB from "./NavBar"; 
import "../Notification.css";

const Notifications = () => {
  return (
    <div className="App">
      <NB />
      <div className="white">
      <div class="notification-tile">
            <div class="notification-content">
                <header>Anna commented on your task</header>
                <p class="info">Anna: Great Job!</p>
                <p class="time2">11:53 pm</p>
            </div>
        </div>
        <div class="notification-tile">
            <div class="notification-content">
                <p class="info2">Requests</p>
                <p class="requestdesc">Take out Trash</p>
                <p class="time3">3:05 pm</p>
            </div>
            <div class="notification-button">
                <button class="notification-button-style">Claim</button>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Notifications;