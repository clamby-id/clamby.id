import { cn } from "@/lib/utils";

export default function Gradient({ className }: { className?: string }) {
    return (
        <svg height="100%" width="100%" viewBox="200 -50 740 1416" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("absolute -z-10 top-0", className)}>
            <g opacity="0.65" filter="url(#filter0_f_130_158)">
                <path d="M1343.13 557.722L1235.28 735.931L1111.27 489.648L1343.13 557.722Z" fill="#55D6BE" />
                <path d="M1239.61 587.483C1409.05 805.068 1441.99 1033.81 1313.17 1098.4C1184.36 1162.99 942.581 1038.96 773.141 821.375C603.701 603.79 570.766 375.044 699.578 310.456C828.39 245.869 1070.17 369.898 1239.61 587.483Z" fill="#55D6BE" />
                <path d="M300 688.556H927.523V1104.59H300V688.556Z" fill="#979EE8" />
                <path d="M1116.28 82.5L1183.26 244.205L1400 244.205L1224.65 344.144L1291.63 505.849L1116.28 405.91L940.929 505.849L1007.91 344.144L832.557 244.205L1049.3 244.205L1116.28 82.5Z" fill="#6874E8" />
            </g>
            <defs>
                <filter id="filter0_f_130_158" x="0" y="-217.5" width="1700" height="1633" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_130_158" />
                </filter>
            </defs>
        </svg>
    )
}
