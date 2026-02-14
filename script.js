// ============================================
// EMAILJS INITIALIZATION - ADD THIS AT THE VERY TOP
// ============================================
// Initialize EmailJS for email notifications
(function() {
    emailjs.init('ttxv4j6PVgxP46OnW'); // Your Public Key
})();

// Current language state
let currentLanguage = localStorage.getItem('preferredLanguage') || 'english';

// Multilingual translations
const translations = {
    nepali: {
        // Navigation
        'home': 'गृहपृष्ठ',
        'products': 'उत्पादनहरू',
        'blog': 'ब्लग',
        'admin': 'प्रशासक',
        'about': 'बारेमा',
        'language': 'भाषा',
        
        // Hero Section
        'hero-title-rasilo': 'रसिलो',
        'hero-title-suntala': 'सुन्तला',
        'slogan': '"माक्पाको माटो, रसिलो स्वादमा: सिधै बारीबाट तपाईंको हातमा।"',
        'sub-slogan': 'जैविक, ताजा र मीठो · सिधै हाम्रो फार्मबाट तपाईंको घरसम्म।',
        'order-now': 'अर्डर गर्नुहोस्',
        
        // Why Buy Section
        'why-buy': 'हामीबाट किन किन्ने?',
        'organic': '१००% जैविक',
        'organic-desc': 'कीटनाशक रहित, माक्पाको पहाडमा प्राकृतिक रूपमा उब्जाइएको',
        'fresh': 'फार्म ताजा',
        'fresh-desc': '२४ घण्टाभित्र टिपेर डेलिभर',
        'direct': 'फार्मबाट सीधै',
        'direct-desc': 'बिचौलिया छैन, किसानबाट सीधै उचित मूल्य',
        
        // Products Section
        'products-title': 'हाम्रो सुन्तला प्याकेजहरू',
        'select': 'चयन गर्नुहोस्',
        
        // Order Form
        'place-order': 'अर्डर गर्नुहोस्',
        'name': 'पूरा नाम *',
        'phone': 'फोन नम्बर *',
        'quantity': 'परिमाण (केजी) *',
        'address': 'डेलिभरी ठेगाना *',
        'delivery-date': 'मनपर्ने डेलिभरी मिति *',
        'delivery-time': 'मनपर्ने समय *',
        'submit': 'अर्डर पेश गर्नुहोस्',
        
        // Footer
        'footer-desc': 'माक्पाको पहाडबाट ताजा जैविक सुन्तला',
        'contact': 'सम्पर्क',
        'quick-links': 'द्रुत लिङ्कहरू',
        'home': 'गृहपृष्ठ',
        'products-link': 'उत्पादनहरू',
        'blog-link': 'ब्लग',
        'about-link': 'बारेमा',
        'rights': 'सर्वाधिकार सुरक्षित',
        
        // Blog
        'blog-header': 'फार्म अपडेट र कथाहरू',
        'blog-subheader': 'बारीबाट तपाईंको टेबलसम्मको यात्रा',
        'read-more': 'थप पढ्नुहोस् →',
        'back-to-blog': 'ब्लगमा फर्कनुहोस्',
        'gallery': 'फार्म ग्यालरी',
        'back-to-gallery': 'ग्यालरीमा फर्कनुहोस्',
        
        // Blog Posts
        'post1-title': 'सुन्तला फूल फुल्ने मौसम सुरु!',
        'post1-desc': 'फार्म सुन्तलाको फूलको मिठो सुगन्धले भरिएको छ। यस वर्षको उत्पादन आशाजनक देखिन्छ।',
        'post1-full': 'फार्म सुन्तलाको फूलको मिठो सुगन्धले भरिएको छ। यस वर्षको उत्पादन आशाजनक देखिन्छ। सबै रूखहरूमा स्वस्थ फूल फुलेको छ। सुन्तला फूल फुल्ने मौसम रसिलो सुन्तलामा जादुई समय हो। सम्पूर्ण बगैंचा सेता फूलहरूले भरिन्छ, प्रत्येक फूलले भविष्यको मीठो सुन्तलाको वाचा गर्दछ। हाम्रा मौरीहरू परागणमा व्यस्त छन्, र हावा अविश्वसनीय प्राकृतिक अत्तरले भरिएको छ। यो सिजन, हामी १०,००० केजी भन्दा बढी प्रिमियम जैविक सुन्तला उत्पादनको आशा गर्दछौं। फूलहरू पूर्ण रूपमा पाकेको फल बन्न करिब ६-८ महिना लाग्छ। हामी नियमित ग्राहकहरूबाट पूर्व-अर्डर प्राप्त गरिरहेका छौं जो जान्दछन् कि उत्तम सुन्तला उत्तम फूलबाट आउँछ।',
        
        'post2-title': 'हामी किन जैविक रोज्छौं',
        'post2-desc': 'पत्ता लगाउनुहोस् किन हामी १० वर्ष भन्दा बढी समयदेखि जैविक खेती गरिरहेका छौं।',
        'post2-full': 'पत्ता लगाउनुहोस् किन हामी १० वर्ष भन्दा बढी समयदेखि जैविक खेती गरिरहेका छौं। यो स्वस्थ सुन्तलाको बारेमा मात्र होइन - यो स्वस्थ माटो र समुदायको बारेमा हो। हाम्रो जैविक खेती यात्रा एक दशक अघि सुरु भयो जब हामीले हाम्रो भूमि, हाम्रो स्वास्थ्य र हाम्रो वातावरणमा रासायनिक कीटनाशकको हानिकारक प्रभावहरू महसुस गर्यौं। १००% जैविक विधिहरूमा स्विच गरेपछि, हामीले उल्लेखनीय परिवर्तनहरू देखेका छौं। हाम्रो माटो गह्रौं र जीवित भएको छ। सुन्तला मीठो र स्वादिष्ट छन्। हाम्रा किसानहरू रसायनहरू ह्यान्डल गर्ने बिरामी हुँदैनन्। र हाम्रा ग्राहकहरू वास्तविक, प्राकृतिक सुन्तलाको स्वादको लागि फर्किरहन्छन्।',
        
        'post3-title': 'हातले टिप्ने कला',
        'post3-desc': 'रसिलो सुन्तलामा हरेक सुन्तला पूर्ण पाकेको समयमा हातले टिपिन्छ।',
        'post3-full': 'रसिलो सुन्तलामा हरेक सुन्तला पूर्ण पाकेको समयमा हातले टिपिन्छ। उत्तम स्वाद सुनिश्चित गर्ने हाम्रो सावधानीपूर्वक फसल प्रक्रियाको बारेमा जान्नुहोस्। सही सुन्तला टिप्ने कला छ। हाम्रा अनुभवी कटनीकर्ताहरूले देखेको जुनसुकै सुन्तला समात्दैनन्। उनीहरू प्रत्येक फललाई ध्यानपूर्वक जाँच्छन्, सही रंग, आकार र दृढता जाँच्दछन्। उनीहरूलाई थाहा छ कि धेरै चाँडो टिपिएको सुन्तला अमिलो हुनेछ, जबकि धेरै ढिलो टिपिएको सुन्तला अधिक पाकेको हुन सक्छ। प्रत्येक सुन्तला बिस्तारै घुमाइन्छ र रूखबाट विशेष क्लिपरले काटिन्छ।',
        
        'post4-title': 'रसिलो सुन्तलामा एक दिन',
        'post4-desc': 'बिहान ५ बजे हामीसँग उठ्नुहोस् र हाम्रो फार्ममा एक सामान्य दिन अनुभव गर्नुहोस्।',
        'post4-full': 'बिहान ५ बजे हामीसँग उठ्नुहोस् र हाम्रो फार्ममा एक सामान्य दिन अनुभव गर्नुहोस्। बिहानको फसलदेखि ताजा अर्डर प्याक गर्न सम्म, हामी कसरी काम गर्दछौं हेर्नुहोस्। हाम्रो दिन सूर्योदय अघि सुरु हुन्छ, जब हावा अझै चिसो हुन्छ र ओसिलो सुन्तलाको पातहरूमा चम्किन्छ। बिहान ५:३० सम्म, हाम्रा कटनीकर्ताहरू बगैंचामा हुन्छन्, पूर्ण पाकेको फल चयन गर्दै। बिहानको फसल बिहान ९ बजे सम्म प्याक गरिन्छ र हाम्रो डेलिभरी भ्यानमा लोड गरिन्छ। यस बीचमा, हाम्रो फार्म टोली बगैंचाको अन्य भागहरूमा काम गर्दछ, जवान रूखहरूमा पानी हाल्दै र प्राकृतिक कम्पोस्ट लगाउँदै।',
        
        // Admin
        'admin-dashboard': 'प्रशासक प्यानल',
        'total-orders': 'कुल अर्डर',
        'pending-delivery': 'पेन्डिङ डेलिभरी',
        'pending-kg': 'पेन्डिङ केजी',
        'delivered': 'डेलिभर भयो',
        'sold-kg': 'बिक्री केजी',
        'login': 'लगइन',
        'login-desc': 'अर्डर हेर्न आफ्नो पासवर्ड प्रविष्ट गर्नुहोस्',
        'logout': 'लगआउट',
        'hint': 'सङ्केत: admin123',
        'customer-orders': 'ग्राहक अर्डरहरू',
        'order-date': 'अर्डर मिति',
        'customer-name': 'ग्राहक नाम',
        'order-amount': 'अर्डर रकम',
        'sold-amount': 'बिक्री रकम',
        'time-slot': 'समय',
        'status': 'स्थिति',
        'action': 'कार्य',
        'total-amount': 'कुल रकम:'
    },
    
    english: {
        // Navigation
        'home': 'Home',
        'products': 'Products',
        'blog': 'Blog',
        'admin': 'Admin',
        'about': 'About',
        'language': 'Language',
        
        // Hero Section
        'hero-title-rasilo': 'Rasilo',
        'hero-title-suntala': 'Suntala',
        'slogan': '"Makpa ko mato, Rasilo swadma: Sidhai bari bata tapailai hatma."',
        'sub-slogan': 'Organic, Fresh & Sweet · Direct from our farm to your home',
        'order-now': 'Order Now',
        
        // Why Buy Section
        'why-buy': 'Why Buy From Us?',
        'organic': '100% Organic',
        'organic-desc': 'No pesticides, naturally grown in the hills of Makpa',
        'fresh': 'Farm Fresh',
        'fresh-desc': 'Picked and delivered within 24 hours',
        'direct': 'Direct from Farm',
        'direct-desc': 'No middlemen, fair prices directly from farmers',
        
        // Products Section
        'products-title': 'Our Orange Packages',
        'select': 'Select',
        
        // Order Form
        'place-order': 'Place Your Order',
        'name': 'Full Name *',
        'phone': 'Phone Number *',
        'quantity': 'Quantity (KG) *',
        'address': 'Delivery Address *',
        'delivery-date': 'Preferred Delivery Date *',
        'delivery-time': 'Preferred Time Slot *',
        'submit': 'Submit Order',
        
        // Footer
        'footer-desc': 'Fresh organic oranges from the hills of Makpa',
        'contact': 'Contact',
        'quick-links': 'Quick Links',
        'home': 'Home',
        'products-link': 'Products',
        'blog-link': 'Blog',
        'about-link': 'About',
        'rights': 'All rights reserved',
        
        // Blog
        'blog-header': 'Farm Updates & Stories',
        'blog-subheader': 'Follow our journey from orchard to your table',
        'read-more': 'Read More →',
        'back-to-blog': 'Back to Blog',
        'gallery': 'Farm Gallery',
        'back-to-gallery': 'Back to Gallery',
        
        // Blog Posts
        'post1-title': 'Orange Blossom Season Begins!',
        'post1-desc': 'The farm is filled with the sweet fragrance of orange blossoms. This year\'s harvest looks promising with healthy flowering across all our trees.',
        'post1-full': 'The farm is filled with the sweet fragrance of orange blossoms. This year\'s harvest looks promising with healthy flowering across all our trees. The orange blossom season is a magical time at Rasilo Suntala. The entire orchard transforms into a sea of white flowers, each one promising a future sweet orange. Our bees are busy pollinating, and the air is filled with the most incredible natural perfume. This season, we expect to harvest over 10,000 kg of premium organic oranges. The flowers will take about 6-8 months to develop into fully ripe fruits. We\'re already receiving pre-orders from regular customers who know that the best oranges come from the best blossoms. Stay tuned for more updates as we track the growth of our oranges from flower to fruit!',
        
        'post2-title': 'Why We Choose Organic',
        'post2-desc': 'Discover why we\'ve been practicing organic farming for over 10 years. It\'s not just about healthier oranges - it\'s about healthier soil and community.',
        'post2-full': 'Discover why we\'ve been practicing organic farming for over 10 years. It\'s not just about healthier oranges - it\'s about healthier soil and community. Our journey into organic farming began a decade ago when we realized the harmful effects of chemical pesticides on our land, our health, and our environment. Since switching to 100% organic methods, we\'ve seen remarkable changes. Our soil has become richer and more alive with earthworms and beneficial microorganisms. The oranges are sweeter and more flavorful. Our farmers no longer get sick from handling chemicals. And our customers keep coming back for the taste of real, natural oranges. Organic farming is harder work - we hand-weed the fields and use natural compost - but the results are worth every effort. We\'re proud to be one of the few certified organic farms in Makpa, and we hope to inspire others to make the switch too.',
        
        'post3-title': 'The Art of Hand-Picking',
        'post3-desc': 'Every orange at Rasilo Suntala is hand-picked at peak ripeness. Learn about our careful harvesting process that ensures the best flavor.',
        'post3-full': 'Every orange at Rasilo Suntala is hand-picked at peak ripeness. Learn about our careful harvesting process that ensures the best flavor. There\'s an art to picking the perfect orange. Our experienced harvesters don\'t just grab any orange they see. They carefully examine each fruit, checking for the right color, size, and firmness. They know that an orange picked too early will be sour, while one picked too late might be overripe. Each orange is gently twisted and cut from the tree with special clippers to avoid damaging the fruit or the tree. The oranges are then carefully placed in baskets lined with soft cloth, never thrown or dropped. This careful process ensures that every orange that reaches our customers is at its absolute peak of flavor.',
        
        'post4-title': 'A Day at Rasilo Suntala',
        'post4-desc': 'Wake up with us at 5 AM and experience a typical day on our farm. From morning harvest to packing fresh orders, see how we work.',
        'post4-full': 'Wake up with us at 5 AM and experience a typical day on our farm. Our day starts before sunrise, when the air is still cool and the dew sparkles on the orange leaves. By 5:30 AM, our harvesters are already in the orchard, selecting the fruits that have reached perfect ripeness. The morning harvest is packed by 9 AM and loaded onto our delivery van. Meanwhile, our farm team tends to other parts of the orchard, watering young trees and applying natural compost. Our packing house operates from 10 AM to 4 PM, carefully sorting, weighing, and packing oranges for orders that come in throughout the day. Every evening, we review the day\'s orders and prepare for the next morning\'s harvest.',
        
        // Admin
        'admin-dashboard': 'Admin Dashboard',
        'total-orders': 'Total Orders',
        'pending-delivery': 'Pending Delivery',
        'pending-kg': 'Pending KG',
        'delivered': 'Delivered',
        'sold-kg': 'Sold KG',
        'login': 'Login',
        'login-desc': 'Enter your password to view orders',
        'logout': 'Logout',
        'hint': 'Hint: admin123',
        'customer-orders': 'Customer Orders',
        'order-date': 'Order Date',
        'customer-name': 'Customer Name',
        'order-amount': 'Order Amount',
        'sold-amount': 'Sold Amount',
        'time-slot': 'Time Slot',
        'status': 'Status',
        'action': 'Action',
        'total-amount': 'Total Amount:'
    },
    
    bhojpuri: {
        // Navigation
        'home': 'घर',
        'products': 'उत्पाद',
        'blog': 'ब्लग',
        'admin': 'एडमिन',
        'about': 'बारे में',
        'language': 'भाषा',
        
        // Hero Section
        'hero-title-rasilo': 'रसिलो',
        'hero-title-suntala': 'संतरा',
        'slogan': '"माकपा के माटी, रसीला स्वाद में: सीधे खेत से रउरा हाथ में।"',
        'sub-slogan': 'जैविक, ताजा आ मीठ · सीधे हमार खेत से रउरा घर तक',
        'order-now': 'आर्डर करीं',
        
        // Why Buy Section
        'why-buy': 'हमनी से काहें खरीदीं?',
        'organic': '१००% जैविक',
        'organic-desc': 'कीटनाशक मुक्त, माकपा के पहाड़ पर प्राकृतिक रूप से उगावल',
        'fresh': 'खेत ताजा',
        'fresh-desc': '२४ घंटा के भीतर तोड़ के डेलिवर',
        'direct': 'खेत से सीधे',
        'direct-desc': 'बिचौलिया ना, किसान से सीधे उचित मूल्य',
        
        // Products Section
        'products-title': 'हमार संतरा पैकेज',
        'select': 'चुनीं',
        
        // Order Form
        'place-order': 'आपन आर्डर दीं',
        'name': 'पूरा नाम *',
        'phone': 'फोन नंबर *',
        'quantity': 'मात्रा (केजी) *',
        'address': 'डेलिवरी पता *',
        'delivery-date': 'पसंदीदा डेलिवरी तिथि *',
        'delivery-time': 'पसंदीदा समय *',
        'submit': 'आर्डर जमा करीं',
        
        // Footer
        'footer-desc': 'माकपा के पहाड़ से ताजा जैविक संतरा',
        'contact': 'संपर्क',
        'quick-links': 'त्वरित लिंक',
        'home': 'घर',
        'products-link': 'उत्पाद',
        'blog-link': 'ब्लग',
        'about-link': 'बारे में',
        'rights': 'सब अधिकार सुरक्षित',
        
        // Blog
        'blog-header': 'खेत अपडेट आ कहानी',
        'blog-subheader': 'बगिया से रउरा टेबल तक के यात्रा',
        'read-more': 'और पढ़ीं →',
        'back-to-blog': 'ब्लग में वापस',
        'gallery': 'खेत गैलरी',
        'back-to-gallery': 'गैलरी में वापस',
        
        // Blog Posts
        'post1-title': 'संतरा के फूल खिलल शुरू!',
        'post1-desc': 'खेत संतरा के फूल के मीठा सुगंध से भरल बा। ए बरिस के फसल उम्मीद जगावत बा।',
        'post1-full': 'खेत संतरा के फूल के मीठा सुगंध से भरल बा। ए बरिस के फसल उम्मीद जगावत बा, सब पेड़ पर स्वस्थ फूल खिलल बा। संतरा फूल खिलल के सीजन रसिलो संतरा में जादुई समय होला। पूरा बगैंचा सफेद फूल से भर जाला, हर फूल भविष्य के मीठा संतरा के वादा करेला। हमार मधुमक्खी परागण में व्यस्त बा, आ हवा अविश्वसनीय प्राकृतिक सुगंध से भरल बा। ए सीजन, हमनी के १०,००० किलो से अधिक प्रीमियम जैविक संतरा के उम्मीद बा।',
        
        'post2-title': 'हम काहे जैविक चुनीं',
        'post2-desc': 'जानीं काहे हमनी के १० साल से अधिका समय से जैविक खेती करत बानी।',
        'post2-full': 'जानीं काहे हमनी के १० साल से अधिका समय से जैविक खेती करत बानी। ई सिर्फ स्वस्थ संतरा के बारे में ना बा - ई स्वस्थ माटी आ समुदाय के बारे में बा। हमार जैविक खेती यात्रा एक दशक पहिले शुरू भइल जब हमनी के महसूस कइनी कि रासायनिक कीटनाशक हमार जमीन, हमार स्वास्थ्य आ हमार पर्यावरण पर हानिकारक प्रभाव डालत बा। १००% जैविक तरीका अपनावे के बाद, हमनी के उल्लेखनीय बदलाव देखलनि। हमार माटी समृद्ध आ जीवित भ गइल बा। संतरा मीठा आ स्वादिष्ट बा।',
        
        'post3-title': 'हाथ से चुने के कला',
        'post3-desc': 'रसिलो संतरा में हर संतरा पूरा पाकला पर हाथ से चुनल जाला।',
        'post3-full': 'रसिलो संतरा में हर संतरा पूरा पाकला पर हाथ से चुनल जाला। सबसे बढ़िया स्वाद सुनिश्चित करे वाली हमार सावधानीपूर्वक कटाई प्रक्रिया के बारे में जानीं। सही संतरा चुने के कला होला। हमार अनुभवी कटनी करे वाला लोग कवनो संतरा ना पकड़ लेत बा। ऊ हर फल के ध्यान से जांच करत बा, सही रंग, आकार आ कठोरता के जांच करत बा। ऊ लोग जानत बा कि बहुत जल्दी चुनल गइल संतरा खट्टा होखी, जबकि बहुत देर से चुनल गइल संतरा अधिक पाकल हो सकेला। हर संतरा के धीरे से घुमा के पेड़ से बिशेष क्लिपर से काटल जाला ताकि फल भा पेड़ के नुकसान ना होखे।',
        
        'post4-title': 'रसिलो संतरा में एक दिन',
        'post4-desc': 'भोर ५ बजे हमनी के संगे उठीं आ हमार खेत में एक आम दिन के अनुभव करीं।',
        'post4-full': 'भोर ५ बजे हमनी के संगे उठीं आ हमार खेत में एक आम दिन के अनुभव करीं। भोर के कटाई से ले के ताजा आर्डर पैक करे ले, देखीं कि हम कइसे काम करत बानी। हमार दिन सूर्योदय से पहिले शुरू होला, जब हवा अबहियो ठंडा होखेला आ ओस संतरा के पत्तन पर चमकेला। भोर ५:३० ले, हमार कटनी करे वाला लोग बगैंचा में पूरा पाकल फल चुनत होखेला। भोर के फसल सुबह ९ बजे ले पैक होके हमार डेलिवरी गाड़ी में लद जाला। एही बीच, हमार खेत टीम बगैंचा के अउरी हिस्सा में काम करेला, नया पेड़न में पानी डालेला आ प्राकृतिक कम्पोस्ट डालेला। हमार पैकिंग हाउस सुबह १० बजे से शाम ४ बजे ले चलेला, जहाँ आर्डर खातिर संतरा के सावधानी से छांटल जाला, तोलल जाला आ पैक कइल जाला।',
        
        // Admin
        'admin-dashboard': 'एडमिन पैनल',
        'total-orders': 'कुल आर्डर',
        'pending-delivery': 'लंबित डेलिवरी',
        'pending-kg': 'लंबित केजी',
        'delivered': 'डेलिवर भइल',
        'sold-kg': 'बिक्री केजी',
        'login': 'लॉगइन',
        'login-desc': 'आर्डर देखे खातिर आपन पासवर्ड दर्ज करीं',
        'logout': 'लॉगआउट',
        'hint': 'संकेत: admin123',
        'customer-orders': 'ग्राहक आर्डर',
        'order-date': 'आर्डर तिथि',
        'customer-name': 'ग्राहक नाम',
        'order-amount': 'आर्डर रकम',
        'sold-amount': 'बिक्री रकम',
        'time-slot': 'समय',
        'status': 'स्थिति',
        'action': 'कार्य',
        'total-amount': 'कुल रकम:'
    }
};

// ============================================
// EMAIL NOTIFICATION FUNCTION - ADD THIS HERE
// ============================================
function sendEmailNotification(orderData) {
    // Your EmailJS credentials
    const serviceID = 'service_oyve6et';     // Your Service ID
    const templateID = 'template_3gwvlmm';    // Your Template ID
    
    // Format date for display
    function formatDateForEmail(dateString) {
        if (!dateString) return 'Not specified';
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    }
    
    // Prepare the data for email template
    const templateParams = {
        customer_name: orderData.name,
        customer_phone: orderData.phone,
        quantity: orderData.quantity + ' KG',
        order_amount: 'रू ' + orderData.orderAmount,
        address: orderData.address,
        delivery_date: formatDateForEmail(orderData.deliveryDate),
        delivery_time: orderData.deliveryTime,
        order_time: orderData.orderDate
    };
    
    // Send email using EmailJS
    console.log('Sending email notification...', templateParams);
    
    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            console.log('✅ Email sent successfully!', response.status, response.text);
            // Optional: Show a small notification that email was sent
            if (typeof showMessage === 'function') {
                showMessage('✓ Notification email sent to farm owner', 'success');
            }
        })
        .catch(function(error) {
            console.log('❌ Email failed to send:', error);
            // Don't show error to user - order is still saved locally
        });
}

// About Modal Functions
function openAboutModal() {
    document.getElementById('aboutModal').style.display = 'block';
}

function closeAboutModal() {
    document.getElementById('aboutModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('aboutModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update all translatable elements
    updateTextContent();
    
    // Update blog posts if on blog page
    if (document.querySelector('.blog-posts')) {
        displayBlogPosts();
    }
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Update text content based on selected language
function updateTextContent() {
    const t = translations[currentLanguage];
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.textContent.includes('Home') || link.classList.contains('active') && link.getAttribute('href') === 'index.html') {
            link.textContent = t.home;
        }
        if (link.textContent.includes('Products')) {
            link.textContent = t.products;
        }
        if (link.textContent.includes('Blog')) {
            link.textContent = t.blog;
        }
        if (link.classList.contains('admin-link')) {
            link.innerHTML = `<i class="fas fa-lock"></i> ${t.admin}`;
        }
        if (link.classList.contains('about-link')) {
            link.textContent = t.about;
        }
    });
    
    // Update language button
    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) {
        langBtn.innerHTML = `<i class="fas fa-globe"></i> ${t.language} <i class="fas fa-chevron-down"></i>`;
    }
    
    // Update hero section
    const rasiloEl = document.querySelector('.rasilo');
    const suntalaEl = document.querySelector('.suntala');
    if (rasiloEl) rasiloEl.textContent = t['hero-title-rasilo'];
    if (suntalaEl) suntalaEl.textContent = t['hero-title-suntala'];
    
    const sloganEl = document.querySelector('.slogan');
    if (sloganEl) sloganEl.textContent = t.slogan;
    
    const subSloganEl = document.querySelector('.sub-slogan');
    if (subSloganEl) subSloganEl.textContent = t['sub-slogan'];
    
    const orderBtn = document.querySelector('.order-now-btn');
    if (orderBtn) orderBtn.textContent = t['order-now'];
    
    // Update Why Buy section
    const whyBuyTitle = document.querySelector('.why-buy h2');
    if (whyBuyTitle) whyBuyTitle.textContent = t['why-buy'];
    
    const organicTitle = document.querySelector('.card-organic h3');
    if (organicTitle) organicTitle.textContent = t.organic;
    
    const organicDesc = document.querySelector('.card-organic p');
    if (organicDesc) organicDesc.textContent = t['organic-desc'];
    
    const freshTitle = document.querySelector('.card-fresh h3');
    if (freshTitle) freshTitle.textContent = t.fresh;
    
    const freshDesc = document.querySelector('.card-fresh p');
    if (freshDesc) freshDesc.textContent = t['fresh-desc'];
    
    const directTitle = document.querySelector('.card-direct h3');
    if (directTitle) directTitle.textContent = t.direct;
    
    const directDesc = document.querySelector('.card-direct p');
    if (directDesc) directDesc.textContent = t['direct-desc'];
    
    // Update Products section
    const productsTitle = document.querySelector('#products h2');
    if (productsTitle) productsTitle.textContent = t['products-title'];
    
    const selectBtns = document.querySelectorAll('.select-btn');
    selectBtns.forEach(btn => {
        btn.textContent = t.select;
    });
    
    // Update Order Form
    const orderTitle = document.querySelector('#order h2');
    if (orderTitle) orderTitle.textContent = t['place-order'];
    
    const nameLabel = document.querySelector('label[for="name"]');
    if (nameLabel) nameLabel.textContent = t.name;
    
    const phoneLabel = document.querySelector('label[for="phone"]');
    if (phoneLabel) phoneLabel.textContent = t.phone;
    
    const quantityLabel = document.querySelector('label[for="quantity"]');
    if (quantityLabel) quantityLabel.textContent = t.quantity;
    
    const addressLabel = document.querySelector('label[for="address"]');
    if (addressLabel) addressLabel.textContent = t.address;
    
    const dateLabel = document.querySelector('label[for="delivery-date"]');
    if (dateLabel) dateLabel.textContent = t['delivery-date'];
    
    const timeLabel = document.querySelector('label[for="delivery-time"]');
    if (timeLabel) timeLabel.textContent = t['delivery-time'];
    
    const submitBtn = document.querySelector('.submit-order-btn');
    if (submitBtn) submitBtn.textContent = t.submit;
    
    // Update Footer
    const footerDesc = document.querySelector('.footer-section p');
    if (footerDesc && !footerDesc.classList.contains('about-creator') && !footerDesc.classList.contains('about-contact')) {
        footerDesc.textContent = t['footer-desc'];
    }
    
    const contactTitle = document.querySelectorAll('.footer-section h3');
    if (contactTitle.length >= 1) contactTitle[0].textContent = t.contact;
    if (contactTitle.length >= 2) contactTitle[1].textContent = t['quick-links'];
    
    const footerLinks = document.querySelectorAll('.footer-section a');
    footerLinks.forEach(link => {
        if (link.textContent.includes('Home')) link.textContent = t.home;
        if (link.textContent.includes('Products')) link.textContent = t['products-link'];
        if (link.textContent.includes('Blog')) link.textContent = t['blog-link'];
        if (link.textContent.includes('About')) link.textContent = t['about-link'];
    });
    
    // Update Blog page if exists
    if (document.querySelector('.blog-header')) {
        const blogHeader = document.querySelector('.blog-header h1');
        if (blogHeader) blogHeader.textContent = t['blog-header'];
        
        const blogSubheader = document.querySelector('.blog-header p');
        if (blogSubheader) blogSubheader.textContent = t['blog-subheader'];
        
        const readMoreLinks = document.querySelectorAll('.read-more');
        readMoreLinks.forEach(link => {
            link.textContent = t['read-more'];
        });
        
        const backToBlog = document.querySelector('.back-btn span');
        if (backToBlog) backToBlog.textContent = t['back-to-blog'];
        
        const galleryTitle = document.querySelector('.gallery h2');
        if (galleryTitle) galleryTitle.textContent = t.gallery;
        
        const backToGallery = document.querySelectorAll('.full-screen-view .back-btn span');
        backToGallery.forEach(btn => {
            if (btn) btn.textContent = t['back-to-gallery'];
        });
    }
    
    // Update Admin page if exists
    if (document.querySelector('.admin-dashboard')) {
        const dashboardTitle = document.querySelector('.dashboard-header h1');
        if (dashboardTitle) dashboardTitle.textContent = t['admin-dashboard'];
        
        const loginTitle = document.querySelector('.login-box h2');
        if (loginTitle) loginTitle.textContent = t.login;
        
        const loginDesc = document.querySelector('.login-box p');
        if (loginDesc) loginDesc.textContent = t['login-desc'];
        
        const loginBtn = document.querySelector('.login-btn');
        if (loginBtn) loginBtn.textContent = t.login;
        
        const logoutBtn = document.querySelector('.logout-btn');
        if (logoutBtn) logoutBtn.innerHTML = `<i class="fas fa-sign-out-alt"></i> ${t.logout}`;
        
        const hintText = document.querySelector('.hint');
        if (hintText) hintText.textContent = t.hint;
        
        // Update summary card titles
        const cardTitles = document.querySelectorAll('.summary-details h3');
        if (cardTitles.length >= 5) {
            cardTitles[0].textContent = t['total-orders'];
            cardTitles[1].textContent = t['pending-delivery'];
            cardTitles[2].textContent = t['pending-kg'];
            cardTitles[3].textContent = t.delivered;
            cardTitles[4].textContent = t['sold-kg'];
        }
        
        // Update table headers
        const tableHeaders = document.querySelectorAll('#ordersTable th');
        if (tableHeaders.length >= 12) {
            tableHeaders[1].textContent = t['order-date'];
            tableHeaders[2].textContent = t['customer-name'];
            tableHeaders[3].textContent = t.phone;
            tableHeaders[4].textContent = t.address;
            tableHeaders[5].textContent = t.quantity;
            tableHeaders[6].textContent = t['order-amount'];
            tableHeaders[7].textContent = t['sold-amount'];
            tableHeaders[8].textContent = t['delivery-date'];
            tableHeaders[9].textContent = t['time-slot'];
            tableHeaders[10].textContent = t.status;
            tableHeaders[11].textContent = t.action;
        }
        
        const customerOrdersTitle = document.querySelector('.orders-table-container h2');
        if (customerOrdersTitle) customerOrdersTitle.textContent = t['customer-orders'];
    }
}

// Set minimum date for delivery to today
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('delivery-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
    
    // Initialize orders in localStorage if not exists
    if (!localStorage.getItem('orders')) {
        localStorage.setItem('orders', JSON.stringify([]));
    }
    
    // Load preferred language from localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        currentLanguage = savedLang;
        updateTextContent();
    }
    
    // Set default order amounts in admin if not exists
    if (!localStorage.getItem('orderAmounts')) {
        localStorage.setItem('orderAmounts', JSON.stringify({}));
    }
    
    // Display blog posts if on blog page
    if (document.querySelector('.blog-posts')) {
        displayBlogPosts();
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
});

// Set quantity from product selection
function setQuantity(kg) {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.value = kg;
        scrollToOrder();
    }
}

// Scroll to order form
function scrollToOrder() {
    const orderSection = document.getElementById('order');
    if (orderSection) {
        orderSection.scrollIntoView({ behavior: 'smooth' });
    }
}


// Handle order form submission
document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get quantity
            const quantity = parseFloat(document.getElementById('quantity').value);
            
            // ===== CORRECT PRICE CALCULATION BASED ON YOUR PRICING =====
            let totalAmount = 0;
            
            // Check if quantity matches package prices
            if (quantity === 2) {
                totalAmount = 200;      // 2kg package price
            } else if (quantity === 5) {
                totalAmount = 500;      // 5kg package price
            } else if (quantity === 10) {
                totalAmount = 1000;     // 10kg package price
            } else {
                // For custom quantities (like 6.7 kg), calculate at ₹100 per kg
                totalAmount = Math.round(quantity * 100);
            }
            
            // Get form values
            const orderData = {
                id: Date.now(),
                orderDate: new Date().toLocaleString(),
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                quantity: quantity,
                address: document.getElementById('address').value,
                deliveryDate: document.getElementById('delivery-date').value,
                deliveryTime: document.getElementById('delivery-time').value,
                status: 'pending',
                orderAmount: Math.round(totalAmount),  // Now uses correct pricing
                soldAmount: 0,
                timestamp: new Date().getTime()
            };
            
            // Validate phone number (Nepal format)
            const phoneRegex = /^(98|97)[0-9]{8}$/;
            if (!phoneRegex.test(orderData.phone)) {
                showMessage('Please enter a valid Nepali phone number (98XXXXXXXX or 97XXXXXXXX)', 'error');
                return;
            }
            
            // Get existing orders
            let orders = JSON.parse(localStorage.getItem('orders')) || [];
            
            // Add new order
            orders.push(orderData);
            
            // Save to localStorage
            localStorage.setItem('orders', JSON.stringify(orders));
            
            // Send email notification to farm owner
            sendEmailNotification(orderData);
            
            // Show success message
            showMessage('Order placed successfully! We will contact you soon.', 'success');
            
            // Reset form
            orderForm.reset();
            
            // Reset date min value
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('delivery-date').min = today;
        });
    }
});

// Show message function
function showMessage(message, type) {
    const messageDiv = document.getElementById('orderMessage');
    if (messageDiv) {
        messageDiv.textContent = message;
        messageDiv.className = 'order-message ' + type;
        
        // Clear message after 5 seconds
        setTimeout(() => {
            messageDiv.textContent = '';
            messageDiv.className = 'order-message';
        }, 5000);
    }
}

// Format date for display
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Blog Posts Data with Multilingual Support
function getBlogPosts() {
    const t = translations[currentLanguage];
    
    return {
        1: {
            title: t['post1-title'],
            date: currentLanguage === 'nepali' ? 'मार्च १५, २०२४' : (currentLanguage === 'bhojpuri' ? 'मार्च १५, २०२४' : 'March 15, 2024'),
            image: "images/HH.jpg",
            description: t['post1-desc'],
            fullDescription: t['post1-full']
        },
        2: {
            title: t['post2-title'],
            date: currentLanguage === 'nepali' ? 'मार्च १, २०२४' : (currentLanguage === 'bhojpuri' ? 'मार्च १, २०२४' : 'March 1, 2024'),
            image: "images/HOM.jpg",
            description: t['post2-desc'],
            fullDescription: t['post2-full']
        },
        3: {
            title: t['post3-title'],
            date: currentLanguage === 'nepali' ? 'फेब्रुअरी २०, २०२४' : (currentLanguage === 'bhojpuri' ? 'फरवरी २०, २०२४' : 'February 20, 2024'),
            image: "images/tt.jpeg",
            description: t['post3-desc'],
            fullDescription: t['post3-full']
        },
        4: {
            title: t['post4-title'],
            date: currentLanguage === 'nepali' ? 'फेब्रुअरी ५, २०२४' : (currentLanguage === 'bhojpuri' ? 'फरवरी ५, २०२४' : 'February 5, 2024'),
            image: "images/dd.jpeg",
            description: t['post4-desc'],
            fullDescription: t['post4-full']
        }
    };
}

// Display blog posts
function displayBlogPosts() {
    const blogGrid = document.getElementById('blogGridContainer');
    if (!blogGrid) return;
    
    const posts = getBlogPosts();
    const t = translations[currentLanguage];
    
    let html = '';
    for (let i = 1; i <= 4; i++) {
        const post = posts[i];
        html += `
            <article class="blog-card" onclick="openBlogPost(${i})">
                <div class="blog-image">
                    <img src="${post.image}" alt="${post.title}">
                </div>
                <div class="blog-content">
                    <div class="blog-date">
                        <i class="far fa-calendar-alt"></i> ${post.date}
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.description}</p>
                    <span class="read-more">${t['read-more']}</span>
                </div>
            </article>
        `;
    }
    
    blogGrid.innerHTML = html;
}

// Open Blog Post
function openBlogPost(postId) {
    const posts = getBlogPosts();
    const post = posts[postId];
    if (!post) return;
    
    // Hide blog grid, show full view
    document.getElementById('blogGrid').classList.add('hidden');
    document.getElementById('blogFullView').classList.remove('hidden');
    
    // Populate blog post content
    const contentDiv = document.getElementById('blogPostContent');
    contentDiv.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="blog-post-image">
        <div class="blog-post-text">
            <div class="date"><i class="far fa-calendar-alt"></i> ${post.date}</div>
            <h2>${post.title}</h2>
            <p class="full-description">${post.fullDescription}</p>
        </div>
    `;
}

// Close Blog Post
function closeBlogPost() {
    document.getElementById('blogGrid').classList.remove('hidden');
    document.getElementById('blogFullView').classList.add('hidden');
}

// Gallery Images Array
const galleryImages = [
    "images/dd.jpeg",
    "images/gh.png",
    "images/gha.png",
    "images/hero.jpeg",
    "images/HH.jpg",
    "images/HOM.jpg",
    "images/kk.jpeg",
    "images/kp.jpeg",
    "images/tt.jpeg",
    
];

let currentImageIndex = 0;

// Open Full Screen Gallery with Slider
function openFullScreen(index) {
    currentImageIndex = index;
    document.getElementById('gallerySection').classList.add('hidden');
    document.getElementById('blogGrid').classList.add('hidden');
    document.getElementById('blogFullView').classList.add('hidden');
    document.getElementById('fullScreenView').classList.remove('hidden');
    updateFullScreenImage();
}

// Close Full Screen Gallery
function closeFullScreen() {
    document.getElementById('fullScreenView').classList.add('hidden');
    document.getElementById('gallerySection').classList.remove('hidden');
    document.getElementById('blogGrid').classList.remove('hidden');
}

// Change Image in Slider
function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
    updateFullScreenImage();
}

// Update Full Screen Image
function updateFullScreenImage() {
    document.getElementById('fullScreenImage').src = galleryImages[currentImageIndex];
    document.getElementById('imageCounter').textContent = `${currentImageIndex + 1}/${galleryImages.length}`;
}

// Keyboard navigation for slider
document.addEventListener('keydown', function(e) {
    if (document.getElementById('fullScreenView') && !document.getElementById('fullScreenView').classList.contains('hidden')) {
        if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        } else if (e.key === 'Escape') {
            closeFullScreen();
        }
    }
});

// Touch events for mobile swipe
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    if (document.getElementById('fullScreenView') && !document.getElementById('fullScreenView').classList.contains('hidden')) {
        touchStartX = e.changedTouches[0].screenX;
    }
});

document.addEventListener('touchend', function(e) {
    if (document.getElementById('fullScreenView') && !document.getElementById('fullScreenView').classList.contains('hidden')) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }
});

function handleSwipe() {
    const swipeThreshold = 50;
    const difference = touchEndX - touchStartX;
    
    if (Math.abs(difference) > swipeThreshold) {
        if (difference > 0) {
            // Swipe right - previous image
            changeImage(-1);
        } else {
            // Swipe left - next image
            changeImage(1);
        }
    }
}