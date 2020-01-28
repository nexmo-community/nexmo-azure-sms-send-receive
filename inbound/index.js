module.exports = async function(context, req) {
  const Nexmo = require("nexmo");

  const nexmo = new Nexmo({
    apiKey: process.env["NEXMO_API_KEY"],
    apiSecret: process.env["NEXMO_API_SECRET"]
  });

  const params = Object.assign(req.query, req.body);

  if (params.text) {
    var response = [];

    // transform inbound SMS into emojis
    for (let i = 0; i < params.text.length; i++) {
      const emoji = String.fromCodePoint(127715 + params.text.charCodeAt(i));
      response.push(emoji);
    }

    // send SMS back with emojis
    nexmo.message.sendSms(
      params.to,
      params.msisdn,
      response.join(""),
      {
        type: "unicode"
      },
      (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          if (responseData.messages[0]["status"] === "0") {
            console.log("Message sent successfully.");
          } else {
            console.log(
              `Message failed with error: ${responseData.messages[0]["error-text"]}`
            );
          }
        }
      }
    );
  }
  
  context.res = {};
};
