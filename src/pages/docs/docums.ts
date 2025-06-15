
const docums: { [key: string]: { tag: string, text: string, lang?: string }[] } = {
  "siroca-crm": [
    { tag: "h1", text: "Siroca CRM System" },
    { tag: "h3", text: "Project Overview" },
    { tag: "text", text: "Developed a comprehensive CRM system for client request management with role-based access control. Implemented by a two-person team with frontend (Vite/React/TypeScript) and backend (Node.js/Express) components using Feature-Sliced Design architecture." },
    { tag: "img", text: `/images/siroca1.jpeg` },

    { tag: "h3", text: "Key Features" },
    { tag: "text", text: "- Role-based access control (Admin/Manager/Client)\n- Request tracking with status updates\n- Customizable notification system\n- Dynamic checklist management\n- Comprehensive reporting tools" },

    { tag: "h3", text: "Technical Stack" },
    { tag: "text", text: "Frontend:\n- Vite + React + TypeScript\n- Zustand state management\n- Feature-Sliced Design\n\nBackend:\n- Node.js + Express\n- RESTful API + WebSockets\n- RBAC middleware" },
    { tag: "img", text: "ARCHITECTURE_DIAGRAM_URL" },

    { tag: "h3", text: "Key Challenges & Solutions" },
    { tag: "h4", text: "1. Role-Based Download Permissions" },
    { tag: "text", text: "Implemented RBAC middleware with comprehensive permission checks before allowing file downloads. Created test cases for all role-permission combinations." },

    { tag: "h4", text: "2. Notification System" },
    { tag: "text", text: "Developed event-driven notification service with role-based filtering. Added delivery logging for monitoring." },

    { tag: "h4", text: "3. Dynamic Checklists" },
    { tag: "text", text: "Built configurable checklist module with admin interface for template management per user role." },

    { tag: "h4", text: "4. State Management" },
    { tag: "text", text: "Used Zustand with memoization and WebSocket integration for real-time synchronization between frontend and backend." },

    { tag: "h4", text: "5. FSD Architecture" },
    { tag: "text", text: "Conducted regular code reviews and maintained detailed documentation to ensure clean feature isolation." },

    { tag: "h3", text: "Results" },
    { tag: "text", text: "- 40% reduction in request processing time\n- 50+ concurrent users supported\n- Improved workflow efficiency through role specialization\n- 100+ automated test cases ensuring system reliability" },

    { tag: "h2", text: "System Screenshots" },
    { tag: "img", text: `/images/siroca2.jpeg` },
    { tag: "img", text: `/images/siroca3.jpeg` },
    { tag: "img", text: `/images/siroca4.jpeg` },
    { tag: "img", text: `/images/siroca5.jpeg` },
    { tag: "img", text: `/images/siroca6.jpeg` },
  ],
  "nft-marketplace": [
    { tag: "h1", text: "NFT Marketplace Platform" },
    { tag: "img", text: `/images/nft_market1.png` },
    { tag: "h3", text: "Project Overview" },
    { tag: "text", text: "Developed a full-stack NFT marketplace with minting, trading, and auction capabilities. The platform supports digital art and collectibles with secure blockchain-like transactions using cryptographic verification." },
    { tag: "img", text: `/images/nft-market-main.jpeg` },

    { tag: "h3", text: "Core Features" },
    { tag: "text", text: "- Secure NFT minting and tokenization\n- Auction system with bidding history\n- User wallet and collection management\n- Royalty system for creators\n- Advanced search and filtering" },

    { tag: "h3", text: "Technology Stack" },
    { tag: "text", text: "Frontend:\n- React 19 + Vite\n- Redux Toolkit for state management\n- WebSocket for real-time updates\n\nBackend:\n- Node.js + Express\n- MongoDB with Mongoose\n- JWT authentication\n- Rate limiting and security middleware" },

    { tag: "h3", text: "Key Technical Solutions" },
    { tag: "h4", text: "1. Secure NFT Minting" },
    { tag: "text", text: "Implemented cryptographic asset verification using CryptoJS to generate unique digital fingerprints for each NFT, ensuring authenticity." },

    { tag: "h4", text: "2. Auction System" },
    { tag: "text", text: "Developed real-time bidding with WebSocket notifications and automatic winner determination when auctions close." },

    { tag: "h4", text: "3. Asset Management" },
    { tag: "text", text: "Created a robust file handling system using Multer with IPFS-like storage pattern and metadata preservation." },

    { tag: "h4", text: "4. Security Implementation" },
    { tag: "text", text: "Integrated multiple security layers including Helmet, rate limiting, and JWT with refresh tokens for all transactions." },

    { tag: "h4", text: "5. Performance Optimization" },
    { tag: "text", text: "Implemented lazy loading for NFT galleries and query optimization for MongoDB collections with 10k+ items." },

    { tag: "h3", text: "Achievements" },
    { tag: "text", text: "- Support for 1000+ concurrent users during peak\n- Average minting time under 3 seconds\n- 99.8% uptime in production\n- Secure processing of 5000+ transactions" },
  ],
  "harmony-smile": [
    { tag: "h1", text: "Harmony Smile Dentistry" },
    { tag: "h3", text: "Project Overview" },
    { tag: "text", text: "Developed a modern WordPress website for dental clinic featuring online booking, treatment gallery and service information. Fully mobile-optimized with SEO best practices." },
    { tag: "img", text: `/images/harmony1.png` },

    { tag: "h3", text: "Main Sections" },
    { tag: "text", text: "- Services catalog with pricing\n- Before/after treatment gallery\n- Dentists profiles\n- Online appointment form\n- Dental care blog" },

    { tag: "h3", text: "Technology Stack" },
    { tag: "text", text: "CMS:\n- WordPress 6.0+\n\nPlugins:\n- Elementor Pro (page builder)\n- WPForms (contact forms)\n- Yoast SEO\n- Real Media Library (gallery)\n\nIntegrations:\n- Google Calendar\n- Yandex.Metrika\n- SendPulse (email marketing)" },
    { tag: "img", text: `/images/harmony2.png` },

    { tag: "h3", text: "Key Features" },
    { tag: "h4", text: "1. Online Booking" },
    { tag: "text", text: "Google Calendar integration via Booknetic plugin, automated patient reminders." },

    { tag: "h4", text: "2. Performance" },
    { tag: "text", text: "Optimized with:\n- WP Rocket caching\n- Image optimization\n- Content lazy loading" },

    { tag: "h4", text: "3. Security" },
    { tag: "text", text: "Wordfence Security:\n- Firewall protection\n- Malware scanning\n- Brute force attack prevention" },

    { tag: "h4", text: "4. SEO Optimization" },
    { tag: "text", text: "Full SEO setup with Yoast, schema markup and voice search adaptation." },

    { tag: "h3", text: "Results" },
    { tag: "text", text: "- 35% increase in booking conversions\n- 90+ PageSpeed score\n- Top 3 in Yandex for key queries\n- Easy content management for clinic" },

    { tag: "h2", text: "Website Screenshots" },
    { tag: "img", text: `/images/harmony3.png` },
    { tag: "img", text: `/images/harmony4.png` }
  ]
}

export default docums