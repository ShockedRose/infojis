import { FC } from "react";
import { EmojiCard, EmojiCardProps } from "./emojiCard";

interface EmojiListProps {
	emojis: EmojiCardProps[];
}

export const EmojiList: FC<EmojiListProps> = ({ emojis }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
			{emojis.map((emoji, index) => {
				return <EmojiCard {...emoji} key={index} />;
			})}
		</div>
	);
};
