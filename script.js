/* ================================================= */
/* IRONFORGE FITNESS - MAIN JAVASCRIPT */
/* ================================================= */


/* ================================================= */
/* HELPER FUNCTIONS */
/* ================================================= */

function getElement(id) {

    return document.getElementById(id);

}


function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function phoneNumber(phone) {

    return String(phone)
        .replace(/\s+/g, "")
        .replace(/[()-]/g, "");

}


function setText(id, value) {

    const element = getElement(id);

    if (element) {

        element.textContent = value;

    }

}


/* ================================================= */
/* BRAND */
/* ================================================= */

function setupBrand() {

    const fullName =
        gymConfig.gymName +
        gymConfig.brandSuffix;


    document.title = fullName;


    setText(
        "gymName",
        gymConfig.gymName
    );


    setText(
        "brandSuffix",
        gymConfig.brandSuffix
    );


    setText(
        "footerGymName",
        gymConfig.gymName
    );


    setText(
        "footerBrandSuffix",
        gymConfig.brandSuffix
    );


    setText(
        "footerCopyrightName",
        fullName
    );


    setText(
        "footerTagline",
        gymConfig.tagline
    );


    document.documentElement.style.setProperty(
        "--accent",
        gymConfig.accentColor
    );

}


/* ================================================= */
/* HERO */
/* ================================================= */

function setupHero() {

    setText(
        "heroEyebrow",
        gymConfig.hero.eyebrow
    );


    setText(
        "heroTitleLine1",
        gymConfig.hero.titleLine1
    );


    setText(
        "heroHighlight",
        gymConfig.hero.highlight
    );


    setText(
        "heroTitleLine3",
        gymConfig.hero.titleLine3
    );


    setText(
        "heroDescription",
        gymConfig.hero.description
    );


    setText(
        "heroPrimaryButton",
        gymConfig.hero.primaryButton
    );


    setText(
        "heroSecondaryButton",
        gymConfig.hero.secondaryButton
    );


    const hero =
        document.querySelector(".hero");


    if (hero && gymConfig.hero.image) {

        hero.style.backgroundImage =
            `url("${gymConfig.hero.image}")`;

    }


    setText(
        "statMembers",
        gymConfig.stats.members
    );


    setText(
        "statTrainers",
        gymConfig.stats.trainers
    );


    setText(
        "statPrograms",
        gymConfig.stats.programs
    );


    setText(
        "statExperience",
        gymConfig.stats.experience
    );

}


/* ================================================= */
/* ABOUT */
/* ================================================= */

function setupAbout() {

    setText(
        "aboutEyebrow",
        gymConfig.about.eyebrow
    );


    setText(
        "aboutHeadingLine1",
        gymConfig.about.headingLine1
    );


    setText(
        "aboutHeadingHighlight",
        gymConfig.about.headingHighlight
    );


    setText(
        "aboutDescription",
        gymConfig.about.description
    );


    setText(
        "aboutParagraph1",
        gymConfig.about.paragraph1
    );


    setText(
        "aboutParagraph2",
        gymConfig.about.paragraph2
    );


    setText(
        "aboutBadgeNumber",
        gymConfig.about.badgeNumber
    );


    setText(
        "aboutBadgeText",
        gymConfig.about.badgeText
    );


    const image =
        getElement("aboutImage");


    if (image) {

        image.style.backgroundImage =
            `url("${gymConfig.about.image}")`;

    }

}


/* ================================================= */
/* CONTACT DETAILS */
/* ================================================= */

function setupContactDetails() {

    const phone =
        gymConfig.phone;


    const phoneLink =
        "tel:" + phoneNumber(phone);


    document
        .querySelectorAll(".gym-phone")
        .forEach(function (element) {

            element.textContent = phone;

            element.href = phoneLink;

        });


    setText(
        "gymAddress",
        gymConfig.address
    );


    setText(
        "gymHours",
        gymConfig.openingHours
    );


    const email =
        getElement("gymEmail");


    if (email) {

        email.textContent =
            gymConfig.email;

        email.href =
            "mailto:" + gymConfig.email;

    }


    const map =
        getElement("gymMap");


    if (map) {

        map.src =
            "https://www.google.com/maps?q=" +
            encodeURIComponent(
                gymConfig.mapLocation
            ) +
            "&output=embed";

    }


    const directions =
        getElement("directionsButton");


    if (directions) {

        directions.href =
            "https://www.google.com/maps/search/?api=1&query=" +
            encodeURIComponent(
                gymConfig.mapLocation
            );

    }

}


/* ================================================= */
/* WHATSAPP */
/* ================================================= */

function setupWhatsApp() {

    const links =
        document.querySelectorAll(
            ".whatsapp-btn, .floating-whatsapp"
        );


    links.forEach(function (link) {

        link.href =
            "https://wa.me/" +
            gymConfig.whatsapp;

    });

}


/* ================================================= */
/* PROGRAMS */
/* ================================================= */

function renderPrograms() {

    const container =
        getElement("programGrid");


    if (!container) return;


    container.innerHTML =
        gymConfig.programs.map(function (program) {

            return `

                <article class="program-card">

                    <div
                        class="program-image"
                        style="
                            background-image:
                            url('${escapeHTML(program.image)}');
                        "
                    >

                        <span class="program-number">
                            ${escapeHTML(program.number)}
                        </span>

                    </div>


                    <div class="program-content">

                        <h3>
                            ${escapeHTML(program.name)}
                        </h3>

                        <p>
                            ${escapeHTML(program.description)}
                        </p>

                        <a
                            href="#contact"
                            class="text-link"
                        >
                            LEARN MORE
                            <span>→</span>
                        </a>

                    </div>

                </article>

            `;

        }).join("");

}


/* ================================================= */
/* MEMBERSHIP PLANS */
/* ================================================= */

function renderPlans() {

    const container =
        getElement("plansGrid");


    if (!container) return;


    container.innerHTML =
        gymConfig.plans.map(function (plan) {

            const features =
                plan.features.map(function (feature) {

                    return `

                        <li class="${feature.disabled ? "disabled" : ""}">

                            <span>
                                ${feature.disabled ? "×" : "✓"}
                            </span>

                            ${escapeHTML(feature.text)}

                        </li>

                    `;

                }).join("");


            return `

                <article
                    class="
                        plan-card
                        ${plan.featured ? "featured" : ""}
                    "
                >

                    ${
                        plan.badge
                        ?
                        `
                            <div class="plan-badge">
                                ${escapeHTML(plan.badge)}
                            </div>
                        `
                        :
                        ""
                    }


                    <div class="plan-header">

                        <h3>
                            ${escapeHTML(plan.name)}
                        </h3>

                        <div class="plan-price">

                            <span class="currency">
                                ₹
                            </span>

                            <strong>
                                ${escapeHTML(plan.price)}
                            </strong>

                            <span>
                                ${escapeHTML(plan.period)}
                            </span>

                        </div>

                        <p>
                            ${escapeHTML(plan.description)}
                        </p>

                    </div>


                    <ul class="plan-features">

                        ${features}

                    </ul>


                    <a
                        href="#contact"
                        onclick="selectPlan('${escapeHTML(plan.name)}')"
                        class="
                            btn
                            ${plan.featured
                                ? "btn-primary"
                                : "btn-outline"}
                            plan-button
                        "
                    >
                        CHOOSE ${escapeHTML(plan.name)}
                    </a>

                </article>

            `;

        }).join("");

}


function selectPlan(planName) {

    const select =
        getElement("membershipPlan");


    if (select) {

        select.value = planName;

    }

}


/* ================================================= */
/* TESTIMONIALS */
/* ================================================= */

function renderTestimonials() {

    const container =
        getElement("testimonialsGrid");


    if (!container) return;


    container.innerHTML =
        gymConfig.testimonials.map(function (testimonial) {

            const stars =
                "★".repeat(
                    Number(testimonial.rating) || 5
                );


            return `

                <article class="testimonial-card">

                    <div class="testimonial-stars">
                        ${stars}
                    </div>

                    <p class="testimonial-quote">
                        "${escapeHTML(testimonial.quote)}"
                    </p>

                    <div class="testimonial-author">

                        <strong>
                            ${escapeHTML(testimonial.name)}
                        </strong>

                        <span>
                            ${escapeHTML(testimonial.role)}
                        </span>

                    </div>

                </article>

            `;

        }).join("");

}


/* ================================================= */
/* GALLERY */
/* ================================================= */

function renderGallery() {

    const container =
        getElement("galleryGrid");


    if (!container) return;


    container.innerHTML =
        gymConfig.gallery.map(function (item) {

            return `

                <div class="gallery-item">

                    <img
                        src="${escapeHTML(item.image)}"
                        alt="${escapeHTML(item.title)}"
                        loading="lazy"
                    >

                    <div class="gallery-overlay">

                        <span>
                            ${escapeHTML(item.title)}
                        </span>

                    </div>

                </div>

            `;

        }).join("");

}


/* ================================================= */
/* TRAINERS */
/* ================================================= */

function renderTrainers() {

    const container =
        getElement("trainersGrid");


    if (!container) return;


    container.innerHTML =
        gymConfig.trainers.map(function (trainer) {

            return `

                <article class="trainer-card">

                    <div class="trainer-image">

                        <img
                            src="${escapeHTML(trainer.image)}"
                            alt="${escapeHTML(trainer.name)}"
                            loading="lazy"
                        >

                    </div>


                    <div class="trainer-content">

                        <p class="trainer-role">
                            ${escapeHTML(trainer.role)}
                        </p>

                        <h3>
                            ${escapeHTML(trainer.name)}
                        </h3>

                        <p>
                            ${escapeHTML(trainer.description)}
                        </p>

                    </div>

                </article>

            `;

        }).join("");

}


/* ================================================= */
/* FITNESS GOALS */
/* ================================================= */

function renderFitnessGoals() {

    const select =
        getElement("fitnessGoal");


    if (!select) return;


    select.innerHTML = `

        <option value="" disabled selected>
            Select your goal
        </option>

        ${
            gymConfig.fitnessGoals
                .map(function (goal) {

                    return `

                        <option value="${escapeHTML(goal)}">
                            ${escapeHTML(goal)}
                        </option>

                    `;

                })
                .join("")
        }

    `;

}


/* ================================================= */
/* SOCIAL MEDIA */
/* ================================================= */

function setupSocialLinks() {

    const links = {

        instagramLink:
            gymConfig.social.instagram,

        facebookLink:
            gymConfig.social.facebook,

        youtubeLink:
            gymConfig.social.youtube

    };


    Object.keys(links).forEach(function (id) {

        const element =
            getElement(id);


        if (!element) return;


        if (
            !links[id] ||
            links[id] === "#"
        ) {

            element.style.display = "none";

        } else {

            element.href =
                links[id];

        }

    });

}


/* ================================================= */
/* TOAST NOTIFICATION HELPER */
/* ================================================= */

function showToast(message, type = "success") {

    let toast = document.getElementById("toastNotification");


    if (!toast) {

        toast = document.createElement("div");

        toast.id = "toastNotification";

        toast.className = "toast-notification";

        document.body.appendChild(toast);

    }


    const icon = type === "success" ? "✅" : "⚠️";

    toast.innerHTML = `<span>${icon}</span> <span>${escapeHTML(message)}</span>`;

    toast.className = `toast-notification ${type} show`;


    setTimeout(function () {

        toast.classList.remove("show");

    }, 4500);

}


/* ================================================= */
/* CONTACT FORM */
/* ================================================= */

function setupContactForm() {

    const form =
        getElement("contactForm");


    if (!form) return;


    form.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const name =
                getElement("name").value.trim();


            const email =
                getElement("email").value.trim();


            const phone =
                getElement("phone").value.trim();


            const planSelect =
                getElement("membershipPlan");

            const plan =
                planSelect ? planSelect.value : "General Inquiry";


            const goal =
                getElement("fitnessGoal").value;


            const message =
                getElement("fitnessMessage").value.trim();


            const enquiry = {

                name: name,

                email: email,

                phone: phone,

                plan: plan,

                goal: goal,

                message: message,

                status: "New",

                date:
                    new Date().toLocaleString()

            };


            /* ============================= */
            /* LOCAL STORAGE */
            /* ============================= */

            let enquiries = [];


            try {

                enquiries =
                    JSON.parse(
                        localStorage.getItem(
                            gymConfig.storageKey
                        )
                    ) || [];

            } catch (error) {

                enquiries = [];

            }


            enquiries.push(enquiry);


            localStorage.setItem(

                gymConfig.storageKey,

                JSON.stringify(enquiries)

            );


            /* ============================= */
            /* BUTTON */
            /* ============================= */

            const button =
                getElement("submitButton");


            const originalText =
                button.textContent;


            button.disabled = true;

            button.textContent =
                "SENDING...";


            /* ============================= */
            /* GOOGLE SHEETS */
            /* ============================= */

            if (gymConfig.googleSheetUrl) {

                try {

                    await fetch(

                        gymConfig.googleSheetUrl,

                        {

                            method: "POST",

                            mode: "no-cors",

                            headers: {

                                "Content-Type":
                                    "text/plain;charset=utf-8"

                            },

                            body:
                                JSON.stringify(enquiry)

                        }

                    );


                    showToast(
                        "Your enquiry has been submitted successfully! We will contact you soon.",
                        "success"
                    );


                } catch (error) {

                    console.error(
                        "Google Sheets error:",
                        error
                    );


                    showToast(
                        "Enquiry saved locally! (Online sync will retry)",
                        "error"
                    );

                }

            } else {

                showToast(
                    "Your enquiry has been saved successfully!",
                    "success"
                );

            }


            form.reset();


            button.disabled = false;

            button.textContent =
                originalText;

        }
    );

}


/* ================================================= */
/* MOBILE MENU */
/* ================================================= */

function setupMobileMenu() {

    const menuToggle =
        getElement("menuToggle");


    const navLinks =
        getElement("navLinks");


    if (!menuToggle || !navLinks) return;


    menuToggle.addEventListener(
        "click",
        function () {

            const isOpen =
                navLinks.classList.toggle(
                    "active"
                );


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove(
                        "active"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}


/* ================================================= */
/* SCROLL REVEAL */
/* ================================================= */

function setupScrollReveal() {

    const elements =
        document.querySelectorAll(

            ".section-heading, " +
            ".program-card, " +
            ".plan-card, " +
            ".testimonial-card, " +
            ".trainer-card, " +
            ".gallery-item, " +
            ".location-wrapper, " +
            ".contact-wrapper"

        );


    elements.forEach(function (element) {

        element.classList.add("reveal");

    });


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(function (element) {

            element.classList.add("active");

        });

        return;

    }


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "active"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    elements.forEach(function (element) {

        observer.observe(element);

    });

}


/* ================================================= */
/* FOOTER YEAR */
/* ================================================= */

function setupFooter() {

    setText(
        "footerYear",
        new Date().getFullYear()
    );

}


/* ================================================= */
/* INITIALIZE WEBSITE */
/* ================================================= */

function initializeWebsite() {

    setupBrand();

    setupHero();

    setupAbout();

    setupContactDetails();

    setupWhatsApp();

    renderPrograms();

    renderPlans();

    renderTestimonials();

    renderGallery();

    renderTrainers();

    renderFitnessGoals();

    setupSocialLinks();

    setupContactForm();

    setupMobileMenu();

    setupFooter();

    setupScrollReveal();

}


document.addEventListener(
    "DOMContentLoaded",
    initializeWebsite
);