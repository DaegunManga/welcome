import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import IconLink, { IconLinkProps } from "./IconLink";

function Contacts() {
  const links: Array<IconLinkProps> = [
    {
      text: "Instagram",
      url: "https://instagram.com/dg_manga_",
      symbol: icon({ name: "instagram", style: "brands" }),
    },
    {
      text: "GitHub",
      url: "https://github.com/DaegunManga",
      symbol: icon({ name: "github", style: "brands" }),
    },
    {
      text: "Cellphone",
      url: "tel:+01033392975",
      symbol: icon({ name: "phone" }),
    },
  ];
  return (
    <div className="float-right py-6 px-2 sm:py-8 sm:px-6">
      <div className="flex space-x-2">
        {links.map((link) => (
          <IconLink key={link.url} {...link} />
        ))}
      </div>
    </div>
  );
}

export default Contacts;
