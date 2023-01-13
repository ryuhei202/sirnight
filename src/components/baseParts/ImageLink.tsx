type TProps = {
  link: string;
};
export const ImageLink = ({ link }: TProps) => {
  return (
    <a href={link}>
      <img
        src="/images/icons/link.svg"
        alt="copy-icon"
        className="w-8 h-8 hover:opacity-40"
      />
    </a>
  );
};
