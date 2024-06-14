import { z } from "zod"

const contactSchema = z.object({
    your_name: z.string().min(1, "Your name is required."),
    company_name: z.string().min(1, "Company name is required."),
    your_email: z.string().email(),
    subject: z.string().min(1, "Subject is required."),
    message: z.string().min(1, "Message is required."),
})

type TContactFormValues = z.infer<typeof contactSchema>

export { contactSchema }
export default TContactFormValues
