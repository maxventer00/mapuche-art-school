const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });
const { Firestore } = require("@google-cloud/firestore");
const firestore = new Firestore();
const emailTemplates = require("./emailTemplates");
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

exports.sendUserConfirmationEmail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    // Crafter ID to be confirmed
    const crafterID = req.query.crafterID;

    // Destination Emails
    const crafterEmail = req.query.crafterEmail;
    const schoolDest = "mapuchemarketplaceorders@gmail.com";

    // Crafter Details
    const crafterName = req.query.crafterName;

    // Email templates with variables
    const customerConfirmationEmail = emailTemplates.customerConfirmationEmail(
      crafterName,
      crafterEmail,
      crafterID
    );
    const schoolCrafterConfirmationEmail =
      emailTemplates.schoolCrafterConfirmationEmail();

    // Mail options for each email
    const customerMailOptions = {
      from: "Mapuche Marketplace <mapuchemarketplaceorders@gmail.com>",
      to: schoolDest,
      subject: "New Crafter Sign Up Needs Approval",
      html: customerConfirmationEmail,
    };

    const schoolMailOptions = {
      from: "Mapuche Marketplace <mapuchemarketplaceorders@gmail.com>",
      to: crafterEmail,
      subject: "Account Sign Up Pending Approval - Mapuche Art School",
      html: schoolCrafterConfirmationEmail,
    };

    // Sending each email
    const sendCrafterEmail = await transporter.sendMail(
      customerMailOptions,
      (erro, info) => {
        if (erro) {
          return res.send(erro.toString());
        }
        return res.send("Sent customer email! ");
      }
    );

    const sendSchoolEmail = await transporter.sendMail(
      schoolMailOptions,
      (erro, info) => {
        if (erro) {
          return res.send(erro.toString());
        }
        return res.send("Sent school order email! ");
      }
    );

    return sendSchoolEmail + sendCrafterEmail;
  });
});

exports.confirmCrafterAccount = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    // Destination Emails
    const crafterEmail = req.query.crafterEmail;

    const crafterApprovedEmail = emailTemplates.customerApprovedEmail();

    // Mail options
    const crafterMailOptions = {
      from: "Mapuche Marketplace <mapuchemarketplaceorders@gmail.com>",
      to: crafterEmail,
      subject: "Your crafter profile has been approved!",
      html: crafterApprovedEmail,
    };

    const doc = firestore.collection("userData").doc(req.query.crafterID);

    try {
      await doc.update({
        crafterApproved: true,
      });

      // Sending each email
      const sendApprovedEmail = await transporter.sendMail(
        crafterMailOptions,
        (erro, info) => {
          if (erro) {
            return res.send(erro.toString());
          }
          return res.send("Sent crafter email! ");
        }
      );

      return res.send("Approved crafter succesfully");
    } catch (error) {
      return res.send("Error approving crafter " + error);
    }
  });
});

exports.sendOrderMail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const customerDest = "mapuchemarketplaceorders@gmail.com";
    const schoolDest = "mapuchemarketplaceorders@gmail.com";
    // const dest = req.query.dest;

    const mailOptions1 = {
      from: "Mapuche Marketplace <mapuchemarketplaceorders@gmail.com>",
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
      from: "Mapuche Marketplace <mapuchemarketplaceorders@gmail.com>",
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
    const customerEmail = await transporter.sendMail(
      mailOptions1,
      (erro, info) => {
        if (erro) {
          return res.send(erro.toString());
        }
        return res.send("Sent customer email! ");
      }
    );

    const schoolEmail = await transporter.sendMail(
      mailOptions2,
      (erro, info) => {
        if (erro) {
          return res.send(erro.toString());
        }
        return res.send("Sent school order email! ");
      }
    );

    return schoolEmail + customerEmail;
  });
});
