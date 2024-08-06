import { useEffect, useState } from 'react';

function AnchorMonitor() {
    const [activeLink, setActiveLink] = useState('');

    const handleScroll = (container) => {
        const sections = container.querySelectorAll('section');
        let newActiveLink = '';

        if (container.scrollTop === 0) {
            // Set the active section as the first section
            setActiveLink('about');
        } else {
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const sectionTop = rect.top - containerRect.top + container.scrollTop;
                const sectionBottom = rect.bottom - containerRect.top + container.scrollTop;

                // Check if section is in view
                if (container.scrollTop + 50 >= sectionTop && container.scrollTop + 50 < sectionBottom) {
                    newActiveLink = section.id;
                }

            });
            if (newActiveLink !== '') {
                if (newActiveLink !== activeLink) {
                    setActiveLink(newActiveLink);
                }
            }

        };
    }

        useEffect(() => {
            const container = document.querySelector('.content'); // Target your specific scrollable container

            if (!container) {
                return;
            }

            const onScroll = () => handleScroll(container);

            container.addEventListener('scroll', onScroll);

            handleScroll(container); // Call once on mount to set initial state

            return () => {
                container.removeEventListener('scroll', onScroll);
            };
        }, [activeLink]); // Add activeLink to dependencies to handle changes

        return activeLink;
    }

    export default AnchorMonitor;
