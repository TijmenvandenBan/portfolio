import { useRouter } from "next/router";
import { NavigationButton } from "./Button"

export default function NavigationBar() {
    const router = useRouter();
    if (router.asPath === "/") {
        return (
            <ul>
                <li><NavigationButton href="/projects" text="projects" className="navigation-button" /></li>
                <li><NavigationButton href="/about" text="about" className="navigation-button" /></li>
            </ul>
        )
    } else if (router.asPath === "/projects") {
        return (
            <ul>
                <li><NavigationButton href="/" text="Home" className="navigation-button" /></li>
                <li><NavigationButton href="/about" text="about" className="navigation-button" /></li>
            </ul>
        )
    } else {
        return (
            <ul>
                <li><NavigationButton href="/projects" text="projects" className="navigation-button" /></li>
                <li><NavigationButton href="/" text="Home" className="navigation-button" /></li>
            </ul>
        )
    }
}