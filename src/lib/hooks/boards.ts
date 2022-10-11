import { useMutation, useQuery } from "@tanstack/react-query";
import { client, customTimePause } from "../helpers";

const fakeBoards = [
	{
		id: 1,
		created_at: new Date(),
		title: "Board 1",
		description: "Board 1 description",
	},
	{
		id: 2,
		created_at: new Date(),
		title: "Board 2",
		description: "Board 2 description",
	},
	{
		id: 3,
		created_at: new Date(),
		title: "Board 3",
		description: "Board 3 description",
	},
];

export const useBoards = () => {
	const { data: boards, status } = useQuery(["userBoards"], async () => {
		// await client("/boards");
		await customTimePause(1000);

		return fakeBoards;
	});

	return { boards, status };
};

export const useCreateBoard = () => {
	return useMutation((newBoard) => {
		return client("/boards", { body: JSON.stringify(newBoard) });
	});
};
