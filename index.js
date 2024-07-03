const OpenAI = require('openai');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

const openai = new OpenAI({
  apiKey: "sk-proj-vEOm38X2Vm0AY1NWV7CeT3BlbkFJksbQxj65dK276JfR0Zax" // Replace with your actual OpenAI API key
});

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
  try {
    const stream = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Say this is a test" }],
        stream: true,
    });
    // Optionally process the OpenAI response here
    res.json({ message: "Hello World!" }); // Send a response to the client
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" }); // Handle errors appropriately
  }
});


app.listen(port, () => {
  console.log('Example app listening');
});

