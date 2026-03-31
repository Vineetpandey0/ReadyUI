'use client'

import React from 'react'

export default function page() {

    return (

        <>

            <style>{`

                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

            

                * {

                    font-family: 'Poppins', sans-serif;

                }

            `}</style>

            <h1 className="text-3xl font-semibold text-center mx-auto mt-10">Why ReadyUI</h1>

            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">

                A growing library of production-ready templates and components — built for developers who want to ship faster without compromising on design.

            </p>

            <div className="max-w-4xl mb-10 mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">

                <div className="size-130 rounded-full absolute blur-[300px] -z-10 "></div>

                <img className="max-w-sm w-full rounded-xl h-auto"

                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"

                    alt="" />

                <div>

                    <h1 className="text-3xl font-semibold">Built for modern teams</h1>

                    <p className="text-sm text-slate-500 mt-2">

                        ReadyUI gives you everything you need to build stunning interfaces — customizable components, full Figma files, and clean code that slots right into your stack.

                    </p>

            

                    <div className="flex flex-col gap-10 mt-6">

                        <div className="flex items-center gap-4">

                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">

                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />

                            </div>

                            <div>

                                <h3 className="text-base font-medium text-slate-600">Ship in minutes, not days</h3>

                                <p className="text-sm text-slate-500">200+ templates and components ready to drop into any project instantly.</p>

                            </div>

                        </div>

                        <div className="flex items-center gap-4">

                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">

                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />

                            </div>

                            <div>

                                <h3 className="text-base font-medium text-slate-600">Pixel-perfect, fully customizable</h3>

                                <p className="text-sm text-slate-500">Every component comes with Figma source files and clean Tailwind CSS code.</p>

                            </div>

                        </div>

                        <div className="flex items-center gap-4">

                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">

                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />

                            </div>

                            <div>

                                <h3 className="text-base font-medium text-slate-600">Works with your stack</h3>

                                <p className="text-sm text-slate-500">Seamless support for React, Next.js and Tailwind CSS — no extra configuration needed.</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

};