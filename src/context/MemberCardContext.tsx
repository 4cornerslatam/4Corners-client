import React, { createContext, useState } from 'react';

interface CardContextProps {
	isFlipped: boolean;
	toggleFlip: () => void;
}

export const MemberCardContext = createContext<CardContextProps>({
	isFlipped: false,
	toggleFlip: () => {},
});

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const toggleFlip = () => {
		setIsFlipped(!isFlipped);
	};

	return (
		<CardContext.Provider value={{ isFlipped, toggleFlip }}>
			{children}
		</CardContext.Provider>
	);
};
