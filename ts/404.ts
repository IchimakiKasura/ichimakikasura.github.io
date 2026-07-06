(() => {
    const elements: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    
    const reveal = (): void => {
        elements.forEach((element: HTMLElement, index: number) => {
            const delay: number = Number(element.getAttribute('data-delay') || 0);
            window.setTimeout(
                () => element.classList.add('is-visible'), 
                (delay * 1000) + index * 40 + 80
            );
        });
    };

    if ('IntersectionObserver' in window) {
        const observer: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[], obs: IntersectionObserver) => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        const delay: number = Number(target.getAttribute('data-delay') || 0);
                        
                        window.setTimeout(
                            () => target.classList.add('is-visible'), 
                            delay * 1000 + 80
                        );
                        obs.unobserve(target);
                    }
                });
            }, 
            { threshold: 0.15 }
        );

        elements.forEach((element: HTMLElement) => observer.observe(element));
    } else {
        reveal();
    }
})();