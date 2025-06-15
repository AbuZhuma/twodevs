
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
  ]
}

export default docums