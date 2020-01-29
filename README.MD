#[How to Send and Receive SMS Messages With Node.js and Azure Functions](https://www.nexmo.com/blog/2020/01/29/how-send-receive-sms-messages-with-node-js-azure-functions-dr)

Follow the blog post above to create your own Function App, or:

1. Clone this repo
`git clone https://github.com/nexmo-community/nexmo-azure-sms-send-receive.git`
2. Import it into Visual Studio Code
3. Add Application Settings for `NEXMO_API_KEY` & `NEXMO_API_SECRET`. You can find them in your [Nexmo Dashboard](dashboard.nexmo.com/)
4. Buy a Nexmo SMS enabled phone number: https://dashboard.nexmo.com/buy-numbers
5. Deploy to Azure. This will give you an URL for the function once it's done deploying.
6. Set the URL in the Nexmo Dashboard as your "Inbound Webhook URL". It's the little settings icon next to your phone number: https://dashboard.nexmo.com/your-numbers
7. Send an SMS from your phone to your Nexmo Number

![Emoji Converter](sms-emoji.png)