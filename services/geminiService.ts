import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTravelAdvice = async (query: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: `You are the guide for Travel Pe India, a wise and helpful local expert for Varanasi (Kashi) travel. 
        Your goal is to help tourists book transport (rickshaw, boat, car, bus) and plan their spiritual journey.
        Keep answers short, warm, culturally respectful, and encouraging. 
        If they ask about prices, suggest they click 'Book Now' to sign up and view the best daily rates.
        Always mention the spiritual significance if relevant.`,
      },
    });

    return response.text || "I apologize, I didn't catch that. Could you ask again about Varanasi travel?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am having trouble meditating on that answer right now. Please try again.";
  }
};