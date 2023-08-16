export type User = {
	id: number;
	name: string;
	subName: string;
	cpf: string;
	email: string;
};
export type AuthContextType = {
	isAuthenticated: boolean;
	user: User | null;
	signIn: (data: SignInData) => Promise<void>;
};

export type SignInData = {
	email: string;
	password: string;
};