import CryptoJS from "crypto-js";

// Helper function to generate Gemini authentication headers
const generateGeminiHeaders = (payload) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const apiSecret = process.env.GEMINI_API_SECRET;
  const payloadEncoded = Buffer.from(JSON.stringify(payload)).toString(
    "base64"
  );
  const signature = CryptoJS.HmacSHA384(payloadEncoded, apiSecret).toString(
    CryptoJS.enc.Hex
  );

  return {
    "Content-Type": "text/plain",
    "X-GEMINI-APIKEY": apiKey,
    "X-GEMINI-PAYLOAD": payloadEncoded,
    "X-GEMINI-SIGNATURE": signature,
  };
};

export default { generateGeminiHeaders };
