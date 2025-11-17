import { useState } from 'react';
import { ChevronDown, ChevronUp, Camera, Clock, Users, Calendar, HelpCircle, Car } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "RSVP",
      icon: Calendar,
      answer: "We are so excited to celebrate our wedding day with you! To ensure an intimate and enjoyable experience for everyone, we have reserved seating for each guest individually. Please understand that this event is strictly by invitation only.\n\nThe favor of a reply is required on or before November 30, 2025.\n\nWe can't wait to share this unforgettable day with you!"
    },
    {
      question: "What happens during the ceremony?",
      icon: Camera,
      answer: "UNPLUGGED CEREMONY - We have hired the services of skilled photographers to capture the cherished moments of our day, allowing you to unwind, immerse yourself in the experience, and share it alongside us. Our photos will be available once the wedding is over. Please ensure the aisle remains unobstructed as the bridal entrance takes place. Rest assured, after the ceremony and throughout the entire reception, feel free to capture as many photos and videos as you'd like. Your memories are important to us, and we encourage you to preserve them. Kindly ensure that all children remain quiet and respectful throughout the wedding ceremony to maintain a serene and meaningful atmosphere."
    },
    {
      question: "How can I help the couple have a great time during their wedding?",
      icon: HelpCircle,
      answer: "- Pray with us for favorable weather and the continuous blessings of our Lord as we enter this new chapter of our lives as husband and wife.\n- RSVP as soon as your schedule is cleared.\n- Dress appropriately and follow our wedding motif.\n- Be on time.\n- Follow the seating arrangement in the reception.\n- Stay until the end of the program.\n- Join the activities and enjoy!"
    },
    {
      question: "Can I sit anywhere at the reception?",
      icon: Users,
      answer: "Please don't switch seats! We put a lot of thought and effort into the seating plan to make sure everyone's comfortable and seated with friends or people with similar interests. Our coordinators will help you find your assigned seat after registration — just ask, and they'll be happy to assist!"
    },
    {
      question: "May I invite a 'PLUS ONE' to the event?",
      icon: Users,
      answer: "We'd love to welcome everyone, but due to limited space, we're keeping our celebration intimate. As our event operates on an exclusive RSVP basis, we kindly ask that only the names listed on the invitation join us. We sincerely appreciate your understanding, which helps us ensure a comfortable and enjoyable celebration for all."
    },
    {
      question: "Can I bring someone else if my plus one or household member can't make it?",
      icon: Users,
      answer: "We totally understand that plans can change! However, invitations are reserved for the guests listed. If your plus one or household member can't make it, please reach out to us— we'll gladly assist you from there."
    },
    {
      question: "Can I bring my kids during the event?",
      icon: Users,
      answer: "To ensure everyone can relax and fully enjoy our celebration of love, our wedding will be an adults-only occasion. However, children from our immediate families and wedding parties will be warmly welcomed."
    },
    {
      question: "I said 'NO' to the RSVP but my schedule cleared up and I can attend now! What should I do?",
      icon: Calendar,
      answer: "Kindly message us first — your spot may have been given to another guest, but we'll be happy to check if there's still room for you to celebrate with us! If seats become available, we will let you know as soon as possible. Please refrain from attending without prior confirmation, as we may not have available seating."
    },
    {
      question: "Will there be parking available?",
      icon: Car,
      answer: "Yes! Parking will be available at both the ceremony and reception venues. Kindly note that spaces are on a first-come, first-served basis, so we encourage guests to arrive early. Please follow the signage and staff directions upon arrival to help ensure a smooth parking experience for everyone."
    },
    {
      question: "When is the appropriate time to leave?",
      icon: Clock,
      answer: "Your presence with us is the most precious gift we could receive. We warmly invite you to stay and celebrate with us throughout the entire reception program. If you must leave early, we would be grateful for the chance to thank you personally and bid you farewell. We kindly ask, however, that you consider remaining until after our Thanksgiving Speech."
    }
  ];

  return (
    <motion.section 
      id="faq"
      className="section-pastel-blue py-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 11.5 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 11.8 }}
        >
          <h2 className="text-5xl font-display italic text-foreground mb-8" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-body text-foreground max-w-2xl mx-auto">
            We have compiled answers to the most common questions about our wedding day. 
            If you have additional questions, please don't hesitate to contact us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-card/30 border border-border rounded-xl shadow-soft overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 12.1 + (index * 0.1) }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gold/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <faq.icon className="w-5 h-5 text-foreground flex-shrink-0" />
                  <h3 className="text-lg font-display font-bold text-foreground">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-foreground" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="w-full h-px bg-border mb-4"></div>
                  <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQSection;