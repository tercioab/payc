import childrenProps from "@/interface/childrenProps";

export default function MainContainer({ children }: childrenProps) {
    return (
        <>
            <h1>nav bar</h1>
            <main>{ children }</main>
            <h2>footer</h2>
        </>
    )
}