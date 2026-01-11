import { Bot, MessageCircle } from "lucide-react";
import ChatWidget from "./ChatWidget";

interface AIBeraterSectionProps {
  pageName?: string;
  description?: string;
  buttonText?: string;
}

export default function AIBeraterSection({ 
  pageName,
  description,
  buttonText = "Fragen zu Kosten, Ablauf & Materialien"
}: AIBeraterSectionProps) {
  const openChat = () => {
    const chatButton = document.querySelector('[data-testid="button-chat-toggle"]') as HTMLButtonElement;
    if (chatButton) {
      chatButton.click();
    }
  };

  const title = pageName 
    ? `Ihr persönlicher Berater für ${pageName}`
    : "Ihr persönlicher 089Dach GmbH-Berater";

  const desc = description 
    || "Stellen Sie Ihre Fragen zu Kosten, Ablauf, Materialien und mehr. Unser KI-Berater gibt Ihnen sofort Auskunft.";

  return (
    <>
      <ChatWidget />
      <section className="py-3 md:py-4 bg-gradient-to-r from-primary via-primary/90 to-primary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-4 rounded-full">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <div className="text-white">
                <h3 className="text-xl md:text-2xl font-heading font-bold">
                  {title}
                </h3>
                <p className="text-white/90 text-sm md:text-base mt-1">
                  {desc}
                </p>
              </div>
            </div>
            <button
              onClick={openChat}
              className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors shadow-lg"
              data-testid="button-open-ai-berater"
            >
              <MessageCircle className="h-5 w-5" />
              {buttonText}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
