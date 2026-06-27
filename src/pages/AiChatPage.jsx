import { useState } from "react";
import { FiImage, FiMic, FiSend } from "react-icons/fi";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { chatMessages, suggestedQuestions } from "../data/mockData";

function AiChatPage() {
  const [messages, setMessages] = useState(chatMessages);
  const [question, setQuestion] = useState("");

  const handleSend = () => {
    if (!question.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text: question, time: "Now" },
      { id: Date.now() + 1, sender: "assistant", text: "Mock assistant reply ready for future API integration.", time: "Now" },
    ]);
    setQuestion("");
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
      <Card className="flex min-h-[78vh] flex-col p-0">
        <div className="border-b border-slate-100 px-6 py-5 dark:border-slate-800">
          <h1 className="text-2xl font-semibold text-ink dark:text-white">AI Farming Chat</h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">Ask field, fertilizer, disease, or market questions.</p>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.sender === "user"
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-100"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div className="text-sm text-slate-400">Assistant is typing...</div>
        </div>
        <div className="border-t border-slate-100 px-6 py-5 dark:border-slate-800">
          <div className="flex gap-3">
            <Input
              placeholder="Ask about your crop, soil, weather, or mandi..."
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
            <Button onClick={handleSend}><FiSend /></Button>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button variant="secondary" className="px-3 py-2"><FiMic /> Voice</Button>
            <Button variant="secondary" className="px-3 py-2"><FiImage /> Upload image</Button>
          </div>
        </div>
      </Card>
      <div className="space-y-6">
        <Card className="space-y-4">
          <h3 className="section-title">Suggested Questions</h3>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((item) => (
              <button
                key={item}
                onClick={() => setQuestion(item)}
                className="rounded-full bg-primary/10 px-4 py-2 text-left text-sm text-primary"
              >
                {item}
              </button>
            ))}
          </div>
        </Card>
        <Card className="space-y-4">
          <h3 className="section-title">Quick Prompt Chips</h3>
          <div className="grid gap-3">
            {["Fertilizer Schedule", "Pest Management", "Weather Advice", "Profit Estimate"].map((chip) => (
              <button key={chip} className="rounded-xl border border-slate-200 p-3 text-left text-sm dark:border-slate-700">
                {chip}
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AiChatPage;
