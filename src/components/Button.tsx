interface ButtonProps {
    text: string;
    className: string;
    href?: string;
    customFunction?: () => void;
}

export function NavigationButton({ text, className, href }: ButtonProps) {
    return (
        <a href={href}><button className={className}>{text}</button></a>
    )
}

export function FunctionButton({ text, className, customFunction}: ButtonProps) {
    return (
        <button className={className} onClick={customFunction}>{text}</button>
    )
}