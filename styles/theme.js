import React from 'react';
import { theme as chakraTheme } from '@chakra-ui/react';

const theme = {
    ...chakraTheme,
    fonts: {
        ...chakraTheme.fonts,
        body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
    },
    fontWeights: {
        normal: 400,
        medium: 600,
        bold: 700
    },
    icons: {
        ...chakraTheme.icons,
        logo: {
            path: (
                <path
                    d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
                    fill="currentColor"
                />
            ),
            viewBox: '0 0 46 32'
        },
    }
};

export default theme;

{/* <svg xmlns="http://www.w3.org/2000/svg" width="256" height="249" style="-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg)" transform="rotate(360)"><path d="M207.506 218.149h-87.96l43.98-95.695.042.09.04-.09h.82l27.504 60.497 13.47 30.527 2.12 4.67h-.016zm47.942 23.373L170.756 56.456c-.536-1.07-1.24-1.982-2.384-2.521v-15.69h40.599v-1.22l-11.146-17.742L208.97 1.54V0h-48.267v54.16c-.913.559-1.585 1.368-2.05 2.296l-46.023 99.596-30.12-65.82c-.826-1.646-1.925-3.024-4.676-3.024h-2.75c-2.473 0-3.85 1.378-4.677 3.024l-58.86 127.38-2.13 4.724L.55 241.522c-1.651 3.572.552 7.154 4.676 7.154h23.922l4.718.031 117.787-.031h99.123c4.124 0 6.323-3.582 4.671-7.154z" fill="#2D2E2B" /><path fill="rgba(0, 0, 0, 0)" d="M0 0h256v249H0z" /></svg> */ }