const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
admin.initializeApp();

/**
 * Here we're using Gmail to send
 */

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mapuchemarketplaceorders@gmail.com",
    pass: "mapucheorders",
  },
});

exports.sendOrderMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const customerDest = "mapuchemarketplaceorders@gmail.com";
    const schoolDest = "mapuchemarketplaceorders@gmail.com";
    // const dest = req.query.dest;

    const mailOptions1 = {
      from: "Mapuche Marketplace Orders <mapuchemarketplaceorders@gmail.com>",
      to: customerDest,
      subject: "New Customer Marketplace Order!", // email subject
      html: `<p style="font-size: 32px;">A new order has been placed!</p>
                <br />
            <p style="font-size: 22px;">Product Name: Example Product</p>
            <p style="font-size: 22px;">Product Price: $55</p>
                <br />
            <p style="font-size: 22px;">Crafter Name: Example Crafter Name</p>
            <p style="font-size: 22px;">Crafter Email: crafter@crafter.com</p>
                <br />
            <p style="font-size: 22px;">Customer Name: Example Customer Name</p>
            <p style="font-size: 22px;">Customer Email: customer@customer.com</p>
                <br />
            <p style="font-size: 22px;">Customer Shipping Address: 1234 Customer Street, Customer City, Customer Country, Customer Postcode</p>
                <br />
            `, // email content in HTML
    };

    const mailOptions2 = {
      from: "Mapuche Marketplace Orders <mapuchemarketplaceorders@gmail.com>",
      to: schoolDest,
      subject: "Mapuche Art School Order!", // email subject
      html: `<p style="font-size: 32px;">Thanks for your order!</p>
                  <br />
              <p style="font-size: 22px;">Product Name: Example Product</p>
              <p style="font-size: 22px;">Product Price: $55</p>
                  <br />
              <p style="font-size: 22px;">Crafter Name: Example Crafter Name</p>
              <p style="font-size: 22px;">Crafter Email: crafter@crafter.com</p>
                  <br />
              <p style="font-size: 22px;">Customer Name: Example Customer Name</p>
              <p style="font-size: 22px;">Customer Email: customer@customer.com</p>
                  <br />
              <p style="font-size: 22px;">Customer Shipping Address: 1234 Customer Street, Customer City, Customer Country, Customer Postcode</p>
                  <br />
              `, // email content in HTML
    };

    // returning result
    const customerEmail = transporter.sendMail(mailOptions1, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send("Sent customer email! ");
    });

    const schoolEmail = transporter.sendMail(mailOptions2, (erro, info) => {
      if (erro) {
        return res.send(erro.toString());
      }
      return res.send("Sent school order email! ");
    });

    return schoolEmail + customerEmail;
  });
});

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
