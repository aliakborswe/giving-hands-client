import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import  { useState } from "react";
import Wrapper from "../common/Wrapper";

const faqData: FAQItemType[] = [
  {
    question: "How can I sign up as a volunteer?",
    answer:
      "Signing up is simple. Click the 'Sign Up' button on the homepage, fill in your details, and choose the volunteering opportunities that match your interests.",
  },
  {
    question: "What types of volunteering opportunities are available?",
    answer:
      "We offer a variety of opportunities, including community cleanups, elder care, educational support, environmental projects, and much more.",
  },
  {
    question: "Is there a minimum age requirement for volunteering?",
    answer:
      "Yes, the minimum age requirement varies depending on the type of volunteering activity. Most activities require participants to be at least 16 years old, but some may allow younger volunteers with parental consent.",
  },
  {
    question: "Do I need any prior experience to volunteer?",
    answer:
      "No prior experience is necessary for most of our opportunities. We provide guidance and support to help you get started and succeed in your role.",
  },
  {
    question: "How do I track my volunteering hours?",
    answer:
      "Your volunteering hours are automatically tracked in your profile. You can log in anytime to view your contributions and download a summary for your records.",
  },
  {
    question: "Can I suggest a new volunteering project?",
    answer:
      "Absolutely! We encourage volunteers to propose projects that benefit the community. Please reach out to us through the contact form with your idea.",
  },
];



type FAQItemType = {
  question: string;
  answer: string;
};



const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className='bg-secondary/10 '>
      <Wrapper>
        <h2 className='text-3xl font-extrabold text-center mb-8'>
          Frequently Asked Questions
        </h2>
        <div className='space-y-6'>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default FAQ;




type FAQItemProps = {
  item: FAQItemType;
  isOpen: boolean;
  toggleOpen: () => void;
};

const FAQItem = ({ item, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className='border-b border-gray-200 py-4'>
      <button
        className='flex justify-between items-center w-full text-left'
        onClick={toggleOpen}
      >
        <span className='text-lg font-medium '>
          {item.question}
        </span>
        {isOpen ? (
          <ChevronUpIcon className='h-6 w-6 ' />
        ) : (
          <ChevronDownIcon className='h-6 w-6 ' />
        )}
      </button>
      {isOpen && <p className='mt-2 '>{item.answer}</p>}
    </div>
  );
};
