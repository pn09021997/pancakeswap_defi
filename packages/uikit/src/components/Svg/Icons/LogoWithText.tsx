import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
      <svg width="163" height="44" viewBox="0 0 163 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.0164 0C12.409 0 0.479004 12.1335 0.479004 26.99V27.01C0.479004 41.8465 12.409 54 27.0164 54C34.3004 54 40.9544 50.9566 45.7579 46.0712C50.5614 41.1657 53.5537 34.4383 53.5537 27.01V26.99C53.5537 12.1335 41.604 0 27.0164 0ZM45.0295 45.3304C39.3401 51.1168 26.662 47.6129 16.7007 37.4816C6.75899 27.3704 3.31386 14.4561 9.00325 8.66963C14.6926 2.8832 27.3707 6.3871 37.3321 16.5184C47.2738 26.6296 50.7189 39.5439 45.0295 45.3304Z"
          fill="url(#paint0_radial_3021_1885)"
        />
        <path
          d="M40.403 0C44.36 0 47.6673 1.22136 50.01 3.604C53.5536 7.20801 54.4789 13.0345 52.6086 20.0022C50.7581 26.9499 46.3483 34.198 40.2259 40.4449C34.0837 46.6919 26.9572 51.1568 20.126 53.0389C13.2554 54.941 7.5463 54 4.00274 50.396C0.459173 46.792 -0.466091 40.9655 1.40412 33.9978C3.25465 27.0501 7.66442 19.802 13.7869 13.5551C19.9094 7.30812 27.0556 2.84316 33.8868 0.961068C36.2098 0.320356 38.395 0 40.403 0ZM13.6097 53.6396C15.5981 53.6396 17.7636 53.3192 20.0472 52.6986C26.8194 50.8165 33.8868 46.3915 39.9699 40.1846C46.053 33.9978 50.4234 26.7898 52.274 19.9021C54.1048 13.0545 53.2189 7.34816 49.7738 3.84427C46.3287 0.340378 40.718 -0.580645 33.9852 1.30145C27.2131 3.18354 20.126 7.62848 14.0428 13.8154C7.95972 20.0022 3.58932 27.2102 1.73879 34.0779C-0.0920481 40.9255 0.793843 46.6318 4.23898 50.1357C6.52261 52.4583 9.75119 53.6396 13.6097 53.6396Z"
          fill="url(#paint1_radial_3021_1885)"
        />
        <path
          d="M13.9247 15.8576C15.099 15.8576 16.0509 14.8895 16.0509 13.6952C16.0509 12.501 15.099 11.5328 13.9247 11.5328C12.7505 11.5328 11.7986 12.501 11.7986 13.6952C11.7986 14.8895 12.7505 15.8576 13.9247 15.8576Z"
          fill="#60C5BA"
        />
        <path
          d="M19.1614 26.9099C19.1614 26.8098 19.2204 26.7097 19.3386 26.6897L22.4293 25.8287C24.1814 25.3482 25.5595 23.9466 26.0516 22.1446L26.8982 19.0011C26.9375 18.881 27.036 18.8209 27.1147 18.8209V26.8899H19.1614V26.9099Z"
          fill="#60C5BA"
        />
        <path
          d="M27.095 18.8209C27.1934 18.8209 27.2918 18.881 27.3115 19.0011L28.158 22.1446C28.6305 23.9266 30.0086 25.3282 31.7607 25.8087L34.8514 26.6696C34.9696 26.7097 35.0286 26.8098 35.0286 26.8899H27.095V18.8209Z"
          fill="#2370B8"
        />
        <path
          d="M27.0949 26.9099V34.9789C26.9965 34.9789 26.8981 34.9188 26.8784 34.7987L26.0319 31.6552C25.5594 29.8732 24.1813 28.4717 22.4096 27.9711L19.3188 27.1101C19.2007 27.0701 19.1416 26.97 19.1416 26.8899H27.0949V26.9099Z"
          fill="url(#paint2_linear_3021_1885)"
        />
        <path
          d="M35.0484 26.9099C35.0484 27.01 34.9893 27.1101 34.8712 27.1302L31.7804 27.9911C30.0283 28.4716 28.6503 29.8732 28.1778 31.6552L27.3313 34.7987C27.2919 34.9188 27.1935 34.9789 27.1147 34.9789V26.9099H35.0484Z"
          fill="url(#paint3_linear_3021_1885)"
        />
        <path
          d="M82.9848 38.0622C80.9965 38.0622 79.1853 37.5616 77.5316 36.5805C75.8977 35.5794 74.5787 34.258 73.614 32.5961C72.6297 30.9343 72.1572 29.0922 72.1572 27.05C72.1572 25.0277 72.6494 23.1857 73.614 21.5238C74.5984 19.862 75.8977 18.5205 77.5316 17.5394C79.1656 16.5383 80.9768 16.0577 82.9848 16.0577C84.9731 16.0577 86.7843 16.5583 88.4183 17.5394C90.0522 18.5405 91.3712 19.862 92.3359 21.5238C93.3202 23.1857 93.7927 25.0277 93.7927 27.05C93.7927 29.0722 93.3005 30.9142 92.3359 32.5961C91.3515 34.258 90.0522 35.5794 88.4183 36.5805C86.7843 37.5616 84.9731 38.0622 82.9848 38.0622ZM82.9848 35.5594C84.5203 35.5594 85.9181 35.179 87.178 34.3981C88.4379 33.6373 89.4616 32.5961 90.2097 31.3147C90.9578 30.0333 91.3319 28.6117 91.3319 27.0299C91.3319 25.4682 90.9578 24.0466 90.2097 22.7652C89.4616 21.4838 88.4576 20.4426 87.178 19.6818C85.9181 18.9209 84.5006 18.5405 82.9848 18.5405C81.4492 18.5405 80.0318 18.9209 78.7719 19.6818C77.512 20.4426 76.5079 21.4637 75.7402 22.7652C74.9921 24.0466 74.5984 25.4882 74.5984 27.0299C74.5984 28.5917 74.9724 30.0333 75.7402 31.3147C76.4883 32.5961 77.512 33.6172 78.7719 34.3981C80.0515 35.179 81.4492 35.5594 82.9848 35.5594Z"
          fill="#60C5BA"
        />
        <path
          d="M110.034 38.0622H107.652V29.1123C107.652 27.7908 107.337 26.7296 106.727 25.9287C106.116 25.1478 105.132 24.7474 103.793 24.7474C103.006 24.7474 102.297 24.9076 101.707 25.2079C101.116 25.5283 100.624 25.9087 100.21 26.3892C99.8166 26.8698 99.5016 27.3903 99.2851 27.9109C99.0685 28.4515 98.9307 28.9521 98.8913 29.4326V38.0422H96.5093V22.3047H98.8913V24.2869C99.1866 23.9665 99.5804 23.6462 100.033 23.3458C100.506 23.0455 101.037 22.8052 101.687 22.605C102.317 22.4048 103.045 22.3047 103.872 22.3047C105.742 22.3047 107.219 22.9054 108.341 24.0867C109.463 25.288 110.014 26.9098 110.014 28.9521V38.0622H110.034Z"
          fill="#60C5BA"
        />
        <path
          d="M119.365 38.0622H112.711V16.0177H119.365C121.255 16.0177 122.968 16.4782 124.523 17.4193C126.079 18.3603 127.319 19.6217 128.224 21.1834C129.15 22.7652 129.602 24.5071 129.602 26.4293V27.6506C129.602 29.5728 129.15 31.3147 128.224 32.8965C127.299 34.4782 126.059 35.7396 124.523 36.6606C122.968 37.6017 121.236 38.0622 119.365 38.0622ZM118.814 35.1189C120.271 35.1189 121.59 34.7785 122.771 34.0978C123.972 33.417 124.917 32.496 125.626 31.3547C126.334 30.2135 126.689 28.9521 126.689 27.5705V26.5094C126.689 25.1078 126.334 23.8464 125.626 22.7051C124.917 21.5639 123.972 20.6629 122.771 19.9821C121.57 19.3013 120.251 18.961 118.814 18.961H115.605V35.0989H118.814V35.1189Z"
          fill="#0B3854"
        />
        <path
          d="M139.839 38.0622C138.402 38.0622 137.083 37.7018 135.902 36.981C134.721 36.2602 133.776 35.2991 133.067 34.0978C132.359 32.8965 132.004 31.555 132.004 30.1134C132.004 28.6518 132.359 27.3103 133.067 26.1089C133.776 24.9076 134.721 23.9465 135.902 23.2257C137.083 22.5049 138.402 22.1445 139.839 22.1445C141.769 22.1445 143.383 22.7652 144.682 24.0266C145.982 25.288 146.749 27.0099 147.025 29.1924C147.045 29.3926 147.064 29.6328 147.064 29.9132C147.084 30.1935 147.084 30.7541 147.084 31.595H135.193C135.508 32.6362 136.099 33.4571 136.945 34.0978C137.792 34.7385 138.757 35.0589 139.839 35.0589C141.139 35.0589 142.28 34.5783 143.265 33.6173L144.151 32.7363L145.922 35.2391L145.253 35.8798C143.678 37.3214 141.867 38.0622 139.839 38.0622ZM143.914 28.6117C143.639 27.4905 143.166 26.6495 142.458 26.0489C141.749 25.4482 140.883 25.1479 139.839 25.1479C138.757 25.1479 137.792 25.4682 136.945 26.1089C136.099 26.7496 135.528 27.5706 135.193 28.6117H143.914V28.6117Z"
          fill="#0B3854"
        />
        <path
          d="M160.687 19.6217C160.195 19.6217 159.782 19.4415 159.447 19.0811C159.093 18.7207 158.935 18.3002 158.935 17.8197C158.935 17.3191 159.112 16.8987 159.447 16.5383C159.801 16.1979 160.215 16.0177 160.687 16.0177C161.179 16.0177 161.593 16.1979 161.947 16.5383C162.282 16.8787 162.459 17.3191 162.459 17.8197C162.459 18.3203 162.282 18.7407 161.947 19.0811C161.593 19.4415 161.179 19.6217 160.687 19.6217Z"
          fill="#0B3854"
        />
        <path
          d="M160.608 22.7052H159.723H159.309H152.498V20.9032C152.498 19.0411 154.683 18.04 156.061 19.3014L156.238 19.4616L158.384 17.4994L158.148 17.2992C154.88 14.2758 149.643 16.6384 149.643 21.1234V22.7052H147.97V25.6685H149.564L149.643 25.5884V38.0622H152.517V25.6885H159.25V38.0622H162.124V25.6685V24.9076V24.2469C162.124 23.4059 161.455 22.7052 160.608 22.7052Z"
          fill="#0B3854"
        />
      <defs>
        <radialGradient
          id="paint0_radial_3021_1885"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(26.1328 -0.597664) scale(48.0673 48.8871)"
        >
          <stop stopColor="white" />
          <stop offset="0.716" stopColor="#60C5BA" />
          <stop offset="1" stopColor="#4569B2" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_3021_1885"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(37.7481 42.7069) scale(48.6494 49.4792)"
        >
          <stop offset="0.4064" stopColor="white" stopOpacity="0" />
          <stop offset="0.716" stopColor="#60C5BA" />
          <stop offset="1" stopColor="#4569B2" />
        </radialGradient>
        <linearGradient
          id="paint2_linear_3021_1885"
          x1="22.9495"
          y1="25.9557"
          x2="24.8032"
          y2="35.5591"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#60C5BA" />
          <stop offset="1" stopColor="#2370B8" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_3021_1885"
          x1="35.5507"
          y1="23.8289"
          x2="25.127"
          y2="32.358"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#60C5BA" />
          <stop offset="1" stopColor="#2370B8" />
        </linearGradient>
        <clipPath id="clip0_3021_1885">
          <rect width="162" height="54" fill="white" transform="translate(0.459229)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
