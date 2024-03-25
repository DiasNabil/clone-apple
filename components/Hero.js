'use client'

import { heroVideo, smallHeroVideo } from "@/utils/assets"
import useDimension from "@/utils/useDimension"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function Hero () {

    const viewportWidth = useDimension().width
    const [videoSrc, setVideoSrc] = useState(null)

    useEffect(()=>{
        viewportWidth < 760 ? setVideoSrc(smallHeroVideo) : setVideoSrc(heroVideo)

    }, [viewportWidth])

    useGSAP(()=>{
        gsap.to('.hero-title', {opacity: 1, delay: 1})
        gsap.to('#cta', {opacity: 1, y:-50, delay: 1, ease:'power2.out', duration:0.4})
    })

    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p className="hero-title">iPhone 15 Pro</p>

                <div className="md:w-10/12 w-9/12">
                    <video autoPlay muted playsInline={true} key={videoSrc} className="pointer-events-none">
                        <source src={videoSrc} type="video/mp4"/>
                    </video>
                </div>
            </div>

            <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
                <Link href={'#highlights'} className="btn">Buy</Link>
                <p className="font-normal text-xl">From $199/month or $999</p>
            </div>
        </section>
    )
}