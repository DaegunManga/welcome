import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IconLinkProps {
  text: string;
  url: string;
  symbol: IconDefinition;
}

const IconLink: React.FC<IconLinkProps> = ({ text, url, symbol }) => (
  <a
    href={url}
    title={text}
    target="_blank"
    rel="noreferrer"
    className="w-8 h-8 flex justify-center items-center p-2 rounded-full shadow-lg bg-white text-gray-700 transition-transform hover:text-black hover:-translate-y-1 sm:w-10 sm:h-10 sm:text-lg"
  >
    <FontAwesomeIcon icon={symbol} />
  </a>
);

export default IconLink;
