interface HighlightProps {
    text: string;
    className: string;
    href?: string;
}

export function Highlight({text, className}: HighlightProps) {
    return (
        <span className={className}>{text}</span>
    )
}

export function HighlightLink({text, className, href}: HighlightProps) {
    return (
        <a href={href}><span className={className}>{text}</span></a>
    )
}