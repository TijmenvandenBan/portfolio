import { NavigationButton } from "./Button"

export default function NavigationBar() {
    return (
        <ul>
            <li><NavigationButton href="/projects" text="projects" className="navigation-button" /></li>
            <li><NavigationButton href="/about" text="about" className="navigation-button"/></li>
        </ul>
    )
}