export type User = {
	id: number;
	name: string;
	cpf: string;
	email: string;
};
export type AuthContextType = {
	isAuthenticated: boolean;
	user: User | null;
	signIn: (data: SignInData) => Promise<void>;
	signUp: (data: registerUser) => Promise<void>
};

export type Props = {
	children: string | JSX.Element | JSX.Element[]
  }


export type ApiContextType = {
	isAuthenticated: boolean;
	user: User | null;
	signIn: (data: SignInData) => Promise<void>;
};

export type SignInData = {
	email: string;
	password: string;
};

export type registerUser = {
	email: string;
	password: string;
	name: string;
	subName: string;
	cpf: string;
}