import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from '../ui/button'

export default function MessageButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can we assist you?', sender: 'support', time: '10:30 AM' },
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: inputValue, sender: 'user', time: 'Just now' },
      ])
      setInputValue('')
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all z-50"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-4" />}
        <span className="absolute top-1 ml-3 text-white w-5 h-5 bg-destructive rounded-full flex items-center justify-center text-xs font-bold">
          2
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-96 bg-card border border-border rounded-lg shadow-2xl flex flex-col z-50 max-[480px]:w-80 max-[480px]:h-80"
         style={{
                    backgroundColor: "hsl(var(--sidebar-background))",
                    borderColor: "hsl(var(--sidebar-border))",
                    color: "hsl(var(--sidebar-foreground))",
                }}
        >
          {/* Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">Support Chat</h3>
            <p className="text-xs text-primary-foreground/80">We usually reply in minutes</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-muted text-foreground'
                    }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs mt-1 opacity-70">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              size="icon"
              onClick={handleSendMessage}
              className="bg-primary text-white hover:bg-primary/90"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
