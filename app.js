/* ==========================================================================
   📄 app.js — Core JavaScript & 3D Interactive Controller
   Features: Product DB (Real Photography URLs), Cart State, 3D Tilt Script,
             Slider Animation, Client-side Filters & Search, Session Mocking
   ========================================================================== */

// ── 📦 PRODUCT DATABASE (29 Items with verified stable Unsplash photo URLs) ──
const PRODUCTS = [
  // 1. Audio & Sound
  {
    id: "audio-1",
    name: "AeroSound Pro ANC",
    category: "Audio & Sound",
    subcategory: "Over-Ear Headphones",
    price: 189.99,
    rating: 4.8,
    reviewsCount: 142,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    description: "Smart active noise cancellation headphones with custom spatial audio profiles.",
    longDescription: "Engineered for immersive acoustic depth, the AeroSound Pro ANC blends masterfully tuned 40mm dynamic drivers with high-fidelity active noise cancellation. Features memory-foam cushioned ear cups, touch-sensitive gesture panels, and a sleek warm sand-matte finish that complements any modern aesthetic.",
    sizes: ["One Size"],
    specs: { "Driver Size": "40mm", "Battery Life": "Up to 30 Hours", "Bluetooth Version": "5.2", "Weight": "250g" }
  },
  {
    id: "audio-2",
    name: "EchoBuds Studio Wireless",
    category: "Audio & Sound",
    subcategory: "Wireless Earbuds",
    price: 79.99,
    rating: 4.6,
    reviewsCount: 98,
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    description: "Ultra-lightweight wireless earbuds with crystal-clear vocal profiles.",
    longDescription: "Uncompromising sonic clarity packed into an ergonomic, sweat-resistant shell. The EchoBuds Studio Wireless provides responsive ambient sound pass-through, instant auto-pairing, and a textured pebble charging case supporting fast wireless charging.",
    sizes: ["S", "M", "L"],
    specs: { "Water Resistance": "IPX5", "Battery Life": "6 Hrs (24 Hrs with Case)", "Codec Support": "AAC, SBC", "Charge Time": "1.5 Hrs" }
  },
  {
    id: "audio-3",
    name: "VibeDock Soundbar 3D",
    category: "Audio & Sound",
    subcategory: "Home Audio",
    price: 149.99,
    rating: 4.7,
    reviewsCount: 65,
    imageUrl: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    description: "Premium television soundbar with virtual 3D Dolby sound stage.",
    longDescription: "Transform your living room into an acoustic amphitheater. The VibeDock Soundbar houses four full-range audio drivers and an integrated low-frequency radiator, delivering cinematic virtual surround sound without complex satellite wiring.",
    sizes: ["One Size"],
    specs: { "Total Output": "120W", "Inputs": "HDMI ARC, Optical, AUX", "Width": "32 inches", "Dolby Digital": "Yes" }
  },
  {
    id: "audio-4",
    name: "ZenBuds Sleep Noise-Mask",
    category: "Audio & Sound",
    subcategory: "Smart Earbuds",
    price: 129.99,
    rating: 4.5,
    reviewsCount: 88,
    imageUrl: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80",
    description: "Sleep noise-masking earbuds designed to deliver soothing night sounds.",
    longDescription: "Crafted specifically for light sleepers. ZenBuds fit flush against your ears even when sleeping sideways, introducing adaptive noise-masking algorithms that block exterior disruptions with warm, calming acoustic profiles.",
    sizes: ["XS", "S", "M"],
    specs: { "Material": "Soft Liquid Silicone", "Battery Life": "10 Hrs Continuous", "Sleep Timer": "Yes", "App Library": "30+ Sounds" }
  },

  // 2. Computers & Gaming
  {
    id: "comp-1",
    name: "ZenBook Duo Pro Dual",
    category: "Computers & Gaming",
    subcategory: "Laptops",
    price: 1249.00,
    rating: 4.9,
    reviewsCount: 54,
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    description: "Multi-tasking laptop with high-definition secondary touchscreen.",
    longDescription: "The ultimate computer for creative professionals. Housing a gorgeous 14-inch OLED primary screen coupled with a tilted secondary touch panel, it unlocks modular multi-tasking workflows for video editors, music producers, and developers.",
    sizes: ["14 inch", "16 inch"],
    specs: { "Processor": "Intel Core i7 13th Gen", "RAM": "16GB LPDDR5", "Storage": "1TB NVMe SSD", "Graphics": "Intel Iris Xe" }
  },
  {
    id: "comp-2",
    name: "ApexStrike Mechanical RGB",
    category: "Computers & Gaming",
    subcategory: "Keyboards",
    price: 95.50,
    rating: 4.8,
    reviewsCount: 210,
    imageUrl: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=600&q=80",
    description: "Tactile hot-swappable mechanical keyboard with white backing.",
    longDescription: "Designed for premium typing feedback. Featuring factory-lubricated linear switches, high-quality PBT dye-sublimated keycaps, and a solid walnut base frame, it elevates typing comfort and desk aesthetic.",
    sizes: ["75% Layout", "Full Size"],
    specs: { "Switch Type": "Gateron Brown (Tactile)", "Connectivity": "Wired USB-C", "Backlight": "Warm White LED", "Keycaps": "PBT Double-Shot" }
  },
  {
    id: "comp-3",
    name: "KeyChron K2 Wireless Tactile",
    category: "Computers & Gaming",
    subcategory: "Keyboards",
    price: 79.99,
    rating: 4.7,
    reviewsCount: 175,
    imageUrl: "https://images.unsplash.com/photo-1593152167544-085d3b9c4938?auto=format&fit=crop&w=600&q=80",
    description: "Compact mechanical keyboard with keycaps in warm neutral hues.",
    longDescription: "A legendary layout favored by remote workers. Features seamless macOS and Windows compatibility, Bluetooth pairing with up to three devices simultaneously, and a warm clay-colored double-shot keycap profile.",
    sizes: ["75% Layout"],
    specs: { "Battery Capacity": "4000mAh", "Switches": "Gateron Red", "Frame Material": "Aluminum", "Bluetooth": "5.1" }
  },
  {
    id: "comp-4",
    name: "NovaGlide Wireless Mouse",
    category: "Computers & Gaming",
    subcategory: "Mice",
    price: 59.99,
    rating: 4.5,
    reviewsCount: 112,
    imageUrl: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=600&q=80",
    description: "High-precision optical gaming mouse with ergonomic thumb-rest.",
    longDescription: "Engineered to fit the natural contours of your hand. Built with a high-accuracy 26k DPI optical sensor and ultra-durable switches, the NovaGlide delivers pixel-perfect tracking for work and gameplay.",
    sizes: ["Standard"],
    specs: { "Sensor": "Optical 26,000 DPI", "Weight": "69g", "Battery Life": "Up to 80 Hrs", "Buttons": "6 Programmable" }
  },
  {
    id: "comp-5",
    name: "SpectraView 27\" Curved 165Hz",
    category: "Computers & Gaming",
    subcategory: "Monitors",
    price: 229.00,
    rating: 4.7,
    reviewsCount: 83,
    imageUrl: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=600&q=80",
    description: "Curved gaming monitor featuring 165Hz refresh rates and HDR10.",
    longDescription: "Immerse yourself inside deep contrasts and high-speed motion. The 1500R curvature matches human optical fields, reducing eye strain while keeping game frames liquid-smooth through a blazing fast 165Hz refresh rate.",
    sizes: ["27 inch"],
    specs: { "Resolution": "2560x1440 QHD", "Panel Type": "VA Curved", "Response Time": "1ms MPRT", "HDR": "HDR10 Support" }
  },

  // 3. Smart Living & IoT
  {
    id: "smart-1",
    name: "AuraFit Watch X Gold-Sand",
    category: "Smart Living & IoT",
    subcategory: "Smart Watches",
    price: 129.00,
    rating: 4.7,
    reviewsCount: 156,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    description: "AMOLED display watch with heart rate and blood oxygen monitoring.",
    longDescription: "A seamless blend of jewelry and wellness tracking. Features a circular gold-brushed stainless steel chassis, sand-colored leather band, and an always-on AMOLED touchscreen tracking sleep stages, steps, and ambient stress levels.",
    sizes: ["40mm", "44mm"],
    specs: { "Display": "1.3\" AMOLED Always-On", "Sensors": "Optical Heart Rate, SpO2", "Water Resistance": "5ATM (50m)", "Battery": "Up to 7 Days" }
  },
  {
    id: "smart-2",
    name: "EmberSmart Thermostat",
    category: "Smart Living & IoT",
    subcategory: "Climate Control",
    price: 89.00,
    rating: 4.6,
    reviewsCount: 74,
    imageUrl: "https://images.unsplash.com/photo-1619140099965-06d74aaf51fa?auto=format&fit=crop&w=600&q=80",
    description: "WiFi-connected energy saving home temperature controller.",
    longDescription: "Intuitive climate scheduling that adapts to your presence. Connects with home assistant apps to automatically balance temperatures based on outdoor conditions, cutting average monthly heating bills.",
    sizes: ["Standard"],
    specs: { "Connectivity": "2.4GHz WiFi", "Compatibility": "24V Heating & Cooling", "Diameter": "3.3 inches", "Power Source": "C-Wire Required" }
  },
  {
    id: "smart-3",
    name: "Sentinel Eye 4K Smart Cam",
    category: "Smart Living & IoT",
    subcategory: "Security",
    price: 69.99,
    rating: 4.8,
    reviewsCount: 119,
    imageUrl: "https://images.unsplash.com/photo-1753108140127-afc3e215d75b?auto=format&fit=crop&w=600&q=80",
    description: "Weatherproof outdoor smart security camera with color night vision.",
    longDescription: "Crystal-clear security surveillance in all environments. Outfitted with high-power infrared LEDs and a dual-lens spotlight, the Sentinel Eye detects intruders, sends instant phone alerts, and captures 4K feeds.",
    sizes: ["Single Pack", "2-Pack"],
    specs: { "Resolution": "4K Ultra HD", "Field of View": "140° Wide Angle", "Night Vision": "Full Color Spotlight", "Storage": "MicroSD + Cloud" }
  },
  {
    id: "smart-4",
    name: "OrbitGlow Ambient Sync Lamp",
    category: "Smart Living & IoT",
    subcategory: "Smart Lighting",
    price: 39.99,
    rating: 4.5,
    reviewsCount: 92,
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
    description: "RGB ambient corner lamp with music synchronization modes.",
    longDescription: "Bathe your room walls in soft, dynamic colors. The OrbitGlow corner lamp standing profile projects layered, diffused light patterns that pulse rhythmically to game audio, music, or movie sound tracks.",
    sizes: ["Standard"],
    specs: { "Height": "4.6 Feet", "Colors": "16 Million + White", "Lumens": "1200 Max", "Control": "Remote & Bluetooth App" }
  },

  // 4. Mobile & Gear
  {
    id: "mobile-1",
    name: "Horizon Pro 5G Flagship",
    category: "Mobile & Gear",
    subcategory: "Smartphones",
    price: 699.00,
    rating: 4.9,
    reviewsCount: 104,
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    description: "Flagship camera phone with 120Hz display and 5G speeds.",
    longDescription: "A beautiful fusion of design and power. Features an edge-to-edge LTPO AMOLED display, triple rear cameras with high-grade optical image stabilization, and a textured ceramic back panel that resists fingerprint smudges.",
    sizes: ["256GB", "512GB"],
    specs: { "Screen Size": "6.7\" 120Hz", "Rear Cameras": "50MP Main + 48MP Ultra + 12MP Tele", "Processor": "Snapdragon 8 Gen 2", "Battery": "5000mAh" }
  },
  {
    id: "mobile-2",
    name: "VoltCharge 100W GaN Charger",
    category: "Mobile & Gear",
    subcategory: "Chargers",
    price: 39.99,
    rating: 4.7,
    reviewsCount: 163,
    imageUrl: "https://images.unsplash.com/photo-1530545233050-3f0a5d0dd1ac?auto=format&fit=crop&w=600&q=80",
    description: "Ultra-compact multi-port wall charger for phone, tablet, and laptop.",
    longDescription: "Powered by advanced Gallium Nitride (GaN) transistors, this charger handles high-speed charging for three devices concurrently. Pocketable format replaces bulky power bricks.",
    sizes: ["One Size"],
    specs: { "Prongs": "US Foldable", "Ports": "2x USB-C (100W Max), 1x USB-A (22.5W)", "Efficiency": "95%", "Dimensions": "2.4\" x 2.4\" x 1.2\"" }
  },
  {
    id: "mobile-3",
    name: "MagStream Magnetic Dock",
    category: "Mobile & Gear",
    subcategory: "Chargers",
    price: 29.99,
    rating: 4.6,
    reviewsCount: 88,
    imageUrl: "https://images.unsplash.com/photo-1545235616-db3cd822ad8c?auto=format&fit=crop&w=600&q=80",
    description: "Soft-touch desktop magnetic fast wireless charging dock.",
    longDescription: "Elevate your smartphone while charging. The MagStream snaps firmly onto MagSafe-compatible phones, holding your device at a comfortable viewing angle in both portrait and landscape configurations.",
    sizes: ["One Size"],
    specs: { "Wireless Output": "15W Max Fast Charging", "Material": "Soft Silicone + Aluminum", "Weight": "180g", "Input": "9V/2A USB-C" }
  },
  {
    id: "mobile-4",
    name: "BaseCamp Solar Power 20K",
    category: "Mobile & Gear",
    subcategory: "Power Banks",
    price: 34.99,
    rating: 4.4,
    reviewsCount: 147,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmNWY1ZjAiLz4KICA8cmVjdCB4PSIxMDAiIHk9IjkwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgcng9IjE4IiBmaWxsPSIjMmEyYTJhIi8+CiAgPHJlY3QgeD0iMzAwIiB5PSIxMjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSI0MCIgcng9IjQiIGZpbGw9IiMzMzMiLz4KICA8cmVjdCB4PSIxMTUiIHk9IjEwOCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI2NCIgcng9IjYiIGZpbGw9IiMxYTFhMWEiLz4KICA8Y2lyY2xlIGN4PSIyNTgiIGN5PSIxNDAiIHI9IjYiIGZpbGw9IiM0Q0FGNTAiLz4KICA8Y2lyY2xlIGN4PSIyNzUiIGN5PSIxNDAiIHI9IjYiIGZpbGw9IiM0Q0FGNTAiLz4KICA8Y2lyY2xlIGN4PSIyOTIiIGN5PSIxNDAiIHI9IjYiIGZpbGw9IiM1NTUiLz4KICA8cmVjdCB4PSIxMjAiIHk9IjEyMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjgiIHJ4PSI0IiBmaWxsPSIjMzMzIi8+CiAgPHJlY3QgeD0iMTIwIiB5PSIxMjAiIHdpZHRoPSI1NSIgaGVpZ2h0PSI4IiByeD0iNCIgZmlsbD0iIzRDQUY1MCIvPgogIDx0ZXh0IHg9IjEzOCIgeT0iMTYwIiBmaWxsPSIjNjY2IiBmb250LXNpemU9IjkiIGZvbnQtZmFtaWx5PSJBcmlhbCI+MjAwMDAgbUFoPC90ZXh0PgogIDx0ZXh0IHg9IjIwMCIgeT0iMjMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjODg4IiBmb250LXNpemU9IjEzIiBmb250LWZhbWlseT0iQXJpYWwiPlNvbGFyIFBvd2VyIEJhbms8L3RleHQ+Cjwvc3ZnPg==",
    description: "Heavy-duty solar-charging battery pack with built-in LED flashlight.",
    longDescription: "The ultimate wilderness backup battery. Features a high-efficiency monocrystalline solar panel, robust rubberized waterproof outer shell, dual USB charging outlets, and a bright emergency LED flashlight.",
    sizes: ["20,000 mAh"],
    specs: { "Capacity": "20,000mAh / 74Wh", "Solar Input": "5V/300mA", "Output Ports": "2x USB 5V/2.4A, 1x USB-C PD 18W", "Waterproofing": "IP67" }
  },

  // 5. Creative Gear
  {
    id: "creative-1",
    name: "PrimeShot 4K Vlog Camera",
    category: "Creative Gear",
    subcategory: "Cameras",
    price: 499.00,
    rating: 4.8,
    reviewsCount: 62,
    imageUrl: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=600&q=80",
    description: "Pocket-sized vlog camera with AI active subject tracking.",
    longDescription: "Simplify capturing video content. Made with a flip-out touch screen and high-grade directional microphone, it features smart face detection and auto-exposure to keep you framed and lit perfectly in any background.",
    sizes: ["Camera Only", "Creator Kit (+Tripod)"],
    specs: { "Sensor Size": "1-inch CMOS", "Video Quality": "4K at 30fps / 1080p at 120fps", "Screen": "3.0\" Tiltable Touchscreen", "Lens": "24-70mm f/1.8-2.8" }
  },
  {
    id: "creative-2",
    name: "Lumix Wave USB Studio Mic",
    category: "Creative Gear",
    subcategory: "Microphones",
    price: 109.99,
    rating: 4.7,
    reviewsCount: 145,
    imageUrl: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",
    description: "High-fidelity USB studio microphone with sound dampening stand.",
    longDescription: "Broadcast-quality voice capture directly via USB. Features a cardioid polar pattern, built-in pop filter, and desktop suspension shock mount that isolates low vibrations from hitting your audio.",
    sizes: ["Standard"],
    specs: { "Polar Pattern": "Cardioid", "Bit Rate": "24-bit / 96kHz", "Frequency Range": "20Hz - 20kHz", "Mute Button": "Tap-to-Mute" }
  },
  {
    id: "creative-3",
    name: "HaloRing Studio Ring Light",
    category: "Creative Gear",
    subcategory: "Accessories",
    price: 45.00,
    rating: 4.6,
    reviewsCount: 96,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmNWY1ZjAiLz4KICA8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMzUiIHI9IjkwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlMGUwZTAiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEzNSIgcj0iOTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZTg4YSIgc3Ryb2tlLXdpZHRoPSIyMiIgb3BhY2l0eT0iMC44Ii8+CiAgPGNpcmNsZSBjeD0iMjAwIiBjeT0iMTM1IiByPSI2OCIgZmlsbD0id2hpdGUiLz4KICA8Y2lyY2xlIGN4PSIyMDAiIGN5PSIxMzUiIHI9IjY1IiBmaWxsPSJub25lIiBzdHJva2U9IiNmNWY1ZjAiIHN0cm9rZS13aWR0aD0iMSIvPgogIDxyZWN0IHg9IjE5NSIgeT0iMjI1IiB3aWR0aD0iMTAiIGhlaWdodD0iNTAiIGZpbGw9IiM5OTkiLz4KICA8bGluZSB4MT0iMTg1IiB5MT0iMjY1IiB4Mj0iMTQwIiB5Mj0iMjgwIiBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgPGxpbmUgeDE9IjIxNSIgeTE9IjI2NSIgeDI9IjI2MCIgeTI9IjI4MCIgc3Ryb2tlPSIjOTk5IiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTYzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjY2NjIiBmb250LXNpemU9IjExIiBmb250LWZhbWlseT0iQXJpYWwiPlJJTkcgTElHSFQ8L3RleHQ+Cjwvc3ZnPg==",
    description: "Adjustable bi-color ring light with flexible tripod smartphone mount.",
    longDescription: "Achieve professional studio lighting on calls and videos. Featuring customizable warm and cool presets (3200K - 5600K) and diffusers to eliminate harsh glare, it mounts cleanly on desks or tripods.",
    sizes: ["10 inch Dial", "12 inch Dial"],
    specs: { "CCT Range": "3200K - 5600K", "CRI": "95+", "Power Source": "USB 5V/2A", "Stand Height": "Up to 60 inches" }
  },
  {
    id: "creative-4",
    name: "SpectraBeam Projector 4K",
    category: "Creative Gear",
    subcategory: "Projectors",
    price: 349.99,
    rating: 4.8,
    reviewsCount: 78,
    imageUrl: "https://images.unsplash.com/photo-1640941850280-930388f1f3cf?auto=format&fit=crop&w=600&q=80",
    description: "High-lumen smart home theater projector with auto focus.",
    longDescription: "A full theater screen packed inside a portable cylinder. Equipped with automatic keystone vertical corrections, instant auto focus, and built-in stereo speakers, it casts sharp 150-inch screens on any wall.",
    sizes: ["Standard"],
    specs: { "Brightness": "2000 ANSI Lumens", "Resolution": "Native 1080p, Supports 4K", "Projection Size": "40\" to 150\"", "Speakers": "Dual 5W Dolby Speakers" }
  },

  // 6. Office & Desk Setup
  {
    id: "desk-1",
    name: "LuxoGlow Brass Desk Lamp",
    category: "Office & Desk Setup",
    subcategory: "Desk Lighting",
    price: 120.00,
    rating: 4.9,
    reviewsCount: 42,
    imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=600&q=80",
    description: "Elegant solid-brass reading lamp with soft warm-tone LED dimmer.",
    longDescription: "A timeless masterpiece for study desks. Constructed entirely of hand-finished brushed solid brass, it features a heavy non-tip weighted base, adjustable arm joints, and a dimmable LED warmth controller.",
    sizes: ["Standard"],
    specs: { "Material": "Solid Brass", "Bulb Base": "E26 (Dimmable LED Included)", "Wattage": "6W Max", "Height": "18 inches" }
  },
  {
    id: "desk-2",
    name: "WoodStack Walnut Riser",
    category: "Office & Desk Setup",
    subcategory: "Monitor Riser",
    price: 85.00,
    rating: 4.8,
    reviewsCount: 110,
    imageUrl: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=600&q=80",
    description: "Premium walnut wood monitor riser with integrated cable slots.",
    longDescription: "Handcrafted from solid North American walnut wood. Lifts your monitor to ergonomic viewing heights, freeing up storage underneath for keyboards, books, and hub controllers.",
    sizes: ["Single Monitor", "Dual Monitor"],
    specs: { "Material": "Solid Walnut + Steel Legs", "Max Load": "40 lbs", "Dimensions": "18.5\" x 9.0\" x 4.2\"", "Finish": "Natural Hardwax Oil" }
  },
  {
    id: "desk-3",
    name: "ZenPad Leather Blotter",
    category: "Office & Desk Setup",
    subcategory: "Desk Mats",
    price: 49.00,
    rating: 4.7,
    reviewsCount: 76,
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    description: "Genuine vegetable-tanned leather desk pad with slip-resistant backing.",
    longDescription: "Luxurious top-grain leather that ages beautifully. Protects your desk surface while providing a flat, comfortable surface that smooths writing and mouse tracking, featuring hand-stitched borders.",
    sizes: ["Standard (31\"x15\")", "Large (36\"x18\")"],
    specs: { "Leather Type": "Top-Grain Cowhide", "Thickness": "2.5mm", "Backing": "Genuine Wool Felt", "Country of Origin": "Italy" }
  },
  {
    id: "desk-4",
    name: "AeroDock Walnut Organizer",
    category: "Office & Desk Setup",
    subcategory: "Organizers",
    price: 39.50,
    rating: 4.6,
    reviewsCount: 53,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmNWYwZWIiLz4KICA8cmVjdCB4PSI4MCIgeT0iMTgwIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjEwIiByeD0iMyIgZmlsbD0iIzhCNjM0NyIvPgogIDxyZWN0IHg9IjgwIiB5PSIxMDAiIHdpZHRoPSI3NSIgaGVpZ2h0PSI4MCIgcng9IjYiIGZpbGw9IiNhMDcxNGYiLz4KICA8cmVjdCB4PSI4NSIgeT0iMTA1IiB3aWR0aD0iNjUiIGhlaWdodD0iNzAiIHJ4PSI0IiBmaWxsPSIjYjg4NDVhIi8+CiAgPHJlY3QgeD0iMTYyIiB5PSIxMjAiIHdpZHRoPSI3NSIgaGVpZ2h0PSI2MCIgcng9IjYiIGZpbGw9IiNhMDcxNGYiLz4KICA8cmVjdCB4PSIxNjciIHk9IjEyNSIgd2lkdGg9IjY1IiBoZWlnaHQ9IjUwIiByeD0iNCIgZmlsbD0iI2I4ODQ1YSIvPgogIDxyZWN0IHg9IjI0NCIgeT0iMTEwIiB3aWR0aD0iNzUiIGhlaWdodD0iNzAiIHJ4PSI2IiBmaWxsPSIjYTA3MTRmIi8+CiAgPHJlY3QgeD0iMjQ5IiB5PSIxMTUiIHdpZHRoPSI2NSIgaGVpZ2h0PSI2MCIgcng9IjQiIGZpbGw9IiNiODg0NWEiLz4KICA8bGluZSB4MT0iOTUiIHkxPSIxMDYiIHgyPSIxMTAiIHkyPSIxMDYiIHN0cm9rZT0iIzhCNjM0NyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICA8bGluZSB4MT0iMTAwIiB5MT0iMTA2IiB4Mj0iMTAwIiB5Mj0iMTEwIiBzdHJva2U9IiM4QjYzNDciIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHRleHQgeD0iMjAwIiB5PSIyMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM4QjYzNDciIGZvbnQtc2l6ZT0iMTMiIGZvbnQtZmFtaWx5PSJBcmlhbCI+V2FsbnV0IERlc2sgT3JnYW5pemVyPC90ZXh0Pgo8L3N2Zz4=",
    description: "Magnetic wooden pen holder and tray with wireless charging spot.",
    longDescription: "An elegant home for your daily essentials. Combines a carved walnut coin/pen tray with a built-in 10W magnetic charging coil that powers wireless-compatible phones and earbuds on contact.",
    sizes: ["Standard"],
    specs: { "Material": "Walnut Wood + Matte Polycarbonate", "Wireless Speed": "10W Fast Charging", "Dimensions": "9.5\" x 3.8\" x 0.8\"", "USB Port": "USB-C Input" }
  },
  {
    id: "comp-6",
    name: "KeyChron Carbon felt Desk Mat",
    category: "Office & Desk Setup",
    subcategory: "Desk Mats",
    price: 19.99,
    rating: 4.4,
    reviewsCount: 120,
    imageUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCI+CiAgPHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmNWY1ZjAiLz4KICA8cmVjdCB4PSI0MCIgeT0iMTAwIiB3aWR0aD0iMzIwIiBoZWlnaHQ9IjExMCIgcng9IjEwIiBmaWxsPSIjMmQyZDJkIi8+CiAgPHJlY3QgeD0iNDQiIHk9IjEwNCIgd2lkdGg9IjMxMiIgaGVpZ2h0PSIxMDIiIHJ4PSI4IiBmaWxsPSIjMzgzODM4Ii8+CiAgPHJlY3QgeD0iNDQiIHk9IjEwNCIgd2lkdGg9IjMxMiIgaGVpZ2h0PSI1IiByeD0iMiIgZmlsbD0iI2IwODU1YSIgb3BhY2l0eT0iMC42Ii8+CiAgPHRleHQgeD0iMjAwIiB5PSIxNjMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2NjYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgbGV0dGVyLXNwYWNpbmc9IjMiPkNBUkJPTiBGRUxUPC90ZXh0PgogIDxyZWN0IHg9IjQwIiB5PSIyMDUiIHdpZHRoPSIzMjAiIGhlaWdodD0iNiIgcng9IjMiIGZpbGw9IiMxYTFhMWEiLz4KICA8dGV4dCB4PSIyMDAiIHk9IjI1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzg4OCIgZm9udC1zaXplPSIxMyIgZm9udC1mYW1pbHk9IkFyaWFsIj5LZXlDaHJvbiBDYXJib24gRmVsdCBEZXNrIE1hdDwvdGV4dD4KPC9zdmc+",
    description: "Spill-resistant carbon fiber felt desk mat for workspace comfort.",
    longDescription: "Bring a touch of organic texture to your desk. Made from premium pressed wool felt with a non-slip cork backing, it protects your desk surface while providing a satisfying dampening barrier under your keyboard and mouse.",
    sizes: ["Medium", "Large"],
    specs: { "Material": "Premium Wool Felt + Cork", "Thickness": "3mm", "Spill Resistant": "Yes", "Size": "900 x 400 mm" }
  },

  // 7. Personal Care Tech
  {
    id: "care-1",
    name: "AuraBrush Sonic Toothbrush",
    category: "Personal Care Tech",
    subcategory: "Dental Care",
    price: 65.00,
    rating: 4.8,
    reviewsCount: 184,
    imageUrl: "https://images.unsplash.com/photo-1559592890-6e063fd9f265?auto=format&fit=crop&w=600&q=80",
    description: "Smart ultrasonic rechargeable toothbrush with pressure sensors.",
    longDescription: "Advanced dental cleaning packed inside a matte-finish waterproof body. Delivers 40,000 vibrations per minute to scrub away plaque while integrating intelligent pressure sensors that alert you when brushing too hard.",
    sizes: ["Standard"],
    specs: { "Frequency": "40,000 vpm", "Brushing Modes": "Clean, White, Sensitive, Gum Care", "Battery Life": "Up to 30 Days", "Waterproof Rating": "IPX7" }
  },
  {
    id: "care-2",
    name: "TheraPulse Muscle Massager",
    category: "Personal Care Tech",
    subcategory: "Wellness",
    price: 110.00,
    rating: 4.7,
    reviewsCount: 95,
    imageUrl: "https://images.unsplash.com/photo-1746278925416-9d6c71f55c2d?auto=format&fit=crop&w=600&q=80",
    description: "Multi-speed percussion massager with quiet-glide motor technology.",
    longDescription: "Relieve muscle soreness instantly. The TheraPulse percussion massager delivers up to 3200 RPM of deep tissue pulses, operating quietly to allow use anywhere without disturbing others.",
    sizes: ["Standard"],
    specs: { "Motor": "Brushless Quiet-Glide 24V", "Speeds": "5 Intensities", "Attachments": "4 Interchangeable Heads", "Battery": "Up to 4 Hrs" }
  },
  {
    id: "care-3",
    name: "AeroDry Ionic Hair Dryer",
    category: "Personal Care Tech",
    subcategory: "Hair Care",
    price: 150.00,
    rating: 4.9,
    reviewsCount: 81,
    imageUrl: "https://images.unsplash.com/photo-1724271859348-bad4e179d65d?auto=format&fit=crop&w=600&q=80",
    description: "High-velocity negative ion hair dryer with magnetic styling nozzles.",
    longDescription: "Professional salon-level drying at home. Emits 200 million negative ions to neutralize static electricity, smoothing hair cuticles and accelerating drying times without exposing hair to extreme heat damage.",
    sizes: ["Standard"],
    specs: { "Wind Speed": "22 m/s", "Ionic Emission": "200M/cm³", "Attachments": "Styling Concentrator + Diffuser", "Decibel": "59dB Ultra Quiet" }
  },
  {
    id: "care-4",
    name: "Skincare Glow Wand Therapy",
    category: "Personal Care Tech",
    subcategory: "Skincare",
    price: 85.00,
    rating: 4.6,
    reviewsCount: 63,
    imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
    description: "Smart red-light therapy facial massager with warming microcurrents.",
    longDescription: "A clinical facial therapy that fits in your makeup bag. Combines red light phototherapy, soothing warm compressions, and microcurrent muscle simulations to stimulate collagen production and relax facial tensions.",
    sizes: ["Standard"],
    specs: { "Light Wave": "660nm Red LED", "Thermal Comp": "104°F Warming", "Battery": "USB Rechargeable", "Runtime": "60 mins" }
  }
];

// ── 🛒 DYNAMIC CART STATE MANAGER ──
let Cart = {
  items: JSON.parse(localStorage.getItem('antigravity_cart')) || [],

  save() {
    localStorage.setItem('antigravity_cart', JSON.stringify(this.items));
    this.updateCounters();
  },

  add(productId, quantity = 1, size = "Standard") {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = this.items.findIndex(item => item.id === productId && item.selectedSize === size);

    if (existingIndex > -1) {
      this.items[existingIndex].quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        selectedSize: size,
        quantity: quantity
      });
    }
    this.save();
    this.showToast(`Added ${product.name} to cart!`);
  },

  remove(productId, size) {
    this.items = this.items.filter(item => !(item.id === productId && item.selectedSize === size));
    this.save();
    this.renderCartPage();
  },

  updateQty(productId, size, change) {
    const item = this.items.find(item => item.id === productId && item.selectedSize === size);
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
        this.remove(productId, size);
      } else {
        this.save();
        this.renderCartPage();
      }
    }
  },

  getCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  },

  getSubtotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  updateCounters() {
    const counts = document.querySelectorAll('.cart-count');
    counts.forEach(el => {
      el.textContent = this.getCount();
      el.style.display = this.getCount() > 0 ? 'flex' : 'none';
    });
  },

  showToast(message) {
    let toast = document.getElementById('cart-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cart-toast';
      toast.style.position = 'fixed';
      toast.style.bottom = '30px';
      toast.style.right = '30px';
      toast.style.background = 'var(--text-primary)';
      toast.style.color = 'var(--bg-main)';
      toast.style.padding = '16px 24px';
      toast.style.borderRadius = 'var(--radius-sm)';
      toast.style.boxShadow = 'var(--shadow-lg)';
      toast.style.zIndex = '1000';
      toast.style.fontWeight = '600';
      toast.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease';
      toast.style.transform = 'translateY(100px)';
      toast.style.opacity = '0';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';

    setTimeout(() => {
      toast.style.transform = 'translateY(100px)';
      toast.style.opacity = '0';
    }, 3000);
  },

  renderCartPage() {
    const cartList = document.getElementById('cart-items-list');
    if (!cartList) return; // Not on cart page

    if (this.items.length === 0) {
      document.getElementById('cart-filled-view').style.display = 'none';
      document.getElementById('cart-empty-view').style.display = 'block';
      return;
    }

    document.getElementById('cart-filled-view').style.display = 'grid';
    document.getElementById('cart-empty-view').style.display = 'none';

    cartList.innerHTML = this.items.map(item => `
      <div class="cart-item glass-panel">
        <div class="cart-item-img">
          <img src="${item.imageUrl}" alt="${item.name}" />
        </div>
        <div>
          <h4 class="cart-item-name">${item.name}</h4>
          <span class="cart-item-meta">Size: ${item.selectedSize}</span>
        </div>
        <div class="qty-adjuster">
          <button class="qty-btn" onclick="Cart.updateQty('${item.id}', '${item.selectedSize}', -1)">−</button>
          <span class="qty-num">${item.quantity}</span>
          <button class="qty-btn" onclick="Cart.updateQty('${item.id}', '${item.selectedSize}', 1)">+</button>
        </div>
        <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
        <button class="remove-cart-btn" onclick="Cart.remove('${item.id}', '${item.selectedSize}')" aria-label="Remove item">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      </div>
    `).join('');

    // Update summary card
    const subtotal = this.getSubtotal();
    const shipping = subtotal > 150 ? 0.00 : 15.00;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    document.getElementById('summary-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('summary-shipping').textContent = shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`;
    document.getElementById('summary-tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('summary-total').textContent = `$${total.toFixed(2)}`;
  }
};

// ── 🎨 CLIENT-SIDE PAGES ROUTER & RENDERERS ──

// Index Home Page Initializations
function renderIndexPage() {
  // Render Countdown deals (first 5 items)
  const dealsScroller = document.getElementById('deals-scroller-track');
  if (dealsScroller) {
    dealsScroller.innerHTML = PRODUCTS.slice(0, 5).map(prod => `
      <a href="product-detail.html?id=${prod.id}" class="deal-item glass-panel">
        <div class="deal-img-wrap">
          <img src="${prod.imageUrl}" alt="${prod.name}" />
        </div>
        <span class="deal-name">${prod.name}</span>
        <span class="badge badge-accent">Save 15%</span>
      </a>
    `).join('');
    startDealsCountdown();
  }

  // Render Recommended Grids (next 8 items)
  const recommendedGrid = document.getElementById('recommended-grid-track');
  if (recommendedGrid) {
    recommendedGrid.innerHTML = PRODUCTS.slice(5, 13).map(prod => `
      <div class="product-card glass-panel" data-id="${prod.id}">
        <button class="wishlist-btn" onclick="toggleWishlist(event, '${prod.id}')" aria-label="Add to wishlist">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
        <div class="product-img-wrap" onclick="location.href='product-detail.html?id=${prod.id}'">
          <img src="${prod.imageUrl}" alt="${prod.name}" />
        </div>
        <div class="product-details-wrap" onclick="location.href='product-detail.html?id=${prod.id}'">
          <span class="product-category-lbl">${prod.category}</span>
          <h3 class="product-card-title">${prod.name}</h3>
          <div class="product-card-bottom">
            <span class="product-card-price">$${prod.price.toFixed(2)}</span>
            <button class="add-cart-icon-btn" onclick="event.stopPropagation(); Cart.add('${prod.id}', 1, 'One Size')" aria-label="Add to cart">
              <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18m-11 4a3 3 0 0 0 6 0"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `).join('');
    setupTiltCards();
  }

  // Setup homepage slider auto-rotation
  initHeroSlider();

  // Render Welcoming card session
  renderUserCard();
}

// Listing Page Rendering (Filters + Search)
function renderListingPage() {
  const productsGrid = document.getElementById('listing-products-grid');
  if (!productsGrid) return;

  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search') ? urlParams.get('search').toLowerCase() : '';
  const catQuery = urlParams.get('category') || '';

  // Get active filters
  const activeCats = Array.from(document.querySelectorAll('.filter-cat-checkbox:checked')).map(cb => cb.value);
  const activePrices = Array.from(document.querySelectorAll('.filter-price-checkbox:checked')).map(cb => cb.value);

  // If query categories from URL exist, precheck them
  if (catQuery && activeCats.length === 0) {
    const cb = document.querySelector(`.filter-cat-checkbox[value="${catQuery}"]`);
    if (cb) {
      cb.checked = true;
      activeCats.push(catQuery);
    }
  }

  let filtered = PRODUCTS.filter(prod => {
    // Search match
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery) ||
      prod.category.toLowerCase().includes(searchQuery) ||
      prod.description.toLowerCase().includes(searchQuery);

    // Category match
    const matchesCat = activeCats.length === 0 || activeCats.includes(prod.category);

    // Price match
    let matchesPrice = true;
    if (activePrices.length > 0) {
      matchesPrice = activePrices.some(range => {
        if (range === 'under50') return prod.price < 50;
        if (range === '50to150') return prod.price >= 50 && prod.price <= 150;
        if (range === 'over150') return prod.price > 150;
        return true;
      });
    }

    return matchesSearch && matchesCat && matchesPrice;
  });

  document.getElementById('listing-result-count').textContent = `${filtered.length} items found`;

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="empty-cart-view" style="grid-column: 1/-1;">
        <svg viewBox="0 0 24 24" width="80" height="80" stroke="currentColor" stroke-width="1" fill="none"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <h3>No items match your criteria</h3>
        <p>Try resetting filters or search query.</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(prod => `
    <div class="product-card glass-panel" data-id="${prod.id}">
      <button class="wishlist-btn" onclick="toggleWishlist(event, '${prod.id}')" aria-label="Add to wishlist">
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </button>
      <div class="product-img-wrap" onclick="location.href='product-detail.html?id=${prod.id}'">
        <img src="${prod.imageUrl}" alt="${prod.name}" />
      </div>
      <div class="product-details-wrap" onclick="location.href='product-detail.html?id=${prod.id}'">
        <span class="product-category-lbl">${prod.category}</span>
        <h3 class="product-card-title">${prod.name}</h3>
        <div class="product-card-bottom">
          <span class="product-card-price">$${prod.price.toFixed(2)}</span>
          <button class="add-cart-icon-btn" onclick="event.stopPropagation(); Cart.add('${prod.id}', 1, 'One Size')" aria-label="Add to cart">
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18m-11 4a3 3 0 0 0 6 0"></path></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  setupTiltCards();
}

// Detail Page rendering
function renderDetailPage() {
  const detailContainer = document.getElementById('product-detail-view');
  if (!detailContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

  detailContainer.innerHTML = `
    <div class="detail-grid">
      <!-- 3D Image Showcase -->
      <div class="detail-img-showcase glass-panel">
        <img src="${product.imageUrl}" alt="${product.name}" />
      </div>

      <!-- Specs details -->
      <div class="detail-info">
        <span class="detail-category">${product.category} &rsaquo; ${product.subcategory}</span>
        <h1 class="detail-title">${product.name}</h1>
        
        <div class="detail-price-row">
          <span class="detail-price">$${product.price.toFixed(2)}</span>
          <div class="detail-rating">
            <svg viewBox="0 0 24 24" width="18" height="18"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span><strong>${product.rating}</strong> (${product.reviewsCount} reviews)</span>
          </div>
        </div>

        <p class="detail-desc">${product.longDescription}</p>

        <!-- Size Guide Selection -->
        <div>
          <h4 class="selector-label">Select Options / Size</h4>
          <div class="size-chips">
            ${product.sizes.map((size, idx) => `
              <button class="size-chip ${idx === 0 ? 'active' : ''}" onclick="selectSizeChip(this)">${size}</button>
            `).join('')}
          </div>
        </div>

        <!-- Quantity Adjuster -->
        <div class="qty-row">
          <div>
            <h4 class="selector-label">Quantity</h4>
            <div class="qty-adjuster">
              <button class="qty-btn" onclick="adjustDetailQty(-1)">−</button>
              <span class="qty-num" id="detail-qty-val">1</span>
              <button class="qty-btn" onclick="adjustDetailQty(1)">+</button>
            </div>
          </div>
        </div>

        <div class="detail-actions">
          <button class="btn-primary" onclick="addDetailToCart('${product.id}')">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18m-11 4a3 3 0 0 0 6 0"></path></svg>
            Add to Cart
          </button>
          <button class="btn-secondary" onclick="toggleWishlist(event, '${product.id}')">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>

    <!-- Reviews Grid Section -->
    <div class="reviews-section">
      <div class="section-header">
        <h2 class="section-title">Verified Reviews</h2>
      </div>
      <div class="reviews-grid">
        <div class="review-summary-card glass-panel">
          <span class="review-big-num">${product.rating}</span>
          <div class="detail-rating">
            <svg viewBox="0 0 24 24" width="18" height="18"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg viewBox="0 0 24 24" width="18" height="18"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg viewBox="0 0 24 24" width="18" height="18"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg viewBox="0 0 24 24" width="18" height="18"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg viewBox="0 0 24 24" width="18" height="18"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
          <p>${product.reviewsCount} customers shared their feedback</p>
        </div>
        <div class="review-list">
          <div class="review-item glass-panel">
            <div class="review-header">
              <span class="review-user">Liam Anderson</span>
              <span>★★★★★</span>
            </div>
            <p class="review-comment">Stunning craftsmanship. The material choices feel absolutely premium. The audio profile is very balanced and warm, perfect for daily listening.</p>
          </div>
          <div class="review-item glass-panel">
            <div class="review-header">
              <span class="review-user">Emma Sofia</span>
              <span>★★★★☆</span>
            </div>
            <p class="review-comment">Works flawlessly as described. Extremely comfortable during extended usage. Shipping was quick and the packaging was eco-friendly.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Cross Selling Grid -->
    <div style="margin-top: 60px;">
      <h2 class="section-title" style="margin-bottom: 30px;">Related Add-ons</h2>
      <div class="product-grid" id="related-product-row"></div>
    </div>
  `;

  // Render related products (other items in same category)
  const relatedRow = document.getElementById('related-product-row');
  if (relatedRow) {
    const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
    relatedRow.innerHTML = related.map(prod => `
      <div class="product-card glass-panel" data-id="${prod.id}">
        <button class="wishlist-btn" onclick="toggleWishlist(event, '${prod.id}')" aria-label="Add to wishlist">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </button>
        <div class="product-img-wrap" onclick="location.href='product-detail.html?id=${prod.id}'">
          <img src="${prod.imageUrl}" alt="${prod.name}" />
        </div>
        <div class="product-details-wrap" onclick="location.href='product-detail.html?id=${prod.id}'">
          <span class="product-category-lbl">${prod.category}</span>
          <h3 class="product-card-title">${prod.name}</h3>
          <div class="product-card-bottom">
            <span class="product-card-price">$${prod.price.toFixed(2)}</span>
            <button class="add-cart-icon-btn" onclick="event.stopPropagation(); Cart.add('${prod.id}', 1, 'One Size')" aria-label="Add to cart">
              <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18m-11 4a3 3 0 0 0 6 0"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `).join('');
    setupTiltCards();
  }

  setupTiltCards();
}

// Product detail size interactions
function selectSizeChip(button) {
  const siblings = button.parentNode.children;
  for (let sibling of siblings) {
    sibling.classList.remove('active');
  }
  button.classList.add('active');
}

// Quantity counters
function adjustDetailQty(val) {
  const qtyEl = document.getElementById('detail-qty-val');
  let current = parseInt(qtyEl.textContent);
  current += val;
  if (current < 1) current = 1;
  qtyEl.textContent = current;
}

function addDetailToCart(productId) {
  const qty = parseInt(document.getElementById('detail-qty-val').textContent);
  const activeSizeEl = document.querySelector('.size-chip.active');
  const size = activeSizeEl ? activeSizeEl.textContent : "Standard";
  Cart.add(productId, qty, size);
}

// Wishlist interaction
function toggleWishlist(event, productId) {
  event.stopPropagation();
  event.preventDefault();
  const btn = event.currentTarget;
  btn.classList.toggle('active');

  const isWishlisted = btn.classList.contains('active');
  Cart.showToast(isWishlisted ? "Item pinned to your wishlist!" : "Item removed from wishlist.");
}

// ── 🎠 HERO SLIDER CONTROLLER ──
function initHeroSlider() {
  const sliderTrack = document.getElementById('hero-slider-track');
  if (!sliderTrack) return;

  const dotsContainer = document.getElementById('hero-slider-dots');

  // Slider database
  const sliderData = [
    {
      subtitle: "Acoustic Craftsmanship",
      title: "Sound, Reimagined.",
      desc: "Immerse in detailed high-fidelity ANC headphones handcrafted for ultimate listening comfort.",
      imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      link: "product-detail.html?id=audio-1"
    },
    {
      subtitle: "Workspace Ergonomics",
      title: "Walnut Monitor Riser",
      desc: "Reclaim clean desk surfaces while elevating displays to correct physical posture angles.",
      imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
      link: "product-detail.html?id=desk-2"
    },
    {
      subtitle: "Smart Skin Therapy",
      title: "Skincare Glow Wand",
      desc: "Unlock radiant skin routines combining red-light phototherapy with microcurrent compression.",
      imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      link: "product-detail.html?id=care-4"
    }
  ];

  sliderTrack.innerHTML = sliderData.map((data, idx) => `
    <div class="slide ${idx === 0 ? 'active' : ''}" style="background-image: url('${data.imageUrl}'); background-size: cover; background-position: center;">
      <div class="slide-content">
        <span class="slide-subtitle">${data.subtitle}</span>
        <h1 class="slide-title">${data.title}</h1>
        <p class="slide-desc">${data.desc}</p>
        <button class="btn-primary" onclick="location.href='${data.link}'">Discover Collection</button>
      </div>
    </div>
  `).join('');

  const freshSlides = sliderTrack.querySelectorAll('.slide');

  // Insert Dots
  dotsContainer.innerHTML = sliderData.map((_, idx) => `
    <span class="slider-dot ${idx === 0 ? 'active' : ''}" onclick="goToSlide(${idx})"></span>
  `).join('');

  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 6000);

  window.goToSlide = function (index) {
    clearInterval(slideInterval);
    freshSlides[currentSlide].classList.remove('active');
    document.querySelectorAll('.slider-dot')[currentSlide].classList.remove('active');

    currentSlide = index;

    freshSlides[currentSlide].classList.add('active');
    document.querySelectorAll('.slider-dot')[currentSlide].classList.add('active');
    slideInterval = setInterval(nextSlide, 6000);
  };

  function nextSlide() {
    freshSlides[currentSlide].classList.remove('active');
    document.querySelectorAll('.slider-dot')[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + 1) % freshSlides.length;

    freshSlides[currentSlide].classList.add('active');
    document.querySelectorAll('.slider-dot')[currentSlide].classList.add('active');
  }
}

// ── ⏰ DEALS COUNTDOWN TIMER ──
function startDealsCountdown() {
  const daysEl = document.getElementById('deals-days');
  const hoursEl = document.getElementById('deals-hours');
  const minsEl = document.getElementById('deals-mins');
  const secsEl = document.getElementById('deals-secs');

  if (!daysEl) return;

  let totalSeconds = 4 * 24 * 60 * 60 + 13 * 60 * 60 + 46 * 60 + 56;

  const timer = setInterval(() => {
    totalSeconds--;
    if (totalSeconds <= 0) {
      clearInterval(timer);
      return;
    }

    const d = Math.floor(totalSeconds / (24 * 3600));
    const h = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = Math.floor(totalSeconds % 60);

    daysEl.textContent = String(d).padStart(2, '0');
    hoursEl.textContent = String(h).padStart(2, '0');
    minsEl.textContent = String(m).padStart(2, '0');
    secsEl.textContent = String(s).padStart(2, '0');
  }, 1000);
}

// ── 🕶 NIGHT MODE & GLOBAL LAYOUT SETUP ──
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem('antigravity_theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('antigravity_theme', isDark ? 'dark' : 'light');

    if (isDark) {
      themeToggle.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    } else {
      themeToggle.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    }
  });
}

function initGlobalSearch() {
  const searchInput = document.getElementById('nav-search-bar');
  if (!searchInput) return;

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const q = searchInput.value.trim();
      location.href = `products.html?search=${encodeURIComponent(q)}`;
    }
  });
}

// ── 👤 INTERACTIVE MOCK SESSIONS ──
function renderUserCard() {
  const card = document.getElementById('welcome-user-card');
  if (!card) return;

  const user = localStorage.getItem('aura_user');
  if (user) {
    card.innerHTML = `
      <div class="welcome-avatar">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </div>
      <div>
        <h3>Hi, ${user}</h3>
        <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 4px;">Welcome back to Aura.</p>
      </div>
      <div class="welcome-buttons">
        <button class="btn-primary" onclick="location.href='products.html'" style="padding: 10px 20px; font-size: 0.9rem; justify-content: center;">Shop Catalog</button>
        <button class="btn-secondary" onclick="signOutUser()" style="padding: 10px 20px; font-size: 0.9rem; justify-content: center; margin-top: 6px;">Sign Out</button>
      </div>
    `;
  } else {
    card.innerHTML = `
      <div class="welcome-avatar">
        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </div>
      <div>
        <h3>Welcome Guest</h3>
        <p style="color: var(--text-secondary); font-size: 0.85rem; margin-top: 4px;">Sign in for persistent shopping.</p>
      </div>
      <div class="welcome-buttons">
        <button class="btn-primary" onclick="signInUser()" style="padding: 10px 20px; font-size: 0.9rem; justify-content: center;">Sign In</button>
        <button class="btn-secondary" onclick="Cart.showToast('Account creation is simulated.')" style="padding: 10px 20px; font-size: 0.9rem; justify-content: center; margin-top: 6px;">Create Account</button>
      </div>
    `;
  }
}

window.signInUser = function () {
  localStorage.setItem('aura_user', 'John Doe');
  renderUserCard();
  Cart.showToast("Signed in as John Doe");
};

window.signOutUser = function () {
  localStorage.removeItem('aura_user');
  renderUserCard();
  Cart.showToast("Signed out successfully");
};

// ── 3D TILT PARALLAX EFFECT ──
function setupTiltCards() {
  const cards = document.querySelectorAll('.product-card, .welcome-card, .promo-card, .deals-card, .detail-img-showcase');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((centerY - y) / centerY) * 3;
      const rotateY = ((x - centerX) / centerX) * 3;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;
      card.style.transition = 'none';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
      card.style.transition = 'transform 0.5s ease';
    });
  });
}

// ── 🎬 PAGE ROUTER ON INITIALIZATION ──
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  Cart.updateCounters();
  initGlobalSearch();

  // Route page renders
  if (document.getElementById('deals-scroller-track')) {
    renderIndexPage();
  } else if (document.getElementById('listing-products-grid')) {
    renderListingPage();

    const filterCheckboxes = document.querySelectorAll('.filter-cat-checkbox, .filter-price-checkbox');
    filterCheckboxes.forEach(cb => {
      cb.addEventListener('change', renderListingPage);
    });
  } else if (document.getElementById('product-detail-view')) {
    renderDetailPage();
  } else if (document.getElementById('cart-items-list')) {
    Cart.renderCartPage();

    const checkoutBtn = document.getElementById('checkout-action-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        Cart.showToast("Proceeding to secure payment... Simulation checkout complete!");
        setTimeout(() => {
          Cart.items = [];
          Cart.save();
          Cart.renderCartPage();
        }, 1500);
      });
    }
  }
});
