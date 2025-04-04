


import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiX, FiMessageSquare, FiLoader } from 'react-icons/fi';
import { BsRobot } from 'react-icons/bs';

const ChatBot = ({ darkMode }) => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your AI assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const API_KEY = 'AIzaSyAG4MFYYkMzMMHQkmzeV3t5SaUfNX4gVZI';

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }]
          })
        }
      );

      const data = await response.json();
      const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                         "I couldn't understand that. Could you rephrase?";
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages(prev => [...prev, 
        { text: "Sorry, I'm having trouble connecting. Please try again later.", sender: 'bot' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${darkMode ? 'dark' : ''}`}>
      {/* Chat toggle button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-xl ${darkMode ? 
          'bg-purple-600 text-white' : 
          'bg-white text-purple-600 border border-purple-200'}`}
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25 }}
            className={`absolute bottom-20 right-0 w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col ${darkMode ? 
              'bg-gray-800 border border-gray-700' : 
              'bg-white border border-gray-200'}`}
          >
            {/* Header */}
            <div className={`flex items-center justify-between p-4 ${darkMode ? 
              'bg-gray-900 text-white' : 
              'bg-gradient-to-br from-gray-900 via-purple-1000 to-gray-900'}`}>
              <div className="flex items-center space-x-2">
                <BsRobot size={20} />
                <h3 className="font-semibold text-purple">Ask me</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-black/10"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className={`flex-1 p-4 overflow-y-auto max-h-96 ${darkMode ? 
              'bg-gray-800' : 
              'bg-gray-50'}`}>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 
                      (darkMode ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white') : 
                      (darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800')}`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <div className={`px-4 py-2 rounded-2xl ${darkMode ? 
                    'bg-gray-700 text-white' : 
                    'bg-gray-200 text-gray-800'}`}>
                    <div className="flex items-center space-x-2">
                      <FiLoader className="animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input form */}
            <form 
              onSubmit={handleSubmit}
              className={`p-4 border-t ${darkMode ? 
                'bg-gray-900 border-gray-700' : 
                'bg-white border-gray-200'}`}
            >
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className={`flex-1 px-4 py-2 rounded-full focus:outline-none ${darkMode ? 
                    'bg-gray-700 text-white placeholder-gray-400' : 
                    'bg-gray-100 text-gray-800 placeholder-gray-500'}`}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!input.trim() || isLoading}
                  className={`p-2 rounded-full ${darkMode ? 
                    'bg-purple-600 text-white' : 
                    'bg-purple-500 text-white'} ${(!input.trim() || isLoading) ? 'opacity-50' : ''}`}
                >
                  <FiSend size={20} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;