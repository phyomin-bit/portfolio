'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

type Message = {
  role: 'user' | 'model';
  text: string;
};

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Phyo Min's AI assistant. Ask me anything about his experience, skills, or background!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Initialize Gemini Chat
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (apiKey && !chatRef.current) {
      const ai = new GoogleGenAI({ apiKey });
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are the personal AI assistant for Phyo Min's portfolio website. 
          Your job is to answer questions about Phyo Min's professional background, experience, and skills.
          
          Knowledge Base:
          - Name: Phyo Min
          - Role: Front End Developer
          - Experience: Over 1 year of professional experience.
          - Current Job: Front End Developer at Innovix Solution Software house.
          - Previous Job: Front End Developer at MMSIT Solution (8 months).
          - Tech Stack / Skills: HTML, CSS, JavaScript, Tailwind CSS, React.js, Next.js, React Router, React Hook Form, Redux, Zustand, Axios, SWR, Shadcn UI, Vite, Git, GitHub, Node.js, Express.js, MongoDB.
          - Contact: phyomin@innovix-solutions.com
          - Tone: Professional, helpful, concise, and enthusiastic. Use a modern, slightly tech-forward tone.
          
          Rules:
          - Keep answers relatively short (1-3 sentences) unless asked for details.
          - If asked something unrelated to Phyo Min, web development, or this portfolio, politely decline and steer the conversation back to Phyo Min's qualifications.
          - Do not make up any experience or skills not listed above.`,
        }
      });
    }
  }, []);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
        throw new Error("API Key missing");
      }
      if (!chatRef.current) {
        throw new Error("Chat not initialized");
      }

      const response = await chatRef.current.sendMessage({ message: userText });
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting right now. Please try emailing Phyo Min directly!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const ease = [0.76, 0, 0.24, 1] as const;

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: 1 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-white text-black shadow-2xl hover:scale-110 transition-transform duration-300 ${isOpen ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'}`}
        aria-label="Open Chat"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.5, ease }}
            className="fixed bottom-8 right-8 z-50 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-black border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-neutral-900/50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <h3 className="font-display font-bold uppercase tracking-widest text-sm text-white">AI Assistant</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-white text-black rounded-tr-sm' 
                        : 'bg-neutral-900 border border-white/10 text-neutral-200 rounded-tl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-neutral-900 border border-white/10 text-neutral-200 p-3 rounded-2xl rounded-tl-sm">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-neutral-900/50">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about my experience..."
                  className="w-full bg-black border border-white/20 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="absolute right-2 p-2 rounded-full bg-white text-black disabled:opacity-50 disabled:bg-neutral-700 disabled:text-neutral-400 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
