import React from 'react'

const ButtonCircle = (props) => {
  let buttonCircleClass = "buttonCircle ";
  let buttonIcon;
  if (props.className) {
    buttonCircleClass += props.className;
  }
  switch (props.type) {
    case "save":
      buttonIcon =
        <svg width="21" height="22" viewBox="0 0 21 22" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.0363 5.2069L16.2261 1.35203C15.8172 0.938342 15.2627 0.705936 14.6844 0.705933H2.50553C1.30135 0.705933 0.325195 1.69352 0.325195 2.91181V19.0883C0.325195 20.3066 1.30135 21.2942 2.50553 21.2942H18.4946C19.6988 21.2942 20.675 20.3066 20.675 19.0883V6.76669C20.675 6.18165 20.4452 5.62058 20.0363 5.2069V5.2069ZM13.4072 2.17652V6.58828H4.68586V2.17652H13.4072ZM19.2214 19.0883C19.2214 19.4937 18.8954 19.8236 18.4946 19.8236H2.50553C2.1048 19.8236 1.77875 19.4937 1.77875 19.0883V2.91181C1.77875 2.50639 2.1048 2.17652 2.50553 2.17652H3.2323V6.95593C3.2323 7.56508 3.72038 8.05887 4.32247 8.05887H13.7706C14.3727 8.05887 14.8607 7.56508 14.8607 6.95593V2.19908C14.9885 2.231 15.1053 2.29766 15.1983 2.39187L19.0085 6.24674C19.0762 6.31486 19.1299 6.39589 19.1665 6.48514C19.203 6.57439 19.2217 6.67009 19.2214 6.76669V19.0883ZM10.5001 9.89711C8.29599 9.89711 6.5028 11.7113 6.5028 13.9412C6.5028 16.1711 8.29599 17.9853 10.5001 17.9853C12.7042 17.9853 14.4973 16.1711 14.4973 13.9412C14.4973 11.7113 12.7042 9.89711 10.5001 9.89711ZM10.5001 16.5148C9.09744 16.5148 7.95636 15.3603 7.95636 13.9412C7.95636 12.5222 9.09744 11.3677 10.5001 11.3677C11.9027 11.3677 13.0438 12.5222 13.0438 13.9412C13.0438 15.3603 11.9027 16.5148 10.5001 16.5148Z" />
        </svg>

      break;
    case "trash":
      buttonIcon =
        <svg width="22" height="25" viewBox="0 0 22 25" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path d="M20.9559 3.91432H16.1765L14.6324 1.8555C14.4269 1.58154 14.1605 1.35918 13.8542 1.20603C13.5479 1.05288 13.2102 0.973145 12.8677 0.973145L9.19123 0.973145C8.84878 0.973145 8.51103 1.05288 8.20473 1.20603C7.89844 1.35918 7.632 1.58154 7.42653 1.8555L5.88241 3.91432H1.103C1.00549 3.91432 0.91198 3.95306 0.843033 4.022C0.774086 4.09095 0.735352 4.18446 0.735352 4.28197L0.735352 5.01726C0.735352 5.11477 0.774086 5.20828 0.843033 5.27723C0.91198 5.34617 1.00549 5.38491 1.103 5.38491H1.97156L3.4973 22.4943C3.54664 23.0428 3.79941 23.5531 4.20591 23.9247C4.6124 24.2964 5.14322 24.5025 5.69399 24.5026H16.3649C16.9157 24.5025 17.4465 24.2964 17.853 23.9247C18.2595 23.5531 18.5123 23.0428 18.5616 22.4943L20.0874 5.38491H20.9559C21.0534 5.38491 21.147 5.34617 21.2159 5.27723C21.2849 5.20828 21.3236 5.11477 21.3236 5.01726V4.28197C21.3236 4.18446 21.2849 4.09095 21.2159 4.022C21.147 3.95306 21.0534 3.91432 20.9559 3.91432ZM8.603 2.73785C8.67174 2.64679 8.7606 2.57286 8.86264 2.52184C8.96469 2.47082 9.07715 2.44409 9.19123 2.44373H12.8677C12.9818 2.44409 13.0943 2.47082 13.1963 2.52184C13.2983 2.57286 13.3872 2.64679 13.4559 2.73785L14.3383 3.91432H7.72065L8.603 2.73785ZM17.0956 22.361C17.0805 22.5442 16.9969 22.715 16.8615 22.8394C16.7261 22.9637 16.5488 23.0325 16.3649 23.032H5.69399C5.51015 23.0325 5.33286 22.9637 5.19745 22.8394C5.06203 22.715 4.97843 22.5442 4.96329 22.361L3.44675 5.38491H18.6122L17.0956 22.361Z" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect x="0.529541" y="0.737793" width="21" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      break;
    case "close":
      buttonIcon =
        <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
          <rect x="2.19873" y="0.684204" width="22.9452" height="1.71597" rx="0.857984" transform="rotate(45 2.19873 0.684204)" />
          <rect x="0.985352" y="16.7" width="22.9452" height="1.71597" rx="0.857984" transform="rotate(-45 0.985352 16.7)" />
        </svg>
      break;
    default:
      buttonIcon = "ERROR"
      break;
  }

  return (
    <button onClick={() => {
      if (props.onClick)
        props.onClick();
    }} className={buttonCircleClass}>
      {buttonIcon}
    </button>
  )
}

export default ButtonCircle