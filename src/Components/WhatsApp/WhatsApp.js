import React from "react";
import ReactWhatsappButton from "react-whatsapp-button";

function WhatsApp() {
  return (
    <div className="App">
      <ReactWhatsappButton
        countryCode="880"
        phoneNumber="1713534019"
        animated
      />
    </div>
  )
}

export default WhatsApp;