/**
 * COMMERCIAL GYM CONFIGURATION ENGINE
 * -------------------------------------------------------------
 * Agency Tip: Easily re-brand this website for ANY gym client in 2 minutes!
 * Just modify the values below or switch presets.
 */

const gymConfig = {

    /* ============================= */
    /* BRAND & THEME CONFIGURATION */
    /* ============================= */

    gymName: "IRONFORGE",

    brandSuffix: " FITNESS",

    tagline: "BUILD YOUR STRONGEST SELF.",

    // Primary Brand Accent Color (Hex code)
    accentColor: "#ff3c00",

    /* ============================= */
    /* QUICK PRESETS AVAILABLE FOR CLIENTS:
     * - "IRONFORGE"  (Heavy Duty / Hardcore / Orange Accent)
     * - "TITAN"      (Luxury Club / Gold Accent #d4af37)
     * - "PULSE"      (Modern HIIT / Electric Cyan #00e5ff)
     * - "VALKYRIE"   (Women's Fitness / Neon Pink #ff007f)
     * ============================= */

    /* ============================= */
    /* CONTACT INFORMATION */
    /* ============================= */

    phone: "+91 98765 43210",

    whatsapp: "919876543210",

    email: "hello@ironforgefitness.com",


    address: "123 Fitness Street,\nHyderabad, Telangana",

    mapLocation: "Banjara Hills, Hyderabad",

    openingHours: "Monday - Sunday | 5:00 AM - 10:00 PM",


    /* ============================= */
    /* GOOGLE SHEETS */
    /* ============================= */

    googleSheetUrl:
        "https://script.google.com/macros/s/AKfycbxV92E_F2yy0tVtIvfsTu_xJUOkA4rc7VSF3X34nCmLAvwR5dGK6dvg1WeWYgz7X21wmg/exec",

    storageKey:
        "ironforgeGymEnquiries",

    /* ============================= */
    /* DASHBOARD ACCESS & ACCOUNTS */
    /* ============================= */

    auth: {
        enabled: false,
        sessionStorageKey: "ironforge_admin_session"
    },



    /* ============================= */
    /* HERO */
    /* ============================= */

    hero: {

        eyebrow: "NO EXCUSES. JUST RESULTS.",

        titleLine1: "BUILD YOUR",

        highlight: "STRONGEST",

        titleLine3: "SELF.",

        description:
            "Train harder. Move better. Become stronger. Join a community built around discipline, consistency and real results.",

        primaryButton:
            "START TRAINING",

        secondaryButton:
            "EXPLORE PROGRAMS",

        image:
            "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=85"

    },


    /* ============================= */
    /* HERO STATS */
    /* ============================= */

    stats: {

        members: "500+",

        trainers: "15+",

        programs: "20+",

        experience: "8+"

    },


    /* ============================= */
    /* ABOUT */
    /* ============================= */

    about: {

        eyebrow: "WHO WE ARE",

        headingLine1: "MORE THAN",

        headingHighlight: "A GYM.",

        description:
            "IRONFORGE FITNESS is built for people who are serious about becoming stronger, healthier and more confident.",

        paragraph1:
            "Our facility combines modern equipment, experienced trainers and structured programs to help you train with purpose.",

        paragraph2:
            "Whether you are just starting your fitness journey or looking to push your performance further, we have a program designed for you.",

        image:
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",

        badgeNumber: "8+",

        badgeText: "YEARS OF\nEXCELLENCE"

    },


    /* ============================= */
    /* PROGRAMS */
    /* ============================= */

    programs: [

        {

            number: "01",

            name: "STRENGTH",

            description:
                "Build serious strength with progressive resistance training and expert guidance.",

            image:
                "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85"

        },

        {

            number: "02",

            name: "PERSONAL TRAINING",

            description:
                "One-on-one coaching designed around your body, goals and fitness level.",

            image:
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=85"

        },

        {

            number: "03",

            name: "HIIT",

            description:
                "High-intensity workouts designed to improve conditioning, endurance and performance.",

            image:
                "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85"

        },

        {

            number: "04",

            name: "FUNCTIONAL FITNESS",

            description:
                "Train movement, mobility and real-world strength with functional workouts.",

            image:
                "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1000&q=85"

        }

    ],


    /* ============================= */
    /* MEMBERSHIP PLANS */
    /* ============================= */

    plans: [

        {

            name: "BASIC",

            price: "999",

            period: "/ month",

            description:
                "Perfect for beginners starting their fitness journey.",

            featured: false,

            badge: "",

            features: [

                { text: "Full Gym Access" },

                { text: "Locker Access" },

                { text: "Basic Equipment" },

                { text: "Group Classes", disabled: true },

                { text: "Personal Trainer", disabled: true }

            ]

        },

        {

            name: "PRO",

            price: "1,999",

            period: "/ month",

            description:
                "Everything you need to train consistently and progress faster.",

            featured: true,

            badge: "MOST POPULAR",

            features: [

                { text: "Full Gym Access" },

                { text: "Locker Access" },

                { text: "All Equipment" },

                { text: "Group Classes" },

                { text: "Personal Trainer", disabled: true }

            ]

        },

        {

            name: "ELITE",

            price: "2,999",

            period: "/ month",

            description:
                "The complete fitness experience with dedicated coaching.",

            featured: false,

            badge: "",

            features: [

                { text: "Full Gym Access" },

                { text: "Locker Access" },

                { text: "All Equipment" },

                { text: "Group Classes" },

                { text: "Personal Trainer" }

            ]

        }

    ],


    /* ============================= */
    /* TESTIMONIALS */
    /* ============================= */

    testimonials: [

        {

            quote:
                "The atmosphere here keeps me motivated every single day. The trainers actually care about your progress.",

            name: "Rahul M.",

            role: "MEMBER",

            rating: 5

        },

        {

            quote:
                "I joined with almost no gym experience. Within a few months I became stronger and much more confident.",

            name: "Priya S.",

            role: "MEMBER",

            rating: 5

        },

        {

            quote:
                "Great equipment, great trainers and an amazing community. It feels like everyone wants you to improve.",

            name: "Arjun K.",

            role: "MEMBER",

            rating: 5

        }

    ],


    /* ============================= */
    /* GALLERY */
    /* ============================= */

    gallery: [

        {

            image:
                "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",

            title: "TRAIN HARD"

        },

        {

            image:
                "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=85",

            title: "STAY STRONG"

        },

        {

            image:
                "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85",

            title: "PUSH LIMITS"

        },

        {

            image:
                "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85",

            title: "GET RESULTS"

        },

        {

            image:
                "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1200&q=85",

            title: "KEEP MOVING"

        },

        {

            image:
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=85",

            title: "BECOME BETTER"

        }

    ],


    /* ============================= */
    /* TRAINERS */
    /* ============================= */

    trainers: [

        {

            name: "ALEX JOHNSON",

            role: "HEAD COACH",

            description:
                "Strength and conditioning specialist focused on helping members build long-term performance.",

            image:
                "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85"

        },

        {

            name: "SARAH WILLIAMS",

            role: "FITNESS COACH",

            description:
                "Personal trainer specialising in functional fitness, mobility and body transformation.",

            image:
                "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=85"

        },

        {

            name: "DAVID MARTIN",

            role: "PERFORMANCE COACH",

            description:
                "Helping athletes and fitness enthusiasts improve strength, conditioning and performance.",

            image:
                "https://images.unsplash.com/photo-1584863231364-2edc166de576?auto=format&fit=crop&w=900&q=85"

        }

    ],


    /* ============================= */
    /* CONTACT FORM GOALS */
    /* ============================= */

    fitnessGoals: [

        "Weight Loss",

        "Muscle Gain",

        "Strength Training",

        "General Fitness",

        "Personal Training",

        "Other"

    ],


    /* ============================= */
    /* SOCIAL MEDIA */
    /* ============================= */

    social: {

        instagram: "#",

        facebook: "#",

        youtube: "#"

    }

};