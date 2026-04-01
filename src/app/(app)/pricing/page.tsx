'use client'

import React from 'react'

export default function page() {
    const [isAnnual, setIsAnnual] = React.useState(true);

    const pricingData = [
        { 
            name: 'Basic',
            price: 0,
            description: 'Perfect for freelancers and personal projects.',
            features: [
                'Up to 1 website project',
                '3 pre-built UI page templates',
                'Basic responsive layout support',
                'Access to 20+ core components',
                'Community forum support',
                'ReadyUI branding on exports',
            ]
        },
        {
            name: 'Pro',
            mostPopular: true,
            price: isAnnual ? 79 : 9,
            description: 'Ideal for growing teams and client projects.',
            features: [
                'Up to 10 website projects',
                '50+ premium UI page templates',
                'Custom branding & white-label exports',
                'Access to 150+ advanced components',
                'Priority email support (24hr response)',
                'Figma source files included',
                'SEO-ready page structures',
                'Monthly new template drops',
            ]
        },
        {
            name: 'Enterprise',
            price: isAnnual ? 199 : 24,
            description: 'Built for agencies and scaling product teams.',
            features: [
                'Unlimited website projects',
                'Full access to all 200+ templates',
                'Dedicated account manager',
                'Custom component development (2/mo)',
                'Team seats (up to 15 members)',
                'Advanced analytics & usage dashboard',
                'SLA-backed support with 4hr response',
                'Early access to beta features',
                'SSO & role-based access control',
            ]
        }
    ]

    const faqs = [
        {
            question: "What's included in the free Basic plan?",
            answer: "The free plan includes access to 20+ core components, 3 pre-built page templates, and community support. It's a great way to explore ReadyUI before committing to a paid plan."
        },
        {
            question: "Can I upgrade from Basic to Pro or Enterprise anytime?",
            answer: "Yes, you can upgrade at any time. Your billing cycle will be prorated automatically so you only pay for what you use going forward."
        },
        {
            question: "Do I get Figma source files with my plan?",
            answer: "Figma source files are included in the Pro and Enterprise plans, giving you full design access to customize templates and components to match your brand."
        },
        {
            question: "How does the annual billing work?",
            answer: "Choosing annual billing locks in a significantly lower rate compared to monthly. You're billed once per year and can still cancel before your next renewal."
        },
        {
            question: "Can I use ReadyUI templates for client projects?",
            answer: "Yes. Pro and Enterprise plans include white-label export rights, meaning you can use and deliver templates to clients without ReadyUI branding."
        },
        {
            question: "How many team members can I add?",
            answer: "The Enterprise plan supports up to 15 team seats with role-based access control. If you need more seats, reach out to us for a custom arrangement."
        },
        {
            question: "What kind of support can I expect?",
            answer: "Basic users have access to our community forum. Pro users get priority email support with a 24-hour response time, and Enterprise users get SLA-backed support with a 4-hour response guarantee."
        },
        {
            question: "Are new templates and components added regularly?",
            answer: "Yes. Pro and Enterprise plan users receive monthly new template drops and early access to beta components as we expand the ReadyUI library."
        }
    ]
    const mid = Math.ceil(faqs.length / 2)
    const columns = [faqs.slice(0, mid), faqs.slice(mid)]


    return (
        <>
            <style>
                {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

                    *{
                        font-family: "Poppins", sans-serif;
                    }`
                }
            </style>
            <section className='flex items-center bg-white justify-center flex-col py-20 px-4'>
                <h1 className='font-medium text-4xl md:text-[52px] text-slate-800 text-center'>Flexible Pricing Plans</h1>
                <p className='text-base/7 text-zinc-500 max-w-sm text-center mt-4'>Choose a plan that supports your business growth and digital goals.</p>
                <div className='mt-6 flex bg-zinc-100 p-1.5 rounded-full'>
                    <button onClick={() => setIsAnnual(false)} className={`px-4 py-2 rounded-full text-xs cursor-pointer transition ${!isAnnual ? 'bg-zinc-800 hover:bg-zinc-900 text-white' : 'text-gray-600'}`}>Monthly</button>
                    <button onClick={() => setIsAnnual(true)} className={`px-4 py-2 rounded-full text-xs cursor-pointer transition ${isAnnual ? 'bg-zinc-800 hover:bg-zinc-900 text-white' : 'text-gray-600'}`}>Annually</button>
                </div>
                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {pricingData.map((item, index) => (
                        <div key={index} className={`border border-zinc-200 rounded-2xl p-6 flex flex-col items-start max-w-md transition duration-300 hover:-translate-y-1 ${item.mostPopular ? 'bg-gray-100' : ''}`}>
                            <h1 className='font-medium text-3xl text-slate-800 mt-1'>{item.name}</h1>
                            <p className='text-sm text-zinc-500 mt-2'>{item.description}</p>
                            <h1 className='font-medium text-5xl text-slate-800 mt-6'>
                                {item.price === 0 ? 'Free' : `$${item.price}`}
                            </h1>
                            <button className={`w-full px-4 py-3 rounded-full cursor-pointer text-slate-600 text-sm mt-8 ${item.mostPopular ? 'bg-gray-800 hover:bg-gray-900 text-white' : 'border border-zinc-300/80 bg-zinc-100 hover:bg-zinc-200/70'}`}>
                                Get Started
                            </button>
                            <div className='w-full mt-8 space-y-2.5 pb-4'>
                                {item.features.map((feature, index) => (
                                    <p key={index} className='flex items-center gap-3 text-sm text-zinc-500'>
                                        <span className='size-3 rounded-full bg-zinc-300 flex items-center justify-center shrink-0'>
                                            <span className='size-1.5 rounded-full bg-zinc-800' />
                                        </span>
                                        {feature}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <div className='FAQ'>
              <style>
                  {`
                      @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                      *{ font-family: "Geist", sans-serif; }
                  `}
              </style>
              <section className='bg-black w-full flex flex-col items-center justify-center py-20 px-4'>
                  <div className='w-full max-w-5xl'>
                      <div className='mb-12'>
                          <h2 className='text-5xl font-medium text-neutral-50 text-center'>Most Asked FAQ&apos;s</h2>
                          <p className='text-neutral-100 max-w-135 text-base/6 text-center mx-auto mt-5'>Find answers to the most frequently asked questions about our platform, features, pricing and how we help businesses grow faster.</p>
                      </div>

                      <input id="faq-none" name="faq-accordion" type="radio" className="hidden" defaultChecked />

                      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-y-0'>
                          {columns.map((column, columnIndex) => (
                              <div key={columnIndex} className='space-y-4'>
                                  {column.map((faq) => (
                                      <details key={faq.question} name="faq-accordion" className='group rounded-lg border border-neutral-800 bg-neutral-950 transition-all duration-300 hover:bg-neutral-900'>
                                          <summary className='flex cursor-pointer list-none items-center justify-between gap-4 p-3.5 [&::-webkit-details-marker]:hidden'>
                                              <span className='text-sm font-medium text-neutral-100'>{faq.question}</span>
                                              <div className='shrink-0 rounded p-1 text-neutral-100 transition-colors hover:bg-neutral-800'>
                                                  <svg className='block group-open:hidden' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                                  <svg className='hidden group-open:block' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                                              </div>
                                          </summary>
                                          <div className='grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-in-out group-open:grid-rows-[1fr] group-open:opacity-100'>
                                              <div className='overflow-hidden'>
                                                  <p className='px-3.5 pb-3.5 text-sm leading-relaxed text-neutral-300'>
                                                      {faq.answer}
                                                  </p>
                                              </div>
                                          </div>
                                      </details>
                                  ))}
                              </div>
                          ))}
                      </div>
                  </div>
              </section>
          </div>
        </>
    )
}