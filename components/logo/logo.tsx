interface BrandLogoProps {
    height?: string;
    width?: string;
    className?: string;
}

export default function Logo({
    height = "30",
    width = "30",
    className,
}: BrandLogoProps) {
    return (
        <svg
            className={className}
            fill="none"
            height={height}
            viewBox="0 0 100 100"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect fill="black" height="98" rx="14" width="98" x="1" y="1" />
            <rect
                height="98"
                rx="14"
                stroke="url(#paint0_linear_1_2)"
                strokeWidth="2"
                width="98"
                x="1"
                y="1"
            />
            <path
                d="M23.903 48.6086C15.8116 -7.11039 81.9889 24.3506 67.9889 36.3506C19.9889 6.85063 37.3478 70.5496 61.0017 69.8286C109.489 68.3506 31.9943 104.328 23.903 48.6086Z"
                fill="url(#paint1_linear_1_2)"
            />
            <defs>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_1_2"
                    x1="50"
                    x2="50"
                    y1="0"
                    y2="100"
                >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#8B8B8B" />
                </linearGradient>
                <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint1_linear_1_2"
                    x1="52"
                    x2="52"
                    y1="15"
                    y2="86.5"
                >
                    <stop offset="0.00551292" stopColor="white" />
                    <stop offset="1" stopColor="#AEAEAE" />
                </linearGradient>
            </defs>
        </svg>
    );
}
