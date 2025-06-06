import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { navLinks } from '../../constants/index.js'

gsap.registerPlugin(ScrollToPlugin);



const Navbar = () => {
    const handleScrollToTop = (e) => {
        e.preventDefault(); // prevent default anchor behavior
        gsap.to(window, {
            scrollTo: { y: 0 },
            duration: 1,
            ease: 'power2.inOut',
        });
    };


    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        });

        navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        });
    })

    return (
        <nav>
            <div>
                <a href="#home" onClick={handleScrollToTop} className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar