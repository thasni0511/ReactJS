const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

let currentVerificationCode = null;

app.post('/send-code', async (req, res) => {
  const { email } = req.body;

  // Generating code
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  currentVerificationCode = code; // Save in memory 

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'thasni0511@gmail.com',        
      pass: 'hifk jkmj bost lirh',           
    },
  });

  const mailOptions = {
    from: 'thasni0511@gmail.com',
    to:'minhafatima94@gmail.com',
    subject: 'Your Verification Code',
    text: `Your verification code is: ${code}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, code }); // Sending code back to frontend
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

app.listen(5000, () => {
  console.log('✅ Server running on http://localhost:5000');
});
