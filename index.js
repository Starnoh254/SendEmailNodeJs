require("dotenv").config();

var SibApiV3Sdk = require("sib-api-v3-sdk");
var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey = process.env.API_KEY;

// Uncomment below two lines to configure authorization using: partner-key
// var partnerKey = defaultClient.authentications['partner-key'];
// partnerKey.apiKey = 'YOUR API KEY';

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email
const sender = {
  email: "stajohn697@gmail.com",
};
sendSmtpEmail = {
  sender,
  to: [
    {
      email: "stanojohn697@gmail.com",
      name: "John Doe",
    },
  ],
  subject: "Subscribe to my channel",
  textContent: "Greetings, please subscribe to our channel.",
};

apiInstance.sendTransacEmail(sendSmtpEmail).then(
  function (data) {
    console.log("API called successfully. Returned data: " + data);
  },
  function (error) {
    console.error(error);
  }
);
