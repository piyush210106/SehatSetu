import { GoogleGenerativeAI } from "@google/generative-ai";

const talkRancho = async (req, res) => {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({model: "gemini-2.5-flash-lite", 
                                            systemInstruction: `
    You are an experienced medical advisor chatbot.
    Always respond in a professional but empathetic tone.
    Keep answers medium-length (about 4–6 sentences).
    Provide clear doctor-like advice, with steps the user can take.
    Avoid making diagnoses. Instead, suggest possible causes and safe next steps.
    Always recommend seeing a qualified healthcare provider if symptoms persist or worsen.
  `
    });

    let chatSession = model.startChat({history: []});
    console.log(req.body.chatInput);
    const {chatInput} = req.body;
    if(!chatInput) return res.status(400).json({message: "Invalid prompt"});

    try {
        const result = await chatSession.sendMessage(chatInput);
        const response = result.response;
        const text = response.text();

        return res.status(200).json(text);
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "Failed to generate response", error});
    }
}

export {talkRancho}
  