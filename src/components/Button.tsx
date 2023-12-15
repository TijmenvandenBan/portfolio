interface ButtonProps {
    text: string;
    className: string;
    href?: string;
    function?: () => void;
}

export function NavigationButton({ text, className, href }: ButtonProps) {
    return (
        <a href={href}><button className={className}>{text}</button></a>
    )
}