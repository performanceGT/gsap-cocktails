import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        // Animate section badge
        gsap.from(".about-badge", {
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            scrollTrigger: {
                trigger: "#about",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        // Animate heading with split effect
        gsap.from(".about-heading", {
            opacity: 0,
            y: 80,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".about-heading",
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        });

        // Stagger animation for paragraphs
        gsap.from(".about-text", {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".about-content",
                start: "top 75%",
                toggleActions: "play none none reverse",
            },
        });

        // Animate stats with counter effect
        gsap.from(".about-stat", {
            opacity: 0,
            scale: 0.5,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".about-stats",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });

        // Parallax effect for background elements
        gsap.to(".about-bg-element", {
            y: -100,
            scrollTrigger: {
                trigger: "#about",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
        });
    });

    return (
        <section id="about" className="relative min-h-screen py-20 md:py-32 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
            {/* Background decorative elements */}
            <div className="about-bg-element absolute top-20 right-10 w-64 h-64 bg-yellow/5 rounded-full blur-3xl"></div>
            <div className="about-bg-element absolute bottom-20 left-10 w-96 h-96 bg-yellow/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Badge */}
                <div className="about-badge inline-block rounded-full bg-yellow px-6 py-2 text-sm font-semibold text-black mb-8">
                    About Us
                </div>

                {/* Main Content Grid */}
                <div className="about-content grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left Column - Heading */}
                    <div className="lg:col-span-5">
                        <h2 className="about-heading text-5xl md:text-6xl lg:text-7xl font-modern-negra text-white leading-tight">
                            Crafting Moments of Pure Bliss
                        </h2>
                    </div>

                    {/* Right Column - Description */}
                    <div className="lg:col-span-7 space-y-6">
                        <p className="about-text text-lg md:text-xl text-white/80 leading-relaxed">
                            At Mojito, we believe that every cocktail tells a story. Our passion for mixology
                            combines traditional techniques with innovative flavors to create unforgettable experiences.
                        </p>
                        <p className="about-text text-lg md:text-xl text-white/80 leading-relaxed">
                            From the finest ingredients to the perfect presentation, we craft each drink with
                            meticulous attention to detail. Our journey began with a simple mission: to bring
                            joy and refreshment to every glass we serve.
                        </p>
                        <p className="about-text text-lg md:text-xl text-white/80 leading-relaxed">
                            Whether you're celebrating a special occasion or simply unwinding after a long day,
                            our expertly crafted cocktails are designed to elevate your moments and create
                            lasting memories.
                        </p>

                        {/* Stats */}
                        <div className="about-stats grid grid-cols-3 gap-6 pt-8">
                            <div className="about-stat text-center">
                                <div className="text-4xl md:text-5xl font-bold text-yellow mb-2">50+</div>
                                <div className="text-sm md:text-base text-white/60">Signature Cocktails</div>
                            </div>
                            <div className="about-stat text-center">
                                <div className="text-4xl md:text-5xl font-bold text-yellow mb-2">10k+</div>
                                <div className="text-sm md:text-base text-white/60">Happy Customers</div>
                            </div>
                            <div className="about-stat text-center">
                                <div className="text-4xl md:text-5xl font-bold text-yellow mb-2">15</div>
                                <div className="text-sm md:text-base text-white/60">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
