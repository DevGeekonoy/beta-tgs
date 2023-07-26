const express = require("express");
const sendEMail = require("./utils");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Node js mail sender");
});

app.post("/sendmail", async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    console.log("Received a request to send an email.");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    const response = await sendEMail({ name, email, phone, message });

    res.status(200).json({ message: response });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("server running on port 3000"));