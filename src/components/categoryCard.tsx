import { FC } from "react";

interface CategoryCardProps {
	emoji: string;
	group: string;
	handleFilter: (group: string) => void;
}

export const CategoryCard: FC<CategoryCardProps> = ({
	emoji,
	group,
	handleFilter,
}) => {
	return (
		<button
			className="flex items-baseline justify-start pl-7 rounded-md bg-gray-50 py-2 hover:bg-gray-100"
			onClick={() => handleFilter(group)}
		>
			<span className="text-xl mr-4">{emoji}</span>
			<p className="">{group}</p>
		</button>
	);
};
