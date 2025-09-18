    import React, { useState } from 'react';
import './FAQ.css'; // Don't forget to create this CSS file!

// FAQ content data
const faqContent = [
  {
    question: "What exactly are Natural Konkan Beverages?",
    answer: "Our beverages are handcrafted from authentic Kokan fruits, known for their unique flavor and natural goodness. We use 100% natural ingredients with no artificial preservatives, colors, or flavors. It's a taste of the Konkan coast in every sip!"
  },
  {
    question: "Are your drinks really 100% natural?",
    answer: "Yes, absolutely! We pride ourselves on our commitment to natural purity. Our drinks are free from any artificial additives, and we source our fruits directly from local farms in the Konkan region to ensure premium quality and authentic taste."
  },
  {
    question: "How do I place an order?",
    answer: "It's simple! You can browse our signature flavors on the homepage or products page, add your favorite drinks to the cart, and proceed to checkout. For bulk orders, please use our dedicated 'Bulk Order' option on the homepage."
  },
  {
    question: "How long does shipping take?",
    answer: "We strive for quick delivery! Orders are typically shipped within 24 hours and delivered across Maharashtra in 2-3 business days. You will receive a tracking link via email once your order has been dispatched."
  },
  {
    question: "What is your return policy?",
    answer: "Due to the perishable nature of our products, we do not accept returns. However, if your order arrives damaged or incorrect, please contact our customer support team within 24 hours of delivery with photos, and we will be happy to assist you with a replacement or refund."
  },
  {
    question: "Can I add items to a Wishlist?",
    answer: "Yes, you can! Create an account to save your favorite flavors to your personal wishlist. This makes it easy to remember what you want to order next time. Just click the 'Add to Wishlist' button on any product page."
  },
  {
    question: "Is my personal and payment information safe?",
    answer: "Your security is our top priority. We use secure, encrypted payment gateways and do not store any of your sensitive financial details. Your personal information is protected under our strict privacy policy."
  },
];

function FAQ() {
  // State to manage which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page-wrapper">
      <div className="faq-container container">
        <h1 className="faq-title">Your thirst for answers, quenched.</h1>
        <p className="faq-subtitle">Find solutions to common questions about our beverages, orders, and more.</p>
        
        <div className="faq-accordion">
          {faqContent.map((item, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{item.question}</h3>
                <span className="faq-toggle-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;