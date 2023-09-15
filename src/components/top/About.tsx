import Image from "next/image";
import Link from "next/link";
import { TAbout } from "../../lib/microCMS/uwearAboutClient";
type TProps = {
  aboutData: TAbout;
};
export const About = ({ aboutData }: TProps) => {
  return (
    <div className="w-full h-full bg-[#F4F3EF] text-center py-28">
      <h3 className="text-2xl xs:text-3xl">UWearの知ってほしいこと</h3>
      <p className="font-medium mt-3 font-lora border-b border-themeGray border-dashed w-fit mx-auto">
        About UWear
      </p>
      <ul className="flex overflow-x-scroll snap-x snap-mandatory hidden-scrollbar gap-x-6 px-24 mt-12">
        {aboutData.contents.map((data) => (
          <Link
            href={`/about/${data.id}`}
            key={data.id}
            className={`flex-none snap-always snap-center rounded-md active:brightness-125 sm:w-[500px]`}
          >
            <li className="flex flex-col justify-between h-full">
              <Image
                src={data.image.url}
                alt={data.title}
                className="object-cover rounded-md w-[80vw]"
                width={500}
                height={500}
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
