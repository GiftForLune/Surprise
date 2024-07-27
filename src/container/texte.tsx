import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {useRef} from "react";

export const Text = ({content}: { content: {texte: string, time: number} }) => {
    const texte = useRef<HTMLParagraphElement>(null)

    useGSAP(
        () => {
            gsap.fromTo(
                texte.current,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 0.3,
                }
            )

                gsap.fromTo(
                    texte.current,
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0,
                        duration: 0.5,
                        delay: content.time - 0.5
                    }
                )
        },
        [content]
    )

   return (
       <>
            <p className="texte" ref={texte}>{content.texte}</p>
       </>
   )
}