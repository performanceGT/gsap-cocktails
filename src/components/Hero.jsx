import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const videoRef = useRef(null);
    const [hasScrolled, setHasScrolled] = useState(false);

    useGSAP(() => {
        // Animate hero title
        gsap.from(".hero-title", {
            opacity: 0,
            y: 100,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.5,
        });

        // Animate hero subtitle
        gsap.from(".hero-subtitle", {
            opacity: 0,
            y: 50,
            duration: 1.2,
            ease: "power3.out",
            delay: 1,
        });

        // Check if mobile or desktop
        const isMobile = window.innerWidth < 768;
        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        // Parallax effect on scroll
        gsap.to(".hero-video", {
            scale: 1.2,
            scrollTrigger: {
                trigger: "#hero",
                start: startValue,
                end: endValue,
                scrub: 1,
            },
        });

        // Video play/pause on scroll - only when user actually scrolls
        let lastProgress = 0;

        ScrollTrigger.create({
            trigger: "#hero",
            start: startValue,
            end: endValue,
            onUpdate: (self) => {
                if (!videoRef.current) return;

                // Only play if user has scrolled (not on initial page load)
                if (self.progress > 0 && self.progress > lastProgress) {
                    // Scrolling forward
                    if (!hasScrolled) setHasScrolled(true);
                    videoRef.current.play();
                } else if (self.progress < lastProgress) {
                    // Scrolling backward
                    videoRef.current.pause();
                }

                lastProgress = self.progress;
            },
            onLeave: () => {
                if (videoRef.current) {
                    videoRef.current.pause();
                }
            },
            onLeaveBack: () => {
                if (videoRef.current) {
                    videoRef.current.pause();
                }
            },
        });
    });

    return (
        <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <video
                    ref={videoRef}
                    className="hero-video absolute inset-0 w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                >
                    <source src="/output.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-modern-negra text-white mb-6">
                    Mojito
                </h1>
                <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl mx-auto font-sans">
                    Experience the perfect blend of refreshment and sophistication
                </p>
            </div>
        </section>
    );
};

export default Hero;
