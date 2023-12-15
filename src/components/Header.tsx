import { Highlight } from "./Highlight";
import NavigationBar from "./NavigationBar";

export default function Header() {
    return (
        <header>
            <h1 id="title">Tijmen van den Ban</h1>
            <h2 id="subtitle">
                <Highlight text="//" className="highlight" /> Web Developer <Highlight text="//" className="highlight" /> Music Producer <Highlight text="//" className="highlight" />
            </h2>
            <NavigationBar/>
        </header>
    )
} 