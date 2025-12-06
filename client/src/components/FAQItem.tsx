import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItemProps {
  id: string;
  question: string;
  answer: string;
}

export default function FAQItem({ id, question, answer }: FAQItemProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={id} className="glass-card px-6 border-white/10 mb-3">
        <AccordionTrigger className="text-right hover:no-underline" data-testid={`faq-question-${id}`}>
          <span className="font-medium">{question}</span>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed" data-testid={`faq-answer-${id}`}>
          {answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
