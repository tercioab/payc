import childrenProps from "@/interface/childrenProps";
import Header from "./Header";

export default function MainContainer({ children }: childrenProps) {
    return (
        <>
            <Header />
            <main>{ children }</main>
            <h2>footer</h2>
        </>
    )
}