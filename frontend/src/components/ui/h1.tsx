interface H1Props {
    text: string
}

export function H1({ text }: H1Props) {
    return (
        <h1 className="text-text-200 scroll-m-20 text-center text-4xl font-bold tracking-tight lg:text-6xl">
            {text}
        </h1>
    )
}
