import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { navLinks } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    useGSAP(() => {
        gsap.fromTo(
            'nav',
            { backgroundColor: 'rgba(0, 0, 0, 0)' },
            {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(10px)',
                scrollTrigger: {
                    trigger: 'body',
                    start: 'top top',
                    end: '100px top',
                    scrub: true,
                },
            }
        );
    });

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                <h1 className="text-xl font-bold text-white">Mojito</h1>
                <ul className="flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className="text-sm text-white/70 hover:text-white transition">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
