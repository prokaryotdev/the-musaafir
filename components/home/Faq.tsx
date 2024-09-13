import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  const faqs = [
    {
      id: "item-1",
      question: "What Services Do You Offer?",
      answer: "We provide a comprehensive range of services including personalized consultation, visa and immigration assistance, relocation planning, cultural orientation, community connection, and ongoing support to ensure a smooth transition to a Muslim-majority country."
    },
    {
      id: "item-2",
      question: "How Does The Consultation Work?",
      answer: "Our personalized consultation involves one-on-one advice to help you plan your move. We assist with selecting the right country based on your needs, organizing your relocation, and addressing any specific concerns you might have."
    },
    {
      id: "item-3",
      question: "What Kind Of Visa Help Do You Provide?",
      answer: "We assist with all aspects of visa applications and immigration procedures. This includes helping you gather necessary documents, complete applications, and navigate the complexities of the immigration process to ensure a hassle-free move."
    },
    {
      id: "item-4",
      question: "Can You Help With Finding A Home?",
      answer: "Yes, we offer relocation planning services that include finding a suitable home and assisting with the practical details of settling into your new environment. Our goal is to make your transition as smooth as possible."
    },
    
  ];
  
  
  const Faq = () => {
    return (
      <div className="max-w-[900px] w-full mx-auto mb-10 sm:mb-20 px-4 sm:px-8">
        <div className="mb-6 font-semibold sm:mb-12 text-3xl sm:text-5xl ">
          Frequently Asked Questions
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map(({ id, question, answer }) => (
            <AccordionItem key={id} value={id}>
              <AccordionTrigger className="text-lg text-left font-medium hover:no-underline hover:bg-gray-50/50 text-gray-950">{question}</AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 border-t pt-4 pr-[5%]">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        
      </div>
    );
  };
  
  export default Faq;
  