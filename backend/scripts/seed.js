const sequelize = require('../config/database');
const Service = require('../models/Service');
const Product = require('../models/Product');

const servicesData = [
    {
        title: "Web Development",
        description: "Modern, high-performance web applications.",
        icon: "CodeBracketIcon",
        image: "/images/services/web-dev.png"
    },
    {
        title: "Mobile Apps",
        description: "Cross-platform mobile solutions for iOS and Android.",
        icon: "DevicePhoneMobileIcon",
        image: "/images/services/mobile-app.png"
    },
    {
        title: "AI & Automation",
        description: "Intelligent systems to optimize workflows.",
        icon: "CpuChipIcon",
        image: "/images/services/ai-automation.png"
    },
    {
        title: "Cloud & DevOps",
        description: "Scalable cloud infrastructure and CI/CD pipelines.",
        icon: "CloudIcon",
        image: "/images/services/cloud-devops.png"
    },
    {
        title: "UI / UX Design",
        description: "User-focused design for better engagement.",
        icon: "PaintBrushIcon",
        image: "/images/services/ui-ux.png"
    },
    {
        title: "Enterprise Software",
        description: "Custom systems built for scale and security.",
        icon: "BuildingOffice2Icon",
        image: "/images/services/enterprise.png"
    }
];

const productsData = [
    {
        name: "Embaino",
        status: "Beta",
        description: "A smart Visitor Management System for corporate and residential usage.",
        image: "/images/products/embaino.png",
        features: [
            "Touchless registration to avoid queues and hassle",
            "Face recognition for faster and smooth entry",
            "OTP verification for authentication"
        ],
        useCases: [
            "Corporate Parks",
            "Residential Complexes",
            "Major Events"
        ]
    },
    {
        name: "Vendora",
        status: "Live",
        description: "AI-powered platform to streamline invoice submission and processing for vendors.",
        image: "/images/products/vendora.png",
        features: [
            "AI-assisted invoice submission",
            "Online submission and processing",
            "Timely processing of invoices",
            "Structured and organised bill management"
        ],
        useCases: [
            "Hospitals",
            "Real estate companies",
            "Product-based businesses"
        ]
    },
    {
        name: "MSP",
        status: "Coming Soon",
        description: "A modern project management application.",
        image: "/images/products/msp.png",
        features: [
            "Mail integration",
            "Graph visualisation",
            "Export of documents",
            "Role and access management"
        ],
        useCases: [
            "Real estate",
            "Product-based IT companies",
            "Marketing and Sales",
            "Manufacturing and Production"
        ]
    },
    {
        name: "Quotalyze",
        status: "Coming Soon",
        description: "An AI-powered quotation analytics platform for data-driven decisions.",
        image: "/images/products/quotalyze.png",
        features: [
            "Support for multiple file types",
            "Ensures completeness of quotations",
            "Compares previous quotes to analyze trends",
            "Downloadable reports"
        ],
        useCases: [
            "Contract teams",
            "Business analysts",
            "Purchase teams"
        ]
    }
];

const seedDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected.');

        // Sync database (force: true drops tables and re-creates them)
        await sequelize.sync({ force: true });
        console.log('Database synced.');

        await Service.bulkCreate(servicesData);
        console.log('Services seeded.');

        await Product.bulkCreate(productsData);
        console.log('Products seeded.');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
