const AI_WEBSITES = [
  {
    "name": "ChatGPT",
    "category": "AI Chatbots",
    "description": "The world's leading general-purpose AI assistant by OpenAI.",
    "url": "https://chatgpt.com",
    "logo": "https://logo.clearbit.com/chatgpt.com",
    "pricing": "Freemium",
    "tags": [
      "LLM",
      "Chatbot",
      "OpenAI",
      "General"
    ],
    "popularity": 100,
    "addedDate": "2022-11-30",
    "features": [
      "Advanced conversational ability",
      "Custom GPTs creator",
      "DALL-E 3 image generation integrated",
      "Data analysis and coding environment"
    ],
    "bestFor": "Everyone seeking a versatile AI assistant"
  },
  {
    "name": "Gemini",
    "category": "AI Chatbots",
    "description": "Google's conversational AI integrated with Google apps.",
    "url": "https://gemini.google.com",
    "logo": "https://logo.clearbit.com/gemini.google.com",
    "pricing": "Freemium",
    "tags": [
      "Google",
      "LLM",
      "Chatbot",
      "Workspace"
    ],
    "popularity": 98,
    "addedDate": "2023-03-21",
    "features": [
      "Deep integration with Google Docs, Gmail, and Drive",
      "Real-time web access and search queries",
      "Multi-modal processing (images, code, voice)",
      "Gemini Advanced with Ultra models"
    ],
    "bestFor": "Google Workspace users and general assistance"
  },
  {
    "name": "Claude",
    "category": "AI Chatbots",
    "description": "Anthropic's state-of-the-art AI chatbot with reasoning.",
    "url": "https://claude.ai",
    "logo": "https://logo.clearbit.com/claude.ai",
    "pricing": "Freemium",
    "tags": [
      "Anthropic",
      "Reasoning",
      "LLM",
      "Coding"
    ],
    "popularity": 97,
    "addedDate": "2023-03-14",
    "features": [
      "Huge context window support",
      "Unmatched code writing and analysis",
      "Artifacts feature to run and view HTML/JS outputs",
      "High safety standards and ethical design"
    ],
    "bestFor": "Developers, writers, and technical professionals"
  },
  {
    "name": "Perplexity",
    "category": "AI Chatbots",
    "description": "An AI-powered search engine providing conversational answers.",
    "url": "https://www.perplexity.ai",
    "logo": "https://logo.clearbit.com/perplexity.ai",
    "pricing": "Freemium",
    "tags": [
      "Search",
      "Research",
      "Sources",
      "Citations"
    ],
    "popularity": 96,
    "addedDate": "2022-12-01",
    "features": [
      "In-line citations with direct source links",
      "Pro Search mode for interactive multi-step queries",
      "File uploads for document summary",
      "Collections to organize searches"
    ],
    "bestFor": "Researchers, students, and information seekers"
  },
  {
    "name": "Grok",
    "category": "AI Chatbots",
    "description": "X (Twitter)'s witty AI chatbot with real-time news access.",
    "url": "https://grok.x.ai",
    "logo": "https://logo.clearbit.com/x.ai",
    "pricing": "Paid",
    "tags": [
      "X",
      "Twitter",
      "Real-time",
      "Uncensored"
    ],
    "popularity": 90,
    "addedDate": "2023-11-04",
    "features": [
      "Real-time access to X posts and trending news",
      "Humorous and rebellious personality toggle",
      "Flux-powered image generation",
      "Deep search capabilities"
    ],
    "bestFor": "X Premium subscribers and news trackers"
  },
  {
    "name": "Microsoft Copilot",
    "category": "AI Chatbots",
    "description": "Microsoft's AI companion integrated into Windows and Office.",
    "url": "https://copilot.microsoft.com",
    "logo": "https://logo.clearbit.com/microsoft.com",
    "pricing": "Freemium",
    "tags": [
      "Microsoft",
      "Windows",
      "Office",
      "GPT-4"
    ],
    "popularity": 94,
    "addedDate": "2023-02-07",
    "features": [
      "Runs on OpenAI's GPT-4 and DALL-E 3",
      "Seamless integration into MS Office suite",
      "Image creator and voice inputs",
      "Enterprise-grade data protection"
    ],
    "bestFor": "Windows users and enterprise environments"
  },
  {
    "name": "Midjourney",
    "category": "Image Generation",
    "description": "Artistic AI image generator operated via Web and Discord.",
    "url": "https://www.midjourney.com",
    "logo": "https://logo.clearbit.com/midjourney.com",
    "pricing": "Paid",
    "tags": [
      "Art",
      "Images",
      "Discord",
      "Generative"
    ],
    "popularity": 97,
    "addedDate": "2022-07-12",
    "features": [
      "Photorealistic and highly stylized image creation",
      "Vary region and inpainting tools",
      "Pan and zoom image expansions",
      "Consistent character prompts support"
    ],
    "bestFor": "Digital artists, concept designers, and creative hobbyists"
  },
  {
    "name": "Leonardo AI",
    "category": "Image Generation",
    "description": "Feature-rich generative art platform with advanced fine-tuning.",
    "url": "https://leonardo.ai",
    "logo": "https://logo.clearbit.com/leonardo.ai",
    "pricing": "Freemium",
    "tags": [
      "Images",
      "Art",
      "Canvas",
      "3D Texture"
    ],
    "popularity": 92,
    "addedDate": "2023-01-15",
    "features": [
      "Dozens of custom models and styles",
      "Real-time canvas for sketching-to-art",
      "Motion generator for static images",
      "AI texture generator for 3D models"
    ],
    "bestFor": "Game developers, designers, and visual creators"
  },
  {
    "name": "DALL-E 3",
    "category": "Image Generation",
    "description": "OpenAI's precise text-to-image generator built into ChatGPT.",
    "url": "https://openai.com/dall-e-3",
    "logo": "https://logo.clearbit.com/openai.com",
    "pricing": "Freemium",
    "tags": [
      "OpenAI",
      "Images",
      "Generative Art",
      "ChatGPT"
    ],
    "popularity": 95,
    "addedDate": "2023-10-01",
    "features": [
      "Follows complex instructions exactly",
      "Draws text inside images accurately",
      "Seamless integration inside ChatGPT Pro",
      "High resolution square/wide layouts"
    ],
    "bestFor": "Creative designers seeking extreme prompt adherence"
  },
  {
    "name": "Stable Diffusion",
    "category": "Image Generation",
    "description": "Open-source state-of-the-art image model provider.",
    "url": "https://dreamstudio.ai",
    "logo": "https://logo.clearbit.com/dreamstudio.ai",
    "pricing": "Freemium",
    "tags": [
      "Open Source",
      "Stable Diffusion",
      "Generative Art",
      "Images"
    ],
    "popularity": 94,
    "addedDate": "2022-08-20",
    "features": [
      "Runs on-device or in cloud via DreamStudio",
      "Infinite customizations and checkpoints",
      "ControlNet for structure adjustments",
      "Extremely fast generation speeds"
    ],
    "bestFor": "Advanced artists and open-source fans"
  },
  {
    "name": "Adobe Firefly",
    "category": "Image Generation",
    "description": "Safe-for-commercial-use creative generative AI suite.",
    "url": "https://firefly.adobe.com",
    "logo": "https://logo.clearbit.com/adobe.com",
    "pricing": "Freemium",
    "tags": [
      "Adobe",
      "Photoshop",
      "Commercial Safe",
      "Generative Fill"
    ],
    "popularity": 93,
    "addedDate": "2023-03-21",
    "features": [
      "Generative Fill and Expand inside Photoshop",
      "Trained on licensed content and public domain",
      "Text effects creation using prompts",
      "Vector recoloring tool"
    ],
    "bestFor": "Corporate creative professionals and designers"
  },
  {
    "name": "Playground AI",
    "category": "Image Generation",
    "description": "Easy to use online image editor and generator canvas.",
    "url": "https://playground.com",
    "logo": "https://logo.clearbit.com/playground.com",
    "pricing": "Freemium",
    "tags": [
      "Canvas",
      "Editor",
      "Images",
      "Generative Art"
    ],
    "popularity": 90,
    "addedDate": "2022-09-01",
    "features": [
      "Real-time collaborative image canvas",
      "Inpainting and outpainting sliders",
      "Mixed image editing settings",
      "Hundreds of artistic preset filters"
    ],
    "bestFor": "Enthusiasts and designers seeking canvas editing"
  },
  {
    "name": "Craiyon",
    "category": "Image Generation",
    "description": "Free AI image generator formerly known as DALL-E Mini.",
    "url": "https://www.craiyon.com",
    "logo": "https://logo.clearbit.com/craiyon.com",
    "pricing": "Free",
    "tags": [
      "Free",
      "Images",
      "Art",
      "DALL-E Mini"
    ],
    "popularity": 85,
    "addedDate": "2022-06-01",
    "features": [
      "Completely free to use with unlimited prompts",
      "Generates 9 image variations per search",
      "Negative prompt keywords support",
      "T-shirt print shop integration"
    ],
    "bestFor": "Casual users making funny or conceptual images"
  },
  {
    "name": "Runway",
    "category": "Video Generation",
    "description": "Next-generation video creation suite with Gen-2 and Gen-3.",
    "url": "https://runwayml.com",
    "logo": "https://logo.clearbit.com/runwayml.com",
    "pricing": "Freemium",
    "tags": [
      "Video",
      "Gen-3",
      "Cinematic",
      "Effects"
    ],
    "popularity": 94,
    "addedDate": "2021-03-01",
    "features": [
      "High-fidelity text-to-video (Gen-3 Alpha)",
      "Image-to-video and video-to-video generation",
      "Motion brush for custom movement controls",
      "Green screen, inpainting, and color grading"
    ],
    "bestFor": "Filmmakers, VFX artists, and motion designers"
  },
  {
    "name": "HeyGen",
    "category": "Video Generation",
    "description": "AI video platform for creating professional avatar videos.",
    "url": "https://www.heygen.com",
    "logo": "https://logo.clearbit.com/heygen.com",
    "pricing": "Freemium",
    "tags": [
      "Avatars",
      "Video",
      "Spokesperson",
      "Marketing"
    ],
    "popularity": 93,
    "addedDate": "2022-07-25",
    "features": [
      "Realistic custom photo and video avatars",
      "Text-to-speech with natural lip sync",
      "Multi-language video translator",
      "Quick templates for marketing layouts"
    ],
    "bestFor": "Corporate trainers, salespeople, and advertisers"
  },
  {
    "name": "CapCut AI",
    "category": "Video Generation",
    "description": "Creative editing platform featuring AI video templates.",
    "url": "https://www.capcut.com",
    "logo": "https://logo.clearbit.com/capcut.com",
    "pricing": "Freemium",
    "tags": [
      "Video Editor",
      "Shorts",
      "Templates",
      "TikTok"
    ],
    "popularity": 95,
    "addedDate": "2022-10-01",
    "features": [
      "Auto-captioning in dozens of languages",
      "Smart background remover",
      "AI-powered text-to-video scripts",
      "AI body and facial enhancement tools"
    ],
    "bestFor": "Social media creators and mobile editors"
  },
  {
    "name": "Pika",
    "category": "Video Generation",
    "description": "AI video generator for converting text and images into animations.",
    "url": "https://pika.art",
    "logo": "https://logo.clearbit.com/pika.art",
    "pricing": "Freemium",
    "tags": [
      "Video",
      "Animations",
      "Text-to-Video",
      "Effects"
    ],
    "popularity": 89,
    "addedDate": "2023-11-28",
    "features": [
      "Cinematic text-to-video rendering",
      "Inpainting to modify specific video regions",
      "Video aspect ratio expansions",
      "Sound effects generation for clips"
    ],
    "bestFor": "Animators and creative storytellers"
  },
  {
    "name": "Luma Dream Machine",
    "category": "Video Generation",
    "description": "Create cinematic, realistic videos from text and images.",
    "url": "https://lumalabs.ai/dream-machine",
    "logo": "https://logo.clearbit.com/lumalabs.ai",
    "pricing": "Freemium",
    "tags": [
      "Video",
      "Luma",
      "Cinematic",
      "3D"
    ],
    "popularity": 91,
    "addedDate": "2024-06-12",
    "features": [
      "Creates fluid, physical animations",
      "Incredible camera movement simulations",
      "Excellent character consistency",
      "Fast processing speeds"
    ],
    "bestFor": "Visual creators, filmmakers, and gamers"
  },
  {
    "name": "Kling AI",
    "category": "Video Generation",
    "description": "Create high-fidelity videos with physics and movement.",
    "url": "https://klingai.com",
    "logo": "https://logo.clearbit.com/klingai.com",
    "pricing": "Freemium",
    "tags": [
      "Video",
      "Kuaishou",
      "Physics",
      "Realistic"
    ],
    "popularity": 90,
    "addedDate": "2024-06-05",
    "features": [
      "Generates videos up to 2 minutes long",
      "Accurate physical simulations (fluid, gravity)",
      "Camera motions like pan, zoom, orbit",
      "High-definition output files"
    ],
    "bestFor": "VFX developers and cinematic video artists"
  },
  {
    "name": "Synthesia",
    "category": "Video Generation",
    "description": "Transform text into corporate training videos using avatars.",
    "url": "https://www.synthesia.io",
    "logo": "https://logo.clearbit.com/synthesia.io",
    "pricing": "Paid",
    "tags": [
      "Corporate",
      "Avatars",
      "Training",
      "Multi-lingual"
    ],
    "popularity": 92,
    "addedDate": "2020-04-01",
    "features": [
      "150+ diverse digital avatars",
      "Generates video in 120+ languages",
      "Built-in video templates and slides editor",
      "Custom studio avatar creations"
    ],
    "bestFor": "L&D teams and corporate HR trainers"
  },
  {
    "name": "InVideo AI",
    "category": "Video Generation",
    "description": "Turn scripts and ideas into ready-to-publish videos instantly.",
    "url": "https://invideo.io",
    "logo": "https://logo.clearbit.com/invideo.io",
    "pricing": "Freemium",
    "tags": [
      "Video Creator",
      "Shorts",
      "YouTube",
      "Marketing"
    ],
    "popularity": 92,
    "addedDate": "2023-08-01",
    "features": [
      "Generates video clips, voiceovers, and subtitles",
      "Interactive chat box edits",
      "Millions of stock assets catalog",
      "Fast rendering speeds"
    ],
    "bestFor": "YouTube Automation channels and social creators"
  },
  {
    "name": "Pictory",
    "category": "Video Generation",
    "description": "Convert blog posts and text articles into highly engaging videos.",
    "url": "https://pictory.ai",
    "logo": "https://logo.clearbit.com/pictory.ai",
    "pricing": "Freemium",
    "tags": [
      "Video Creator",
      "Blogs",
      "Script-to-Video"
    ],
    "popularity": 91,
    "addedDate": "2020-06-01",
    "features": [
      "AI selects fitting stock videos automatically",
      "Creates video highlights summaries",
      "Extracts short clips for TikTok/Shorts",
      "Accurate auto captions generator"
    ],
    "bestFor": "Content marketers and bloggers looking to repurpose text"
  },
  {
    "name": "Kaiber",
    "category": "Video Generation",
    "description": "Generate trippy, stylized AI art animations and music videos.",
    "url": "https://kaiber.art",
    "logo": "https://logo.clearbit.com/kaiber.art",
    "pricing": "Freemium",
    "tags": [
      "Video Art",
      "Animations",
      "Music Videos",
      "Creative"
    ],
    "popularity": 90,
    "addedDate": "2022-12-01",
    "features": [
      "Audiosync makes video react to music beats",
      "Frame-by-frame stylized renderings",
      "Text-to-video and image transformations",
      "Custom aspect ratio layouts"
    ],
    "bestFor": "Musicians, VJs, and abstract digital artists"
  },
  {
    "name": "VEED.io AI",
    "category": "Video Generation",
    "description": "Create professional videos online with AI subtitles and voiceover.",
    "url": "https://www.veed.io",
    "logo": "https://logo.clearbit.com/veed.io",
    "pricing": "Freemium",
    "tags": [
      "Video Editor",
      "Subtitles",
      "Audio Cleaner"
    ],
    "popularity": 93,
    "addedDate": "2018-09-01",
    "features": [
      "Automated subtitle generation with 98% accuracy",
      "Eye Contact correction tool",
      "AI Clean Audio noise remover",
      "Text-to-speech voice generators"
    ],
    "bestFor": "Corporate content managers and social media editors"
  },
  {
    "name": "ElevenLabs",
    "category": "Audio",
    "description": "The gold standard for AI voice generation and cloning.",
    "url": "https://elevenlabs.io",
    "logo": "https://logo.clearbit.com/elevenlabs.io",
    "pricing": "Freemium",
    "tags": [
      "Voice Cloning",
      "Text-to-Speech",
      "Audio",
      "Dubbing"
    ],
    "popularity": 96,
    "addedDate": "2023-01-20",
    "features": [
      "Hyper-realistic text-to-speech voice generation",
      "Instant voice cloning with a 10-second clip",
      "Multi-lingual voice dubbing",
      "AI Sound Effects generator"
    ],
    "bestFor": "Video creators, podcasters, and audiobook narration"
  },
  {
    "name": "Suno",
    "category": "Music",
    "description": "Generate full, high-quality songs with lyrics from a text prompt.",
    "url": "https://suno.com",
    "logo": "https://logo.clearbit.com/suno.com",
    "pricing": "Freemium",
    "tags": [
      "Music",
      "Songs",
      "Lyrics",
      "Vocal Synthesis"
    ],
    "popularity": 95,
    "addedDate": "2023-12-01",
    "features": [
      "Create full 2-minute songs in any genre",
      "Generates both music and realistic vocals",
      "Upload custom lyrics or write with AI",
      "Extend songs into longer tracks"
    ],
    "bestFor": "Musicians, creators, and meme makers"
  },
  {
    "name": "Udio",
    "category": "Music",
    "description": "Create studio-quality music tracks from natural language prompts.",
    "url": "https://www.udio.com",
    "logo": "https://logo.clearbit.com/udio.com",
    "pricing": "Freemium",
    "tags": [
      "Music",
      "Vocals",
      "Audio",
      "Creative"
    ],
    "popularity": 92,
    "addedDate": "2024-04-10",
    "features": [
      "Unbelievable fidelity and vocal realism",
      "Allows inpainting sections of audio tracks",
      "Supports dozens of global music genres",
      "Remix and style-matching capabilities"
    ],
    "bestFor": "Songwriters, producers, and music enthusiasts"
  },
  {
    "name": "Murf AI",
    "category": "Audio",
    "description": "Versatile voice generator for podcasters and educators.",
    "url": "https://murf.ai",
    "logo": "https://logo.clearbit.com/murf.ai",
    "pricing": "Freemium",
    "tags": [
      "Audio",
      "Voiceover",
      "Studio",
      "TTS"
    ],
    "popularity": 91,
    "addedDate": "2020-10-01",
    "features": [
      "120+ natural sounding voices",
      "Voice editing timing sliders",
      "Sync music with voiceovers easily",
      "API integration support"
    ],
    "bestFor": "E-learning developers and presentation voiceovers"
  },
  {
    "name": "Speechify",
    "category": "Audio",
    "description": "Read text aloud with natural celebrity voices.",
    "url": "https://speechify.com",
    "logo": "https://logo.clearbit.com/speechify.com",
    "pricing": "Freemium",
    "tags": [
      "TTS",
      "Celebrity Voices",
      "Reading",
      "Accessibility"
    ],
    "popularity": 94,
    "addedDate": "2016-10-01",
    "features": [
      "Famous narrators (Snoop Dogg, Gwyneth Paltrow)",
      "Read PDFs, online pages, and scans",
      "Up to 4.5x reading speed control",
      "Cross-platform note sync"
    ],
    "bestFor": "Dyslexic readers and productivity auditory learners"
  },
  {
    "name": "Voicemod",
    "category": "Audio",
    "description": "Real-time AI voice changer for gaming and chats.",
    "url": "https://www.voicemod.net",
    "logo": "https://logo.clearbit.com/voicemod.net",
    "pricing": "Freemium",
    "tags": [
      "Voice Changer",
      "Gaming",
      "Streaming",
      "Real-time"
    ],
    "popularity": 93,
    "addedDate": "2018-01-01",
    "features": [
      "Real-time voice modulation during streams",
      "Custom soundboard creator",
      "Integrates with Discord, Twitch, Steam",
      "AI voices that sing and pitch-correct"
    ],
    "bestFor": "Streamers, gamers, and content creators"
  },
  {
    "name": "Resemble AI",
    "category": "Audio",
    "description": "Generates natural voice clones for gaming and localized videos.",
    "url": "https://www.resemble.ai",
    "logo": "https://logo.clearbit.com/resemble.ai",
    "pricing": "Freemium",
    "tags": [
      "Audio",
      "Voice Clone",
      "Gaming"
    ],
    "popularity": 89,
    "addedDate": "2019-10-01",
    "features": [
      "Sub-second voice generation latency",
      "Voice cloning with neural net adjustments",
      "Localize voice files with native accent clones",
      "Deepfake audio checker"
    ],
    "bestFor": "Game developers and audio localizers"
  },
  {
    "name": "Lovo.ai",
    "category": "Audio",
    "description": "Hyper-realistic voice generator and text-to-speech platform.",
    "url": "https://lovo.ai",
    "logo": "https://logo.clearbit.com/lovo.ai",
    "pricing": "Freemium",
    "tags": [
      "Audio",
      "TTS",
      "Voiceover",
      "Genny"
    ],
    "popularity": 90,
    "addedDate": "2020-01-01",
    "features": [
      "Genny editor combining scripts and voiceovers",
      "500+ character voices library",
      "Emotions tuning features (angry, happy, sad)",
      "Voice cloner tools"
    ],
    "bestFor": "Social media content creators and training video makers"
  },
  {
    "name": "GitHub Copilot",
    "category": "Coding",
    "description": "The AI programmer's assistant that autocompletes your code.",
    "url": "https://github.com/features/copilot",
    "logo": "https://logo.clearbit.com/github.com",
    "pricing": "Paid",
    "tags": [
      "Coding",
      "Autofill",
      "GitHub",
      "Microsoft"
    ],
    "popularity": 96,
    "addedDate": "2021-06-29",
    "features": [
      "Inline code completions and recommendations",
      "Interactive chat panel inside IDEs",
      "Test cases generation and debugging support",
      "Support for all major IDEs"
    ],
    "bestFor": "Professional programmers and engineering teams"
  },
  {
    "name": "Cursor",
    "category": "Coding",
    "description": "An AI-first code editor built around VS Code APIs.",
    "url": "https://www.cursor.com",
    "logo": "https://logo.clearbit.com/cursor.com",
    "pricing": "Freemium",
    "tags": [
      "Editor",
      "VSCode",
      "Coding",
      "Autocomplete"
    ],
    "popularity": 95,
    "addedDate": "2023-03-01",
    "features": [
      "Cmd+K inline code editing and generation",
      "Multi-file context editing with Copilot ++",
      "Index codebases to ask architectural questions",
      "One-click migrations from VS Code"
    ],
    "bestFor": "Modern developers seeking a powerful AI IDE"
  },
  {
    "name": "Tabnine",
    "category": "Coding",
    "description": "Secure AI coding assistant for enterprises and developers.",
    "url": "https://www.tabnine.com",
    "logo": "https://logo.clearbit.com/tabnine.com",
    "pricing": "Freemium",
    "tags": [
      "Coding",
      "Enterprise",
      "Secure",
      "Autocomplete"
    ],
    "popularity": 90,
    "addedDate": "2018-04-01",
    "features": [
      "Highly secure self-hosted model support",
      "Local-only privacy settings",
      "Learns from company guidelines",
      "Supports 30+ programming languages"
    ],
    "bestFor": "Enterprise developers requiring strict data privacy"
  },
  {
    "name": "Codeium",
    "category": "Coding",
    "description": "Free, lightning-fast AI autocomplete for developers.",
    "url": "https://codeium.com",
    "logo": "https://logo.clearbit.com/codeium.com",
    "pricing": "Freemium",
    "tags": [
      "Coding",
      "Autocomplete",
      "Free",
      "IDE Extension"
    ],
    "popularity": 92,
    "addedDate": "2022-10-01",
    "features": [
      "Completely free for individual developers",
      "Inline suggestions and full-featured chat",
      "Context aware search and indexing",
      "Supports over 70 programming languages"
    ],
    "bestFor": "Individual developers looking for a free Copilot alternative"
  },
  {
    "name": "Replit Agent",
    "category": "Coding",
    "description": "Autonomous AI agent that builds entire web applications.",
    "url": "https://replit.com",
    "logo": "https://logo.clearbit.com/replit.com",
    "pricing": "Paid",
    "tags": [
      "Agent",
      "Replit",
      "Sandbox",
      "Fullstack"
    ],
    "popularity": 93,
    "addedDate": "2024-09-01",
    "features": [
      "Builds backend and frontend databases",
      "Deploys automatically to cloud URL",
      "Interactively debugs console errors",
      "Supports direct code editing in sandbox"
    ],
    "bestFor": "Entrepreneurs, rapid prototype builders"
  },
  {
    "name": "Warp AI",
    "category": "Coding",
    "description": "Modern terminal emulator with AI search and assistant built-in.",
    "url": "https://www.warp.dev",
    "logo": "https://logo.clearbit.com/warp.dev",
    "pricing": "Freemium",
    "tags": [
      "Terminal",
      "CLI",
      "Shell",
      "Linux"
    ],
    "popularity": 91,
    "addedDate": "2021-11-01",
    "features": [
      "Convert natural language to shell commands",
      "AI explanation of error messages",
      "Shared team command workflows",
      "Modern UI with blocks selection"
    ],
    "bestFor": "Developers who work frequently in the terminal"
  },
  {
    "name": "Blackbox AI",
    "category": "Coding",
    "description": "AI coding assistant built for fast file indexing and search.",
    "url": "https://www.blackbox.ai",
    "logo": "https://logo.clearbit.com/blackbox.ai",
    "pricing": "Freemium",
    "tags": [
      "Coding",
      "Search",
      "Index",
      "Developer"
    ],
    "popularity": 89,
    "addedDate": "2021-12-01",
    "features": [
      "Extremely fast file searches",
      "Autocomplete in over 20 IDEs",
      "Visual content extraction from screenshots",
      "Code explanation and debugging"
    ],
    "bestFor": "Web developers seeking fast code references"
  },
  {
    "name": "Sourcegraph Cody",
    "category": "Coding",
    "description": "AI code assistant for reading, writing, and understanding entire repositories.",
    "url": "https://sourcegraph.com/cody",
    "logo": "https://logo.clearbit.com/sourcegraph.com",
    "pricing": "Freemium",
    "tags": [
      "Coding",
      "Search",
      "Repository",
      "Open Source"
    ],
    "popularity": 88,
    "addedDate": "2023-05-10",
    "features": [
      "Full repository context search",
      "Explain code blocks inside complex codebases",
      "Generate unit tests in multiple frameworks",
      "Inline refactoring scripts"
    ],
    "bestFor": "Developers handling legacy codebase refactors"
  },
  {
    "name": "Amazon Q",
    "category": "Coding",
    "description": "Amazon's generative AI assistant designed for software development and AWS.",
    "url": "https://aws.amazon.com/q/",
    "logo": "https://logo.clearbit.com/aws.amazon.com",
    "pricing": "Freemium",
    "tags": [
      "AWS",
      "Cloud",
      "Developer Tools",
      "Coding"
    ],
    "popularity": 89,
    "addedDate": "2023-11-27",
    "features": [
      "Deep expertise in AWS cloud services configuration",
      "Automated code migrations (e.g. Java updates)",
      "Troubleshooting AWS infrastructure parameters",
      "Secure corporate network scanning"
    ],
    "bestFor": "AWS cloud developers and DevOps teams"
  },
  {
    "name": "Notion AI",
    "category": "Productivity",
    "description": "AI assistant embedded within your Notion workspace.",
    "url": "https://www.notion.so",
    "logo": "https://logo.clearbit.com/notion.so",
    "pricing": "Paid",
    "tags": [
      "Notion",
      "Notes",
      "Wiki",
      "Workspace"
    ],
    "popularity": 94,
    "addedDate": "2023-02-22",
    "features": [
      "Summarize notes and documents instantly",
      "Ask questions about your entire Notion database",
      "Generate brainstorms and initial drafts",
      "Improve tone, fix spelling, and translate"
    ],
    "bestFor": "Notion power users, project managers, and writers"
  },
  {
    "name": "Otter.ai",
    "category": "Productivity",
    "description": "AI meeting assistant for real-time transcription and summaries.",
    "url": "https://otter.ai",
    "logo": "https://logo.clearbit.com/otter.ai",
    "pricing": "Freemium",
    "tags": [
      "Transcription",
      "Meetings",
      "Audio",
      "Zoom"
    ],
    "popularity": 91,
    "addedDate": "2018-03-01",
    "features": [
      "Real-time transcription of Zoom/Teams/Meet",
      "AI chat to ask questions about the meeting",
      "Automated slide capture in transcripts",
      "Action items and summaries creation"
    ],
    "bestFor": "Business professionals, students, and journalists"
  },
  {
    "name": "Fireflies.ai",
    "category": "Productivity",
    "description": "Automate meeting notes, search, and voice analytics.",
    "url": "https://fireflies.ai",
    "logo": "https://logo.clearbit.com/fireflies.ai",
    "pricing": "Freemium",
    "tags": [
      "Meetings",
      "Transcription",
      "Analytics",
      "CRM"
    ],
    "popularity": 90,
    "addedDate": "2020-01-01",
    "features": [
      "Automatically joins and records video calls",
      "Detailed search across transcripts",
      "Topic tracking and sentiment analysis",
      "Syncs notes directly to HubSpot, Salesforce, etc."
    ],
    "bestFor": "Sales teams, agencies, and recruiting departments"
  },
  {
    "name": "Mem.ai",
    "category": "Productivity",
    "description": "Self-organizing workspace that connects your notes automatically.",
    "url": "https://mem.ai",
    "logo": "https://logo.clearbit.com/mem.ai",
    "pricing": "Freemium",
    "tags": [
      "Notes",
      "Second Brain",
      "Knowledge Base"
    ],
    "popularity": 89,
    "addedDate": "2021-02-01",
    "features": [
      "AI links related notes automatically",
      "Semantic search across your database",
      "Mem It browser extension to save web pages",
      "Daily notes flow setups"
    ],
    "bestFor": "Knowledge workers maintaining a Second Brain"
  },
  {
    "name": "Taskade",
    "category": "Productivity",
    "description": "AI-powered workspace for team workflows and task lists.",
    "url": "https://www.taskade.com",
    "logo": "https://logo.clearbit.com/taskade.com",
    "pricing": "Freemium",
    "tags": [
      "Tasks",
      "Workspaces",
      "Mindmaps",
      "Team Chat"
    ],
    "popularity": 91,
    "addedDate": "2020-03-01",
    "features": [
      "AI agent bots to perform routine checklist items",
      "Live collaborative editing views",
      "Instantly convert text to mindmaps",
      "Auto-generated subtasks"
    ],
    "bestFor": "Remote teams and agile project coordinators"
  },
  {
    "name": "Heptabase",
    "category": "Productivity",
    "description": "Visual learning notes tool built around visual whiteboard maps.",
    "url": "https://heptabase.com",
    "logo": "https://logo.clearbit.com/heptabase.com",
    "pricing": "Paid",
    "tags": [
      "Whiteboard",
      "Mindmaps",
      "Notes",
      "Learning"
    ],
    "popularity": 92,
    "addedDate": "2022-01-15",
    "features": [
      "Visual mindmap board workspaces",
      "Bidirectional notes links support",
      "PDF annotation overlay tools",
      "Offline desktop application support"
    ],
    "bestFor": "Complex subject researchers and visual learners"
  },
  {
    "name": "Read AI",
    "category": "Productivity",
    "description": "Get meeting summaries, email briefs, and messaging highlights.",
    "url": "https://www.read.ai",
    "logo": "https://logo.clearbit.com/read.ai",
    "pricing": "Freemium",
    "tags": [
      "Meetings",
      "Summaries",
      "Email",
      "Slack"
    ],
    "popularity": 91,
    "addedDate": "2021-06-01",
    "features": [
      "Schedules and records video call metrics",
      "Creates short video highlight reels",
      "Weekly communication skill coaching reports",
      "Email inbox digests"
    ],
    "bestFor": "Hybrid business workers attending many meetings"
  },
  {
    "name": "Fathom",
    "category": "Productivity",
    "description": "Free meeting recorder that generates notes and syncs with CRMs.",
    "url": "https://fathom.video",
    "logo": "https://logo.clearbit.com/fathom.video",
    "pricing": "Free",
    "tags": [
      "Meetings",
      "Transcription",
      "CRM Sync",
      "Free"
    ],
    "popularity": 91,
    "addedDate": "2021-04-01",
    "features": [
      "100% free transcription for individuals",
      "Auto-summaries that capture action items",
      "Highlights reel clipper tool",
      "Direct CRM sync with Salesforce/Hubspot"
    ],
    "bestFor": "Account managers and independent consultants"
  },
  {
    "name": "ClickUp AI",
    "category": "Productivity",
    "description": "AI project manager assistant embedded inside ClickUp.",
    "url": "https://clickup.com",
    "logo": "https://logo.clearbit.com/clickup.com",
    "pricing": "Paid",
    "tags": [
      "Projects",
      "Management",
      "Tasks",
      "Corporate"
    ],
    "popularity": 92,
    "addedDate": "2023-04-15",
    "features": [
      "Summarize tasks and project boards instantly",
      "Write project subtasks and outlines automatically",
      "Custom prompts library access",
      "Detailed progress summaries creation"
    ],
    "bestFor": "Agile project teams and operations leaders"
  },
  {
    "name": "Grammarly",
    "category": "Writing",
    "description": "Writing assistant offering AI grammar and tone corrections.",
    "url": "https://www.grammarly.com",
    "logo": "https://logo.clearbit.com/grammarly.com",
    "pricing": "Freemium",
    "tags": [
      "Writing",
      "Grammar",
      "Editing",
      "Plagiarism"
    ],
    "popularity": 97,
    "addedDate": "2009-07-01",
    "features": [
      "Real-time spelling and grammar reviews",
      "Tone detector and style rewrites",
      "AI draft generators and outline tools",
      "Plagiarism checking integration"
    ],
    "bestFor": "Writers, students, and professionals sending emails"
  },
  {
    "name": "QuillBot",
    "category": "Writing",
    "description": "AI-powered paraphrasing tool and summary generator.",
    "url": "https://quillbot.com",
    "logo": "https://logo.clearbit.com/quillbot.com",
    "pricing": "Freemium",
    "tags": [
      "Paraphraser",
      "Summary",
      "Grammar",
      "Rewriter"
    ],
    "popularity": 96,
    "addedDate": "2017-01-01",
    "features": [
      "Dozens of paraphrasing modes (Creative, Simple, Formal)",
      "Excellent summary tool for articles",
      "Citations generator for research",
      "Co-writer panel combining all tools"
    ],
    "bestFor": "Students, bloggers, and academics rewriting drafts"
  },
  {
    "name": "Jasper",
    "category": "Writing",
    "description": "AI content marketer for blogs, social copy, and campaigns.",
    "url": "https://www.jasper.ai",
    "logo": "https://logo.clearbit.com/jasper.ai",
    "pricing": "Paid",
    "tags": [
      "Marketing",
      "Writing",
      "Copywriting",
      "SEO"
    ],
    "popularity": 91,
    "addedDate": "2021-01-15",
    "features": [
      "Brand voice learning from corporate assets",
      "Dozens of writing templates",
      "Marketing campaign builder",
      "SEO optimizer integration"
    ],
    "bestFor": "Marketing teams and agency copywriters"
  },
  {
    "name": "Copy.ai",
    "category": "Writing",
    "description": "AI-powered GTM automation and copywriting platform.",
    "url": "https://www.copy.ai",
    "logo": "https://logo.clearbit.com/copy.ai",
    "pricing": "Freemium",
    "tags": [
      "Automation",
      "Marketing",
      "Sales",
      "Writing"
    ],
    "popularity": 89,
    "addedDate": "2020-10-01",
    "features": [
      "AI marketing workflows builder",
      "Instant landing page copy generation",
      "Product description writer",
      "Translation and multi-locale features"
    ],
    "bestFor": "Sales operations and marketing automation specialists"
  },
  {
    "name": "Writesonic",
    "category": "Writing",
    "description": "AI writing tool specializing in SEO-optimized articles.",
    "url": "https://writesonic.com",
    "logo": "https://logo.clearbit.com/writesonic.com",
    "pricing": "Freemium",
    "tags": [
      "SEO",
      "Articles",
      "Writing",
      "Chatsonic"
    ],
    "popularity": 90,
    "addedDate": "2020-10-22",
    "features": [
      "AI Article Writer 6.0 for longform posts",
      "Chatsonic conversational assistant",
      "SEO optimization analysis builtin",
      "Audiosonic text-to-voice generator"
    ],
    "bestFor": "Content writers, marketers, and SEO specialists"
  },
  {
    "name": "Textio",
    "category": "Writing",
    "description": "AI writing software built to eliminate bias in job postings.",
    "url": "https://textio.com",
    "logo": "https://logo.clearbit.com/textio.com",
    "pricing": "Paid",
    "tags": [
      "HR",
      "Recruiting",
      "Bias Detection",
      "Business"
    ],
    "popularity": 88,
    "addedDate": "2014-10-01",
    "features": [
      "Detects gender and ethnic bias inside text",
      "Live recruitment performance predictions",
      "Suggests inclusive terminology alternatives",
      "Enterprise analytics reports"
    ],
    "bestFor": "HR departments and recruiters in Fortune 500s"
  },
  {
    "name": "Rytr",
    "category": "Writing",
    "description": "Budget-friendly AI writing assistant that saves time.",
    "url": "https://rytr.me",
    "logo": "https://logo.clearbit.com/rytr.me",
    "pricing": "Freemium",
    "tags": [
      "Content Creator",
      "Copywriting",
      "Low Cost"
    ],
    "popularity": 87,
    "addedDate": "2021-04-01",
    "features": [
      "40+ templates and use cases",
      "30+ language support",
      "20+ writing tones selectors",
      "Plagiarism checker builtin"
    ],
    "bestFor": "Freelancers and bloggers needing quick drafts"
  },
  {
    "name": "Wordtune",
    "category": "Writing",
    "description": "AI writing companion that helps rephrase and refine your thoughts.",
    "url": "https://www.wordtune.com",
    "logo": "https://logo.clearbit.com/wordtune.com",
    "pricing": "Freemium",
    "tags": [
      "Editor",
      "Rewriting",
      "Writing Extension"
    ],
    "popularity": 91,
    "addedDate": "2020-10-01",
    "features": [
      "Interactive rephrasing inside browser",
      "Formal/Casual tone switch settings",
      "Expand/Shorten text length features",
      "Smart integrations with Slack/Gmail"
    ],
    "bestFor": "Non-native speakers and casual writers"
  },
  {
    "name": "NotebookLM",
    "category": "Research",
    "description": "Google's personalized AI collaborator for note-taking.",
    "url": "https://notebooklm.google",
    "logo": "https://logo.clearbit.com/google.com",
    "pricing": "Free",
    "tags": [
      "Notes",
      "Research",
      "Audio Overview",
      "Google"
    ],
    "popularity": 93,
    "addedDate": "2023-07-12",
    "features": [
      "Generates highly realistic Audio Overviews (podcasts)",
      "Allows uploading PDFs, YouTube videos, and docs",
      "Creates study guides, FAQs, and timelines",
      "Strictly uses uploaded source data for responses"
    ],
    "bestFor": "Students, researchers, and content creators"
  },
  {
    "name": "Consensus",
    "category": "Research",
    "description": "Search engine summarizing consensus on scientific topics.",
    "url": "https://consensus.app",
    "logo": "https://logo.clearbit.com/consensus.app",
    "pricing": "Freemium",
    "tags": [
      "Science",
      "Research",
      "Papers",
      "Citations"
    ],
    "popularity": 92,
    "addedDate": "2022-09-15",
    "features": [
      "Extract findings from 200M+ research papers",
      "Consensus Meter showing research alignment",
      "Instant in-line citations",
      "Strictly evidence-based summaries"
    ],
    "bestFor": "Academics, clinicians, and science enthusiasts"
  },
  {
    "name": "Elicit",
    "category": "Research",
    "description": "AI research assistant that automates literature review tasks.",
    "url": "https://elicit.com",
    "logo": "https://logo.clearbit.com/elicit.com",
    "pricing": "Freemium",
    "tags": [
      "Academics",
      "Literature Review",
      "Data Extraction"
    ],
    "popularity": 91,
    "addedDate": "2021-08-01",
    "features": [
      "Summarize papers and extract data table parameters",
      "Search across bioRxiv, arXiv, Semantic Scholar",
      "Compare findings across multiple papers",
      "Draft synthesis of search results"
    ],
    "bestFor": "Graduate students, scientists, and analysts"
  },
  {
    "name": "SciSpace",
    "category": "Research",
    "description": "End-to-end platform to search, read, and understand papers.",
    "url": "https://typeset.io",
    "logo": "https://logo.clearbit.com/typeset.io",
    "pricing": "Freemium",
    "tags": [
      "Academic",
      "Copilot",
      "Reading",
      "Explanation"
    ],
    "popularity": 90,
    "addedDate": "2022-05-01",
    "features": [
      "Explain paper equations and charts interactively",
      "Search and compare paper results across columns",
      "AI writing assistant to draft papers",
      "Plagiarism checker and formatter"
    ],
    "bestFor": "Researchers reading mathematically intense papers"
  },
  {
    "name": "Semantic Scholar",
    "category": "Research",
    "description": "Free, AI-powered research tool for scientific literature.",
    "url": "https://www.semanticscholar.org",
    "logo": "https://logo.clearbit.com/semanticscholar.org",
    "pricing": "Free",
    "tags": [
      "Academic Database",
      "Citations",
      "Science",
      "Free"
    ],
    "popularity": 93,
    "addedDate": "2015-11-02",
    "features": [
      "Tracks highly influential citation metrics",
      "Research feed based on user preferences",
      "One-line abstract summaries (TLDRs)",
      "Open API for literature analysis"
    ],
    "bestFor": "Researchers searching for scientific articles"
  },
  {
    "name": "DeepL",
    "category": "Translation",
    "description": "AI translator producing translations with natural phrasing.",
    "url": "https://www.deepl.com",
    "logo": "https://logo.clearbit.com/deepl.com",
    "pricing": "Freemium",
    "tags": [
      "Translation",
      "Languages",
      "Localization",
      "DeepL Write"
    ],
    "popularity": 96,
    "addedDate": "2017-08-29",
    "features": [
      "Highly accurate translation of 30+ languages",
      "Translates entire Word, PDF, and PPT docs",
      "Tone adjustments (formal/informal)",
      "DeepL Write for style improvements"
    ],
    "bestFor": "Global teams, travelers, and content localizers"
  },
  {
    "name": "Rask AI",
    "category": "Translation",
    "description": "Localize video content in 130+ languages using AI dubbing.",
    "url": "https://www.rask.ai",
    "logo": "https://logo.clearbit.com/rask.ai",
    "pricing": "Freemium",
    "tags": [
      "Dubbing",
      "Video",
      "Translation",
      "Voice Clone"
    ],
    "popularity": 90,
    "addedDate": "2023-04-01",
    "features": [
      "Translate audio, text, and subbed tracks",
      "Voice cloning in translated targets",
      "Lip Sync for natural visual matches",
      "Export subtitle files"
    ],
    "bestFor": "YouTube creators, global marketing agencies"
  },
  {
    "name": "HeyGen Translate",
    "category": "Translation",
    "description": "Translate your talking video into other languages with voice cloning and lip-sync.",
    "url": "https://www.heygen.com/video-translate",
    "logo": "https://logo.clearbit.com/heygen.com",
    "pricing": "Freemium",
    "tags": [
      "Video translation",
      "Lip-sync",
      "Voice Cloning"
    ],
    "popularity": 92,
    "addedDate": "2023-09-05",
    "features": [
      "Translates audio and matches speech lips",
      "Retains custom speaker tone qualities",
      "Supports 40+ output languages",
      "Highly realistic audio outcomes"
    ],
    "bestFor": "Content creators translating speech clips"
  },
  {
    "name": "Khanmigo",
    "category": "Education",
    "description": "Interactive AI tutor and teaching assistant by Khan Academy.",
    "url": "https://www.khanacademy.org/khanmigo",
    "logo": "https://logo.clearbit.com/khanacademy.org",
    "pricing": "Paid",
    "tags": [
      "Tutoring",
      "Tutor",
      "Education",
      "K-12"
    ],
    "popularity": 91,
    "addedDate": "2023-03-14",
    "features": [
      "Guides students without giving answers",
      "Assists teachers in drafting lesson plans",
      "Interactive historical character roleplay",
      "Math equation guidance"
    ],
    "bestFor": "Students, parents, and K-12 teachers"
  },
  {
    "name": "Duolingo Max",
    "category": "Education",
    "description": "Premium AI language tier with custom roleplays and explanations.",
    "url": "https://www.duolingo.com",
    "logo": "https://logo.clearbit.com/duolingo.com",
    "pricing": "Paid",
    "tags": [
      "Languages",
      "Duolingo",
      "GPT-4",
      "Roleplay"
    ],
    "popularity": 95,
    "addedDate": "2023-03-14",
    "features": [
      "Roleplay interactive scenario conversations",
      "Explain My Answer details",
      "Adapts lessons to past errors",
      "High vocabulary simulations"
    ],
    "bestFor": "Duolingo users learning a new language"
  },
  {
    "name": "TutorAI",
    "category": "Education",
    "description": "Generate customized learning courses on any topic instantly.",
    "url": "https://www.tutorai.me",
    "logo": "https://logo.clearbit.com/tutorai.me",
    "pricing": "Freemium",
    "tags": [
      "Courses",
      "Study",
      "Tutorials",
      "Learning"
    ],
    "popularity": 87,
    "addedDate": "2022-11-20",
    "features": [
      "Generates modules and syllabus",
      "Quizzes and tests generation",
      "Level adjustments (Beginner to Expert)",
      "Interactive explanations"
    ],
    "bestFor": "Autodidacts and student exam preppers"
  },
  {
    "name": "Poised",
    "category": "Education",
    "description": "AI communication coach for public speaking and presentation confidence.",
    "url": "https://www.poised.com",
    "logo": "https://logo.clearbit.com/poised.com",
    "pricing": "Freemium",
    "tags": [
      "Speaking",
      "Interviews",
      "Coaching",
      "Accessibility"
    ],
    "popularity": 88,
    "addedDate": "2021-05-01",
    "features": [
      "Real-time filler word counter (um, like)",
      "Energy and pacing analysis parameters",
      "Post-meeting feedback trends",
      "Mock presentation setups"
    ],
    "bestFor": "Job interview candidates and sales presenters"
  },
  {
    "name": "Quizizz AI",
    "category": "Education",
    "description": "AI-powered quiz and interactive learning game generator.",
    "url": "https://quizizz.com",
    "logo": "https://logo.clearbit.com/quizizz.com",
    "pricing": "Freemium",
    "tags": [
      "Quizzes",
      "Gaming",
      "Study",
      "Teaching"
    ],
    "popularity": 90,
    "addedDate": "2023-08-01",
    "features": [
      "Generate quizzes from text documents or URLs",
      "Interactive class gaming modes",
      "Automated student performance dashboards",
      "Curriculum alignment suggestions"
    ],
    "bestFor": "Schoolteachers and corporate quiz hosts"
  },
  {
    "name": "Gamma",
    "category": "Presentations",
    "description": "An AI design tool for creating slides, pages, and docs.",
    "url": "https://gamma.app",
    "logo": "https://logo.clearbit.com/gamma.app",
    "pricing": "Freemium",
    "tags": [
      "Slides",
      "Presentations",
      "Design",
      "Productivity"
    ],
    "popularity": 92,
    "addedDate": "2023-05-15",
    "features": [
      "One-click presentation deck generation",
      "Interactive embedded widgets",
      "Flexible templates and layout adjustments",
      "Easy sharing and analytics"
    ],
    "bestFor": "Professionals and educators making slide decks"
  },
  {
    "name": "Beautiful.ai",
    "category": "Presentations",
    "description": "Smart presentation builder with auto-formatting designs.",
    "url": "https://www.beautiful.ai",
    "logo": "https://logo.clearbit.com/beautiful.ai",
    "pricing": "Paid",
    "tags": [
      "Slides",
      "Design",
      "Presentations",
      "Business"
    ],
    "popularity": 91,
    "addedDate": "2018-02-01",
    "features": [
      "Automatic layout adjustments as you type",
      "Huge catalog of pre-designed templates",
      "Team alignment and branding consistency settings",
      "Custom chart generation using data tables"
    ],
    "bestFor": "Business professionals and design novices"
  },
  {
    "name": "Tome",
    "category": "Presentations",
    "description": "Create generative narrative presentations and marketing decks.",
    "url": "https://tome.app",
    "logo": "https://logo.clearbit.com/tome.app",
    "pricing": "Freemium",
    "tags": [
      "Storytelling",
      "Slides",
      "Generative Design"
    ],
    "popularity": 90,
    "addedDate": "2022-09-01",
    "features": [
      "Generate entire stories from a single prompt",
      "Interactive web embed modules",
      "AI text rewrite and design settings",
      "Responsive layouts for mobile devices"
    ],
    "bestFor": "Creative writers, agencies, and pitch managers"
  },
  {
    "name": "Decktopus",
    "category": "Presentations",
    "description": "AI deck builder optimized for sales and training.",
    "url": "https://www.decktopus.com",
    "logo": "https://logo.clearbit.com/decktopus.com",
    "pricing": "Freemium",
    "tags": [
      "Slides",
      "Lead Generation",
      "Forms"
    ],
    "popularity": 88,
    "addedDate": "2021-11-01",
    "features": [
      "Lead capture forms inside presentations",
      "Embedded Q&A widget",
      "Auto-generated scripts for presenters",
      "Custom theme selection"
    ],
    "bestFor": "Sales representatives and trainers"
  },
  {
    "name": "Make",
    "category": "Automation",
    "description": "Visual platform to build and automate complex AI workflows.",
    "url": "https://www.make.com",
    "logo": "https://logo.clearbit.com/make.com",
    "pricing": "Freemium",
    "tags": [
      "Workflows",
      "API Integrations",
      "No-code"
    ],
    "popularity": 93,
    "addedDate": "2022-02-22",
    "features": [
      "Visual drag-and-drop workflow planner",
      "Integrates thousands of SaaS APIs",
      "Advanced data parsing and mapping modules",
      "Reliable error handling tools"
    ],
    "bestFor": "Operations managers and no-code builders"
  },
  {
    "name": "Zapier Central",
    "category": "Automation",
    "description": "Build custom AI bots to execute cross-app tasks autonomously.",
    "url": "https://zapier.com",
    "logo": "https://logo.clearbit.com/zapier.com",
    "pricing": "Freemium",
    "tags": [
      "Zapier",
      "Bots",
      "Workflows",
      "Integrations"
    ],
    "popularity": 94,
    "addedDate": "2024-03-01",
    "features": [
      "Deploy AI bots running in the background",
      "Connects to 6000+ app integrations",
      "Instruct bots in natural language",
      "Custom database actions"
    ],
    "bestFor": "Busy professionals seeking simple work automation"
  },
  {
    "name": "Bardeen",
    "category": "Automation",
    "description": "AI browser automation tool for web scraping and workflows.",
    "url": "https://www.bardeen.ai",
    "logo": "https://logo.clearbit.com/bardeen.ai",
    "pricing": "Freemium",
    "tags": [
      "Scraping",
      "Extension",
      "Data Extraction"
    ],
    "popularity": 90,
    "addedDate": "2021-02-01",
    "features": [
      "Scrape website data without coding",
      "Trigger integrations using hotkeys",
      "AI scraper template generator",
      "Synchronous desktop operations"
    ],
    "bestFor": "Lead generators, recruiters, and analysts"
  },
  {
    "name": "Browse AI",
    "category": "Automation",
    "description": "The easiest way to extract and monitor data from any website.",
    "url": "https://www.browse.ai",
    "logo": "https://logo.clearbit.com/browse.ai",
    "pricing": "Freemium",
    "tags": [
      "Scraping",
      "Monitoring",
      "Data Extraction"
    ],
    "popularity": 89,
    "addedDate": "2021-10-01",
    "features": [
      "Set up a scraper robot in 2 minutes",
      "Monitor pages for layout and text updates",
      "Paginates and scrolls automatically",
      "Triggers API webhooks on data change"
    ],
    "bestFor": "Competitive intelligence and pricing analysis managers"
  },
  {
    "name": "Surfer SEO",
    "category": "SEO",
    "description": "AI SEO tool for optimizing articles for search ranking.",
    "url": "https://surferseo.com",
    "logo": "https://logo.clearbit.com/surferseo.com",
    "pricing": "Paid",
    "tags": [
      "SEO",
      "Content Marketing",
      "Keywords",
      "Surfer"
    ],
    "popularity": 92,
    "addedDate": "2018-09-01",
    "features": [
      "Real-time content score updates",
      "Keyword research and intent map generator",
      "Competitor analysis parameters outline",
      "Integration with Google Docs and WordPress"
    ],
    "bestFor": "SEO marketers, content writers, and bloggers"
  },
  {
    "name": "Brandmark",
    "category": "Design",
    "description": "AI logo generator helping businesses establish brand assets.",
    "url": "https://brandmark.io",
    "logo": "https://logo.clearbit.com/brandmark.io",
    "pricing": "Paid",
    "tags": [
      "Logos",
      "Branding",
      "Identity",
      "Design"
    ],
    "popularity": 89,
    "addedDate": "2018-01-01",
    "features": [
      "Generates complete brand kits",
      "Color palette recommendations",
      "Easily customizable graphics editor",
      "High-res vector file formats download"
    ],
    "bestFor": "Startups and small businesses launching brand identities"
  },
  {
    "name": "Ahrefs AI Tools",
    "category": "SEO",
    "description": "Ahrefs suite of writing, keyword extraction, and metadata optimization tools.",
    "url": "https://ahrefs.com/writing-tools",
    "logo": "https://logo.clearbit.com/ahrefs.com",
    "pricing": "Freemium",
    "tags": [
      "Keywords",
      "Metadata",
      "SEO",
      "Ahrefs"
    ],
    "popularity": 94,
    "addedDate": "2023-06-01",
    "features": [
      "Generate keyword concepts in seconds",
      "Craft SEO title tags that improve click rates",
      "Draft outline structures based on top SERP results",
      "Paragraph rewriter tools"
    ],
    "bestFor": "SEO specialists and content creators"
  },
  {
    "name": "Semrush Copilot",
    "category": "SEO",
    "description": "AI-powered companion for site audits, backlink alerts, and SEO insights.",
    "url": "https://www.semrush.com",
    "logo": "https://logo.clearbit.com/semrush.com",
    "pricing": "Paid",
    "tags": [
      "SEO",
      "Audit",
      "Semrush",
      "Marketing"
    ],
    "popularity": 95,
    "addedDate": "2023-10-15",
    "features": [
      "Daily diagnostic logs highlighting website performance",
      "Generates custom suggestions for page ranking",
      "Predicts competitor SEO moves",
      "Identifies backlink gap errors"
    ],
    "bestFor": "Enterprise marketing directors and SEO consultants"
  },
  {
    "name": "AdCreative.ai",
    "category": "Marketing",
    "description": "Generate high-converting advertising creatives in seconds.",
    "url": "https://www.adcreative.ai",
    "logo": "https://logo.clearbit.com/adcreative.ai",
    "pricing": "Paid",
    "tags": [
      "Ads",
      "Marketing",
      "Creatives",
      "Conversion"
    ],
    "popularity": 90,
    "addedDate": "2021-10-01",
    "features": [
      "Generate banner ads with high conversion ratings",
      "Generates copy texts and ad texts",
      "Analyze advertising visual layouts",
      "Sync ads directly with Google/Meta ad accounts"
    ],
    "bestFor": "E-commerce stores and advertising agencies"
  },
  {
    "name": "Canva AI Designer",
    "category": "Design",
    "description": "Design platform powered by AI image editors and magic design.",
    "url": "https://www.canva.com",
    "logo": "https://logo.clearbit.com/canva.com",
    "pricing": "Freemium",
    "tags": [
      "Design",
      "Graphics",
      "Magic Design",
      "Templates"
    ],
    "popularity": 97,
    "addedDate": "2023-03-23",
    "features": [
      "Magic Design for automated templates",
      "AI image generator (Magic Media)",
      "Magic Eraser, Edit, and Grab tools",
      "AI text translator and copy writer"
    ],
    "bestFor": "Social media managers, marketers, and designers"
  },
  {
    "name": "Figma AI",
    "category": "Design",
    "description": "AI capabilities inside the leading collaborative design tool.",
    "url": "https://www.figma.com",
    "logo": "https://logo.clearbit.com/figma.com",
    "pricing": "Freemium",
    "tags": [
      "Figma",
      "UI",
      "Vector Design",
      "Prototyping"
    ],
    "popularity": 96,
    "addedDate": "2024-06-26",
    "features": [
      "Generate UI layouts from simple text prompts",
      "Automated layer renaming and grouping",
      "Translate copy inside designs instantly",
      "AI prototyper wireframes"
    ],
    "bestFor": "Product designers and web developers"
  },
  {
    "name": "Khroma",
    "category": "Design",
    "description": "AI color combination generator trained on designer data.",
    "url": "https://khroma.co",
    "logo": "https://logo.clearbit.com/khroma.co",
    "pricing": "Free",
    "tags": [
      "Color Palettes",
      "Contrast",
      "UI Design",
      "Free"
    ],
    "popularity": 91,
    "addedDate": "2018-10-01",
    "features": [
      "Train the AI with your favorite colors",
      "Generates endless matching typography palettes",
      "Check contrast accessibility ratios",
      "Saves color libraries"
    ],
    "bestFor": "UI designers and branding consultants"
  },
  {
    "name": "Looka",
    "category": "Design",
    "description": "Generate a beautiful logo design and match custom color systems.",
    "url": "https://looka.com",
    "logo": "https://logo.clearbit.com/looka.com",
    "pricing": "Paid",
    "tags": [
      "Branding",
      "Logos",
      "Corporate Identity"
    ],
    "popularity": 90,
    "addedDate": "2016-11-01",
    "features": [
      "Interactive logo editor interface",
      "300+ vector brand assets kit",
      "Color profile picker and matching guides",
      "Website template designs selection"
    ],
    "bestFor": "Entrepreneurs starting a new business venture"
  },
  {
    "name": "Uizard",
    "category": "Design",
    "description": "Design mobile apps and web wireframes in minutes with AI.",
    "url": "https://uizard.io",
    "logo": "https://logo.clearbit.com/uizard.io",
    "pricing": "Freemium",
    "tags": [
      "UI Design",
      "Wireframes",
      "Prototyping",
      "Apps"
    ],
    "popularity": 91,
    "addedDate": "2018-01-15",
    "features": [
      "Convert hand-drawn sketches to UI screens",
      "Generate mockups from screenshots",
      "AI designer assistants built in",
      "Collaborative design workspace"
    ],
    "bestFor": "Product managers and startup founders drafting mockups"
  },
  {
    "name": "v0.dev",
    "category": "Developer Tools",
    "description": "AI user interface generator delivering React, HTML, and CSS.",
    "url": "https://v0.dev",
    "logo": "https://logo.clearbit.com/v0.dev",
    "pricing": "Freemium",
    "tags": [
      "Vercel",
      "UI",
      "React",
      "Tailwind",
      "CSS"
    ],
    "popularity": 93,
    "addedDate": "2023-09-01",
    "features": [
      "Generates production-ready web interfaces",
      "Tailwind CSS and Shadcn UI ready components",
      "Inspect code and copy it instantly",
      "Interactive chat to refine design"
    ],
    "bestFor": "Frontend developers and UI/UX designers"
  },
  {
    "name": "Hugging Face",
    "category": "Developer Tools",
    "description": "The open-source community platform for machine learning models.",
    "url": "https://huggingface.co",
    "logo": "https://logo.clearbit.com/huggingface.co",
    "pricing": "Freemium",
    "tags": [
      "ML",
      "Models",
      "Datasets",
      "Open Source"
    ],
    "popularity": 95,
    "addedDate": "2016-11-01",
    "features": [
      "Host, download, and fine-tune ML models",
      "Hugging Face Spaces for web applications demo",
      "Thousands of community datasets available",
      "Inference endpoints and serverless hosting"
    ],
    "bestFor": "Machine learning engineers and developers"
  },
  {
    "name": "Replicate",
    "category": "Developer Tools",
    "description": "Run machine learning models in the cloud with an API.",
    "url": "https://replicate.com",
    "logo": "https://logo.clearbit.com/replicate.com",
    "pricing": "Paid",
    "tags": [
      "API",
      "Serverless",
      "Models",
      "Hosting"
    ],
    "popularity": 90,
    "addedDate": "2020-10-01",
    "features": [
      "Run open-source models with one line of code",
      "Pay-as-you-go GPU pricing",
      "Fine-tune models using cloud APIs",
      "Highly scalable serverless environment"
    ],
    "bestFor": "Software engineers integrating AI models"
  },
  {
    "name": "LangChain",
    "category": "Developer Tools",
    "description": "Framework for building applications with large language models.",
    "url": "https://www.langchain.com",
    "logo": "https://logo.clearbit.com/langchain.com",
    "pricing": "Free",
    "tags": [
      "LLM Framework",
      "Agents",
      "LangSmith",
      "Python"
    ],
    "popularity": 94,
    "addedDate": "2022-10-25",
    "features": [
      "Standard abstractions for LLMs and prompts",
      "LangSmith for debugging and observability",
      "Build autonomous agent architectures",
      "Supports multiple vector DBs"
    ],
    "bestFor": "AI engineers building custom LLM systems"
  },
  {
    "name": "Pinecone",
    "category": "Developer Tools",
    "description": "Fully managed vector database for high-performance AI query search.",
    "url": "https://www.pinecone.io",
    "logo": "https://logo.clearbit.com/pinecone.io",
    "pricing": "Freemium",
    "tags": [
      "Vector Database",
      "RAG",
      "Embeddings",
      "Search"
    ],
    "popularity": 92,
    "addedDate": "2021-01-15",
    "features": [
      "Ultra-fast vector index searches",
      "Seamless scaling for enterprise dataset logs",
      "Integration with LangChain and LlamaIndex",
      "Serverless architecture options"
    ],
    "bestFor": "Developers building Retrieval-Augmented Generation apps"
  },
  {
    "name": "Together AI",
    "category": "Developer Tools",
    "description": "The fastest cloud platform for open-source model inference.",
    "url": "https://www.together.ai",
    "logo": "https://logo.clearbit.com/together.ai",
    "pricing": "Paid",
    "tags": [
      "LLM Hosting",
      "Inference",
      "API",
      "Llama"
    ],
    "popularity": 90,
    "addedDate": "2022-06-01",
    "features": [
      "Blazing-fast token output speeds",
      "API keys access for Llama-3, Mistral, and more",
      "Custom model fine-tuning environments",
      "Low-cost pricing plans"
    ],
    "bestFor": "SaaS builders needing reliable API endpoints"
  },
  {
    "name": "Kickresume",
    "category": "Resume Builder",
    "description": "AI resume and cover letter builder that beats the applicant trackers.",
    "url": "https://www.kickresume.com",
    "logo": "https://logo.clearbit.com/kickresume.com",
    "pricing": "Freemium",
    "tags": [
      "Resume",
      "Cover Letter",
      "Career",
      "ATS"
    ],
    "popularity": 91,
    "addedDate": "2013-03-01",
    "features": [
      "AI resume summary and bullet point writer",
      "40+ professional matching templates",
      "Cover letter writer and reviews",
      "Mock interview questions generator"
    ],
    "bestFor": "Job seekers targeting top-tier tech companies"
  },
  {
    "name": "Rezi",
    "category": "Resume Builder",
    "description": "Resume software targeting ATS compliance and optimizations.",
    "url": "https://www.rezi.ai",
    "logo": "https://logo.clearbit.com/rezi.ai",
    "pricing": "Freemium",
    "tags": [
      "Resume",
      "ATS",
      "Job Application"
    ],
    "popularity": 89,
    "addedDate": "2015-08-01",
    "features": [
      "ATS keyword optimization checker",
      "Rezi Content Score metric",
      "Auto-generated bullet points",
      "Export resume formats in PDF/Word"
    ],
    "bestFor": "Candidates applying through automated portal boards"
  },
  {
    "name": "Novoresume AI",
    "category": "Resume Builder",
    "description": "Create professional resumes with live-updating content feedback.",
    "url": "https://novoresume.com",
    "logo": "https://logo.clearbit.com/novoresume.com",
    "pricing": "Freemium",
    "tags": [
      "CV Builder",
      "Resume Templates",
      "Job Search"
    ],
    "popularity": 90,
    "addedDate": "2016-02-01",
    "features": [
      "Live content checker for formatting issues",
      "Industry-tested resume layouts",
      "Cover letter layouts creator",
      "Multiple page configurations"
    ],
    "bestFor": "Entry level to senior managers writing CVs"
  },
  {
    "name": "ChatPDF",
    "category": "PDF Tools",
    "description": "Instantly read, search, and extract info from PDF documents.",
    "url": "https://www.chatpdf.com",
    "logo": "https://logo.clearbit.com/chatpdf.com",
    "pricing": "Freemium",
    "tags": [
      "PDF",
      "Reader",
      "Summarizer",
      "Study"
    ],
    "popularity": 93,
    "addedDate": "2023-03-01",
    "features": [
      "Extract summaries from research papers",
      "Translate sections of PDFs instantly",
      "Source citations mapping to PDF page numbers",
      "Multi-file uploads support"
    ],
    "bestFor": "Students, researchers, and desk workers"
  },
  {
    "name": "AskYourPDF",
    "category": "PDF Tools",
    "description": "Chat with any PDF document, powered by AI models.",
    "url": "https://askyourpdf.com",
    "logo": "https://logo.clearbit.com/askyourpdf.com",
    "pricing": "Freemium",
    "tags": [
      "PDF",
      "Document Chat",
      "RAG",
      "Chrome Extension"
    ],
    "popularity": 92,
    "addedDate": "2023-04-01",
    "features": [
      "Chatbot interface for documents",
      "Chrome Extension for reading PDFs in tab",
      "API for developer integrations",
      "Supports PDF, EPUB, TXT"
    ],
    "bestFor": "Students and researchers studying complex files"
  }
];

// State Management
let bookmarkedIds = JSON.parse(localStorage.getItem('ai_bookmarks')) || [];
let recentlyVisitedIds = JSON.parse(localStorage.getItem('ai_recent')) || [];
let currentCategory = 'All';
let currentSearch = '';
let currentSort = 'popular'; // 'az', 'za', 'popular', 'newest'
let showBookmarksOnly = false;

// DOM Elements
const gridContainer = document.getElementById('grid-container');
const categoryScroll = document.getElementById('category-scroll');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const bookmarkToggleBtn = document.getElementById('bookmark-toggle-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const modal = document.getElementById('detail-modal');
const modalContent = document.getElementById('modal-detail-content');
const closeModalBtn = document.getElementById('close-modal');
const backToTopBtn = document.getElementById('back-to-top');
const emptyState = document.getElementById('empty-state');
const statsSection = document.getElementById('stats-section');

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggleBtn.querySelector('i') || themeToggleBtn;
    if (theme === 'dark') {
        icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/></svg>';
        themeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
        icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>';
        themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
    }
}

// Stats Calculation
function calculateStats() {
    const totalCount = AI_WEBSITES.length;
    const categories = new Set(AI_WEBSITES.map(w => w.category)).size;
    const freeCount = AI_WEBSITES.filter(w => w.pricing === 'Free').length;
    const paidCount = AI_WEBSITES.filter(w => w.pricing === 'Paid' || w.pricing === 'Freemium').length;
    
    // Recently Added (let's say added in 2024 or latest 10 tools)
    const recentlyAdded = AI_WEBSITES.filter(w => w.addedDate.startsWith('2024') || w.addedDate.startsWith('2023')).length;

    document.getElementById('stat-total').innerText = totalCount;
    document.getElementById('stat-categories').innerText = categories;
    document.getElementById('stat-free').innerText = freeCount;
    document.getElementById('stat-paid').innerText = paidCount;
    document.getElementById('stat-recent').innerText = recentlyAdded;
}

// Generate Category Chips
function renderCategoryChips() {
    const categories = ['All', ...new Set(AI_WEBSITES.map(w => w.category))].sort();
    categoryScroll.innerHTML = '';
    
    categories.forEach(cat => {
        const chip = document.createElement('button');
        chip.className = `filter-chip ${cat === currentCategory ? 'active' : ''}`;
        chip.innerText = cat;
        chip.setAttribute('aria-label', `Filter by ${cat}`);
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentCategory = cat;
            renderGrid();
        });
        categoryScroll.appendChild(chip);
    });
}

// Bookmarks toggle logic
function toggleBookmark(toolName, event) {
    if (event) event.stopPropagation();
    const index = bookmarkedIds.indexOf(toolName);
    if (index > -1) {
        bookmarkedIds.splice(index, 1);
    } else {
        bookmarkedIds.push(toolName);
    }
    localStorage.setItem('ai_bookmarks', JSON.stringify(bookmarkedIds));
    renderGrid();
    
    // Update modal action button if modal is open
    const modalBookmarkBtn = document.getElementById('modal-bookmark-btn');
    if (modalBookmarkBtn && modalBookmarkBtn.dataset.name === toolName) {
        updateModalBookmarkBtn(toolName);
    }
}

// Update bookmark state inside modal
function updateModalBookmarkBtn(toolName) {
    const modalBookmarkBtn = document.getElementById('modal-bookmark-btn');
    if (!modalBookmarkBtn) return;
    const isBookmarked = bookmarkedIds.includes(toolName);
    modalBookmarkBtn.innerHTML = isBookmarked ? 
        `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> Bookmarked` :
        `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> Bookmark`;
    modalBookmarkBtn.classList.toggle('active', isBookmarked);
}

// Recently Visited
function addToRecent(toolName) {
    const index = recentlyVisitedIds.indexOf(toolName);
    if (index > -1) {
        recentlyVisitedIds.splice(index, 1);
    }
    recentlyVisitedIds.unshift(toolName);
    if (recentlyVisitedIds.length > 5) {
        recentlyVisitedIds.pop();
    }
    localStorage.setItem('ai_recent', JSON.stringify(recentlyVisitedIds));
    renderRecentlyVisited();
}

function renderRecentlyVisited() {
    const recentContainer = document.getElementById('recent-list');
    if (!recentContainer) return;
    recentContainer.innerHTML = '';
    
    const recentTools = recentlyVisitedIds
        .map(name => AI_WEBSITES.find(w => w.name === name))
        .filter(Boolean);
        
    if (recentTools.length === 0) {
        recentContainer.innerHTML = '<p class="text-muted" style="font-size: 0.85rem; padding: 0.5rem 0;">No tools visited recently.</p>';
        return;
    }
    
    recentTools.forEach(tool => {
        const item = document.createElement('div');
        item.className = 'recent-item';
        item.innerHTML = `
            <img class="recent-item-logo" src="${tool.logo}" onerror="this.src='https://www.google.com/s2/favicons?sz=64&domain=${new URL(tool.url).hostname}'; this.onerror=null;" alt="" lazy="lazy">
            <div class="recent-item-info">
                <span class="recent-item-name">${tool.name}</span>
                <span class="recent-item-cat">${tool.category}</span>
            </div>
        `;
        item.addEventListener('click', () => showDetail(tool.name));
        recentContainer.appendChild(item);
    });
}

// Modal management
function showDetail(toolName) {
    const tool = AI_WEBSITES.find(w => w.name === toolName);
    if (!tool) return;
    
    addToRecent(toolName);
    
    const featuresList = tool.features.map(f => `<li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color:var(--accent-primary); flex-shrink:0;"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${f}</span></li>`).join('');
    
    modalContent.innerHTML = `
        <div class="modal-header-detail">
            <div class="modal-title-area">
                <img class="modal-logo" src="${tool.logo}" onerror="this.src='https://www.google.com/s2/favicons?sz=128&domain=${new URL(tool.url).hostname}'; this.onerror=null;" alt="${tool.name} Logo">
                <div>
                    <h2 class="modal-title">${tool.name}</h2>
                    <span class="badge badge-pricing">${tool.pricing}</span>
                    <span class="modal-cat">${tool.category}</span>
                </div>
            </div>
            <div class="modal-actions-top">
                <button id="modal-bookmark-btn" class="modal-btn btn-secondary" data-name="${tool.name}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                    Bookmark
                </button>
                <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="modal-btn btn-primary">
                    Visit Website
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            </div>
        </div>
        
        <div class="modal-body-detail">
            <div class="modal-section">
                <h3>About</h3>
                <p class="modal-desc">${tool.description}</p>
            </div>
            
            <div class="modal-section">
                <h3>Key Features</h3>
                <ul class="features-list">
                    ${featuresList}
                </ul>
            </div>
            
            <div class="modal-grid-two">
                <div class="modal-section">
                    <h3>Best For</h3>
                    <p class="modal-text-box">${tool.bestFor}</p>
                </div>
                <div class="modal-section">
                    <h3>Tags</h3>
                    <div class="tags-container">
                        ${tool.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    updateModalBookmarkBtn(toolName);
    
    // Bind click listener for bookmark button inside modal
    document.getElementById('modal-bookmark-btn').addEventListener('click', (e) => {
        toggleBookmark(toolName, e);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Render cards grid
function renderGrid() {
    let filtered = AI_WEBSITES.filter(w => {
        // Category Filter
        const matchesCategory = currentCategory === 'All' || w.category === currentCategory;
        
        // Search Filter
        const query = currentSearch.toLowerCase();
        const matchesSearch = w.name.toLowerCase().includes(query) || 
                              w.description.toLowerCase().includes(query) || 
                              w.category.toLowerCase().includes(query) || 
                              w.tags.some(tag => tag.toLowerCase().includes(query));
                              
        // Bookmarks Filter
        const matchesBookmark = !showBookmarksOnly || bookmarkedIds.includes(w.name);
        
        return matchesCategory && matchesSearch && matchesBookmark;
    });

    // Sorting
    filtered.sort((a, b) => {
        if (currentSort === 'az') {
            return a.name.localeCompare(b.name);
        } else if (currentSort === 'za') {
            return b.name.localeCompare(a.name);
        } else if (currentSort === 'popular') {
            return b.popularity - a.popularity;
        } else if (currentSort === 'newest') {
            return new Date(b.addedDate) - new Date(a.addedDate);
        }
        return 0;
    });

    gridContainer.innerHTML = '';

    if (filtered.length === 0) {
        emptyState.style.display = 'flex';
        gridContainer.style.display = 'none';
        return;
    }

    emptyState.style.display = 'none';
    gridContainer.style.display = 'grid';

    filtered.forEach(tool => {
        const isBookmarked = bookmarkedIds.includes(tool.name);
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `${tool.name}, category ${tool.category}`);
        
        card.innerHTML = `
            <div class="card-header">
                <span class="popularity-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="color:var(--accent-primary);"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    Score: ${tool.popularity}
                </span>
                <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" aria-label="${isBookmarked ? 'Remove bookmark' : 'Add bookmark'}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                </button>
            </div>
            <div class="card-body">
                <img class="card-logo" src="${tool.logo}" onerror="this.src='https://www.google.com/s2/favicons?sz=64&domain=${new URL(tool.url).hostname}'; this.onerror=null;" alt="" lazy="lazy">
                <h3 class="card-title">${tool.name}</h3>
                <p class="card-desc">${tool.description}</p>
                <div class="card-tags">
                    ${tool.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="card-footer">
                <span class="card-cat">${tool.category}</span>
                <button class="btn-card-action">Explore</button>
            </div>
        `;

        // Card click triggers detail modal
        card.addEventListener('click', () => showDetail(tool.name));
        
        // Enter key support for accessibility
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                showDetail(tool.name);
            }
        });

        // Bookmark button interaction
        const bBtn = card.querySelector('.bookmark-btn');
        bBtn.addEventListener('click', (e) => {
            toggleBookmark(tool.name, e);
        });

        gridContainer.appendChild(card);
    });
}

// Search debounce
let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        currentSearch = e.target.value;
        renderGrid();
    }, 200);
});

// Sort interaction
sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderGrid();
});

// Bookmark Toggle filter
bookmarkToggleBtn.addEventListener('click', () => {
    showBookmarksOnly = !showBookmarksOnly;
    bookmarkToggleBtn.classList.toggle('active', showBookmarksOnly);
    renderGrid();
});

// Theme click
themeToggleBtn.addEventListener('click', toggleTheme);

// Modal close triggers
closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Scroll behaviors
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    calculateStats();
    renderCategoryChips();
    renderGrid();
    renderRecentlyVisited();
});
