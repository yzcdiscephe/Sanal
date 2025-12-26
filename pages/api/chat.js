import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
  
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Sen bir kentsel dönüşüm uzmanısın. 6306 sayılı kanun ve kira yardımı konularında teknik bilgi ver. Sesli yanıt vereceğin için cevapların kısa ve öz olsun. Hukuki danışmanlık yapmadığını belirt." },
        { role: "user", content: req.body.question }
      ],
    });
    res.status(200).json({ answer: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
