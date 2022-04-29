const customerConfirmationEmail = (crafterName, crafterEmail, crafterID) =>
  `<p style="font-size: 32px;">A new crafter has signed up!</p>
        <br />
    <p style="font-size: 22px;">Crafter Name: ${crafterName}</p>
    <p style="font-size: 22px;">Crafter Email: ${crafterEmail}</p>
        <br />
    <a style="font-size: 22px;" href="https://us-central1-mapuche-art.cloudfunctions.net/confirmCrafterAccount?crafterID=${crafterID}&crafterEmail=${crafterEmail}">Approve Crafter!</a>
`;

const schoolCrafterConfirmationEmail = () =>
  `<p style="font-size: 32px;">Thanks for submitted your crafter sign up request!!</p>
        <br />
    <p style="font-size: 22px;">Your account will be reviewed and confirmed with the school which will allow you to list items and post on your crafter profile!</p>
`;

const customerApprovedEmail = () =>
  `<p style="font-size: 32px;">You're crafter account has been confirmed!</p>
      <br />
  <p style="font-size: 22px;">You're now able to list items for sale, and post on your crafter profile</p>
`;

module.exports = {
  customerConfirmationEmail,
  schoolCrafterConfirmationEmail,
  customerApprovedEmail,
};
