import SignUpDialogue from '@/components/SignUpDialogue'
import React from 'react'

export default function page() {
    return (
        <main className="h-full flex flex-col min-h-fit overflow-y-scroll no-scrollbar items-center justify-center">
            <SignUpDialogue />
        </main>
    )
}
