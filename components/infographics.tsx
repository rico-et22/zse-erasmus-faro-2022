interface Props {
  icon: string;
  text: string;
  boldText: string;
}
export default function InfoGraphics({ icon, text, boldText }: Props) {
  return (
    <div className="flex flex-row mb-6">
      <div className="flex flex-col bg-gray-300 py-2 px-4 rounded-xl justify-left w-full">
        <i className={`text-3xl mb-2 ${icon}`} />
        <p className="text-lg md:text-xl">
          <b>{boldText}</b> {text}
        </p>
      </div>
    </div>
  );
}
