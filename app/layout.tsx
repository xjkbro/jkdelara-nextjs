import '../styles/globals.css'
import '../styles/custom.css'
import ClientPageWrapper from '@/components/ClientPageWrapper'

import {meta} from '@/constants/meta';
export const metadata = { 
    ...meta, 
    title: {
        default: 'JKDELARA',
        template: '%s | Jason-Kyle De Lara'
    } 
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <ClientPageWrapper>
                {children}
            </ClientPageWrapper>
        </html>
    )
}
