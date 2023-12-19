import { FC } from "react";
import { IconProps } from "../../DTOs/icon.model";

export const VideoGame: FC<IconProps> = ({
  width = "40px",
  height = "25px",
  fill,
}): JSX.Element => {
  return (
    <svg
      fill={fill}
      height={height}
      width={width}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      className="iconify iconify--emojione"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M61.9 44.2l-4.4-22.1c-1-5.1-5.4-9-10.7-9.1H17.3c-5.4 0-9.9 3.9-10.8 9.1L2.1 44.2c-.1.4-.1.8-.1 1.2C2 48.5 4.5 51 7.5 51c2 0 3.7-1 4.7-2.6l7.2-9c1.2 1.1 2.7 1.8 4.4 1.8c3.6 0 6.5-2.9 6.5-6.6h3.5c0 3.6 2.9 6.6 6.5 6.6c1.7 0 3.2-.6 4.4-1.7l7.2 9c1 1.6 2.7 2.6 4.7 2.6c3 0 5.5-2.5 5.5-5.6c-.1-.5-.1-.9-.2-1.3"
        fill="#333"
      ></path>

      <g fill="#94989b">
        <path d="M20.9 25.2c.7.7 1.5.5 1.8-.5v-3.1c-.3-1-1.1-1.2-1.8-.5l-.7.7c-.7.7-.7 1.9 0 2.6l.7.8"></path>

        <path d="M15.8 17.8c-1 .3-1.2 1.1-.5 1.8l.7.7c.7.7 1.9.7 2.6 0l.7-.7c.7-.7.5-1.5-.5-1.8h-3"></path>

        <path d="M13.8 21.2c-.7-.7-1.5-.5-1.8.5v3.1c.3 1 1.1 1.2 1.8.5l.7-.7c.7-.7.7-1.9 0-2.6l-.7-.8"></path>

        <path d="M18.9 28.7c1-.3 1.2-1.1.5-1.8l-.7-.7c-.7-.7-1.9-.7-2.6 0l-.7.7c-.7.7-.5 1.5.5 1.8h3"></path>
      </g>

      <g fill="#f2b200">
        <path d="M49.5 23.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8s1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8"></path>

        <path d="M44.2 25.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8s1.8-.8 1.8-1.8c.1-1-.8-1.8-1.8-1.8"></path>

        <path d="M49.3 21.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8c0 .9.8 1.8 1.8 1.8"></path>

        <path d="M44.1 23.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8s.8 1.8 1.8 1.8"></path>
      </g>

      <g fill="#94989b">
        <ellipse cx="40.3" cy="34.5" rx="4.3" ry="4.4"></ellipse>

        <path d="M23.8 30.1c-2.4 0-4.3 2-4.3 4.4c0 2.4 1.9 4.4 4.3 4.4s4.3-2 4.3-4.4c.1-2.4-1.9-4.4-4.3-4.4"></path>
      </g>
    </svg>
  );
};
