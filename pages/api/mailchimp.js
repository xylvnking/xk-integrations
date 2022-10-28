// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mailchimp = require("@mailchimp/mailchimp_marketing");


const apiKey = process.env.MAILCHIMP_KEY
const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
  });

  async function run() {
    const response = await mailchimp.ping.get();
    console.log(response);
  }
  
  run();
  
  export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
  }
  