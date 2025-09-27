import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Lorum ipsum m ipsumm ipsumm ipsumm ipsumm",
    answer:
      "Lorem ipsum dolor sit amet, consectetur ddolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet.",
  },
  {
    id: 2,
    question: "Lorum ipsum m ipsumm ipsumm ipsumm ipsumm?",
    answer:
      "Answer for question 2 goes here. You can add as much text as you need.",
  },
  {
    id: 3,
    question: "Lorum ipsum m ipsumm ipsumm ipsumm ipsumm?",
    answer: "Answer for question 3 goes here.",
  },
  {
    id: 4,
    question: "Lorum ipsum m ipsumm ipsumm ipsumm ipsumm?",
    answer: "Answer for question 4 goes here.",
  },
  {
    id: 5,
    question: "Lorum ipsum m ipsumm ipsumm ipsumm ipsumm?",
    answer: "Answer for question 5 goes here.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div id="faq-section" className="relative z-50 w-full min-h-screen flex items-center justify-center py-20 overflow-hidden">
        <div className="fourline max-w-7xl mx-auto -z-1">
          <div className="fline"></div>
          <div className="fline"></div>
          <div className="fline"></div>
          <div className="fline"></div>
        </div>
      <div className="circle-shadow2"></div>
      <div className="circle-shadow1 !top-100"></div>
 
      <div className="w-full max-w-7xl">
        <div className="secTitles text-center mb-20 ">
        <h2 className="section-title text-7xl">FAQ</h2>
        <p className="text-4xl font-bold leading-0">
          FAQ
        </p>
      </div>

        <div className="flex flex-col gap-4 px-20">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`rounded-2xl h-[110px] py-4 flex items-center justify-between w-full gap-5 p-5 transition-all duration-300 cursor-pointer  ${
                openId === faq.id
                  ? "accordion-card text-white shadow-lg items-start border-none"
                  : "bg-[#0e0e0e] text-gray-300 border-[#232323] border-[1px]"
              }`}
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="flex-2">
                <h3 className="text-sm md:text-base font-medium">
                  {faq.question}
                </h3>
              </div>

              {/* Answer */}
              <div
                className={`flex-2 overflow-hidden transition-all h-full w-full duration-500 ease-in-out ${
                  openId === faq.id ? "max-h-40 " : "max-h-0"
                }`}
              >
                <p className="text-sm md:text-base text-gray-100 h-full">
                  {faq.answer}
                </p>
              </div>
                 <div
                  className={`ml-10 text-end text-sm md:text-base font-semibold ${
                    openId === faq.id ? "text-white" : "text-gray-500"
                  }`}
                >
                  {faq.id < 10 ? faq.id :`0${faq.id}`}
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
