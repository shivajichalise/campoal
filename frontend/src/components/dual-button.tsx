import * as React from "react"

const defaultButton =
    "ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center whitespace-nowrap rounded rounded-l-none rounded-r-xl px-7 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

const secondaryButton =
    "ring-offset-background focus-visible:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex h-10 items-center justify-center whitespace-nowrap rounded rounded-l-xl rounded-r-none px-7 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

export interface DualButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    firstButtonVariant: "default" | "secondary"
    secondButtonVariant: "default" | "secondary"
    firstButtonText: string
    secondButtonText: string
    size: "sm" | "default" | "lg"
    asChild?: boolean
}

const DualButton = React.forwardRef<HTMLButtonElement, DualButtonProps>(
    (
        {
            className,
            firstButtonVariant,
            secondButtonVariant,
            size,
            firstButtonText,
            secondButtonText,
            asChild = false,
            ...props
        },
        ref
    ) => {
        const firstButtonStyles =
            firstButtonVariant === "default" ? defaultButton : secondaryButton
        const secondButtonStyles =
            secondButtonVariant === "default" ? defaultButton : secondaryButton
        return (
            <div className="hidden items-center justify-center lg:flex">
                <button className={firstButtonStyles} ref={ref} {...props}>
                    {firstButtonText}
                </button>
                <button className={secondButtonStyles} ref={ref} {...props}>
                    {secondButtonText}
                </button>
            </div>
        )
    }
)
DualButton.displayName = "Button"

export { DualButton }
