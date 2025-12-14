import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const quickQuestions = [
  "Was kostet eine Dachsanierung?",
  "Wie erkenne ich Dachschäden?",
  "Welche Förderungen gibt es?",
  "Wie lange dauert eine Reparatur?",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hallo!\nIch bin der digitale Assistent von 089Dach. Wie kann ich Ihnen bei Ihrem Dach-Anliegen helfen?\nWählen Sie eine Frage oder schreiben Sie uns direkt!"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    setShowQuickQuestions(false);
    
    try {
      const conversationHistory = [...messages, { role: "user" as const, content: userMessage }];
      
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: userMessage,
          history: conversationHistory.slice(-10)
        })
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: "Entschuldigung, es gab einen Fehler. Bitte rufen Sie uns an unter 089 12621964 oder nutzen Sie unser Rückruf-Formular." 
        }]);
      }
    } catch {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Entschuldigung, es gab einen Verbindungsfehler. Bitte rufen Sie uns an unter 089 12621964." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = async (question: string) => {
    if (isLoading) return;
    
    setMessages(prev => [...prev, { role: "user", content: question }]);
    setIsLoading(true);
    setShowQuickQuestions(false);
    
    try {
      const conversationHistory = [...messages, { role: "user" as const, content: question }];
      
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: question,
          history: conversationHistory.slice(-10)
        })
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
      } else {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: "Entschuldigung, es gab einen Fehler. Bitte rufen Sie uns an unter 089 12621964." 
        }]);
      }
    } catch {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Entschuldigung, es gab einen Verbindungsfehler. Bitte rufen Sie uns an unter 089 12621964." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div 
        className={`fixed top-0 right-0 z-50 h-full transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 bg-primary hover:bg-primary/90 text-white px-2 py-6 rounded-l-xl shadow-lg transition-all flex flex-col items-center gap-2"
          data-testid="button-chat-toggle"
        >
          {isOpen ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <>
              <ChevronLeft className="h-5 w-5" />
              <MessageCircle className="h-5 w-5" />
              <span className="text-xs font-bold writing-mode-vertical" style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}>
                089Dach KI-Assistent
              </span>
            </>
          )}
        </button>

        <div className="w-[350px] h-full bg-white shadow-2xl flex flex-col border-l border-gray-200">
          <div className="bg-secondary text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-full">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="font-bold text-sm">089Dach KI-Assistent</p>
                <p className="text-xs text-gray-300">Fragen Sie uns!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 p-1 rounded"
              data-testid="button-chat-close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-white border border-gray-200 text-secondary rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="bg-secondary p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                    <User className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2 justify-start">
                <div className="bg-primary/10 p-2 rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              </div>
            )}
            {showQuickQuestions && messages.length <= 1 && (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground text-center">Häufige Fragen:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs bg-white border border-primary/30 text-primary px-3 py-2 rounded-full hover:bg-primary/10 transition-colors"
                      data-testid={`button-quick-question-${index}`}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t bg-white">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ihre Frage zum Dach..."
                className="flex-1"
                disabled={isLoading}
                data-testid="input-chat-message"
              />
              <Button 
                type="submit" 
                size="icon" 
                className="bg-primary hover:bg-primary/90"
                disabled={isLoading || !input.trim()}
                data-testid="button-chat-send"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
