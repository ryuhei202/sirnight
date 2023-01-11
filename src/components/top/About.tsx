import Link from "next/link";
import { TAbout } from "../../lib/microCMS/uwearAboutClient";
type TProps = {
  aboutData: TAbout;
};
export const About = ({ aboutData }: TProps) => {
  const getMarginOfList = ({ index }: { index: number }): string => {
    if (index === 0) return "ml-12";
    if (aboutData.contents.length === index + 1) return "mr-12 ml-6";
    return "ml-6";
  };

  const getOmittedDescription = ({ desc }: { desc: string }): string => {
    const MAX_LENGTH = 60;
    if (desc.length > MAX_LENGTH) return desc.substr(0, MAX_LENGTH) + "...";
    return desc;
  };

  return (
    <div className="w-full h-full bg-[#F4F3EF] text-center">
      <div className="py-16">
        <h3 className="text-2xl">UWearの知ってほしいこと</h3>
        <p className="font-medium mt-3 font-lora border-b border-themeGray border-dashed w-fit mx-auto">
          About UWear
        </p>
        <div className="mt-12">
          <ul className="flex overflow-x-scroll snap-x snap-mandatory hidden-scrollbar">
            {aboutData.contents.map((data, index) => (
              <Link href={`/about/${data.id}`} key={data.id}>
                <li
                  className={`bg-clay flex-none w-[80%] snap-always snap-center py-16 px-4 rounded-md ${getMarginOfList(
                    { index }
                  )}`}
                >
                  <p>{data.title}</p>
                  <img
                    src={data.image.url}
                    alt={data.title}
                    className="w-[50vw] h-[50vw] sm:h-[300px] sm:w-[300px] mt-4 mx-auto object-cover"
                  />
                  <p className="mt-4">
                    {getOmittedDescription({ desc: data.description })}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
