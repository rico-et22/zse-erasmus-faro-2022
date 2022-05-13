import Link from "next/link";

interface Props {
  icon: string;
  text: string;
  boldText: string;
  href: string;
}
export default function InfoGraphics({ icon, text, boldText, href }: Props) {
  return (
    <Link href={href} passHref>
      <a className="mb-6 w-1/2 sm:w-full px-2">
        <div className="flex flex-col bg-gradient-to-r from-portugal-green text-gray-100 to-green-500 shadow py-2 px-4 rounded-xl justify-left w-full hover:scale-105 duration-100">
          <i className={`text-3xl mb-2 ${icon}`} />
          <p className="text-lg md:text-xl">
            <b>{boldText}</b> {text}
          </p>
        </div>
      </a>
    </Link>
  );
}
