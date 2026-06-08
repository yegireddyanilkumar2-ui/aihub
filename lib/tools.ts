export type FieldType = "text" | "textarea" | "select" | "number";

export interface ToolField {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  fields: ToolField[];
  promptTemplate: (values: Record<string, string>) => string;
}

export interface Industry {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  color: string;
  gradient: string;
  borderColor: string;
  textColor: string;
  bgLight: string;
  tools: Tool[];
}

export const industries: Industry[] = [
  // ─── 1. REAL ESTATE ───────────────────────────────────────────────────────
  {
    id: "real-estate",
    name: "Real Estate",
    tagline: "Close deals faster with AI-powered property tools",
    icon: "🏡",
    color: "blue",
    gradient: "from-blue-600 to-indigo-700",
    borderColor: "border-blue-500",
    textColor: "text-blue-700",
    bgLight: "bg-blue-100",
    tools: [
      {
        id: "listing-description",
        name: "Listing Description Writer",
        description: "Generate compelling property listings that sell",
        icon: "📝",
        fields: [
          { id: "type", label: "Property Type", type: "select", options: ["House", "Apartment", "Condo", "Townhouse", "Villa", "Commercial"], required: true },
          { id: "bedrooms", label: "Bedrooms", type: "number", placeholder: "3", required: true },
          { id: "bathrooms", label: "Bathrooms", type: "number", placeholder: "2", required: true },
          { id: "sqft", label: "Square Feet", type: "number", placeholder: "1800" },
          { id: "features", label: "Key Features", type: "textarea", placeholder: "e.g. renovated kitchen, pool, mountain views, hardwood floors", required: true },
          { id: "location", label: "Location / Neighborhood", type: "text", placeholder: "e.g. Downtown Austin, TX" },
        ],
        promptTemplate: (v) =>
          `Write a compelling real estate listing description for a ${v.type} with ${v.bedrooms} bedrooms, ${v.bathrooms} bathrooms${v.sqft ? `, ${v.sqft} sq ft` : ""}${v.location ? ` located in ${v.location}` : ""}. Key features: ${v.features}. Make it vivid, professional, and emotionally engaging. Use 3-4 short paragraphs. Do not include price.`,
      },
      {
        id: "client-email",
        name: "Client Email Templates",
        description: "Professional emails for every client situation",
        icon: "📧",
        fields: [
          { id: "scenario", label: "Email Scenario", type: "select", options: ["Follow-up after showing", "Offer submitted", "Offer accepted", "Market update", "Price reduction suggestion", "Closing congratulations"], required: true },
          { id: "clientName", label: "Client Name", type: "text", placeholder: "John & Sarah", required: true },
          { id: "property", label: "Property Address (optional)", type: "text", placeholder: "123 Maple St" },
          { id: "agentName", label: "Your Name", type: "text", placeholder: "Alex Johnson" },
        ],
        promptTemplate: (v) =>
          `Write a professional real estate email for the following scenario: "${v.scenario}". Client name: ${v.clientName}${v.property ? `, Property: ${v.property}` : ""}${v.agentName ? `. Agent name: ${v.agentName}` : ""}. Keep it warm, professional, and concise (under 150 words). Include subject line.`,
      },
      {
        id: "neighborhood-summary",
        name: "Neighborhood Summary",
        description: "Describe any area to attract the right buyers",
        icon: "🗺️",
        fields: [
          { id: "neighborhood", label: "Neighborhood / Area Name", type: "text", placeholder: "Brickell, Miami", required: true },
          { id: "city", label: "City & State", type: "text", placeholder: "Miami, Florida", required: true },
          { id: "buyerType", label: "Target Buyer", type: "select", options: ["Young professionals", "Families with children", "Retirees", "Investors", "First-time buyers"] },
        ],
        promptTemplate: (v) =>
          `Write an attractive neighborhood lifestyle summary for ${v.neighborhood} in ${v.city}${v.buyerType ? ` targeting ${v.buyerType}` : ""}. Cover lifestyle, walkability, nearby amenities, schools if relevant, and community vibe. 2-3 engaging paragraphs.`,
      },
      {
        id: "offer-letter",
        name: "Offer Letter Draft",
        description: "Draft formal purchase offer letters instantly",
        icon: "📄",
        fields: [
          { id: "propertyAddress", label: "Property Address", type: "text", placeholder: "456 Oak Avenue, Houston TX 77001", required: true },
          { id: "offerPrice", label: "Offer Price ($)", type: "text", placeholder: "425,000", required: true },
          { id: "buyerName", label: "Buyer Name(s)", type: "text", placeholder: "Michael & Lisa Chen", required: true },
          { id: "closingDate", label: "Desired Closing Date", type: "text", placeholder: "30 days from acceptance" },
          { id: "contingencies", label: "Contingencies", type: "select", options: ["Financing & Inspection", "Inspection only", "Financing only", "No contingencies", "As-is offer"] },
        ],
        promptTemplate: (v) =>
          `Draft a formal real estate purchase offer letter for: Property: ${v.propertyAddress}, Offer Price: $${v.offerPrice}, Buyer(s): ${v.buyerName}${v.closingDate ? `, Closing: ${v.closingDate}` : ""}${v.contingencies ? `, Contingencies: ${v.contingencies}` : ""}. Make it professional and formal.`,
      },
      {
        id: "rent-vs-buy",
        name: "Rent vs Buy Advisor",
        description: "Help clients decide with a clear financial breakdown",
        icon: "⚖️",
        fields: [
          { id: "rentAmount", label: "Monthly Rent ($)", type: "number", placeholder: "2200", required: true },
          { id: "homePrice", label: "Home Purchase Price ($)", type: "number", placeholder: "380000", required: true },
          { id: "downPayment", label: "Down Payment (%)", type: "number", placeholder: "20", required: true },
          { id: "location", label: "City / Market", type: "text", placeholder: "Denver, CO" },
          { id: "stayYears", label: "Plan to Stay (years)", type: "number", placeholder: "5" },
        ],
        promptTemplate: (v) =>
          `Provide a clear rent vs buy analysis: Monthly rent: $${v.rentAmount}, Home price: $${v.homePrice}, Down payment: ${v.downPayment}%${v.location ? `, Market: ${v.location}` : ""}${v.stayYears ? `, Planning to stay: ${v.stayYears} years` : ""}. Include break-even estimate, pros/cons of each, monthly cost comparison, and a clear recommendation.`,
      },
      {
        id: "open-house-flyer",
        name: "Open House Flyer Copy",
        description: "Generate eye-catching flyer text for open houses",
        icon: "🪧",
        fields: [
          { id: "address", label: "Property Address", type: "text", placeholder: "e.g. 22 Elm Street, Dallas TX", required: true },
          { id: "date", label: "Open House Date & Time", type: "text", placeholder: "e.g. Saturday, June 15 · 1pm – 4pm", required: true },
          { id: "highlights", label: "Top 3 Property Highlights", type: "textarea", placeholder: "e.g. Newly renovated kitchen, large backyard, quiet cul-de-sac", required: true },
          { id: "price", label: "Asking Price", type: "text", placeholder: "e.g. $549,000" },
          { id: "agentName", label: "Agent Name & Phone", type: "text", placeholder: "e.g. Maria Lopez · (555) 123-4567" },
        ],
        promptTemplate: (v) =>
          `Write compelling open house flyer copy for ${v.address}. Date/time: ${v.date}${v.price ? `. Price: ${v.price}` : ""}. Highlights: ${v.highlights}${v.agentName ? `. Agent: ${v.agentName}` : ""}. Include: attention-grabbing headline, 3-4 bullet highlights, date/time prominently, a warm invitation line, and contact info section. Keep it concise and exciting.`,
      },
      {
        id: "price-reduction",
        name: "Price Reduction Announcement",
        description: "Announce price drops to buyers and on social media",
        icon: "🏷️",
        fields: [
          { id: "address", label: "Property Address", type: "text", placeholder: "e.g. 101 Maple Ave, Austin TX", required: true },
          { id: "oldPrice", label: "Previous Price ($)", type: "text", placeholder: "e.g. 425,000", required: true },
          { id: "newPrice", label: "New Price ($)", type: "text", placeholder: "e.g. 399,000", required: true },
          { id: "channel", label: "Announcement Channel", type: "select", options: ["Email to buyer list", "Social media post", "Both email and social"] },
          { id: "highlights", label: "Key Property Features", type: "text", placeholder: "e.g. 3bed/2bath, pool, new roof" },
        ],
        promptTemplate: (v) =>
          `Write a ${v.channel || "social media"} price reduction announcement for ${v.address}. Price dropped from $${v.oldPrice} to $${v.newPrice}${v.highlights ? `. Features: ${v.highlights}` : ""}. Create urgency without sounding desperate. Include a strong CTA to schedule a viewing. If social media, add 5 relevant hashtags.`,
      },
      {
        id: "tenant-screening",
        name: "Tenant Screening Questions",
        description: "Screen rental applicants with the right questions",
        icon: "🔍",
        fields: [
          { id: "propertyType", label: "Rental Property Type", type: "select", options: ["Apartment", "House", "Condo", "Room / shared housing", "Commercial space"] },
          { id: "rent", label: "Monthly Rent ($)", type: "number", placeholder: "1800" },
          { id: "focus", label: "Main Concern", type: "select", options: ["Financial reliability", "Long-term tenancy", "Pet / damage risk", "Compatibility with other tenants", "All-around screening"] },
        ],
        promptTemplate: (v) =>
          `Generate a thorough tenant screening questionnaire for a ${v.propertyType || "apartment"} at $${v.rent || "X"}/month. Focus: ${v.focus || "all-around screening"}. Include 15 questions covering: income verification, rental history, employment, references, lifestyle, and lease terms. For each question explain what a red-flag answer looks like. Add a note about fair housing laws.`,
      },
      {
        id: "investment-roi",
        name: "Property Investment Analyzer",
        description: "Calculate rental ROI and investment potential",
        icon: "📊",
        fields: [
          { id: "purchasePrice", label: "Purchase Price ($)", type: "number", placeholder: "300000", required: true },
          { id: "monthlyRent", label: "Expected Monthly Rent ($)", type: "number", placeholder: "2200", required: true },
          { id: "expenses", label: "Monthly Expenses ($)", type: "number", placeholder: "800" },
          { id: "downPayment", label: "Down Payment (%)", type: "number", placeholder: "20" },
          { id: "location", label: "Property Location", type: "text", placeholder: "e.g. Phoenix, AZ" },
        ],
        promptTemplate: (v) =>
          `Analyze the investment potential of a property: Purchase price: $${v.purchasePrice}, Monthly rent: $${v.monthlyRent}, Monthly expenses: $${v.expenses || "estimated"}, Down payment: ${v.downPayment || 20}%${v.location ? `, Location: ${v.location}` : ""}. Calculate: 1) Gross rental yield, 2) Net rental yield, 3) Monthly cash flow, 4) Cash-on-cash return, 5) Cap rate, 6) Break-even point in years, 7) Overall investment verdict with reasoning.`,
      },
      {
        id: "closing-checklist",
        name: "Home Closing Checklist",
        description: "Never miss a step when closing a real estate deal",
        icon: "✅",
        fields: [
          { id: "role", label: "Your Role", type: "select", options: ["Buyer", "Seller", "Real estate agent (representing buyer)", "Real estate agent (representing seller)"], required: true },
          { id: "propertyType", label: "Property Type", type: "select", options: ["Residential", "Commercial", "New construction", "Foreclosure / Short sale"] },
          { id: "closingDate", label: "Closing Date", type: "text", placeholder: "e.g. June 30, 2025" },
          { id: "financing", label: "Financing Type", type: "select", options: ["Conventional loan", "FHA loan", "VA loan", "Cash purchase", "Owner financing"] },
        ],
        promptTemplate: (v) =>
          `Create a comprehensive closing checklist for a ${v.role} on a ${v.propertyType || "residential"} property${v.closingDate ? ` closing on ${v.closingDate}` : ""}, using ${v.financing || "conventional loan"} financing. Organize by timeline: 30 days before, 2 weeks before, 1 week before, day before, closing day, and after closing. Include documents needed, inspections, financial tasks, and common pitfalls to avoid.`,
      },
    ],
  },

  // ─── 2. EDUCATION & STUDENTS ─────────────────────────────────────────────
  {
    id: "education",
    name: "Education & Students",
    tagline: "Study smarter, learn faster, achieve more",
    icon: "🎓",
    color: "purple",
    gradient: "from-purple-600 to-violet-700",
    borderColor: "border-purple-500",
    textColor: "text-purple-700",
    bgLight: "bg-purple-100",
    tools: [
      {
        id: "note-summarizer",
        name: "Note Summarizer",
        description: "Turn long notes into clear bullet-point summaries",
        icon: "📋",
        fields: [
          { id: "notes", label: "Paste Your Notes", type: "textarea", placeholder: "Paste your lecture notes, reading material, or any text here...", required: true },
          { id: "style", label: "Summary Style", type: "select", options: ["Bullet points", "Short paragraphs", "Key terms + definitions", "Mind map outline"] },
          { id: "length", label: "Summary Length", type: "select", options: ["Very brief (5 bullets)", "Standard (10 bullets)", "Detailed (15+ bullets)"] },
        ],
        promptTemplate: (v) =>
          `Summarize the following notes into ${v.style || "bullet points"} format. Length: ${v.length || "Standard (10 bullets)"}. Focus on key concepts, important facts, and main takeaways.\n\nNotes:\n${v.notes}`,
      },
      {
        id: "essay-outliner",
        name: "Essay Outliner",
        description: "Get a complete essay structure in seconds",
        icon: "✍️",
        fields: [
          { id: "topic", label: "Essay Topic", type: "text", placeholder: "e.g. The impact of social media on mental health", required: true },
          { id: "type", label: "Essay Type", type: "select", options: ["Argumentative", "Expository", "Analytical", "Persuasive", "Compare & Contrast", "Narrative"] },
          { id: "wordCount", label: "Target Word Count", type: "select", options: ["500 words", "1000 words", "1500 words", "2000+ words"] },
          { id: "audience", label: "Academic Level", type: "select", options: ["High School", "Undergraduate", "Graduate", "Professional"] },
        ],
        promptTemplate: (v) =>
          `Create a detailed essay outline for a ${v.type || "analytical"} essay on: "${v.topic}". Academic level: ${v.audience || "Undergraduate"}. Target length: ${v.wordCount || "1000 words"}. Include: thesis statement, introduction hook, main body sections with sub-points, counter-arguments if applicable, and conclusion strategy.`,
      },
      {
        id: "concept-explainer",
        name: "Concept Explainer",
        description: "Understand any topic at your level",
        icon: "💡",
        fields: [
          { id: "concept", label: "Concept or Topic", type: "text", placeholder: "e.g. Quantum entanglement, Supply and demand", required: true },
          { id: "level", label: "Explanation Level", type: "select", options: ["Explain like I'm 10", "High school level", "College level", "Expert level"] },
          { id: "subject", label: "Subject Area (optional)", type: "text", placeholder: "e.g. Physics, Economics, Biology" },
        ],
        promptTemplate: (v) =>
          `Explain "${v.concept}"${v.subject ? ` (${v.subject})` : ""} at a ${v.level || "college level"} level. Use clear language, a real-world analogy, and a simple example. Structure: 1) Simple definition, 2) How it works, 3) Real-world example, 4) Why it matters.`,
      },
      {
        id: "quiz-maker",
        name: "Quiz Maker",
        description: "Auto-generate quiz questions from any content",
        icon: "❓",
        fields: [
          { id: "content", label: "Topic or Paste Content", type: "textarea", placeholder: "Enter a topic name OR paste your study material here...", required: true },
          { id: "count", label: "Number of Questions", type: "select", options: ["5 questions", "10 questions", "15 questions"] },
          { id: "type", label: "Question Type", type: "select", options: ["Multiple choice", "True/False", "Short answer", "Mixed"] },
          { id: "difficulty", label: "Difficulty Level", type: "select", options: ["Easy", "Medium", "Hard", "Mixed"] },
        ],
        promptTemplate: (v) =>
          `Generate ${v.count || "10 questions"} of ${v.type || "multiple choice"} quiz questions at ${v.difficulty || "medium"} difficulty based on:\n\n${v.content}\n\nFor multiple choice: provide 4 options (A-D) and mark the correct answer. Number each question clearly.`,
      },
      {
        id: "citation-formatter",
        name: "Citation Formatter",
        description: "Format references in any academic style",
        icon: "📚",
        fields: [
          { id: "sourceType", label: "Source Type", type: "select", options: ["Book", "Journal Article", "Website", "Newspaper", "YouTube Video", "Podcast"], required: true },
          { id: "format", label: "Citation Format", type: "select", options: ["APA 7th Edition", "MLA 9th Edition", "Chicago", "Harvard", "IEEE"] },
          { id: "details", label: "Source Details", type: "textarea", placeholder: "Author name(s), title, year, publisher, URL, page numbers, journal name...", required: true },
        ],
        promptTemplate: (v) =>
          `Format the following source as a ${v.format || "APA 7th Edition"} citation. Source type: ${v.sourceType}. Source details: ${v.details}. Provide: 1) The formatted in-text citation, 2) The full reference list entry. Flag any missing information.`,
      },
      {
        id: "study-schedule",
        name: "Study Schedule Maker",
        description: "Build a realistic study timetable for any exam",
        icon: "🗓️",
        fields: [
          { id: "subjects", label: "Subjects / Topics to Cover", type: "textarea", placeholder: "e.g. Math (algebra, calculus), History (WW2, Cold War), Biology (cells, genetics)", required: true },
          { id: "examDate", label: "Exam / Deadline Date", type: "text", placeholder: "e.g. June 20, 2025", required: true },
          { id: "hoursPerDay", label: "Hours Available Per Day", type: "number", placeholder: "3" },
          { id: "weakSubject", label: "Weakest Subject (needs most time)", type: "text", placeholder: "e.g. Math" },
        ],
        promptTemplate: (v) =>
          `Create a study schedule for these subjects: ${v.subjects}. Exam date: ${v.examDate}. Available study hours per day: ${v.hoursPerDay || 2}${v.weakSubject ? `. Weakest subject (prioritize): ${v.weakSubject}` : ""}. Build a day-by-day timetable from today until the exam. Include: daily subject rotation, revision days, practice test days, and rest/buffer days. Add a motivational tip for each week.`,
      },
      {
        id: "flashcard-generator",
        name: "Flashcard Generator",
        description: "Turn any content into ready-to-study flashcards",
        icon: "🃏",
        fields: [
          { id: "content", label: "Topic or Paste Study Material", type: "textarea", placeholder: "Paste your notes or type a topic to generate flashcards from...", required: true },
          { id: "count", label: "Number of Flashcards", type: "select", options: ["10 cards", "20 cards", "30 cards"] },
          { id: "subject", label: "Subject Area", type: "text", placeholder: "e.g. Organic Chemistry, World History" },
        ],
        promptTemplate: (v) =>
          `Generate ${v.count || "20"} study flashcards${v.subject ? ` for ${v.subject}` : ""} based on:\n\n${v.content}\n\nFormat each flashcard as:\nQ: [Question]\nA: [Clear, concise answer]\n\nFocus on key terms, definitions, dates, formulas, and concepts. Mix factual recall with understanding questions. Number each card.`,
      },
      {
        id: "research-intro",
        name: "Research Paper Introduction",
        description: "Write a strong opening for any research paper",
        icon: "🔬",
        fields: [
          { id: "topic", label: "Research Topic / Title", type: "text", placeholder: "e.g. The Effect of Sleep Deprivation on Academic Performance", required: true },
          { id: "thesis", label: "Your Thesis / Main Argument", type: "text", placeholder: "e.g. Sleep deprivation significantly reduces cognitive performance and GPA in college students", required: true },
          { id: "field", label: "Academic Field", type: "text", placeholder: "e.g. Psychology, Environmental Science, Economics" },
          { id: "wordCount", label: "Introduction Length", type: "select", options: ["150-200 words", "250-350 words", "400-500 words"] },
        ],
        promptTemplate: (v) =>
          `Write a ${v.wordCount || "250-350 word"} academic research paper introduction for: "${v.topic}"${v.field ? ` in the field of ${v.field}` : ""}. Thesis: "${v.thesis}". Structure: 1) Broad hook/opening context, 2) Narrowing to the specific problem, 3) Gap in existing research, 4) Thesis statement, 5) Brief outline of paper structure. Use formal academic tone.`,
      },
      {
        id: "math-explainer",
        name: "Math Problem Step-by-Step Solver",
        description: "Get any math problem explained with clear steps",
        icon: "🔢",
        fields: [
          { id: "problem", label: "Math Problem", type: "textarea", placeholder: "e.g. Solve for x: 3x² + 7x - 6 = 0\nor\nFind the derivative of f(x) = 3x³ - 5x + 2", required: true },
          { id: "level", label: "Math Level", type: "select", options: ["Elementary (basic arithmetic)", "Middle school (fractions, ratios)", "High school (algebra, geometry)", "College (calculus, statistics)", "Advanced (linear algebra, differential equations)"] },
          { id: "showWork", label: "Explanation Style", type: "select", options: ["Step-by-step with explanations", "Quick solution with key steps", "Visual/conceptual explanation"] },
        ],
        promptTemplate: (v) =>
          `Solve this math problem with a ${v.showWork || "step-by-step"} explanation at ${v.level || "high school"} level:\n\n${v.problem}\n\nShow every step clearly. Explain the reasoning behind each step. At the end, state the final answer clearly and mention any common mistakes students make with this type of problem.`,
      },
      {
        id: "book-report",
        name: "Book Report Helper",
        description: "Structure and write a solid book report or summary",
        icon: "📖",
        fields: [
          { id: "bookTitle", label: "Book Title", type: "text", placeholder: "e.g. To Kill a Mockingbird", required: true },
          { id: "author", label: "Author", type: "text", placeholder: "e.g. Harper Lee", required: true },
          { id: "reportType", label: "Report Type", type: "select", options: ["Summary only", "Full book report (summary + analysis)", "Character analysis", "Theme analysis", "Compare with another book"] },
          { id: "wordCount", label: "Required Length", type: "select", options: ["300-500 words", "500-800 words", "800-1200 words", "1500+ words"] },
          { id: "gradeLevel", label: "Grade / Level", type: "select", options: ["Middle School", "High School", "Undergraduate", "Graduate"] },
        ],
        promptTemplate: (v) =>
          `Write a ${v.wordCount || "500-800 word"} ${v.reportType || "full book report"} for "${v.bookTitle}" by ${v.author} at ${v.gradeLevel || "high school"} level. Include: plot summary, main characters, key themes, author's message, and personal reflection/evaluation. Use clear paragraph structure with proper transitions.`,
      },
    ],
  },

  // ─── 3. RESTAURANT & FOOD ─────────────────────────────────────────────────
  {
    id: "restaurant",
    name: "Restaurant & Food",
    tagline: "Delight customers and grow your food business with AI",
    icon: "🍽️",
    color: "amber",
    gradient: "from-orange-500 to-amber-600",
    borderColor: "border-amber-500",
    textColor: "text-amber-700",
    bgLight: "bg-amber-100",
    tools: [
      {
        id: "menu-description",
        name: "Menu Description Writer",
        description: "Make every dish sound irresistible",
        icon: "🍜",
        fields: [
          { id: "dishName", label: "Dish Name", type: "text", placeholder: "e.g. Grilled Salmon with Lemon Butter", required: true },
          { id: "ingredients", label: "Main Ingredients", type: "textarea", placeholder: "e.g. Atlantic salmon, capers, fresh dill, lemon butter sauce, roasted asparagus", required: true },
          { id: "style", label: "Restaurant Style", type: "select", options: ["Fine dining", "Casual dining", "Fast casual", "Food truck", "Cafe / Bistro"] },
          { id: "dietary", label: "Dietary Tags (optional)", type: "text", placeholder: "e.g. Gluten-free, Keto-friendly" },
        ],
        promptTemplate: (v) =>
          `Write an appetizing menu description for "${v.dishName}" at a ${v.style || "casual dining"} restaurant. Ingredients: ${v.ingredients}${v.dietary ? `. Dietary: ${v.dietary}` : ""}. Make it sensory and enticing (2-3 sentences max). Use vivid food language.`,
      },
      {
        id: "recipe-scaler",
        name: "Recipe Scaler",
        description: "Scale any recipe up or down instantly",
        icon: "⚖️",
        fields: [
          { id: "recipe", label: "Original Recipe", type: "textarea", placeholder: "Paste your full recipe with ingredients and quantities...", required: true },
          { id: "originalServings", label: "Original Servings", type: "number", placeholder: "4", required: true },
          { id: "newServings", label: "New Servings", type: "number", placeholder: "20", required: true },
        ],
        promptTemplate: (v) =>
          `Scale the following recipe from ${v.originalServings} servings to ${v.newServings} servings. Adjust all ingredient quantities proportionally. Also note any cooking time or technique adjustments needed.\n\nOriginal Recipe:\n${v.recipe}`,
      },
      {
        id: "customer-response",
        name: "Customer Response Templates",
        description: "Handle reviews and complaints professionally",
        icon: "💬",
        fields: [
          { id: "reviewType", label: "Review / Situation Type", type: "select", options: ["Negative review (food quality)", "Negative review (service)", "Positive review to thank", "Complaint about wait time", "Complaint about order error", "Food allergy concern"], required: true },
          { id: "platform", label: "Platform", type: "select", options: ["Google Reviews", "Yelp", "TripAdvisor", "Facebook", "Instagram comment"] },
          { id: "restaurantName", label: "Restaurant Name", type: "text", placeholder: "The Golden Fork" },
          { id: "specificDetails", label: "Specific Details (optional)", type: "text", placeholder: "What specifically happened" },
        ],
        promptTemplate: (v) =>
          `Write a professional and empathetic ${v.reviewType} response for a ${v.platform || "Google Reviews"} review${v.restaurantName ? ` for "${v.restaurantName}"` : ""}${v.specificDetails ? `. Context: ${v.specificDetails}` : ""}. Keep it under 100 words. Be genuine, take ownership where needed, and invite the customer back.`,
      },
      {
        id: "daily-special",
        name: "Daily Special Announcement",
        description: "Create scroll-stopping social posts for your specials",
        icon: "📢",
        fields: [
          { id: "dishName", label: "Today's Special Dish", type: "text", placeholder: "e.g. Truffle Mushroom Risotto", required: true },
          { id: "price", label: "Price", type: "text", placeholder: "e.g. $18.99" },
          { id: "platform", label: "Post For", type: "select", options: ["Instagram", "Facebook", "Twitter/X", "WhatsApp Status", "All platforms"] },
          { id: "extras", label: "Extra Details", type: "text", placeholder: "e.g. available today only, limited 20 portions" },
        ],
        promptTemplate: (v) =>
          `Write a social media post announcing a daily special for ${v.platform || "Instagram"}. Dish: ${v.dishName}${v.price ? `, Price: ${v.price}` : ""}${v.extras ? `. Details: ${v.extras}` : ""}. Make it exciting and mouth-watering. Include 1-2 emojis and 5-6 relevant hashtags.`,
      },
      {
        id: "food-cost-estimator",
        name: "Food Cost Estimator",
        description: "Calculate dish costs and profit margins",
        icon: "💰",
        fields: [
          { id: "dishName", label: "Dish Name", type: "text", placeholder: "Chicken Alfredo Pasta", required: true },
          { id: "ingredients", label: "Ingredients with Quantities & Costs", type: "textarea", placeholder: "- Chicken breast 200g - $1.80\n- Pasta 150g - $0.45\n- Heavy cream 100ml - $0.60", required: true },
          { id: "sellingPrice", label: "Menu Selling Price ($)", type: "number", placeholder: "16.99" },
          { id: "laborCost", label: "Estimated Labor Cost per dish ($)", type: "number", placeholder: "2.50" },
        ],
        promptTemplate: (v) =>
          `Calculate the food cost analysis for "${v.dishName}". Ingredients:\n${v.ingredients}\n${v.sellingPrice ? `Selling price: $${v.sellingPrice}` : ""}${v.laborCost ? `\nLabor cost: $${v.laborCost}` : ""}.\n\nProvide: 1) Total ingredient cost, 2) Food cost percentage, 3) Gross profit margin, 4) Net profit if labor included, 5) Recommendation (industry standard is 28-35% food cost).`,
      },
      {
        id: "catering-proposal",
        name: "Catering Proposal Writer",
        description: "Write professional catering proposals that win events",
        icon: "🍱",
        fields: [
          { id: "eventType", label: "Event Type", type: "select", options: ["Wedding", "Corporate event", "Birthday party", "Graduation", "Conference", "Private dinner"], required: true },
          { id: "guestCount", label: "Number of Guests", type: "number", placeholder: "150", required: true },
          { id: "menuHighlights", label: "Menu Highlights", type: "textarea", placeholder: "e.g. 3-course dinner: Caesar salad, grilled chicken or salmon, tiramisu, open bar" },
          { id: "pricePerHead", label: "Price Per Head ($)", type: "number", placeholder: "65" },
          { id: "businessName", label: "Your Catering Business Name", type: "text", placeholder: "e.g. Silver Spoon Catering" },
        ],
        promptTemplate: (v) =>
          `Write a professional catering proposal for ${v.businessName || "our catering company"} for a ${v.eventType} with ${v.guestCount} guests${v.pricePerHead ? ` at $${v.pricePerHead} per head` : ""}${v.menuHighlights ? `. Menu: ${v.menuHighlights}` : ""}. Include: executive summary, menu description, staffing plan, setup/breakdown details, pricing breakdown, payment terms, and a warm closing paragraph. Make it elegant and persuasive.`,
      },
      {
        id: "supplier-email",
        name: "Supplier & Vendor Email",
        description: "Negotiate and communicate with food suppliers professionally",
        icon: "📦",
        fields: [
          { id: "emailType", label: "Email Purpose", type: "select", options: ["Request a quote", "Negotiate better pricing", "Complain about delivery/quality", "Place a new order", "Cancel or pause order", "Ask about new products"], required: true },
          { id: "supplierName", label: "Supplier / Vendor Name", type: "text", placeholder: "e.g. FreshFarm Distributors" },
          { id: "details", label: "Key Details", type: "textarea", placeholder: "What you need, quantities, issues, context...", required: true },
          { id: "restaurantName", label: "Your Restaurant Name", type: "text", placeholder: "e.g. The Rustic Table" },
        ],
        promptTemplate: (v) =>
          `Write a professional ${v.emailType} email from ${v.restaurantName || "our restaurant"} to ${v.supplierName || "our supplier"}. Details: ${v.details}. Keep it professional, clear, and direct. Include subject line. If negotiating, be firm but respectful and mention long-term relationship value.`,
      },
      {
        id: "seasonal-menu",
        name: "Seasonal Menu Planner",
        description: "Plan a full seasonal menu with dish ideas and descriptions",
        icon: "🌿",
        fields: [
          { id: "season", label: "Season", type: "select", options: ["Spring", "Summer", "Autumn / Fall", "Winter", "Holiday season"], required: true },
          { id: "cuisine", label: "Cuisine Style", type: "text", placeholder: "e.g. Italian, Farm-to-table, Asian fusion", required: true },
          { id: "courses", label: "Menu Sections Needed", type: "select", options: ["Full menu (starter, main, dessert)", "Mains only", "Specials only (3-5 dishes)", "Drinks & desserts only"] },
          { id: "dietary", label: "Dietary Options to Include", type: "text", placeholder: "e.g. vegetarian option, gluten-free, vegan" },
        ],
        promptTemplate: (v) =>
          `Design a ${v.season} seasonal menu for a ${v.cuisine} restaurant. Sections: ${v.courses || "full menu"}${v.dietary ? `. Must include: ${v.dietary} options` : ""}. For each dish provide: dish name, 1-sentence description using seasonal ingredients, and suggested price range. Focus on ingredients that are fresh and available in ${v.season}. Make it creative and marketable.`,
      },
      {
        id: "health-inspection-checklist",
        name: "Health Inspection Prep Checklist",
        description: "Prepare your kitchen to pass any health inspection",
        icon: "🧼",
        fields: [
          { id: "establishmentType", label: "Establishment Type", type: "select", options: ["Full-service restaurant", "Fast food / Quick service", "Cafe / Bakery", "Food truck", "Catering kitchen", "Bar with food"] },
          { id: "inspectionDate", label: "Inspection Date (optional)", type: "text", placeholder: "e.g. Next week, June 15" },
          { id: "previousIssues", label: "Previous Issues Found (optional)", type: "text", placeholder: "e.g. Temperature logs missing, handwashing station blocked" },
        ],
        promptTemplate: (v) =>
          `Create a comprehensive health inspection preparation checklist for a ${v.establishmentType || "restaurant"}${v.inspectionDate ? ` (inspection: ${v.inspectionDate})` : ""}${v.previousIssues ? `. Previous violations: ${v.previousIssues}` : ""}. Organize by area: 1) Food storage & temperatures, 2) Personal hygiene, 3) Kitchen surfaces & equipment, 4) Pest control, 5) Documentation & records, 6) Handwashing stations, 7) Waste management. Mark critical (must-fix) vs minor items.`,
      },
      {
        id: "staff-training",
        name: "Staff Training Script",
        description: "Create onboarding and training scripts for restaurant staff",
        icon: "👨‍🍳",
        fields: [
          { id: "role", label: "Staff Role", type: "select", options: ["Server / Waiter", "Host / Hostess", "Bartender", "Kitchen staff", "Delivery driver", "Cashier"], required: true },
          { id: "topic", label: "Training Topic", type: "select", options: ["First day orientation", "Customer service standards", "Food safety & hygiene", "Upselling techniques", "Handling complaints", "POS system basics"] },
          { id: "restaurantName", label: "Restaurant Name", type: "text", placeholder: "e.g. Bella Cucina" },
          { id: "duration", label: "Training Session Length", type: "select", options: ["15 minutes", "30 minutes", "1 hour", "Half day"] },
        ],
        promptTemplate: (v) =>
          `Write a ${v.duration || "30 minute"} training script for a ${v.role} at ${v.restaurantName || "our restaurant"} on the topic: "${v.topic || "customer service standards"}". Include: learning objectives, key points to cover, role-play scenarios with example dialogues, do's and don'ts, and a quick quiz at the end (5 questions). Make it engaging and practical.`,
      },
    ],
  },

  // ─── 4. MARKETING & SOCIAL MEDIA ─────────────────────────────────────────
  {
    id: "marketing",
    name: "Marketing & Social Media",
    tagline: "Grow your brand and engage your audience with AI",
    icon: "📣",
    color: "pink",
    gradient: "from-pink-500 to-rose-600",
    borderColor: "border-pink-500",
    textColor: "text-pink-700",
    bgLight: "bg-pink-100",
    tools: [
      {
        id: "social-caption",
        name: "Social Media Caption Generator",
        description: "Scroll-stopping captions for any platform",
        icon: "✍️",
        fields: [
          { id: "topic", label: "Post Topic / Product", type: "text", placeholder: "e.g. New summer collection launch", required: true },
          { id: "platform", label: "Platform", type: "select", options: ["Instagram", "Facebook", "LinkedIn", "Twitter/X", "TikTok", "Pinterest"] },
          { id: "tone", label: "Tone", type: "select", options: ["Fun & playful", "Professional", "Inspirational", "Urgent/FOMO", "Educational", "Conversational"] },
          { id: "cta", label: "Call to Action (optional)", type: "text", placeholder: "e.g. Shop now, Link in bio, Comment below" },
        ],
        promptTemplate: (v) =>
          `Write 3 different ${v.platform || "Instagram"} captions for: "${v.topic}". Tone: ${v.tone || "fun & playful"}${v.cta ? `. CTA: ${v.cta}` : ""}. Each caption should be distinct. Include relevant emojis and 8-10 hashtags at the end of each. Label them Option 1, 2, 3.`,
      },
      {
        id: "ad-copy",
        name: "Ad Copy Writer",
        description: "High-converting ads for Facebook, Google & more",
        icon: "🎯",
        fields: [
          { id: "product", label: "Product / Service", type: "text", placeholder: "e.g. Online fitness coaching program", required: true },
          { id: "platform", label: "Ad Platform", type: "select", options: ["Facebook / Instagram", "Google Search", "YouTube", "LinkedIn", "TikTok"] },
          { id: "audience", label: "Target Audience", type: "text", placeholder: "e.g. Women 25-40 who want to lose weight" },
          { id: "usp", label: "Unique Selling Point", type: "text", placeholder: "e.g. Results in 30 days or money back" },
          { id: "budget", label: "Ad Goal", type: "select", options: ["Awareness", "Lead generation", "Sales / Conversions", "App installs", "Website traffic"] },
        ],
        promptTemplate: (v) =>
          `Write ${v.platform || "Facebook"} ad copy for: "${v.product}"${v.audience ? `. Target audience: ${v.audience}` : ""}${v.usp ? `. USP: ${v.usp}` : ""}. Goal: ${v.budget || "Sales"}. Include: headline (under 40 chars), primary text (under 125 chars), and description. Write 2 variations.`,
      },
      {
        id: "email-campaign",
        name: "Email Campaign Writer",
        description: "Write email sequences that convert subscribers",
        icon: "📧",
        fields: [
          { id: "subject", label: "Campaign Subject / Goal", type: "text", placeholder: "e.g. Black Friday sale, Product launch, Re-engagement", required: true },
          { id: "product", label: "Product / Service", type: "text", placeholder: "e.g. Skincare subscription box", required: true },
          { id: "audience", label: "Email List Audience", type: "text", placeholder: "e.g. Existing customers, cold leads" },
          { id: "emailType", label: "Email Type", type: "select", options: ["Promotional offer", "Welcome email", "Product launch", "Re-engagement", "Newsletter", "Abandoned cart"] },
        ],
        promptTemplate: (v) =>
          `Write a ${v.emailType || "promotional"} email for "${v.product}" with goal: "${v.subject}"${v.audience ? `. Audience: ${v.audience}` : ""}. Include: subject line, preview text, engaging opening, body with benefits, clear CTA button text, and PS line. Keep it scannable with short paragraphs.`,
      },
      {
        id: "hashtag-strategy",
        name: "Hashtag Strategy Builder",
        description: "Find the best hashtags to maximize your reach",
        icon: "#️⃣",
        fields: [
          { id: "niche", label: "Your Niche / Industry", type: "text", placeholder: "e.g. Vegan food blogger, fitness coach, travel photographer", required: true },
          { id: "platform", label: "Platform", type: "select", options: ["Instagram", "TikTok", "LinkedIn", "Pinterest", "Twitter/X"] },
          { id: "postTopic", label: "This Post Is About", type: "text", placeholder: "e.g. Morning yoga routine for beginners" },
          { id: "accountSize", label: "Account Size", type: "select", options: ["0-1K followers", "1K-10K followers", "10K-100K followers", "100K+ followers"] },
        ],
        promptTemplate: (v) =>
          `Generate a hashtag strategy for a ${v.niche} on ${v.platform || "Instagram"} with ${v.accountSize || "1K-10K"} followers. This post is about: "${v.postTopic || v.niche}". Provide: 5 high-volume hashtags, 10 medium hashtags, 5 niche/low-competition hashtags. Explain the strategy briefly.`,
      },
      {
        id: "brand-bio",
        name: "Brand Bio Generator",
        description: "Craft the perfect bio for any social platform",
        icon: "🪪",
        fields: [
          { id: "brandName", label: "Brand / Business Name", type: "text", placeholder: "e.g. Glow Beauty Co.", required: true },
          { id: "what", label: "What You Do", type: "text", placeholder: "e.g. Organic skincare for sensitive skin", required: true },
          { id: "audience", label: "Who You Serve", type: "text", placeholder: "e.g. Women who want clean beauty" },
          { id: "platform", label: "Platform", type: "select", options: ["Instagram", "TikTok", "LinkedIn", "Twitter/X", "Facebook Page", "YouTube"] },
          { id: "cta", label: "CTA / Link Text", type: "text", placeholder: "e.g. Shop our bestsellers, Free consultation" },
        ],
        promptTemplate: (v) =>
          `Write 3 different ${v.platform || "Instagram"} bio options for "${v.brandName}". What they do: ${v.what}${v.audience ? `. Audience: ${v.audience}` : ""}${v.cta ? `. CTA: ${v.cta}` : ""}. Keep each bio under 150 characters for Instagram or platform-appropriate length. Use emojis sparingly. Make each version different in tone.`,
      },
      {
        id: "press-release",
        name: "Press Release Writer",
        description: "Write newsworthy press releases for media coverage",
        icon: "📰",
        fields: [
          { id: "newsType", label: "Type of News", type: "select", options: ["Product launch", "Business opening", "Partnership announcement", "Award / Achievement", "Event announcement", "Rebrand / New service"], required: true },
          { id: "businessName", label: "Business / Brand Name", type: "text", placeholder: "e.g. Nova Tech Inc.", required: true },
          { id: "details", label: "Key Details", type: "textarea", placeholder: "What happened, when, where, key people involved, quotes...", required: true },
          { id: "contact", label: "Press Contact Name & Email", type: "text", placeholder: "e.g. Jane Smith · press@novatech.com" },
        ],
        promptTemplate: (v) =>
          `Write a professional press release for ${v.businessName} announcing: ${v.newsType}. Details: ${v.details}${v.contact ? `. Press contact: ${v.contact}` : ""}. Format: dateline, headline, subheadline, lead paragraph (who/what/when/where/why), body paragraphs, boilerplate about the company, and press contact section. Use AP style. Make it newsworthy and quotable.`,
      },
      {
        id: "influencer-outreach",
        name: "Influencer Outreach Email",
        description: "Write pitch emails that influencers actually reply to",
        icon: "🤝",
        fields: [
          { id: "brandName", label: "Your Brand Name", type: "text", placeholder: "e.g. GlowSkin Co.", required: true },
          { id: "product", label: "Product / Service to Promote", type: "text", placeholder: "e.g. Natural face serum", required: true },
          { id: "influencerNiche", label: "Influencer's Niche", type: "text", placeholder: "e.g. Skincare & wellness blogger", required: true },
          { id: "offer", label: "What You're Offering", type: "text", placeholder: "e.g. Free product + 15% commission on sales" },
          { id: "followerRange", label: "Influencer Size", type: "select", options: ["Nano (1K-10K)", "Micro (10K-100K)", "Mid-tier (100K-500K)", "Macro (500K+)"] },
        ],
        promptTemplate: (v) =>
          `Write a personalized influencer outreach email from ${v.brandName} to a ${v.followerRange || "micro"} ${v.influencerNiche}. Product: ${v.product}${v.offer ? `. Offer: ${v.offer}` : ""}. Make it feel genuine (not copy-paste), reference their content style, explain why they're a good fit, clearly state the collaboration ask, and keep it under 150 words. Include subject line.`,
      },
      {
        id: "google-business-post",
        name: "Google Business Post Writer",
        description: "Write posts to boost your Google Business profile",
        icon: "🗺️",
        fields: [
          { id: "postType", label: "Post Type", type: "select", options: ["What's new", "Offer / Deal", "Event", "Product highlight", "COVID / Hours update"] },
          { id: "businessName", label: "Business Name", type: "text", placeholder: "e.g. City Dental Clinic" },
          { id: "details", label: "Post Details", type: "textarea", placeholder: "What you want to announce, any offer details, dates, CTA...", required: true },
        ],
        promptTemplate: (v) =>
          `Write a Google Business Profile "${v.postType || "What's new"}" post for ${v.businessName || "our business"}. Details: ${v.details}. Keep it under 300 characters for the preview. Be clear, local-friendly, include a CTA (call, visit, book). Optimize for local search intent.`,
      },
      {
        id: "campaign-planner",
        name: "Marketing Campaign Planner",
        description: "Build a full marketing campaign strategy in minutes",
        icon: "🗺️",
        fields: [
          { id: "goal", label: "Campaign Goal", type: "select", options: ["Product launch", "Brand awareness", "Lead generation", "Sales promotion", "Event promotion", "Customer retention"], required: true },
          { id: "product", label: "Product / Service", type: "text", placeholder: "e.g. Online yoga classes", required: true },
          { id: "budget", label: "Estimated Budget", type: "select", options: ["Under $500", "$500-$2000", "$2000-$10000", "$10000+", "No paid budget (organic only)"] },
          { id: "duration", label: "Campaign Duration", type: "select", options: ["1 week", "2 weeks", "1 month", "3 months"] },
          { id: "audience", label: "Target Audience", type: "text", placeholder: "e.g. Women 28-45 interested in fitness" },
        ],
        promptTemplate: (v) =>
          `Create a ${v.duration || "1 month"} marketing campaign plan for: ${v.goal} of "${v.product}"${v.audience ? `. Target audience: ${v.audience}` : ""}. Budget: ${v.budget || "Under $500"}. Include: campaign concept/theme, channel mix (organic + paid), weekly content calendar outline, key messages, KPIs to track, and estimated results. Be specific and actionable.`,
      },
      {
        id: "testimonial-request",
        name: "Customer Testimonial Request",
        description: "Ask happy customers for reviews and testimonials",
        icon: "⭐",
        fields: [
          { id: "businessName", label: "Business Name", type: "text", placeholder: "e.g. Bloom Photography", required: true },
          { id: "customerName", label: "Customer Name (optional)", type: "text", placeholder: "e.g. Sarah" },
          { id: "service", label: "Product / Service They Used", type: "text", placeholder: "e.g. Wedding photography package" },
          { id: "platform", label: "Where to Leave Review", type: "select", options: ["Google", "Yelp", "Facebook", "Trustpilot", "Your website", "Multiple platforms"] },
          { id: "channel", label: "How to Send", type: "select", options: ["Email", "SMS / Text", "WhatsApp", "DM on social media"] },
        ],
        promptTemplate: (v) =>
          `Write a ${v.channel || "email"} message from ${v.businessName} asking ${v.customerName || "a happy customer"} for a ${v.platform || "Google"} review${v.service ? ` about their experience with ${v.service}` : ""}. Make it warm, grateful, and easy to act on. Include a direct link placeholder [REVIEW LINK]. Keep it short (under 100 words). Never sound pushy or transactional.`,
      },
    ],
  },

  // ─── 5. HEALTHCARE & WELLNESS ────────────────────────────────────────────
  {
    id: "healthcare",
    name: "Healthcare & Wellness",
    tagline: "Make informed health decisions with AI guidance",
    icon: "🏥",
    color: "rose",
    gradient: "from-rose-500 to-red-600",
    borderColor: "border-rose-500",
    textColor: "text-rose-700",
    bgLight: "bg-rose-100",
    tools: [
      {
        id: "medical-term-decoder",
        name: "Medical Term Decoder",
        description: "Understand diagnoses and medical reports in plain English",
        icon: "🔍",
        fields: [
          { id: "term", label: "Medical Term / Diagnosis / Report Text", type: "textarea", placeholder: "e.g. 'Type 2 Diabetes Mellitus with peripheral neuropathy' or paste a section of your medical report", required: true },
          { id: "level", label: "Explanation Level", type: "select", options: ["Simple (no medical background)", "Moderate (some medical knowledge)", "Detailed (healthcare professional)"] },
        ],
        promptTemplate: (v) =>
          `Explain the following medical term/diagnosis/report in ${v.level || "simple"} terms:\n\n"${v.term}"\n\nStructure your response: 1) What it means in plain language, 2) Common causes, 3) What to expect, 4) Questions to ask your doctor. Add a disclaimer that this is for educational purposes only and not medical advice.`,
      },
      {
        id: "symptom-journal",
        name: "Symptom Journal Helper",
        description: "Organize your symptoms for a clearer doctor visit",
        icon: "📓",
        fields: [
          { id: "symptoms", label: "Your Symptoms", type: "textarea", placeholder: "e.g. Headache, fatigue, mild fever 99.2F, sore throat for 3 days", required: true },
          { id: "duration", label: "How Long", type: "text", placeholder: "e.g. Started 3 days ago, worse in mornings" },
          { id: "medications", label: "Current Medications (optional)", type: "text", placeholder: "e.g. Metformin 500mg, Vitamin D" },
          { id: "allergies", label: "Known Allergies (optional)", type: "text", placeholder: "e.g. Penicillin, pollen" },
        ],
        promptTemplate: (v) =>
          `Help me organize the following symptoms into a clear, structured summary to present to my doctor:\n\nSymptoms: ${v.symptoms}\nDuration: ${v.duration || "Not specified"}${v.medications ? `\nCurrent medications: ${v.medications}` : ""}${v.allergies ? `\nAllergies: ${v.allergies}` : ""}\n\nCreate: 1) A clear symptom timeline, 2) Key questions to ask the doctor, 3) Relevant information to mention. Note: This is for organizational purposes only, not medical diagnosis.`,
      },
      {
        id: "workout-planner",
        name: "Workout Planner",
        description: "Get a personalized weekly workout plan",
        icon: "💪",
        fields: [
          { id: "goal", label: "Fitness Goal", type: "select", options: ["Lose weight", "Build muscle", "Improve endurance", "Stay active / general health", "Increase flexibility", "Sports performance"], required: true },
          { id: "level", label: "Fitness Level", type: "select", options: ["Beginner (no regular exercise)", "Intermediate (exercises 1-3x/week)", "Advanced (exercises 4+x/week)"] },
          { id: "equipment", label: "Available Equipment", type: "select", options: ["No equipment (bodyweight only)", "Dumbbells only", "Full home gym", "Commercial gym access", "Resistance bands only"] },
          { id: "days", label: "Days Per Week", type: "select", options: ["2 days", "3 days", "4 days", "5 days", "6 days"] },
          { id: "limitations", label: "Injuries / Limitations (optional)", type: "text", placeholder: "e.g. bad knees, lower back pain" },
        ],
        promptTemplate: (v) =>
          `Create a ${v.days || "3 days"} per week workout plan for a ${v.level || "beginner"} with goal: ${v.goal}. Equipment: ${v.equipment || "No equipment"}${v.limitations ? `. Limitations/injuries: ${v.limitations}` : ""}. For each workout day include: warm-up, main exercises with sets/reps/rest time, and cool-down. Also include weekly progression tips.`,
      },
      {
        id: "nutrition-analyzer",
        name: "Meal Nutrition Analyzer",
        description: "Understand the nutritional value of any meal",
        icon: "🥗",
        fields: [
          { id: "meal", label: "Describe Your Meal", type: "textarea", placeholder: "e.g. 2 scrambled eggs, 2 slices whole wheat toast, 1 cup orange juice, 1 banana", required: true },
          { id: "goal", label: "Your Health Goal", type: "select", options: ["Weight loss", "Muscle gain", "Maintain weight", "Diabetes management", "Heart health", "General health"] },
          { id: "restrictions", label: "Dietary Restrictions (optional)", type: "text", placeholder: "e.g. Vegetarian, Lactose intolerant, Low sodium" },
        ],
        promptTemplate: (v) =>
          `Analyze the nutritional content of this meal: "${v.meal}"${v.restrictions ? `. Dietary restrictions: ${v.restrictions}` : ""}. My goal: ${v.goal || "general health"}.\n\nProvide: 1) Estimated calories & macros (protein, carbs, fat, fiber), 2) Key vitamins and minerals, 3) How well this meal fits my goal, 4) Simple improvement suggestions. Note: These are estimates for educational purposes only.`,
      },
      {
        id: "mental-health-checkin",
        name: "Daily Mental Health Check-in",
        description: "Reflect on your mood and get actionable wellness tips",
        icon: "🧠",
        fields: [
          { id: "mood", label: "How Are You Feeling Today?", type: "select", options: ["😊 Happy / Good", "😐 Neutral / Okay", "😔 Sad / Low", "😰 Anxious / Stressed", "😤 Frustrated / Angry", "😴 Exhausted / Burned out"], required: true },
          { id: "reason", label: "What's on Your Mind? (optional)", type: "textarea", placeholder: "Share what's contributing to how you feel today..." },
          { id: "sleepQuality", label: "Sleep Last Night", type: "select", options: ["Great (7-9 hrs)", "Okay (5-7 hrs)", "Poor (under 5 hrs)", "Too much (9+ hrs)"] },
          { id: "goal", label: "What Would Help You Today?", type: "select", options: ["Relaxation tips", "Motivation boost", "Stress management", "Better focus", "Social connection ideas", "Just want to vent / reflect"] },
        ],
        promptTemplate: (v) =>
          `I am doing a mental wellness check-in. Current mood: ${v.mood}. Sleep: ${v.sleepQuality || "Not specified"}${v.reason ? `\nWhat's on my mind: ${v.reason}` : ""}. I'm looking for: ${v.goal || "general wellness tips"}.\n\nProvide: 1) Acknowledgment of my feelings (empathetic, non-judgmental), 2) 3 practical tips that fit my current state and goal, 3) One simple exercise or activity for right now. Remind me that seeking professional help is always an option if needed.`,
      },
      {
        id: "medication-schedule",
        name: "Medication Schedule Organizer",
        description: "Create a clear daily medication reminder schedule",
        icon: "💊",
        fields: [
          { id: "medications", label: "Your Medications & Dosages", type: "textarea", placeholder: "e.g.\nMetformin 500mg - twice daily\nLisinopril 10mg - once daily morning\nVitamin D 1000IU - once daily", required: true },
          { id: "wakeTime", label: "Wake Up Time", type: "text", placeholder: "e.g. 7:00 AM" },
          { id: "sleepTime", label: "Bed Time", type: "text", placeholder: "e.g. 10:30 PM" },
          { id: "meals", label: "Typical Meal Times", type: "text", placeholder: "e.g. Breakfast 8am, Lunch 1pm, Dinner 7pm" },
        ],
        promptTemplate: (v) =>
          `Create a clear, organized daily medication schedule for:\n${v.medications}\nWake time: ${v.wakeTime || "7am"}. Bed time: ${v.sleepTime || "10pm"}. Meal times: ${v.meals || "standard breakfast/lunch/dinner"}.\n\nProvide: 1) A time-based daily schedule table, 2) Whether each med should be taken with/without food, 3) Medications that shouldn't be taken together, 4) Tips for remembering each dose. Add a disclaimer to consult their doctor/pharmacist.`,
      },
      {
        id: "doctor-prep",
        name: "Doctor Appointment Prep",
        description: "Prepare the right questions before any medical appointment",
        icon: "🩺",
        fields: [
          { id: "appointmentType", label: "Appointment Type", type: "select", options: ["General check-up", "Specialist visit", "Follow-up appointment", "Mental health session", "Dental visit", "Emergency / urgent care"], required: true },
          { id: "concerns", label: "Your Main Health Concerns", type: "textarea", placeholder: "e.g. I've been having chest tightness for 2 weeks, fatigue, and occasional dizziness", required: true },
          { id: "medications", label: "Current Medications (optional)", type: "text", placeholder: "e.g. Aspirin 81mg, Metformin 500mg" },
          { id: "history", label: "Relevant Medical History (optional)", type: "text", placeholder: "e.g. Diabetes Type 2, hypertension" },
        ],
        promptTemplate: (v) =>
          `Help me prepare for a ${v.appointmentType} appointment. My concerns: ${v.concerns}${v.medications ? `\nMedications: ${v.medications}` : ""}${v.history ? `\nMedical history: ${v.history}` : ""}.\n\nPrepare: 1) 10 specific questions to ask the doctor, 2) A concise symptom summary to read aloud (under 60 seconds), 3) What tests I might expect them to order, 4) What to bring/prepare, 5) Red flag symptoms to mention immediately. Note: for educational preparation only.`,
      },
      {
        id: "sleep-advisor",
        name: "Sleep Quality Advisor",
        description: "Get personalized tips to sleep better tonight",
        icon: "😴",
        fields: [
          { id: "problems", label: "Your Sleep Problems", type: "select", options: ["Can't fall asleep", "Wake up during the night", "Wake up too early", "Never feel rested", "Sleep too much", "Irregular sleep schedule"], required: true },
          { id: "habits", label: "Current Bedtime Habits", type: "textarea", placeholder: "e.g. Scroll phone in bed, drink coffee after 5pm, irregular bedtime, room is bright" },
          { id: "wakeTime", label: "Target Wake Time", type: "text", placeholder: "e.g. 6:30 AM" },
          { id: "lifestyle", label: "Lifestyle Factors", type: "text", placeholder: "e.g. Work from home, high stress job, 2 young kids" },
        ],
        promptTemplate: (v) =>
          `Help me improve my sleep. Main problem: ${v.problems}${v.habits ? `\nCurrent habits: ${v.habits}` : ""}${v.wakeTime ? `\nTarget wake time: ${v.wakeTime}` : ""}${v.lifestyle ? `\nLifestyle: ${v.lifestyle}` : ""}.\n\nProvide: 1) Root cause analysis of my specific problem, 2) A 7-day sleep improvement plan, 3) 5 specific habit changes ranked by impact, 4) Ideal bedtime routine (step-by-step), 5) Foods/drinks to avoid and when. Keep advice science-backed and practical.`,
      },
      {
        id: "stress-relief",
        name: "Stress Relief Activity Generator",
        description: "Get personalized stress relief activities for your situation",
        icon: "🧘",
        fields: [
          { id: "stressLevel", label: "Stress Level Right Now", type: "select", options: ["Mild (slightly tense)", "Moderate (noticeably stressed)", "High (very anxious)", "Overwhelming (can't function)"], required: true },
          { id: "cause", label: "Main Stress Cause (optional)", type: "text", placeholder: "e.g. Work deadline, financial worries, relationship issues" },
          { id: "timeAvailable", label: "Time Available", type: "select", options: ["5 minutes", "15 minutes", "30 minutes", "1 hour", "Rest of the day"] },
          { id: "location", label: "Where You Are", type: "select", options: ["At work / office", "At home", "Outside / can go outside", "In a car", "Public place"] },
        ],
        promptTemplate: (v) =>
          `I'm experiencing ${v.stressLevel} stress${v.cause ? ` caused by: ${v.cause}` : ""}. I have ${v.timeAvailable || "15 minutes"} and I'm ${v.location || "at home"}.\n\nGive me: 1) One immediate 2-minute grounding exercise, 2) Three activities matched to my time and location, 3) A breathing technique with step-by-step instructions, 4) One longer-term habit to reduce this type of stress, 5) A gentle reminder about self-compassion. Keep it warm and practical.`,
      },
    ],
  },

  // ─── 6. LEGAL & COMPLIANCE ────────────────────────────────────────────────
  {
    id: "legal",
    name: "Legal & Compliance",
    tagline: "Understand legal documents and protect your business",
    icon: "⚖️",
    color: "slate",
    gradient: "from-slate-600 to-gray-700",
    borderColor: "border-slate-500",
    textColor: "text-slate-700",
    bgLight: "bg-slate-100",
    tools: [
      {
        id: "contract-simplifier",
        name: "Contract Simplifier",
        description: "Translate complex legal contracts into plain English",
        icon: "📑",
        fields: [
          { id: "contractText", label: "Paste Contract Text", type: "textarea", placeholder: "Paste the contract section or full contract here...", required: true },
          { id: "focus", label: "Focus Area", type: "select", options: ["Full summary", "Key obligations", "Risks & red flags", "Termination clauses", "Payment terms", "Intellectual property"] },
        ],
        promptTemplate: (v) =>
          `Analyze and simplify the following contract text. Focus on: ${v.focus || "Full summary"}.\n\nContract:\n${v.contractText}\n\nProvide: 1) Plain English summary, 2) Key obligations for each party, 3) Important dates/deadlines, 4) Potential risks or red flags, 5) Questions to ask a lawyer before signing. Note: This is educational only, not legal advice.`,
      },
      {
        id: "privacy-policy",
        name: "Privacy Policy Generator",
        description: "Generate a GDPR & CCPA compliant privacy policy",
        icon: "🔒",
        fields: [
          { id: "businessName", label: "Business / Website Name", type: "text", placeholder: "e.g. ShopEasy Ltd.", required: true },
          { id: "businessType", label: "Business Type", type: "select", options: ["E-commerce store", "SaaS / Web app", "Blog / Content site", "Mobile app", "Service business", "Healthcare"] },
          { id: "dataCollected", label: "Data You Collect", type: "textarea", placeholder: "e.g. Name, email, payment info, location, browsing behavior", required: true },
          { id: "region", label: "Primary Region", type: "select", options: ["USA (CCPA)", "European Union (GDPR)", "UK (UK GDPR)", "Global / Multiple regions", "Australia"] },
        ],
        promptTemplate: (v) =>
          `Generate a privacy policy for "${v.businessName}", a ${v.businessType || "website"}. Region: ${v.region || "Global"}. Data collected: ${v.dataCollected}. Include sections: Data collection, How we use data, Data sharing, Cookies, User rights, Data retention, Contact information, and Last updated date. Make it legally comprehensive but readable.`,
      },
      {
        id: "nda-generator",
        name: "NDA Generator",
        description: "Create a basic Non-Disclosure Agreement instantly",
        icon: "🤫",
        fields: [
          { id: "party1", label: "Disclosing Party (Your Name/Company)", type: "text", placeholder: "e.g. Tech Innovations LLC", required: true },
          { id: "party2", label: "Receiving Party", type: "text", placeholder: "e.g. John Smith / ABC Corp", required: true },
          { id: "purpose", label: "Purpose of Disclosure", type: "text", placeholder: "e.g. Evaluating a potential business partnership", required: true },
          { id: "duration", label: "NDA Duration", type: "select", options: ["1 year", "2 years", "3 years", "5 years", "Indefinite"] },
          { id: "type", label: "NDA Type", type: "select", options: ["One-way (unilateral)", "Mutual (both parties)"] },
        ],
        promptTemplate: (v) =>
          `Draft a ${v.type || "one-way"} Non-Disclosure Agreement. Disclosing party: ${v.party1}. Receiving party: ${v.party2}. Purpose: ${v.purpose}. Duration: ${v.duration || "2 years"}. Include: Definition of confidential information, obligations of receiving party, exclusions, return of materials, remedies for breach, and governing law placeholder. Add a note that this is a template requiring legal review.`,
      },
      {
        id: "dispute-letter",
        name: "Dispute Letter Writer",
        description: "Write formal complaint and dispute letters",
        icon: "✉️",
        fields: [
          { id: "disputeType", label: "Dispute Type", type: "select", options: ["Credit report error", "Billing dispute", "Landlord-tenant issue", "Product/service complaint", "Insurance claim denial", "Employment dispute", "Refund request"], required: true },
          { id: "yourName", label: "Your Full Name", type: "text", placeholder: "Jane Doe", required: true },
          { id: "recipientName", label: "Recipient / Company Name", type: "text", placeholder: "e.g. Bank of America, ABC Landlord", required: true },
          { id: "details", label: "Describe the Issue", type: "textarea", placeholder: "What happened, dates, amounts involved, what resolution you want...", required: true },
        ],
        promptTemplate: (v) =>
          `Write a formal ${v.disputeType} dispute letter from ${v.yourName} to ${v.recipientName}. Issue details: ${v.details}. Make it professional, factual, and firm. Include: date placeholder, reference numbers placeholder, clear statement of the issue, what resolution is requested, deadline for response (30 days), and next steps if unresolved (e.g. regulatory complaint).`,
      },
      {
        id: "terms-generator",
        name: "Terms of Service Generator",
        description: "Create clear terms of service for your website or app",
        icon: "📋",
        fields: [
          { id: "businessName", label: "Business / App Name", type: "text", placeholder: "e.g. MyApp Inc.", required: true },
          { id: "serviceType", label: "Type of Service", type: "select", options: ["E-commerce", "SaaS platform", "Marketplace", "Blog / Content", "Mobile app", "Freelance services"] },
          { id: "keyRules", label: "Key Rules / Restrictions", type: "textarea", placeholder: "e.g. No reselling, must be 18+, no illegal content, subscription auto-renews" },
          { id: "refundPolicy", label: "Refund Policy", type: "select", options: ["No refunds", "30-day refund", "14-day refund", "Case-by-case", "Subscription cancellation only"] },
        ],
        promptTemplate: (v) =>
          `Generate Terms of Service for "${v.businessName}", a ${v.serviceType || "website"}${v.keyRules ? `. Key rules: ${v.keyRules}` : ""}. Refund policy: ${v.refundPolicy || "case-by-case"}. Include sections: Acceptance of terms, User accounts, Prohibited uses, Intellectual property, Disclaimers, Limitation of liability, Termination, Governing law, and Contact info. Make it comprehensive and clear.`,
      },
      {
        id: "cease-desist",
        name: "Cease & Desist Letter",
        description: "Draft a formal cease and desist letter",
        icon: "🛑",
        fields: [
          { id: "issueType", label: "Type of Violation", type: "select", options: ["Copyright infringement", "Trademark infringement", "Defamation / False statements", "Harassment", "Breach of contract", "Unauthorized use of image/content"], required: true },
          { id: "senderName", label: "Your Name / Business", type: "text", placeholder: "e.g. Creative Works LLC", required: true },
          { id: "recipientName", label: "Recipient Name / Business", type: "text", placeholder: "e.g. John Doe / XYZ Corp", required: true },
          { id: "details", label: "Describe the Violation", type: "textarea", placeholder: "What they did, when it started, what you want them to stop...", required: true },
          { id: "deadline", label: "Response Deadline", type: "select", options: ["7 days", "14 days", "30 days"] },
        ],
        promptTemplate: (v) =>
          `Draft a formal cease and desist letter for ${v.issueType}. From: ${v.senderName}. To: ${v.recipientName}. Violation details: ${v.details}. Response deadline: ${v.deadline || "14 days"}. Include: formal opening, clear description of the violation, legal basis, specific demands, consequences if not complied with, and professional closing. Add a note this is a template requiring attorney review.`,
      },
      {
        id: "lease-summary",
        name: "Lease Agreement Summarizer",
        description: "Understand your lease in plain English before signing",
        icon: "🏠",
        fields: [
          { id: "leaseText", label: "Paste Lease Agreement Text", type: "textarea", placeholder: "Paste key sections of your lease agreement here...", required: true },
          { id: "focus", label: "Focus Area", type: "select", options: ["Full summary", "Early termination clauses", "Tenant responsibilities", "Landlord responsibilities", "Fee & penalty clauses", "Renewal terms"] },
        ],
        promptTemplate: (v) =>
          `Analyze this lease agreement and provide a plain-English summary focused on: ${v.focus || "full summary"}.\n\nLease text:\n${v.leaseText}\n\nProvide: 1) Key terms summary (rent, duration, deposit), 2) Tenant obligations, 3) Landlord obligations, 4) Red flags or unusual clauses, 5) Questions to ask before signing. Educational purposes only — recommend legal review.`,
      },
      {
        id: "ip-basics",
        name: "Intellectual Property Guide",
        description: "Understand how to protect your ideas and creations",
        icon: "💡",
        fields: [
          { id: "creationType", label: "What You Created", type: "select", options: ["Logo / Brand name", "Written content / Book", "Software / App", "Music / Art", "Product design / Invention", "Business process / Method"], required: true },
          { id: "goal", label: "Your Goal", type: "select", options: ["Understand my rights", "Prevent others from copying", "License my work", "Register/protect formally", "Identify if I'm infringing on others"] },
          { id: "country", label: "Your Country", type: "select", options: ["United States", "United Kingdom", "Canada", "Australia", "India", "European Union"] },
        ],
        promptTemplate: (v) =>
          `Explain intellectual property rights for: ${v.creationType} in ${v.country || "the US"}. Goal: ${v.goal || "understand my rights"}. Cover: 1) Which type of IP protection applies (copyright/trademark/patent/trade secret), 2) What protection you automatically have, 3) Steps to formally register/protect, 4) Estimated costs and timeline, 5) Common mistakes to avoid. Educational only — recommend an IP attorney for formal protection.`,
      },
      {
        id: "employment-contract-review",
        name: "Employment Contract Checklist",
        description: "Know what to look for before signing any job contract",
        icon: "👔",
        fields: [
          { id: "contractText", label: "Paste Contract Sections", type: "textarea", placeholder: "Paste the employment contract or key sections here...", required: true },
          { id: "role", label: "Job Role", type: "text", placeholder: "e.g. Software Engineer, Sales Manager" },
          { id: "concern", label: "Main Concern", type: "select", options: ["Overall review", "Non-compete clause", "Termination terms", "Compensation & benefits", "IP ownership clauses", "Working hours & overtime"] },
        ],
        promptTemplate: (v) =>
          `Review this employment contract${v.role ? ` for a ${v.role} role` : ""}, focusing on: ${v.concern || "overall review"}.\n\nContract:\n${v.contractText}\n\nProvide: 1) Summary of key terms, 2) Potential red flags or unfair clauses, 3) What's missing that should be there, 4) Negotiation suggestions, 5) Questions to ask HR before signing. Remind user this is educational and a lawyer should review important contracts.`,
      },
    ],
  },

  // ─── 7. FINANCE & ACCOUNTING ──────────────────────────────────────────────
  {
    id: "finance",
    name: "Finance & Accounting",
    tagline: "Make smarter financial decisions with AI clarity",
    icon: "💰",
    color: "emerald",
    gradient: "from-emerald-500 to-green-600",
    borderColor: "border-emerald-500",
    textColor: "text-emerald-700",
    bgLight: "bg-emerald-100",
    tools: [
      {
        id: "budget-analyzer",
        name: "Budget Analyzer",
        description: "Get a full breakdown and savings plan from your expenses",
        icon: "📊",
        fields: [
          { id: "income", label: "Monthly Income (after tax)", type: "number", placeholder: "5000", required: true },
          { id: "expenses", label: "Monthly Expenses", type: "textarea", placeholder: "Rent: $1500\nGroceries: $400\nCar: $350\nSubscriptions: $80\nDining out: $300\nEntertainment: $150", required: true },
          { id: "goal", label: "Financial Goal", type: "select", options: ["Save more money", "Pay off debt", "Build emergency fund", "Save for vacation", "Invest more", "Buy a home"] },
        ],
        promptTemplate: (v) =>
          `Analyze this monthly budget and provide actionable advice.\n\nMonthly income: $${v.income}\nExpenses:\n${v.expenses}\nGoal: ${v.goal || "Save more money"}\n\nProvide: 1) Expense breakdown by category with percentages, 2) How much is left over, 3) Comparison to 50/30/20 rule, 4) Top 3 areas to cut, 5) Specific monthly savings target to reach the stated goal.`,
      },
      {
        id: "invoice-generator",
        name: "Invoice Generator",
        description: "Create professional invoice content in seconds",
        icon: "🧾",
        fields: [
          { id: "freelancerName", label: "Your Name / Business", type: "text", placeholder: "e.g. John Smith Design", required: true },
          { id: "clientName", label: "Client Name", type: "text", placeholder: "e.g. ABC Marketing Agency", required: true },
          { id: "services", label: "Services Provided", type: "textarea", placeholder: "e.g.\nLogo design - $500\nBrand guidelines - $300\nBusiness card design - $150", required: true },
          { id: "paymentTerms", label: "Payment Terms", type: "select", options: ["Due on receipt", "Net 7", "Net 14", "Net 30", "50% upfront, 50% on completion"] },
          { id: "notes", label: "Additional Notes (optional)", type: "text", placeholder: "e.g. Bank transfer details, late fee policy" },
        ],
        promptTemplate: (v) =>
          `Format a professional invoice for:\nFrom: ${v.freelancerName}\nTo: ${v.clientName}\nServices:\n${v.services}\nPayment Terms: ${v.paymentTerms || "Net 30"}${v.notes ? `\nNotes: ${v.notes}` : ""}\n\nInclude: Invoice number placeholder, date placeholder, itemized services table with subtotal and total, payment instructions section, and a polite thank-you line.`,
      },
      {
        id: "tax-deductions",
        name: "Tax Deduction Finder",
        description: "Discover deductions you might be missing",
        icon: "🔎",
        fields: [
          { id: "occupation", label: "Your Occupation / Business Type", type: "text", placeholder: "e.g. Freelance graphic designer, E-commerce seller, Real estate agent", required: true },
          { id: "workStyle", label: "Work Style", type: "select", options: ["Self-employed / freelancer", "Small business owner", "Remote employee", "Sole proprietor", "LLC owner"] },
          { id: "expenses", label: "Major Expense Categories", type: "textarea", placeholder: "e.g. Home office, software subscriptions, travel, equipment, marketing" },
          { id: "country", label: "Country", type: "select", options: ["United States", "United Kingdom", "Canada", "Australia", "India", "Other"] },
        ],
        promptTemplate: (v) =>
          `List potential tax deductions for a ${v.occupation} who is ${v.workStyle || "self-employed"} in ${v.country || "the United States"}${v.expenses ? `.\nExpenses mentioned: ${v.expenses}` : ""}.\n\nProvide: 1) List of commonly missed deductions for this profession, 2) Home office deduction eligibility, 3) Vehicle/travel deductions, 4) What records to keep, 5) Estimated tax-saving tip. Remind them to consult a tax professional.`,
      },
      {
        id: "investment-explainer",
        name: "Investment Term Explainer",
        description: "Understand any investment concept in simple terms",
        icon: "📈",
        fields: [
          { id: "term", label: "Investment Term / Concept", type: "text", placeholder: "e.g. Dollar cost averaging, P/E ratio, ETF, Compound interest, REITs", required: true },
          { id: "level", label: "Your Experience Level", type: "select", options: ["Complete beginner", "Some knowledge", "Intermediate investor", "Experienced"] },
          { id: "context", label: "Context (optional)", type: "text", placeholder: "e.g. I saw this in a stock app, my advisor mentioned it" },
        ],
        promptTemplate: (v) =>
          `Explain "${v.term}" for a ${v.level || "complete beginner"} investor${v.context ? `. Context: ${v.context}` : ""}.\n\nCover: 1) What it means in simple language, 2) A real-world analogy, 3) A practical example with numbers, 4) Pros and cons, 5) When/how it applies to average investors. Avoid jargon. Add a note that this is educational, not financial advice.`,
      },
      {
        id: "freelance-rate-calculator",
        name: "Freelance Rate Calculator",
        description: "Figure out what to charge for your services",
        icon: "💵",
        fields: [
          { id: "skill", label: "Your Skill / Service", type: "text", placeholder: "e.g. Web developer, Copywriter, Video editor", required: true },
          { id: "experience", label: "Years of Experience", type: "select", options: ["0-1 year", "1-3 years", "3-5 years", "5-10 years", "10+ years"] },
          { id: "location", label: "Your Location / Market", type: "text", placeholder: "e.g. New York USA, London UK, Remote / Global" },
          { id: "desiredIncome", label: "Desired Monthly Income ($)", type: "number", placeholder: "5000" },
          { id: "hoursPerWeek", label: "Billable Hours Per Week", type: "number", placeholder: "30" },
        ],
        promptTemplate: (v) =>
          `Help me set my freelance rate as a ${v.skill} with ${v.experience || "1-3 years"} of experience${v.location ? ` in ${v.location}` : ""}${v.desiredIncome ? `. Desired monthly income: $${v.desiredIncome}` : ""}${v.hoursPerWeek ? `. Billable hours/week: ${v.hoursPerWeek}` : ""}.\n\nProvide: 1) Suggested hourly rate range for my experience level, 2) Suggested project-based pricing examples, 3) Retainer rate suggestion, 4) How to calculate minimum viable rate from income goal, 5) Tips for raising rates with clients.`,
      },
      {
        id: "debt-payoff-planner",
        name: "Debt Payoff Planner",
        description: "Build a strategy to become debt-free faster",
        icon: "💳",
        fields: [
          { id: "debts", label: "List Your Debts", type: "textarea", placeholder: "Credit card 1: $3,200 at 22% APR\nPersonal loan: $8,000 at 14% APR\nCar loan: $12,000 at 6% APR", required: true },
          { id: "monthlyPayment", label: "Total Monthly Payment You Can Afford ($)", type: "number", placeholder: "600", required: true },
          { id: "strategy", label: "Preferred Strategy", type: "select", options: ["Avalanche (highest interest first — saves most money)", "Snowball (smallest balance first — builds momentum)", "Recommend best strategy for me"] },
        ],
        promptTemplate: (v) =>
          `Create a debt payoff plan. My debts:\n${v.debts}\nMonthly payment budget: $${v.monthlyPayment}. Strategy: ${v.strategy || "recommend best"}.\n\nProvide: 1) Recommended payoff order with reasoning, 2) Month-by-month payment breakdown for the first 6 months, 3) Total interest saved vs minimum payments, 4) Estimated debt-free date, 5) Tips to find extra money to accelerate payoff.`,
      },
      {
        id: "emergency-fund",
        name: "Emergency Fund Calculator",
        description: "Figure out how much to save and how to build it fast",
        icon: "🛡️",
        fields: [
          { id: "monthlyExpenses", label: "Monthly Essential Expenses ($)", type: "number", placeholder: "3200", required: true },
          { id: "currentSavings", label: "Current Emergency Savings ($)", type: "number", placeholder: "500" },
          { id: "monthlySavings", label: "Can Save Per Month ($)", type: "number", placeholder: "300" },
          { id: "jobStability", label: "Job / Income Stability", type: "select", options: ["Very stable (government/permanent)", "Stable (regular employment)", "Variable (freelance/self-employed)", "Unstable (seasonal/contract)"] },
        ],
        promptTemplate: (v) =>
          `Help me build my emergency fund. Monthly expenses: $${v.monthlyExpenses}. Current savings: $${v.currentSavings || 0}. Can save: $${v.monthlySavings || 0}/month. Income stability: ${v.jobStability || "stable"}.\n\nProvide: 1) Recommended emergency fund size for my situation (with reasoning), 2) How long to reach goal at current savings rate, 3) 5 practical ways to save faster, 4) Where to keep the emergency fund (account types), 5) When to use vs not use the emergency fund.`,
      },
      {
        id: "expense-categorizer",
        name: "Business Expense Categorizer",
        description: "Categorize expenses properly for accounting and taxes",
        icon: "🗂️",
        fields: [
          { id: "expenses", label: "List Your Business Expenses", type: "textarea", placeholder: "e.g.\nZoom subscription $15\nFlight to client meeting $340\nOffice desk $450\nLinkedIn ads $200\nCoffee with client $45", required: true },
          { id: "businessType", label: "Business Type", type: "select", options: ["Freelancer / Sole proprietor", "Small LLC", "S-Corp", "Partnership", "Startup"] },
          { id: "country", label: "Country", type: "select", options: ["United States", "United Kingdom", "Canada", "Australia", "India"] },
        ],
        promptTemplate: (v) =>
          `Categorize these business expenses for a ${v.businessType || "freelancer"} in ${v.country || "the US"}:\n\n${v.expenses}\n\nFor each expense: 1) Correct accounting category (e.g. Office supplies, Travel, Marketing), 2) Whether it's likely fully or partially deductible, 3) Documentation needed to claim it. Then provide a summary table with total by category. Note: consult a tax professional for official advice.`,
      },
      {
        id: "profit-loss",
        name: "Profit & Loss Summary",
        description: "Generate a simple P&L statement for your business",
        icon: "📈",
        fields: [
          { id: "period", label: "Time Period", type: "select", options: ["Monthly", "Quarterly", "Annual"] },
          { id: "revenue", label: "Revenue / Income Sources", type: "textarea", placeholder: "e.g.\nProduct sales: $12,000\nConsulting: $5,000\nAffiliate income: $800", required: true },
          { id: "expenses", label: "Business Expenses", type: "textarea", placeholder: "e.g.\nRent: $1,200\nSalaries: $6,000\nMarketing: $800\nSoftware: $300", required: true },
        ],
        promptTemplate: (v) =>
          `Create a ${v.period || "monthly"} Profit & Loss statement from this data.\n\nRevenue:\n${v.revenue}\n\nExpenses:\n${v.expenses}\n\nProvide: 1) Formatted P&L statement (revenue, gross profit, operating expenses, net profit/loss), 2) Profit margin percentage, 3) Largest expense category analysis, 4) Revenue vs expense ratio, 5) Simple interpretation and one recommendation to improve profitability.`,
      },
    ],
  },

  // ─── 8. HR & RECRUITMENT ──────────────────────────────────────────────────
  {
    id: "hr-recruitment",
    name: "HR & Recruitment",
    tagline: "Hire smarter and build stronger teams with AI",
    icon: "👥",
    color: "cyan",
    gradient: "from-cyan-500 to-sky-600",
    borderColor: "border-cyan-500",
    textColor: "text-cyan-700",
    bgLight: "bg-cyan-100",
    tools: [
      {
        id: "resume-analyzer",
        name: "Resume Analyzer & Improver",
        description: "Get a score and specific improvements for your resume",
        icon: "📄",
        fields: [
          { id: "resume", label: "Paste Your Resume", type: "textarea", placeholder: "Paste your full resume text here...", required: true },
          { id: "jobTitle", label: "Target Job Title", type: "text", placeholder: "e.g. Senior Marketing Manager", required: true },
          { id: "jobDescription", label: "Job Description (optional)", type: "textarea", placeholder: "Paste the job posting to get tailored feedback..." },
        ],
        promptTemplate: (v) =>
          `Analyze this resume for a ${v.jobTitle} position${v.jobDescription ? " based on the job description provided" : ""}:\n\nResume:\n${v.resume}${v.jobDescription ? `\n\nJob Description:\n${v.jobDescription}` : ""}\n\nProvide: 1) Overall score out of 10 with reasoning, 2) Top 3 strengths, 3) Top 5 specific improvements with rewritten examples, 4) Missing keywords for ATS systems, 5) One-line summary rewrite.`,
      },
      {
        id: "job-description",
        name: "Job Description Writer",
        description: "Write compelling JDs that attract top talent",
        icon: "📋",
        fields: [
          { id: "jobTitle", label: "Job Title", type: "text", placeholder: "e.g. Full Stack Developer", required: true },
          { id: "company", label: "Company Name & Type", type: "text", placeholder: "e.g. TechFlow - a B2B SaaS startup" },
          { id: "requirements", label: "Key Requirements", type: "textarea", placeholder: "e.g. 3+ years React, Node.js, PostgreSQL, remote work, startup experience preferred", required: true },
          { id: "salary", label: "Salary Range (optional)", type: "text", placeholder: "e.g. $80,000 - $100,000" },
          { id: "workType", label: "Work Type", type: "select", options: ["Remote", "On-site", "Hybrid", "Contract", "Part-time"] },
        ],
        promptTemplate: (v) =>
          `Write a compelling job description for a ${v.jobTitle}${v.company ? ` at ${v.company}` : ""}. Work type: ${v.workType || "Remote"}${v.salary ? `. Salary: ${v.salary}` : ""}. Requirements: ${v.requirements}.\n\nInclude: Role overview, key responsibilities (6-8 bullets), required qualifications, nice-to-have skills, what they'll get (benefits/culture), and a motivating closing paragraph. Make it inclusive and appealing to top candidates.`,
      },
      {
        id: "interview-questions",
        name: "Interview Question Generator",
        description: "Generate smart interview questions for any role",
        icon: "🎤",
        fields: [
          { id: "jobTitle", label: "Job Title / Role", type: "text", placeholder: "e.g. Product Manager", required: true },
          { id: "questionType", label: "Question Type", type: "select", options: ["Behavioral (STAR format)", "Technical / Skills-based", "Culture fit", "Situational", "Mixed (all types)"] },
          { id: "count", label: "Number of Questions", type: "select", options: ["5 questions", "10 questions", "15 questions"] },
          { id: "seniorityLevel", label: "Seniority Level", type: "select", options: ["Entry level / Junior", "Mid-level", "Senior", "Manager / Lead", "Executive / C-suite"] },
        ],
        promptTemplate: (v) =>
          `Generate ${v.count || "10"} ${v.questionType || "mixed"} interview questions for a ${v.seniorityLevel || "mid-level"} ${v.jobTitle} role. For behavioral questions, include the STAR context. For technical questions, include what a good answer looks like. Number each question and include a brief note on what to listen for.`,
      },
      {
        id: "cover-letter",
        name: "Cover Letter Builder",
        description: "Write a tailored cover letter that stands out",
        icon: "✍️",
        fields: [
          { id: "applicantName", label: "Your Name", type: "text", placeholder: "e.g. Sarah Williams", required: true },
          { id: "jobTitle", label: "Job Title Applying For", type: "text", placeholder: "e.g. UX Designer at Google", required: true },
          { id: "experience", label: "Your Relevant Experience", type: "textarea", placeholder: "e.g. 4 years UX design at fintech startups, led redesign that increased conversions by 32%", required: true },
          { id: "whyCompany", label: "Why This Company?", type: "text", placeholder: "e.g. I love their mission to democratize education" },
          { id: "tone", label: "Tone", type: "select", options: ["Professional & formal", "Conversational & friendly", "Bold & confident", "Creative & unique"] },
        ],
        promptTemplate: (v) =>
          `Write a ${v.tone || "professional"} cover letter for ${v.applicantName} applying for ${v.jobTitle}. Their experience: ${v.experience}${v.whyCompany ? `. Why this company: ${v.whyCompany}` : ""}.\n\nInclude: Strong opening hook, 2-3 specific accomplishment-driven paragraphs, connection to the company's mission/values, and a confident closing CTA. Keep it under 350 words. Avoid clichés like "I am a hard worker."`,
      },
      {
        id: "salary-negotiation",
        name: "Salary Negotiation Script",
        description: "Know exactly what to say when negotiating your salary",
        icon: "🤝",
        fields: [
          { id: "jobTitle", label: "Job Title", type: "text", placeholder: "e.g. Data Analyst", required: true },
          { id: "currentOffer", label: "Offer Received ($)", type: "number", placeholder: "65000", required: true },
          { id: "targetSalary", label: "Your Target Salary ($)", type: "number", placeholder: "75000", required: true },
          { id: "experience", label: "Your Key Strengths / Experience", type: "text", placeholder: "e.g. 5 years experience, built dashboards that saved $200k" },
          { id: "method", label: "Negotiation Method", type: "select", options: ["Email", "Phone call", "In-person meeting"] },
        ],
        promptTemplate: (v) =>
          `Write a salary negotiation script for a ${v.jobTitle} role. Current offer: $${v.currentOffer}. Target salary: $${v.targetSalary}${v.experience ? `. Key strengths: ${v.experience}` : ""}. Method: ${v.method || "Email"}.\n\nInclude: Opening statement, 3 specific reasons justifying higher pay, the counter-offer delivery, handling pushback (2 scenarios), and a graceful closing. Make it confident but not aggressive.`,
      },
      {
        id: "onboarding-checklist",
        name: "Employee Onboarding Checklist",
        description: "Create a smooth onboarding experience for new hires",
        icon: "🎉",
        fields: [
          { id: "role", label: "New Hire Role", type: "text", placeholder: "e.g. Marketing Coordinator", required: true },
          { id: "startDate", label: "Start Date", type: "text", placeholder: "e.g. July 1, 2025" },
          { id: "companySize", label: "Company Size", type: "select", options: ["Startup (1-20 people)", "Small (20-100)", "Medium (100-500)", "Large (500+)"] },
          { id: "remote", label: "Work Setup", type: "select", options: ["In-office", "Remote / Work from home", "Hybrid"] },
        ],
        promptTemplate: (v) =>
          `Create a comprehensive onboarding checklist for a new ${v.role}${v.startDate ? ` starting ${v.startDate}` : ""} at a ${v.companySize || "small"} company (${v.remote || "in-office"}). Organize by: Day 1, Week 1, Month 1, and 90 days. Include: paperwork/admin tasks, system access setup, team introductions, training milestones, culture orientation, and first project milestones. Also include a separate checklist for the manager to prepare before Day 1.`,
      },
      {
        id: "performance-review",
        name: "Performance Review Writer",
        description: "Write fair, constructive performance reviews",
        icon: "📊",
        fields: [
          { id: "employeeName", label: "Employee Name", type: "text", placeholder: "e.g. Alex Johnson" },
          { id: "role", label: "Their Role", type: "text", placeholder: "e.g. Customer Success Manager", required: true },
          { id: "strengths", label: "Key Strengths / Achievements", type: "textarea", placeholder: "e.g. Exceeded sales target by 20%, excellent communication, mentored 2 junior staff", required: true },
          { id: "improvements", label: "Areas Needing Improvement", type: "textarea", placeholder: "e.g. Time management, meeting deadlines, technical skills" },
          { id: "rating", label: "Overall Rating", type: "select", options: ["Exceptional", "Exceeds expectations", "Meets expectations", "Needs improvement", "Unsatisfactory"] },
        ],
        promptTemplate: (v) =>
          `Write a professional performance review for ${v.employeeName || "the employee"}, a ${v.role}. Overall rating: ${v.rating || "meets expectations"}. Strengths/achievements: ${v.strengths}${v.improvements ? `. Areas to improve: ${v.improvements}` : ""}. Write in a balanced, constructive, and professional tone. Include: performance summary paragraph, specific achievement highlights, development areas with actionable suggestions, and goals for next review period.`,
      },
      {
        id: "meeting-agenda",
        name: "Team Meeting Agenda Builder",
        description: "Run productive meetings with clear agendas",
        icon: "📋",
        fields: [
          { id: "meetingType", label: "Meeting Type", type: "select", options: ["Weekly team standup", "Project kickoff", "Brainstorming session", "Performance discussion", "Client presentation", "All-hands / Town hall", "Retrospective"] },
          { id: "duration", label: "Meeting Duration", type: "select", options: ["15 minutes", "30 minutes", "45 minutes", "1 hour", "2 hours"] },
          { id: "attendees", label: "Attendees", type: "text", placeholder: "e.g. Marketing team (6 people), including 2 remote" },
          { id: "topics", label: "Topics to Cover", type: "textarea", placeholder: "e.g. Q3 campaign results, new brand guidelines, upcoming product launch prep" },
        ],
        promptTemplate: (v) =>
          `Create a detailed ${v.meetingType || "team meeting"} agenda for a ${v.duration || "1 hour"} meeting${v.attendees ? ` with ${v.attendees}` : ""}. Topics: ${v.topics || "general business updates"}.\n\nProvide: 1) Time-boxed agenda with minutes per item, 2) Facilitator notes for each section, 3) Pre-meeting prep tasks for attendees, 4) Decision points / items needing approval, 5) Action items template for end of meeting. Keep it focused and respect everyone's time.`,
      },
      {
        id: "reference-letter",
        name: "Reference Letter Generator",
        description: "Write strong professional reference letters",
        icon: "📜",
        fields: [
          { id: "candidateName", label: "Candidate Name", type: "text", placeholder: "e.g. Sarah Williams", required: true },
          { id: "relationship", label: "Your Relationship to Them", type: "text", placeholder: "e.g. Direct manager for 3 years, colleague, professor", required: true },
          { id: "role", label: "Role They Are Applying For", type: "text", placeholder: "e.g. Senior Software Engineer at Google" },
          { id: "strengths", label: "Their Top Qualities & Achievements", type: "textarea", placeholder: "e.g. Led team of 5, delivered project 2 weeks early, exceptional problem-solver, increased revenue by 30%", required: true },
          { id: "yourName", label: "Your Name & Title", type: "text", placeholder: "e.g. John Doe, VP of Engineering" },
        ],
        promptTemplate: (v) =>
          `Write a strong professional reference letter for ${v.candidateName}${v.role ? ` applying for ${v.role}` : ""}. Written by: ${v.yourName || "a senior professional"}. Relationship: ${v.relationship}. Their strengths and achievements: ${v.strengths}.\n\nStructure: Formal opening with context, 2-3 paragraphs with specific examples and accomplishments, enthusiastic closing endorsement, and professional sign-off. Make it specific and compelling — avoid generic praise.`,
      },
    ],
  },

  // ─── 9. E-COMMERCE & RETAIL ──────────────────────────────────────────────
  {
    id: "ecommerce",
    name: "E-commerce & Retail",
    tagline: "Boost sales and delight customers with AI-powered content",
    icon: "🛒",
    color: "orange",
    gradient: "from-orange-500 to-red-500",
    borderColor: "border-orange-500",
    textColor: "text-orange-700",
    bgLight: "bg-orange-100",
    tools: [
      {
        id: "product-description",
        name: "Product Description Writer",
        description: "Write SEO-optimized descriptions that drive sales",
        icon: "📦",
        fields: [
          { id: "productName", label: "Product Name", type: "text", placeholder: "e.g. Stainless Steel Water Bottle 32oz", required: true },
          { id: "features", label: "Key Features & Benefits", type: "textarea", placeholder: "e.g. BPA-free, keeps drinks cold 24hrs, leak-proof lid, wide mouth", required: true },
          { id: "audience", label: "Target Customer", type: "text", placeholder: "e.g. Gym-goers, hikers, office workers" },
          { id: "platform", label: "Selling Platform", type: "select", options: ["Amazon", "Shopify / Own website", "Etsy", "eBay", "General / Multiple"] },
          { id: "keywords", label: "SEO Keywords (optional)", type: "text", placeholder: "e.g. insulated water bottle, gym bottle, eco friendly" },
        ],
        promptTemplate: (v) =>
          `Write an SEO-optimized product description for "${v.productName}" on ${v.platform || "an e-commerce store"}. Features: ${v.features}${v.audience ? `. Target customer: ${v.audience}` : ""}${v.keywords ? `. Include keywords: ${v.keywords}` : ""}.\n\nInclude: Compelling headline, 3-4 sentence story-driven opening, bullet-point features section (6-8 bullets), closing CTA. Optimize for search without keyword stuffing.`,
      },
      {
        id: "review-response",
        name: "Customer Review Responder",
        description: "Respond to any review professionally and on-brand",
        icon: "⭐",
        fields: [
          { id: "review", label: "Paste the Customer Review", type: "textarea", placeholder: "e.g. 'The product arrived damaged and customer support took 2 weeks to respond. Very disappointed.'", required: true },
          { id: "rating", label: "Star Rating Given", type: "select", options: ["5 stars ⭐⭐⭐⭐⭐", "4 stars ⭐⭐⭐⭐", "3 stars ⭐⭐⭐", "2 stars ⭐⭐", "1 star ⭐"] },
          { id: "brandName", label: "Your Brand Name", type: "text", placeholder: "e.g. EcoGear" },
          { id: "resolution", label: "Resolution Offered (optional)", type: "text", placeholder: "e.g. Full refund, replacement sent, 20% discount" },
        ],
        promptTemplate: (v) =>
          `Write a professional response to this ${v.rating || "customer"} review for ${v.brandName || "our store"}:\n\nReview: "${v.review}"${v.resolution ? `\nResolution we're offering: ${v.resolution}` : ""}\n\nMake the response: empathetic, professional, specific (address their exact complaint), include the resolution if provided, and invite them to contact us directly. Keep under 100 words. Never be defensive.`,
      },
      {
        id: "return-policy",
        name: "Return Policy Generator",
        description: "Create a clear, customer-friendly return policy",
        icon: "🔄",
        fields: [
          { id: "businessName", label: "Store / Business Name", type: "text", placeholder: "e.g. StyleHouse Fashion", required: true },
          { id: "productType", label: "What You Sell", type: "text", placeholder: "e.g. Clothing, electronics, handmade jewelry", required: true },
          { id: "returnWindow", label: "Return Window", type: "select", options: ["14 days", "30 days", "60 days", "90 days", "No returns"] },
          { id: "conditions", label: "Return Conditions", type: "select", options: ["Unused & original packaging", "Unopened only", "Any condition", "Defective items only"] },
          { id: "refundMethod", label: "Refund Method", type: "select", options: ["Full refund", "Store credit only", "Exchange only", "Refund or exchange"] },
        ],
        promptTemplate: (v) =>
          `Write a clear and customer-friendly return policy for "${v.businessName}" that sells ${v.productType}. Return window: ${v.returnWindow || "30 days"}. Conditions: ${v.conditions || "Unused & original packaging"}. Refund method: ${v.refundMethod || "Full refund"}.\n\nInclude: How to initiate a return, what items qualify, timeline for processing, shipping responsibility, exceptions (e.g. sale items, personalized items), and contact info placeholder.`,
      },
      {
        id: "upsell-script",
        name: "Upsell & Cross-sell Script",
        description: "Increase average order value with smart suggestions",
        icon: "💡",
        fields: [
          { id: "mainProduct", label: "Main Product Being Purchased", type: "text", placeholder: "e.g. Yoga mat", required: true },
          { id: "upsellProduct", label: "Product You Want to Upsell", type: "text", placeholder: "e.g. Premium yoga mat bag, foam roller, yoga blocks set" },
          { id: "channel", label: "Where to Show It", type: "select", options: ["Product page", "Cart page", "Thank-you / confirmation page", "Email after purchase", "Chat / customer support"] },
          { id: "discount", label: "Offer a Discount?", type: "text", placeholder: "e.g. 15% off if added now, free shipping with bundle" },
        ],
        promptTemplate: (v) =>
          `Write a compelling upsell/cross-sell message for a customer buying "${v.mainProduct}". Suggested add-on: "${v.upsellProduct || "complementary product"}". Shown on: ${v.channel || "cart page"}${v.discount ? `. Incentive: ${v.discount}` : ""}.\n\nWrite 2 version: 1) Short (under 30 words for inline display), 2) Longer version (2-3 sentences with benefits). Make it helpful not pushy. Focus on completing the customer's goal.`,
      },
      {
        id: "abandoned-cart-email",
        name: "Abandoned Cart Email",
        description: "Recover lost sales with persuasive cart recovery emails",
        icon: "🛍️",
        fields: [
          { id: "brandName", label: "Brand Name", type: "text", placeholder: "e.g. LuxeHome", required: true },
          { id: "productLeft", label: "Product Left in Cart", type: "text", placeholder: "e.g. Minimalist leather wallet", required: true },
          { id: "emailSequence", label: "Email in Sequence", type: "select", options: ["1st email (1 hour after - gentle reminder)", "2nd email (24 hours - add social proof)", "3rd email (72 hours - add discount offer)"] },
          { id: "discount", label: "Discount Code (optional)", type: "text", placeholder: "e.g. SAVE10 for 10% off" },
        ],
        promptTemplate: (v) =>
          `Write a ${v.emailSequence || "1st"} abandoned cart recovery email for "${v.brandName}" for a customer who left "${v.productLeft}" in their cart${v.discount ? `. Discount offer: ${v.discount}` : ""}.\n\nInclude: Subject line + preview text, personalized opening, product reminder with key benefit, urgency element (limited stock/time), CTA button text, and a P.S. line. Keep the tone friendly and helpful, not pushy.`,
      },
      {
        id: "faq-generator",
        name: "FAQ Page Generator",
        description: "Create a complete FAQ page for your store or product",
        icon: "❓",
        fields: [
          { id: "businessName", label: "Store / Brand Name", type: "text", placeholder: "e.g. EcoWear Apparel", required: true },
          { id: "productType", label: "What You Sell", type: "text", placeholder: "e.g. Sustainable clothing, handmade jewelry, digital downloads", required: true },
          { id: "topics", label: "Common Customer Questions / Concerns", type: "textarea", placeholder: "e.g. shipping times, returns, sizing, materials, wholesale, customization" },
        ],
        promptTemplate: (v) =>
          `Generate a comprehensive FAQ page for "${v.businessName}" that sells ${v.productType}. Customer concern areas: ${v.topics || "general"}.\n\nCreate 15-20 realistic customer questions with clear, friendly answers. Organize into sections: Ordering & Payment, Shipping & Delivery, Returns & Refunds, Products & Quality, and Customer Support. Write in a warm, helpful brand voice.`,
      },
      {
        id: "flash-sale",
        name: "Flash Sale Announcement",
        description: "Create buzz and urgency for your sales events",
        icon: "⚡",
        fields: [
          { id: "brandName", label: "Brand Name", type: "text", placeholder: "e.g. StyleHouse", required: true },
          { id: "discount", label: "Sale Offer", type: "text", placeholder: "e.g. 40% off everything, Buy 2 Get 1 Free", required: true },
          { id: "duration", label: "Sale Duration", type: "text", placeholder: "e.g. 24 hours only, ends midnight Sunday" },
          { id: "platform", label: "Where to Post", type: "select", options: ["Instagram", "Email newsletter", "SMS", "Facebook", "All channels"] },
          { id: "code", label: "Promo Code (optional)", type: "text", placeholder: "e.g. FLASH40" },
        ],
        promptTemplate: (v) =>
          `Write a high-energy flash sale announcement for ${v.brandName} on ${v.platform || "Instagram"}. Offer: ${v.discount}${v.duration ? `. Duration: ${v.duration}` : ""}${v.code ? `. Code: ${v.code}` : ""}.\n\nCreate 2 versions: 1) Short & punchy (under 50 words), 2) Full announcement with all details. Both should create urgency, excitement, and a clear CTA. Include relevant emojis and hashtags for social versions.`,
      },
      {
        id: "shipping-policy",
        name: "Shipping Policy Writer",
        description: "Write a clear shipping policy that reduces customer queries",
        icon: "🚚",
        fields: [
          { id: "businessName", label: "Store Name", type: "text", placeholder: "e.g. TechGear Shop", required: true },
          { id: "origin", label: "Ships From (Country / City)", type: "text", placeholder: "e.g. Los Angeles, USA" },
          { id: "destinations", label: "Ships To", type: "select", options: ["USA only", "USA & Canada", "USA & worldwide", "Europe only", "Worldwide"] },
          { id: "processingTime", label: "Processing Time", type: "text", placeholder: "e.g. 1-3 business days" },
          { id: "methods", label: "Shipping Methods & Times", type: "textarea", placeholder: "e.g. Standard: 5-7 days ($4.99 or free over $50)\nExpress: 2-3 days ($12.99)\nOvernight: next day ($24.99)" },
        ],
        promptTemplate: (v) =>
          `Write a clear and professional shipping policy for "${v.businessName}" that ships from ${v.origin || "USA"} to ${v.destinations || "USA & worldwide"}. Processing time: ${v.processingTime || "1-3 business days"}. Shipping methods: ${v.methods || "standard and express"}.\n\nInclude: Order processing timeline, all shipping options with costs and timeframes, international shipping details, tracking information, lost/damaged package policy, and holiday shipping cutoff note placeholder.`,
      },
      {
        id: "loyalty-program",
        name: "Loyalty Program Description",
        description: "Design and describe a customer loyalty program",
        icon: "🌟",
        fields: [
          { id: "brandName", label: "Brand Name", type: "text", placeholder: "e.g. Glow Beauty", required: true },
          { id: "programName", label: "Program Name (optional)", type: "text", placeholder: "e.g. Glow Rewards, Star Club" },
          { id: "rewards", label: "Rewards & Perks", type: "textarea", placeholder: "e.g. 1 point per $1 spent, 500 points = $5 off, birthday discount, early access to sales", required: true },
          { id: "tiers", label: "Tier Structure", type: "select", options: ["Single tier (everyone equal)", "2 tiers (regular & VIP)", "3 tiers (Bronze/Silver/Gold)", "4+ tiers"] },
        ],
        promptTemplate: (v) =>
          `Write a compelling loyalty program description for ${v.brandName}${v.programName ? ` called "${v.programName}"` : ""}. Rewards: ${v.rewards}. Tier structure: ${v.tiers || "single tier"}.\n\nCreate: 1) A 2-sentence program pitch (for website hero), 2) Full program explanation with how to earn and redeem, 3) Tier breakdown with benefits per tier, 4) An FAQ section (5 questions), 5) Email subject line to announce the program launch.`,
      },
    ],
  },

  // ─── 10. CONTENT CREATORS ────────────────────────────────────────────────
  {
    id: "content-creators",
    name: "Content Creators",
    tagline: "Create viral content faster and grow your audience",
    icon: "🎬",
    color: "fuchsia",
    gradient: "from-fuchsia-500 to-purple-600",
    borderColor: "border-fuchsia-500",
    textColor: "text-fuchsia-700",
    bgLight: "bg-fuchsia-100",
    tools: [
      {
        id: "youtube-script",
        name: "YouTube Script Writer",
        description: "Write engaging scripts with hooks that keep viewers watching",
        icon: "▶️",
        fields: [
          { id: "topic", label: "Video Topic", type: "text", placeholder: "e.g. How I made $5000 in my first month of freelancing", required: true },
          { id: "duration", label: "Target Video Length", type: "select", options: ["2-3 minutes (short)", "5-8 minutes (medium)", "10-15 minutes (long)", "20+ minutes (deep dive)"] },
          { id: "niche", label: "Your Channel Niche", type: "text", placeholder: "e.g. Personal finance, tech reviews, cooking, fitness" },
          { id: "style", label: "Presentation Style", type: "select", options: ["Talking head (direct to camera)", "Voiceover + visuals", "Tutorial / How-to", "Story-based", "List / Countdown"] },
        ],
        promptTemplate: (v) =>
          `Write a complete YouTube script for a ${v.duration || "5-8 minute"} ${v.style || "talking head"} video on: "${v.topic}"${v.niche ? ` (channel niche: ${v.niche})` : ""}.\n\nInclude: 1) Hook (first 15 seconds - no intros), 2) Pattern interrupt, 3) Main content with timestamps/sections, 4) Mid-video retention hook, 5) CTA before the end, 6) Outro (subscribe + next video tease). Add [B-ROLL] and [VISUAL] cues throughout.`,
      },
      {
        id: "blog-outline",
        name: "Blog Post Outline Builder",
        description: "Get a full SEO blog structure ready to write",
        icon: "📝",
        fields: [
          { id: "keyword", label: "Target Keyword / Topic", type: "text", placeholder: "e.g. best free project management tools 2024", required: true },
          { id: "wordCount", label: "Target Word Count", type: "select", options: ["500-800 words", "1000-1500 words", "2000-2500 words", "3000+ words (pillar post)"] },
          { id: "audience", label: "Target Reader", type: "text", placeholder: "e.g. Small business owners, beginner bloggers, college students" },
          { id: "intent", label: "Search Intent", type: "select", options: ["Informational (how-to, what is)", "Comparison / Best-of list", "Product review", "Personal story / Case study"] },
        ],
        promptTemplate: (v) =>
          `Create a detailed SEO blog post outline for keyword: "${v.keyword}". Word count: ${v.wordCount || "1000-1500"}. Target reader: ${v.audience || "general audience"}. Intent: ${v.intent || "Informational"}.\n\nProvide: 1) SEO title (under 60 chars), 2) Meta description (under 155 chars), 3) Introduction angle, 4) Full H2/H3 structure with brief notes on each section, 5) Internal/external link opportunities, 6) CTA suggestion. Include estimated word count per section.`,
      },
      {
        id: "video-ideas",
        name: "Video / Content Idea Generator",
        description: "Never run out of content ideas for your niche",
        icon: "💡",
        fields: [
          { id: "niche", label: "Your Niche / Content Type", type: "text", placeholder: "e.g. Personal finance, beauty, travel vlogging, coding tutorials", required: true },
          { id: "platform", label: "Platform", type: "select", options: ["YouTube (long-form)", "YouTube Shorts", "TikTok", "Instagram Reels", "Podcast", "Blog"] },
          { id: "audienceLevel", label: "Audience Experience Level", type: "select", options: ["Beginners", "Intermediate", "Advanced", "Mixed / All levels"] },
          { id: "style", label: "Content Style", type: "select", options: ["Educational", "Entertainment", "Inspirational", "Controversial / Hot takes", "Day in the life", "Challenge / Trend"] },
        ],
        promptTemplate: (v) =>
          `Generate 15 ${v.style || "educational"} content ideas for a ${v.platform || "YouTube"} channel in the ${v.niche} niche, targeting ${v.audienceLevel || "beginners"}.\n\nFor each idea provide: 1) Title/headline (click-worthy), 2) One-line concept, 3) Why it will perform well. Mark 3 ideas as HIGH PRIORITY based on current trends and searchability. Include a mix of evergreen and trending ideas.`,
      },
      {
        id: "thumbnail-concept",
        name: "Thumbnail Concept Generator",
        description: "Get visual thumbnail ideas that get more clicks",
        icon: "🖼️",
        fields: [
          { id: "videoTitle", label: "Video Title / Topic", type: "text", placeholder: "e.g. I tried waking up at 5am for 30 days", required: true },
          { id: "niche", label: "Channel Niche & Style", type: "text", placeholder: "e.g. Self-improvement, minimalist aesthetic" },
          { id: "emotion", label: "Target Emotion", type: "select", options: ["Curiosity / Intrigue", "Shock / Surprise", "Aspiration / Inspiration", "FOMO / Urgency", "Trust / Authority", "Humor"] },
        ],
        promptTemplate: (v) =>
          `Generate 5 thumbnail concepts for a video about: "${v.videoTitle}"${v.niche ? ` (channel: ${v.niche})` : ""}. Target emotion: ${v.emotion || "Curiosity"}.\n\nFor each concept describe: 1) Main visual element (face expression, background, props), 2) Text overlay (max 4 words), 3) Color scheme, 4) Layout description, 5) Why this works psychologically. Also mention which concept you'd rank #1 and why.`,
      },
      {
        id: "podcast-outline",
        name: "Podcast Episode Planner",
        description: "Structure engaging podcast episodes from topic to outro",
        icon: "🎙️",
        fields: [
          { id: "topic", label: "Episode Topic", type: "text", placeholder: "e.g. How to build a morning routine that sticks", required: true },
          { id: "duration", label: "Episode Length", type: "select", options: ["15-20 minutes", "30-40 minutes", "45-60 minutes", "60-90 minutes"] },
          { id: "format", label: "Episode Format", type: "select", options: ["Solo / Monologue", "Interview with guest", "Co-host discussion", "Q&A / Listener questions", "Story-based narrative"] },
          { id: "niche", label: "Podcast Niche", type: "text", placeholder: "e.g. Business, wellness, true crime, tech" },
        ],
        promptTemplate: (v) =>
          `Create a detailed podcast episode plan for a ${v.duration || "30-40 minute"} ${v.format || "solo"} episode on: "${v.topic}"${v.niche ? ` (podcast niche: ${v.niche})` : ""}.\n\nInclude: 1) Hook / cold open (first 60 seconds script), 2) Episode intro script, 3) Chapter breakdown with timestamps and talking points, 4) Interview questions if applicable, 5) Ad break placement suggestions, 6) Outro and CTA, 7) Show notes summary template.`,
      },
      {
        id: "newsletter-writer",
        name: "Newsletter Content Writer",
        description: "Write engaging email newsletters your subscribers love",
        icon: "📨",
        fields: [
          { id: "niche", label: "Newsletter Niche / Topic", type: "text", placeholder: "e.g. Productivity tips, investing, cooking, tech news", required: true },
          { id: "mainStory", label: "Main Story or Topic This Issue", type: "text", placeholder: "e.g. Why morning routines are overrated", required: true },
          { id: "extras", label: "Other Sections to Include", type: "text", placeholder: "e.g. 3 quick tips, a tool recommendation, a quote" },
          { id: "tone", label: "Newsletter Tone", type: "select", options: ["Conversational & personal", "Professional & informative", "Funny & casual", "Inspirational", "Data-driven"] },
          { id: "subscriberCount", label: "Approx. Subscriber Count", type: "text", placeholder: "e.g. 500, 5000, 50K" },
        ],
        promptTemplate: (v) =>
          `Write a complete ${v.tone || "conversational"} email newsletter for a ${v.niche} newsletter. Main story: "${v.mainStory}"${v.extras ? `. Also include: ${v.extras}` : ""}.\n\nProvide: 1) Subject line (A/B test: give 2 options), 2) Preview text, 3) Engaging opening paragraph (personal, not "welcome to issue #X"), 4) Main article (400-500 words), 5) Extra sections if requested, 6) Friendly sign-off. Write as if talking to one person, not broadcasting to ${v.subscriberCount || "many"} people.`,
      },
      {
        id: "collab-pitch",
        name: "Creator Collaboration Pitch",
        description: "Pitch collaborations to other creators professionally",
        icon: "🤝",
        fields: [
          { id: "yourChannel", label: "Your Channel / Platform & Niche", type: "text", placeholder: "e.g. YouTube cooking channel, 45K subscribers", required: true },
          { id: "theirChannel", label: "Their Channel / Platform", type: "text", placeholder: "e.g. Instagram food blogger, 120K followers", required: true },
          { id: "colabIdea", label: "Collaboration Idea", type: "text", placeholder: "e.g. Recipe swap video, joint live stream, guest post", required: true },
          { id: "benefit", label: "What They Gain", type: "text", placeholder: "e.g. Access to my audience, co-produced content, cross-promotion" },
        ],
        promptTemplate: (v) =>
          `Write a creator collaboration pitch email. From: ${v.yourChannel}. To: ${v.theirChannel}. Idea: ${v.colabIdea}${v.benefit ? `. What they gain: ${v.benefit}` : ""}.\n\nMake it: genuine (not template-sounding), brief (under 150 words), specific about why they're a great fit, clear about the collaboration mechanics, and easy to say yes to. Include subject line. No desperate energy — peer-to-peer tone.`,
      },
      {
        id: "content-calendar",
        name: "Content Calendar Builder",
        description: "Plan a month of content across all your platforms",
        icon: "📆",
        fields: [
          { id: "platforms", label: "Your Platforms", type: "text", placeholder: "e.g. Instagram, YouTube, TikTok, blog", required: true },
          { id: "niche", label: "Content Niche", type: "text", placeholder: "e.g. Personal finance, fitness, travel", required: true },
          { id: "postsPerWeek", label: "Posts Per Week (per platform)", type: "select", options: ["1-2 posts", "3-4 posts", "5-7 posts (daily)", "Multiple per day"] },
          { id: "month", label: "Month / Period", type: "text", placeholder: "e.g. July 2025, next 4 weeks" },
          { id: "themes", label: "Key Themes or Events", type: "text", placeholder: "e.g. Summer theme, product launch on July 15, back to school" },
        ],
        promptTemplate: (v) =>
          `Build a ${v.month || "monthly"} content calendar for a ${v.niche} creator on: ${v.platforms}. Frequency: ${v.postsPerWeek || "3-4 posts"} per platform per week${v.themes ? `. Key themes/events: ${v.themes}` : ""}.\n\nFor each week provide: content theme, specific post ideas per platform (with format: video/reel/static/blog), posting schedule, and content pillars used (educational/entertaining/promotional/personal). Include 5 evergreen post ideas as a bonus.`,
      },
      {
        id: "monetization-strategy",
        name: "Monetization Strategy Advisor",
        description: "Find the best ways to make money from your content",
        icon: "💰",
        fields: [
          { id: "platform", label: "Your Main Platform", type: "select", options: ["YouTube", "Instagram", "TikTok", "Blog / Website", "Podcast", "Newsletter", "Multiple platforms"] },
          { id: "niche", label: "Content Niche", type: "text", placeholder: "e.g. Finance, fitness, cooking, gaming", required: true },
          { id: "audienceSize", label: "Audience Size", type: "select", options: ["0-1K", "1K-10K", "10K-50K", "50K-500K", "500K+"] },
          { id: "timeAvailable", label: "Time Per Week for Content", type: "select", options: ["Under 5 hours", "5-10 hours", "10-20 hours", "20+ hours (full-time)"] },
          { id: "goal", label: "Income Goal", type: "select", options: ["Side income ($500-$1K/mo)", "Part-time ($1K-$3K/mo)", "Full-time ($3K-$10K/mo)", "Scale ($10K+/mo)"] },
        ],
        promptTemplate: (v) =>
          `Create a monetization strategy for a ${v.niche} creator on ${v.platform || "multiple platforms"} with ${v.audienceSize || "10K-50K"} followers, ${v.timeAvailable || "10-20 hours/week"} available. Income goal: ${v.goal || "part-time income"}.\n\nProvide: 1) Top 3 monetization methods ranked for this niche & size, 2) Step-by-step how to start each one, 3) Realistic income timeline for each, 4) Which to start first and why, 5) Common mistakes to avoid. Be specific with numbers and platforms.`,
      },
    ],
  },

  // ─── 11. PERSONAL PRODUCTIVITY ──────────────────────────────────────────
  {
    id: "productivity",
    name: "Personal Productivity",
    tagline: "Organize your life, crush your goals, and save time daily",
    icon: "✅",
    color: "teal",
    gradient: "from-teal-500 to-cyan-600",
    borderColor: "border-teal-500",
    textColor: "text-teal-700",
    bgLight: "bg-teal-100",
    tools: [
      {
        id: "daily-planner",
        name: "AI Daily Planner",
        description: "Turn your task list into a prioritized daily schedule",
        icon: "📅",
        fields: [
          { id: "tasks", label: "Your Tasks for Today", type: "textarea", placeholder: "e.g.\nFinish project report\nCall dentist\nGym\nGrocery shopping\nReview emails\nPrepare presentation", required: true },
          { id: "workHours", label: "Available Hours", type: "text", placeholder: "e.g. 9am to 6pm, with 1hr lunch" },
          { id: "priority", label: "Most Important Task", type: "text", placeholder: "e.g. Finish project report (deadline today)" },
          { id: "energy", label: "Energy Level Today", type: "select", options: ["High energy", "Average", "Low energy / tired"] },
        ],
        promptTemplate: (v) =>
          `Create an optimized daily schedule from these tasks:\n${v.tasks}\n\nWorking hours: ${v.workHours || "9am-6pm"}. Most important task: ${v.priority || "Not specified"}. Energy level: ${v.energy || "Average"}.\n\nCreate a time-blocked schedule using: 1) MIT (most important task) first principle, 2) Energy management (hard tasks when energy is high), 3) Pomodoro-friendly blocks (25-50 min work + breaks), 4) Realistic buffer time between tasks, 5) Include short breaks. Output as a clean time-table.`,
      },
      {
        id: "email-drafter",
        name: "Professional Email Drafter",
        description: "Write any email perfectly in seconds",
        icon: "📨",
        fields: [
          { id: "emailType", label: "Type of Email", type: "select", options: ["Request / Ask for something", "Follow-up", "Apology", "Introduction", "Declining / Saying no", "Complaint", "Thank you", "Cold outreach"], required: true },
          { id: "recipient", label: "Who It's To", type: "text", placeholder: "e.g. My boss, a client, a professor, a stranger", required: true },
          { id: "situation", label: "What You Want to Say", type: "textarea", placeholder: "Describe in your own words what the email is about and what outcome you want...", required: true },
          { id: "tone", label: "Tone", type: "select", options: ["Formal / Professional", "Friendly but professional", "Casual", "Urgent", "Apologetic"] },
        ],
        promptTemplate: (v) =>
          `Write a ${v.tone || "professional"} ${v.emailType} email to ${v.recipient}.\n\nContext: ${v.situation}\n\nInclude: Subject line, greeting, clear concise body (max 3 short paragraphs), specific ask or next step, professional sign-off. Avoid filler phrases. Make it direct, respectful, and easy to respond to.`,
      },
      {
        id: "decision-maker",
        name: "Decision Making Framework",
        description: "Get a structured analysis to make better decisions",
        icon: "🎯",
        fields: [
          { id: "decision", label: "What Decision Are You Facing?", type: "text", placeholder: "e.g. Should I quit my job and start a business?", required: true },
          { id: "options", label: "Your Options", type: "textarea", placeholder: "Option A: Stay at current job\nOption B: Go full-time freelance\nOption C: Start a business part-time first", required: true },
          { id: "factors", label: "What Matters Most to You?", type: "text", placeholder: "e.g. Financial stability, freedom, family, growth potential" },
          { id: "timeframe", label: "Decision Timeframe", type: "text", placeholder: "e.g. Must decide by end of month" },
        ],
        promptTemplate: (v) =>
          `Help me make this decision: "${v.decision}"${v.timeframe ? ` (by: ${v.timeframe})` : ""}.\n\nMy options:\n${v.options}\n\nWhat matters to me: ${v.factors || "not specified"}\n\nProvide a structured analysis: 1) Pros & cons table for each option, 2) Risk assessment (high/med/low) for each, 3) Short-term vs long-term impact, 4) What questions I should ask myself, 5) A recommended choice with reasoning. Be direct and honest.`,
      },
      {
        id: "travel-itinerary",
        name: "Travel Itinerary Planner",
        description: "Get a day-by-day travel plan for any destination",
        icon: "✈️",
        fields: [
          { id: "destination", label: "Destination", type: "text", placeholder: "e.g. Tokyo, Japan", required: true },
          { id: "days", label: "Number of Days", type: "number", placeholder: "7", required: true },
          { id: "travelers", label: "Traveling With", type: "select", options: ["Solo", "Couple", "Family with kids", "Group of friends", "Business travel"] },
          { id: "budget", label: "Budget Level", type: "select", options: ["Budget / Backpacker", "Mid-range", "Luxury", "Mixed"] },
          { id: "interests", label: "Interests & Preferences", type: "text", placeholder: "e.g. food, history, nature, nightlife, art, adventure sports" },
        ],
        promptTemplate: (v) =>
          `Create a detailed ${v.days}-day travel itinerary for ${v.destination}. Traveling: ${v.travelers || "solo"}. Budget: ${v.budget || "mid-range"}${v.interests ? `. Interests: ${v.interests}` : ""}.\n\nFor each day include: Morning, Afternoon, and Evening activities with specific place names, estimated travel time between locations, meal recommendations (breakfast/lunch/dinner spots), estimated daily budget, and one insider tip. End with a packing list and best time to visit note.`,
      },
      {
        id: "goal-planner",
        name: "SMART Goal Action Planner",
        description: "Break down any goal into clear, actionable steps",
        icon: "🏆",
        fields: [
          { id: "goal", label: "Your Goal", type: "text", placeholder: "e.g. Learn Spanish, lose 20 pounds, write a book, save $10,000", required: true },
          { id: "deadline", label: "Target Deadline", type: "text", placeholder: "e.g. 6 months, by December 2025" },
          { id: "currentStatus", label: "Where You Are Now", type: "text", placeholder: "e.g. Complete beginner, I have $2000 saved already" },
          { id: "obstacles", label: "Biggest Obstacles", type: "text", placeholder: "e.g. No time, lack of motivation, money" },
        ],
        promptTemplate: (v) =>
          `Create a detailed action plan for this goal: "${v.goal}"${v.deadline ? ` by ${v.deadline}` : ""}. Current status: ${v.currentStatus || "just starting"}${v.obstacles ? `. Anticipated obstacles: ${v.obstacles}` : ""}.\n\nProvide: 1) SMART goal rewrite, 2) Monthly milestones breakdown, 3) Weekly actions for the first month (specific and small), 4) Daily habit to build, 5) How to track progress, 6) Strategy for each obstacle mentioned, 7) Motivational "why" reminder template.`,
      },
      {
        id: "weekly-review",
        name: "Weekly Review Template",
        description: "Reflect on your week and plan the next one powerfully",
        icon: "🔄",
        fields: [
          { id: "wins", label: "This Week's Wins", type: "textarea", placeholder: "e.g. Finished the project report, went to gym 3 times, had a great client call" },
          { id: "challenges", label: "Challenges or Setbacks", type: "textarea", placeholder: "e.g. Missed my reading goal, procrastinated on emails, felt overwhelmed on Thursday" },
          { id: "nextWeekGoals", label: "Next Week's Main Goals", type: "textarea", placeholder: "e.g. Finish proposal, exercise 4x, call mom, prepare for presentation", required: true },
          { id: "oneWord", label: "One Word That Describes This Week", type: "text", placeholder: "e.g. Productive, Chaotic, Growing, Tired" },
        ],
        promptTemplate: (v) =>
          `Help me complete a weekly review and plan. This week in one word: ${v.oneWord || "mixed"}${v.wins ? `\nWins: ${v.wins}` : ""}${v.challenges ? `\nChallenges: ${v.challenges}` : ""}. Next week goals: ${v.nextWeekGoals}.\n\nProvide: 1) Reflection on patterns (what went well and why), 2) Lessons learned from challenges, 3) Next week's prioritized top 3 tasks, 4) One thing to do differently next week, 5) A 3-day action plan for Monday-Wednesday to start strong.`,
      },
      {
        id: "habit-tracker-setup",
        name: "Habit Tracker & Streak Planner",
        description: "Design a habit system that actually sticks",
        icon: "🔥",
        fields: [
          { id: "habitsToAdd", label: "Habits You Want to Build", type: "textarea", placeholder: "e.g. Exercise daily, drink 8 glasses of water, read 20 pages, meditate, no social media before 9am", required: true },
          { id: "habitsToDrop", label: "Habits You Want to Break (optional)", type: "text", placeholder: "e.g. Late night snacking, doom scrolling, sleeping in" },
          { id: "lifestyleContext", label: "Your Daily Routine / Lifestyle", type: "text", placeholder: "e.g. 9-5 office job, 2 kids, evening person, work from home" },
          { id: "timeframe", label: "Goal Timeframe", type: "select", options: ["21 days", "30 days", "60 days", "90 days"] },
        ],
        promptTemplate: (v) =>
          `Design a ${v.timeframe || "30 day"} habit system for:\nHabits to build: ${v.habitsToAdd}${v.habitsToDrop ? `\nHabits to break: ${v.habitsToDrop}` : ""}\nLifestyle: ${v.lifestyleContext || "standard work schedule"}.\n\nProvide: 1) Habit stacking plan (attach new habits to existing routines), 2) Morning and evening routine template, 3) Strategies to break the bad habits, 4) How to handle a missed day without quitting, 5) Weekly milestone rewards to maintain motivation, 6) Simple daily tracker template (text-based).`,
      },
      {
        id: "morning-routine",
        name: "Morning Routine Designer",
        description: "Build an energizing morning routine around your real life",
        icon: "☀️",
        fields: [
          { id: "wakeTime", label: "Wake Up Time", type: "text", placeholder: "e.g. 6:30 AM", required: true },
          { id: "mustLeaveBy", label: "Must Leave / Start Work By", type: "text", placeholder: "e.g. 8:00 AM, 9:00 AM" },
          { id: "goals", label: "What You Want From Your Morning", type: "select", options: ["Energy & alertness", "Calm & mindfulness", "Productivity & focus", "Fitness & health", "Learning & growth", "Balanced mix of all"] },
          { id: "currentProblem", label: "Current Morning Problem", type: "text", placeholder: "e.g. Always rushing, check phone first thing, skip breakfast, feel groggy" },
          { id: "family", label: "Family / Home Constraints", type: "text", placeholder: "e.g. Kids to get ready, partner's schedule, dog to walk" },
        ],
        promptTemplate: (v) =>
          `Design a realistic morning routine. Wake: ${v.wakeTime}. Must start work/leave by: ${v.mustLeaveBy || "9am"}. Goal: ${v.goals || "balanced mix"}. Current problem: ${v.currentProblem || "not specified"}${v.family ? `. Constraints: ${v.family}` : ""}.\n\nCreate: 1) Minute-by-minute schedule from wake-up to start of work, 2) Explanation of why each element is placed where it is, 3) The #1 rule to protect this routine, 4) A "minimum viable routine" for chaotic days (15 minutes), 5) What to prep the night before to make it effortless.`,
      },
      {
        id: "reading-list",
        name: "Personalized Reading List",
        description: "Get book recommendations matched to your goals and interests",
        icon: "📚",
        fields: [
          { id: "interests", label: "Topics You're Interested In", type: "text", placeholder: "e.g. Entrepreneurship, psychology, sci-fi, history, self-improvement", required: true },
          { id: "goal", label: "Reading Goal", type: "select", options: ["Personal growth", "Professional development", "Entertainment / fun", "Learn a specific skill", "Broaden worldview", "Mix of everything"] },
          { id: "booksPerMonth", label: "Books You Can Read Per Month", type: "select", options: ["1 book", "2-3 books", "4-5 books", "6+ books"] },
          { id: "recentlyEnjoyed", label: "Books You've Enjoyed Recently (optional)", type: "text", placeholder: "e.g. Atomic Habits, Sapiens, The Alchemist" },
        ],
        promptTemplate: (v) =>
          `Curate a personalized reading list for someone interested in: ${v.interests}. Goal: ${v.goal || "personal growth"}. Reading pace: ${v.booksPerMonth || "2-3 books"}/month${v.recentlyEnjoyed ? `. Enjoyed: ${v.recentlyEnjoyed}` : ""}.\n\nRecommend 12 books organized into a 3-month reading plan. For each book: title, author, 2-sentence why-you'll-love-it description, and one key takeaway. Mix difficulty levels. Group by month with a monthly theme. End with 3 bonus books for when they want something different.`,
      },
    ],
  },
];
