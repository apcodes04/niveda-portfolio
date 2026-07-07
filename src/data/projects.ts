export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  shortDescription: string;
  coverImage: string;
  gallery: string[];
  scope: string[];
  designPhilosophy: string;
  challenge: string;
  process: string;
  finalOutput: string;
}

export const projects: Project[] = [
  {
    id: "panvel-interior",
    title: "Panvel Interior Work",
    category: "Interior Design",
    location: "Panvel, Maharashtra",
    year: "2023",
    area: "2BHK",
    shortDescription: "Complete interior design and execution of a 2BHK flat.",
    coverImage: "/images/projects/panvel-interior.png",
    gallery: [
      "/images/detail-images/Panvel/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_155.jpg",
      "/images/detail-images/Panvel/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_156.png",
      "/images/detail-images/Panvel/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_157.jpg",
      "/images/detail-images/Panvel/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_160%20(1).jpg",
      "/images/detail-images/Panvel/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_160.jpg",
      "/images/detail-images/Panvel/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_161.jpg",
      "/images/detail-images/Panvel/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_162.jpg"
    ],
    scope: ["Concept Design", "Production Drawings", "Material Selection", "Site Supervision"],
    designPhilosophy: "Creating a flawless, picturesque interior exactly executed as per 3D designs.",
    challenge: "Ensuring 100% fidelity between the 3D renders and the final execution on site.",
    process: "Managed every aspect from initial design phase to production drawings and material selections.",
    finalOutput: "The client was thoroughly impressed by the final result."
  },
  {
    id: "micl-interior",
    title: "MICL Interior Work",
    category: "Interior Design",
    location: "Mumbai, Maharashtra",
    year: "2023",
    area: "Residential",
    shortDescription: "Comprehensive interior project executed to client's specifications.",
    coverImage: "/images/projects/micl-interior.jpg",
    gallery: [
      "/images/detail-images/MICL%20PROJECT/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_144.jpg",
      "/images/detail-images/MICL%20PROJECT/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_146.jpg",
      "/images/detail-images/MICL%20PROJECT/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_147%20(1).jpg",
      "/images/detail-images/MICL%20PROJECT/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_147%20(2).jpg",
      "/images/detail-images/MICL%20PROJECT/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_147.jpg",
      "/images/detail-images/MICL%20PROJECT/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_148.jpg",
      "/images/detail-images/MICL%20PROJECT/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_150.jpg",
      "/images/detail-images/MICL%20PROJECT/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_151.jpg",
      "/images/detail-images/MICL%20PROJECT/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_152.jpg",
      "/images/detail-images/MICL%20PROJECT/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_153%20(1).jpg",
      "/images/detail-images/MICL%20PROJECT/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_153%20(2).jpg",
      "/images/detail-images/MICL%20PROJECT/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_153.jpg"
    ],
    scope: ["Carpentry", "False Ceiling", "Painting", "Lighting", "Material Selection"],
    designPhilosophy: "Harmonizing color shades, laminates, and fabric materials with perfect lighting.",
    challenge: "Supervising multi-disciplinary tasks to ensure flawless execution.",
    process: "Personally supervised tasks such as carpentry, false ceiling work, and painting.",
    finalOutput: "A highly satisfactory and flawless look that inspired future striving."
  },
  {
    id: "kj-bungalow",
    title: "KJ Bungalow Design",
    category: "Architecture",
    location: "Maharashtra",
    year: "2022",
    area: "Bungalow",
    shortDescription: "Abstract and artistic bungalow design focusing on unique facade and climate study.",
    coverImage: "/images/projects/kj-bungalow.jpg",
    gallery: [
      "/images/detail-images/KJ%20BUNGLOW%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_116.jpg",
      "/images/detail-images/KJ%20BUNGLOW%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_118%20(1).jpg",
      "/images/detail-images/KJ%20BUNGLOW%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_118%20(2).jpg",
      "/images/detail-images/KJ%20BUNGLOW%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_120%20(1).jpg",
      "/images/detail-images/KJ%20BUNGLOW%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_120.jpg",
      "/images/detail-images/KJ%20BUNGLOW%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_122.jpg",
      "/images/detail-images/KJ%20BUNGLOW%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_123.jpg"
    ],
    scope: ["Abstract Design", "Facade Treatment", "Climate Study", "Circulation Planning"],
    designPhilosophy: "Meeting specific client requirements with a standout, artistic facade while ensuring proper circulation.",
    challenge: "Balancing an abstract aesthetic with optimal client comfort and climate suitability.",
    process: "Thorough climate study and strategic planning of circulation spaces.",
    finalOutput: "A standout bungalow tailored to the site and client."
  },
  {
    id: "gev-building",
    title: "G.E.V. Building",
    category: "Architecture",
    location: "Goverdhan Eco Village",
    year: "2021",
    area: "4-Story Building",
    shortDescription: "Sustainable and efficient 4-story building in a tourist destination.",
    coverImage: "/images/projects/gev-building.jpg",
    gallery: [
      "/images/detail-images/G.E.V.%20BUILDING/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_125%20(1).jpg",
      "/images/detail-images/G.E.V.%20BUILDING/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_125.jpg",
      "/images/detail-images/G.E.V.%20BUILDING/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_127%20(1).jpg",
      "/images/detail-images/G.E.V.%20BUILDING/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_127.jpg",
      "/images/detail-images/G.E.V.%20BUILDING/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_128.jpg",
      "/images/detail-images/G.E.V.%20BUILDING/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_129.jpg",
      "/images/detail-images/G.E.V.%20BUILDING/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_132.jpg"
    ],
    scope: ["Sustainable Design", "Natural Material Integration", "Efficiency Planning"],
    designPhilosophy: "Using natural materials to create a soothing ambiance focused on sustainability.",
    challenge: "Designing within the context of a famous eco-tourist destination.",
    process: "Integrating natural materials and efficient building practices.",
    finalOutput: "A soothing, efficient, and sustainable structure."
  },
  {
    id: "vrindawan",
    title: "Vrindawan",
    category: "Architecture",
    location: "Vrindavan",
    year: "2021",
    area: "Dormitory",
    shortDescription: "Dormitory for devotees showcasing Indian traditional architecture.",
    coverImage: "/images/projects/vrindawan.jpg",
    gallery: [
      "/images/detail-images/VRINDAWAN/1.jpeg",
      "/images/detail-images/VRINDAWAN/2.jpeg",
      "/images/detail-images/VRINDAWAN/3.jpeg",
      "/images/detail-images/VRINDAWAN/4.jpeg",
      "/images/detail-images/VRINDAWAN/5.jpeg",
      "/images/detail-images/VRINDAWAN/6.jpeg"
    ],
    scope: ["Traditional Architecture", "Eco-friendly Materials", "Religious Purpose Design"],
    designPhilosophy: "Blending elements of Indian traditional architecture with eco-friendly and sustainable materials.",
    challenge: "Creating a remarkable space for religious purposes that respects tradition and sustainability.",
    process: "Designing for devotees with a focus on traditional aesthetics.",
    finalOutput: "An exceptional dormitory project in the sacred city."
  },
  {
    id: "dental-institute",
    title: "Dental Institute",
    category: "Architecture",
    location: "Academic Campus",
    year: "2019",
    area: "Institutional",
    shortDescription: "Specifically tailored to the needs of dental students with study and practice rooms.",
    coverImage: "/images/projects/dental-institute.jpg",
    gallery: [
      "/images/detail-images/DENTAL%20INSTITUTE/Gemini_Generated_Image_c6gcekc6gcekc6gc%20(1).png",
      "/images/detail-images/DENTAL%20INSTITUTE/Gemini_Generated_Image_lixzjtlixzjtlixz%20(1).png"
    ],
    scope: ["Institutional Design", "Space Planning", "Sunlight Optimization", "Landscaping"],
    designPhilosophy: "Creating a conducive environment with a combination of study and practice rooms.",
    challenge: "Accommodating the number of students and their specific requirements while maintaining study standards.",
    process: "Ensuring ample sunlight, pleasant landscaping, and proper ventilation throughout the structure.",
    finalOutput: "An excellent learning experience space for dental students."
  },
  {
    id: "mass-housing",
    title: "Mass Housing",
    category: "Architecture",
    location: "Thane, Maharashtra",
    year: "2020",
    area: "Township",
    shortDescription: "Designing spaces that cater to different requirements across income groups.",
    coverImage: "/images/projects/mass-housing.jpg",
    gallery: ["/images/projects/mass-housing.jpg"],
    scope: ["Master Planning", "EWS/LIG/MIG/HIG Layouts", "Zoning", "Elevations"],
    designPhilosophy: "Ensuring everyone has access to comfortable and practical living spaces regardless of income group.",
    challenge: "Catering to specific room requirements, facilities, and amenities for diverse income groups (LIG, MIG, HIG, EWS).",
    process: "Carefully studying needs and preferences, creating specific typical and stilt plans for each block.",
    finalOutput: "A practical and functional mass housing project making a positive impact on the community."
  },
  {
    id: "motel-design",
    title: "Motel Design",
    category: "Architecture",
    location: "Eastern Express Highway, Kalyan",
    year: "2020",
    area: "Commercial",
    shortDescription: "Fidget spinner inspired motel designed for the needs and footfall of the highway.",
    coverImage: "/images/projects/motel-design.jpg",
    gallery: [
      "/images/detail-images/MOTEL%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_12.png",
      "/images/detail-images/MOTEL%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_13.png",
      "/images/detail-images/MOTEL%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_14.png",
      "/images/detail-images/MOTEL%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_22.jpg",
      "/images/detail-images/MOTEL%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_25.jpg",
      "/images/detail-images/MOTEL%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_27%20(1).png",
      "/images/detail-images/MOTEL%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_27.png",
      "/images/detail-images/MOTEL%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_42%20(1).png",
      "/images/detail-images/MOTEL%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_42.png",
      "/images/detail-images/MOTEL%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_45.png",
      "/images/detail-images/MOTEL%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_46.png",
      "/images/detail-images/MOTEL%20DESIGN/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_48.png",
      "/images/detail-images/MOTEL%20DESIGN/Gemini_Generated_Image_1daw7q1daw7q1daw-removebg-preview%20(1).png",
      "/images/detail-images/MOTEL%20DESIGN/Gemini_Generated_Image_84ffzv84ffzv84ff%20(2).png",
      "/images/detail-images/MOTEL%20DESIGN/WhatsApp%20Image%202026-01-22%20at%2002.34.12%20(1).jpg",
      "/images/detail-images/MOTEL%20DESIGN/WhatsApp%20Image%202026-01-22%20at%2002.34.12%20(2).jpg",
      "/images/detail-images/MOTEL%20DESIGN/image%20(1).png",
      "/images/detail-images/MOTEL%20DESIGN/png.png"
    ],
    scope: ["Concept Designing", "Zoning", "CAD Planning", "3D Rendering"],
    designPhilosophy: "Inspired by the fidget spinner's ability to serve as a distraction from stressful thoughts. Promoting relaxation.",
    challenge: "Working within the constraints of the given site while maximizing amenities and luxurious rooms.",
    process: "Divided the site into distinct zones (Supermarket, Motel Amenities, Parking, Food Court & Outlet, Petrol Pump).",
    finalOutput: "A luxurious motel offering respite from daily stressors."
  },
  {
    id: "sketches",
    title: "Architectural Sketches",
    category: "Hand Sketches",
    location: "Various",
    year: "2023",
    area: "N/A",
    shortDescription: "A collection of architectural hand drawings, sketching studies, and artistic details.",
    coverImage: "/images/detail-images/SKETCHES/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_163.jpg",
    gallery: [
      "/images/detail-images/SKETCHES/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_163.jpg",
      "/images/detail-images/SKETCHES/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_166%20(1).jpg",
      "/images/detail-images/SKETCHES/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_166.jpg",
      "/images/detail-images/SKETCHES/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_167%20(1).jpg",
      "/images/detail-images/SKETCHES/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_167.jpg",
      "/images/detail-images/SKETCHES/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_168.jpg",
      "/images/detail-images/SKETCHES/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_170%20(1).jpg",
      "/images/detail-images/SKETCHES/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_170.jpg",
      "/images/detail-images/SKETCHES/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_171.jpg",
      "/images/detail-images/SKETCHES/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_173%20(1).jpg",
      "/images/detail-images/SKETCHES/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_173%20(2).jpg",
      "/images/detail-images/SKETCHES/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_173.jpg"
    ],
    scope: ["Pencil & Ink Sketching", "Concept Ideation", "Visual Presentation"],
    designPhilosophy: "Capturing light, shadow, and textures manually to better understand forms and spaces.",
    challenge: "Developing visual expression and speed through freehand sketching of complex structures.",
    process: "Iterative sketching on-site and from reference models using graphite, ink, and charcoal.",
    finalOutput: "An expressive visual collection showcasing hand-eye coordination and spatial comprehension."
  },
  {
    id: "sketchup-vray-renders",
    title: "Sketchup & V-Ray Renders",
    category: "3D Rendering",
    location: "Various",
    year: "2023",
    area: "Various",
    shortDescription: "Photorealistic interior and architectural visualizations generated with SketchUp and V-Ray.",
    coverImage: "/images/detail-images/SKETCHUP%20V%20RAY%20RENDERS/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_139.jpg",
    gallery: [
      "/images/detail-images/SKETCHUP%20V%20RAY%20RENDERS/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_139%20(1).jpg",
      "/images/detail-images/SKETCHUP%20V%20RAY%20RENDERS/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_139.jpg",
      "/images/detail-images/SKETCHUP%20V%20RAY%20RENDERS/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_141%20(1).jpg",
      "/images/detail-images/SKETCHUP%20V%20RAY%20RENDERS/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_141.jpg",
      "/images/detail-images/SKETCHUP%20V%20RAY%20RENDERS/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_145.jpg",
      "/images/detail-images/SKETCHUP%20V%20RAY%20RENDERS/Ar.%20Niveda%20Updated%20Portfolio%20-%20A.pdf_161%20(1).jpg"
    ],
    scope: ["3D Modeling", "V-Ray Rendering", "Texturing & Material Setup", "Lighting Design"],
    designPhilosophy: "Creating life-like renderings to assist clients in visualizing spatial scales and premium finishes.",
    challenge: "Perfecting complex refractions, fabric textures, and indirect sunlight paths to achieve photo-realism.",
    process: "Constructing precise 3D models in SketchUp, applying texture mapping, setting up realistic V-Ray materials, and post-processing.",
    finalOutput: "A high-fidelity gallery of renders showing professional architectural visualizations."
  }
];
