interface Props {
    icon:string;text:string;boldText:string;
}
export default function InfoGraphics({ icon, text, boldText }: Props) {
    return (
        <div className="flex flex-row">
        <div className="flex flex-col bg-gray-300 py-2 px-4 rounded-xl justify-left mt-5 md:flex-row">
          <i className={`mr-5 ${icon}`} />
          <p className="text-lg md:text-xl">
          <b>{boldText}</b> {text}
          </p>
        </div>
      </div>
    );
}