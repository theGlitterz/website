document.addEventListener('DOMContentLoaded', () => {
  // Load Raleway font
  const fontLink = document.createElement('link');
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600&display=swap';
  fontLink.rel = 'stylesheet';
  document.head.appendChild(fontLink);

  // Chatbot button (with an image)
  const chatButton = document.createElement('button');
  chatButton.id = 'chatbotButton';
  chatButton.style.position = 'fixed';
  chatButton.style.bottom = '20px';
  chatButton.style.right = '20px';
  chatButton.style.width = '60px';
  chatButton.style.height = '60px';
  chatButton.style.border = 'none';
  chatButton.style.background = 'transparent';
  chatButton.style.cursor = 'pointer';

  const chatIcon = document.createElement('img');
  chatIcon.src = 'assets/img/Illustrations/Icons/Asset 8@2x.png'; // Replace with chatbot icon image URL
  chatIcon.style.width = '100%';
  chatIcon.style.height = '100%';
  chatIcon.style.borderRadius = '50px';
  chatButton.appendChild(chatIcon);
  document.body.appendChild(chatButton);

  // Greeting pop-up
  const greetingPopup = document.createElement('div');
  greetingPopup.textContent = "👋 Hi, I am Glitterz Zoo Zoo, your personal assistant!";
  greetingPopup.style.position = 'fixed';
  greetingPopup.style.bottom = '90px';
  greetingPopup.style.right = '30px';
  greetingPopup.style.background = '#eb5d1e';
  greetingPopup.style.color = 'white';
  greetingPopup.style.padding = '10px 15px';
  greetingPopup.style.borderRadius = '10px';
  greetingPopup.style.boxShadow = '0px 4px 10px rgba(0,0,0,0.2)';
  greetingPopup.style.fontSize = '14px';
  greetingPopup.style.fontFamily = 'Raleway, sans-serif';
  greetingPopup.style.display = 'block';
  greetingPopup.style.zIndex = '9999';
  document.body.appendChild(greetingPopup);

  // Hide greeting after 5 seconds
  setTimeout(() => {
    greetingPopup.style.display = 'none';
  }, 5000);

  // Chatbot container
  const chatbotContainer = document.createElement('div');
  chatbotContainer.id = 'chatbotContainer';
  chatbotContainer.style.position = 'fixed';
  chatbotContainer.style.bottom = '90px'; // Adjusted to prevent overlap with the greeting message
  chatbotContainer.style.right = '20px';
  chatbotContainer.style.width = '320px';
  chatbotContainer.style.height = '450px';
  chatbotContainer.style.backgroundColor = '#ffffff';
  chatbotContainer.style.borderRadius = '10px';
  chatbotContainer.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
  chatbotContainer.style.overflow = 'hidden';
  chatbotContainer.style.display = 'none'; // Start with the chatbot hidden
  chatbotContainer.style.flexDirection = 'column';
  chatbotContainer.style.fontFamily = 'Raleway, sans-serif';
  document.body.appendChild(chatbotContainer);

  // Chat header
  const chatHeader = document.createElement('div');
  chatHeader.style.display = 'flex';
  chatHeader.style.justifyContent = 'space-between';
  chatHeader.style.alignItems = 'center';
  chatHeader.style.backgroundColor = '#eb5d1e';
  chatHeader.style.padding = '10px';
  chatHeader.style.color = 'white';
  chatHeader.style.fontSize = '16px';
  chatHeader.style.fontWeight = 'bold';
  chatHeader.style.fontFamily = 'Raleway, sans-serif';
  chatHeader.textContent = 'Chat with Us';

  // Close button
  const closeButton = document.createElement('button');
  closeButton.textContent = '✖';
  closeButton.style.background = 'none';
  closeButton.style.border = 'none';
  closeButton.style.color = 'white';
  closeButton.style.cursor = 'pointer';
  closeButton.style.fontSize = '18px';
  closeButton.onclick = () => {
    chatbotContainer.style.display = 'none';
    chatButton.style.display = 'block';
  };
  chatHeader.appendChild(closeButton);
  chatbotContainer.appendChild(chatHeader);

  // Chat messages area (scrollable)
  const chatMessages = document.createElement('div');
  chatMessages.id = 'chatMessages';
  chatMessages.style.flexGrow = '1';
  chatMessages.style.padding = '10px';
  chatMessages.style.overflowY = 'auto'; // Ensure it's scrollable
  chatMessages.style.maxHeight = '350px';
  chatbotContainer.appendChild(chatMessages);

  // FAQ Suggestions
  const faqContainer = document.createElement('div');
  faqContainer.style.padding = '10px';
  faqContainer.style.borderTop = '1px solid #ccc';
  faqContainer.style.fontFamily = 'Raleway, sans-serif';
  chatbotContainer.appendChild(faqContainer);

  function showFAQs() {
    faqContainer.innerHTML = '<strong>Quick Questions:</strong><br>';
    const faqs = [
      'What services do you offer?',
      'Do you build mobile apps?',
      'How can I contact your team?',
      'What industries do you specialize in?',
      'Do you provide IT support?'
    ];

    faqs.forEach(question => {
      const faqButton = document.createElement('button');
      faqButton.textContent = question;
      faqButton.style.display = 'block';
      faqButton.style.width = '100%';
      faqButton.style.padding = '8px';
      faqButton.style.margin = '5px 0';
      faqButton.style.border = 'none';
      faqButton.style.borderRadius = '5px';
      faqButton.style.backgroundColor = '#eb5d1e';
      faqButton.style.color = 'white';
      faqButton.style.cursor = 'pointer';
      faqButton.style.fontFamily = 'Raleway, sans-serif';
      faqButton.onclick = () => {
        sendMessage(question);
        faqContainer.style.display = 'none'; // Hide FAQs after selection
        showFAQsOption(); // Show the "See FAQs" button again
      };
      faqContainer.appendChild(faqButton);
    });
  }

  // Option to show FAQs again after user selects one
  function showFAQsOption() {
    const seeFAQsButton = document.createElement('button');
    seeFAQsButton.textContent = "See More FAQs";
    seeFAQsButton.style.display = 'block';
    seeFAQsButton.style.width = '100%';
    seeFAQsButton.style.padding = '8px';
    seeFAQsButton.style.marginTop = '10px';
    seeFAQsButton.style.border = 'none';
    seeFAQsButton.style.borderRadius = '5px';
    seeFAQsButton.style.backgroundColor = '#eb5d1e';
    seeFAQsButton.style.color = 'white';
    seeFAQsButton.style.cursor = 'pointer';
    seeFAQsButton.style.fontFamily = 'Raleway, sans-serif';
    seeFAQsButton.onclick = () => {
      faqContainer.style.display = 'block'; // Show FAQs again
      seeFAQsButton.style.display = 'none'; // Hide this button
    };
    faqContainer.appendChild(seeFAQsButton);
  }

  // Standard response when assistant doesn't have an answer
  function sendMessage(message) {
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    newMessage.style.padding = '10px';
    newMessage.style.marginBottom = '10px';
    newMessage.style.backgroundColor = '#f1f1f1';
    newMessage.style.borderRadius = '5px';
    chatMessages.appendChild(newMessage);

    // Predefined FAQ answers
    const faqAnswers = {
     'What services do you offer?': 'We offer end-to-end digital marketing, web & mobile app development, IT consulting, logo and website design, digital branding, UI/UX design, and more.',
'Do you build mobile apps?': 'Yes, we specialize in building mobile apps for both Android and iOS. Whether you\'re building from scratch or upgrading, we’ve got you covered!',
'How can I contact your team?': 'You can reach out to us via email: contact@glitterztech.com, or drop us a DM on Instagram @glitterztech.',
'What industries do you specialize in?': 'We specialize in providing custom solutions for SMEs in sectors like retail, startups, e-commerce, and more. Whatever your business, we’ve got a solution!',
'Do you provide IT support?': 'Yes, we offer comprehensive IT support, including cloud computing, cybersecurity, and more to keep your business running smoothly.',
'How long does it take to develop a custom website or app?': 'Timeline varies: basic websites take 2-4 weeks, while more complex apps can take 2-6 months. We work closely with you to ensure timely delivery.',
'Can you redesign my existing website?': 'Yes! We can redesign your website to make it modern, responsive, and user-friendly for better performance and engagement.',
'How do I get started?': 'Fill out our contact form or drop us an email at contact@glitterztech.com, and we’ll set up a free consultation to understand your needs and create a custom plan.',
'Do you work with startups?': 'Yes, we love helping startups build solid digital foundations that grow with your business. We’re with you from concept to launch!',
'What makes Glitterztech stand out?': 'What sets us apart is our innovative, scalable solutions, quick delivery, and a dedicated team focused on your business success. We go above and beyond to exceed expectations!',
'Can you help with digital marketing?': 'Yes! We provide digital marketing services, including SEO, PPC, and social media marketing to help grow your online presence and engage your audience.',
'How do you ensure a good user experience?': 'We focus on UI/UX design that’s intuitive and responsive, ensuring a seamless experience across all devices and platforms.'

    };

    // Check if the message matches any FAQ and provide corresponding response
    if (faqAnswers[message]) {
      const responseMessage = document.createElement('div');
      responseMessage.textContent = faqAnswers[message];
      responseMessage.style.padding = '10px';
      responseMessage.style.marginBottom = '10px';
      responseMessage.style.backgroundColor = '#dfe7fd';
      responseMessage.style.borderRadius = '5px';
      chatMessages.appendChild(responseMessage);
    } else {
      // Default message when no FAQ match is found
      const responseMessage = document.createElement('div');
      responseMessage.textContent = "Sorry, I am still learning. Meanwhile, you can get a quick answer by reaching out to our experts via email: contact@glitterztech.com or via Instagram @glitterztech.";
      responseMessage.style.padding = '10px';
      responseMessage.style.marginBottom = '10px';
      responseMessage.style.backgroundColor = '#dfe7fd';
      responseMessage.style.borderRadius = '5px';
      chatMessages.appendChild(responseMessage);
    }

    // Scroll to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Input area
  const chatInputContainer = document.createElement('div');
  chatInputContainer.style.display = 'flex';
  chatInputContainer.style.padding = '10px';
  chatInputContainer.style.borderTop = '1px solid #ccc';
  chatbotContainer.appendChild(chatInputContainer);

  const chatInput = document.createElement('input');
  chatInput.id = 'chatInput';
  chatInput.placeholder = 'Type a message...';
  chatInput.style.flexGrow = '1';
  chatInput.style.padding = '8px';
  chatInput.style.border = '1px solid #ccc';
  chatInput.style.borderRadius = '5px';
  chatInput.style.fontFamily = 'Raleway, sans-serif';
  chatInputContainer.appendChild(chatInput);

  const sendButton = document.createElement('button');
  sendButton.textContent = 'Send';
  sendButton.style.marginLeft = '5px';
  sendButton.style.padding = '8px';
  sendButton.style.border = 'none';
  sendButton.style.backgroundColor = '#eb5d1e';
  sendButton.style.color = 'white';
  sendButton.style.borderRadius = '5px';
  sendButton.style.cursor = 'pointer';
  sendButton.style.fontFamily = 'Raleway, sans-serif';
  chatInputContainer.appendChild(sendButton);

  // Event listener for send button
  sendButton.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
      sendMessage(message);
      chatInput.value = ''; // Clear input after sending
    }
  });

  // Event listener for Enter key
  chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default behavior (like submitting a form)
      const message = chatInput.value.trim();
      if (message) {
        sendMessage(message);
        chatInput.value = ''; // Clear input after sending
      }
    }
  });

  // Show chatbot on button click
  chatButton.addEventListener('click', () => {
    chatbotContainer.style.display = 'flex'; // Ensure the chatbot appears
    chatButton.style.display = 'none'; // Hide the chat button
    faqContainer.style.display = 'block'; // Show FAQs once the chatbot is opened
  });

  // Show FAQs when the chatbot is opened
  showFAQs();
});
