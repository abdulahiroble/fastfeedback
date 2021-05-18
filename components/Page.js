import { NextSeo } from 'next-seo'
import React from 'react'

const Page = ({ name, path, children }) => {

    const title = `Fast Feedback - ${name}`
    const url = `https://fastfeedback-mlatfjuy1-abdulahiroble.vercel.app${path}`

    return (
        <>
            <NextSeo
                title
                canonical={url}
                openGraph={{
                    url,
                    title
                }}
            />
            {children}
        </>
    )
}

export default Page