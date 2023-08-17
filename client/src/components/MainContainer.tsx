import childrenProps from "@/interface/childrenProps";

export default function MainContainer({ children }: childrenProps) {
	return (
		<>
			<main>{children}</main>
		</>
	);
}
