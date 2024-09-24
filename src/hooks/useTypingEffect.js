import { useEffect, useState } from 'react';

const useTypingEffect = (text, typingSpeed = 100) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(prev => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval); // Cleanup on unmount
    }, [text, typingSpeed]);

    return displayedText;
};

export default useTypingEffect;
