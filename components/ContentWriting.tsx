import * as React from "react";

interface Props {
    text: string; image: string; left: boolean
}
export default function TextContentWithImage({ text, image, left }: Props) {
    return (
        <div className="flex relative justify-around">
            {left ? <>
                    <img src={image} alt={text} className="shrink-0 object-contain" />
                    <p>{text}</p>
            </> : <>
                    <p>{text}</p>
                    <img src={image} alt={text} className="shrink-0 object-contain" />
            </>}
        </div>
    );
}