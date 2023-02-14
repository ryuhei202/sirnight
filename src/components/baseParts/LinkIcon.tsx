import Link from "next/link";

type TProps = {
  link: string;
};
export const LinkIcon = ({ link }: TProps) => {
  return (
    <Link href={link} legacyBehavior>
      <img
        src="/images/icons/link.svg"
        alt="copy-icon"
        className="w-8 h-8 hover:opacity-40"
      />
    </Link>
  );
};
