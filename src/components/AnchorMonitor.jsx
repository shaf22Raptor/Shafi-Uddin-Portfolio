import { useEffect, useRef, useState } from 'react';

function AnchorMonitor() {
    const [activeLink, setActiveLink] = useState('');
    const [forceUpdate, setForceUpdate] = useState(0);

    const handleScroll = (container) => {
        const sections = container.querySelectorAll('section');
        let closestSection = null;
        let closestDistance = Infinity;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const sectionTop = rect.top - containerRect.top + container.scrollTop;

            // Calculate distance of the section's top to the container's scroll position
            const distanceToTop = Math.abs(container.scrollTop - sectionTop);

            // Track the section closest to the top of the container
            if (distanceToTop < closestDistance) {
                closestDistance = distanceToTop;
                closestSection = section.id;
            }
        });

        // Update the active section if it has changed
        if (closestSection && closestSection !== activeLink) {
            setActiveLink(closestSection);
        }
    };

    useEffect(() => {
        const container = document.querySelector('.content'); // Target your specific scrollable container
        console.log(activeLink);

        if (!container) {
            return;
        }

        const onScroll = () => handleScroll(container);

        container.addEventListener('scroll', onScroll);

        const handleResize = () => setForceUpdate((prev) => prev + 1);
        window.addEventListener('resize', handleResize);

        handleScroll(container); // Call once on mount to set initial state

        return () => {
            container.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [activeLink, forceUpdate]); // Add activeLink to dependencies to handle changes

    return activeLink;
}

export default AnchorMonitor;
