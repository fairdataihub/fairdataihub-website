/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import Collaborators from '@/components/home/collaborators';
import ProjectsCarousel from '@/components/home/projectsCarousel';
import LottieAnimation from '@/components/lotties';
// import Vision from '@/components/home/vision';
import Seo from '@/components/seo/seo';

import heroLottie from '../assets/lotties/hero.json';
import teamLottie from '../assets/lotties/team.json';

export default function Home() {
  return (
    <div>
      <Seo
        templateDescription="FAIR Data Innovations Hub is an organization dedicated to building open source tools that help biomedical researchers understand and follow FAIR Data Principles when showcasing their findings"
        templateImage="https://fairdataihub.org/thumbnails/index.png"
      />

      <div className="relative">
        <section className="mb-10 pt-12 sm:pt-16">
          <div className="hero container mx-auto max-w-screen-xl px-2 py-8 items-center justify-center md:flex">
            <div className="w-full p-2 lg:w-7/12 ">
              <h1 className="w-full text-left text-4xl font-black sm:text-3xl md:py-3 md:text-4xl lg:text-5xl header-gradient-background">
                Empowering AI driven discoveries through simplified FAIR data
                practices.
              </h1>

              <p className="mt-2 w-full text-xl font-medium text-black sm:mt-0 sm:text-base md:text-lg lg:text-xl max-w-lg">
                Discover how FAIR data practices are revolutionizing biomedical
                research. Explore our open-source tools designed to guide
                researchers through this transformative journey
              </p>

              <Link href="/contact-us" passHref>
                <button
                  type="button"
                  className="my-3 rounded-lg border-2 border-black bg-transparent p-3 text-center text-base font-semibold text-black transition-all hover:border-light-accent hover:text-accent"
                  data-umami-event="Home page link"
                  data-umami-event-value="Contact us"
                >
                  Contact us
                </button>
              </Link>
            </div>

            <div className="mt-6 flex w-full items-center justify-center p-5 lg:mt-0 lg:w-5/12 lg:p-2">
              <LottieAnimation
                animationData={heroLottie}
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>

        <div
          className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative aspect-square rotate-[30deg] bg-gradient-to-tr from-pink-300 to-purple-500 opacity-30"
            style={{
              clipPath: `polygon(6% 8%, 52% 29%, 93% 51%, 68% 82%, 99% 94%, 32% 57%, 48% 10%, 5% 37%, 69% 52%, 63% 63%, 81% 28%, 56% 64%, 62% 21%, 46% 61%, 79% 65%, 93% 68%, 88% 75%)`,
            }}
          ></div>
        </div>
      </div>

      <section className="py-20 mx-auto max-w-screen-xl relative">
        <div className="mb-8 flex w-full flex-col items-center">
          <h2 className="my-2 text-center text-4xl font-extrabold tracking-tight sm:text-4xl">
            What are we working on?
          </h2>
        </div>

        <div className="flex gap-3 h-full">
          <div className="bg-white w-6/12 flex h-[450px] flex-col border rounded-md border-slate-200 hover:shadow-lg shadow-md hover:border-slate-300 transition-all cursor-pointer p-1 relative">
            <div className="h-[280px] relative">
              <img
                src="https://i.imgur.com/ZYVW3Sh.png"
                alt="image"
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0 bg-white"
                style={{
                  background: `linear-gradient(180deg, rgba(255,255,255,0) 75%, rgba(255,255,255,1) 100%)`,
                }}
              ></div>
              <div
                className="absolute inset-0 bg-white"
                style={{
                  background: `linear-gradient(90deg, rgba(255,255,255,0) 75%, rgba(255,255,255,1) 100%)`,
                }}
              ></div>
            </div>

            <div className="px-8 py-4">
              <h3 className="mb-2 text-2xl font-bold header-gradient-background">
                SODA for SPARC
              </h3>

              <p className="text-lg font-asap">
                Easily make bioelectronic, neurophysiology, and other similar
                research data and computational models FAIR following the NIH
                SPARC guidelines
              </p>
            </div>
          </div>

          <div className="bg-white w-6/12 flex h-[450px] flex-col border rounded-md border-slate-200 hover:shadow-lg shadow-md hover:border-slate-300 transition-all cursor-pointer ">
            <div className="h-[280px] relative">
              <img
                src="https://i.imgur.com/OYy0ZiU.png"
                alt="image"
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0 bg-white"
                style={{
                  background: `linear-gradient(180deg, rgba(255,255,255,0) 75%, rgba(255,255,255,1) 100%)`,
                }}
              ></div>
              {/* <div
                className="absolute inset-0 bg-white"
                style={{
                  background: `linear-gradient(270deg, rgba(255,255,255,0) 75%, rgba(255,255,255,1) 100%)`,
                }}
              ></div> */}
              <div
                className="absolute inset-0 bg-white"
                style={{
                  background: `linear-gradient(90deg, rgba(255,255,255,0) 75%, rgba(255,255,255,1) 100%)`,
                }}
              ></div>
            </div>

            <div className="px-8 py-4">
              <h3 className="mb-2 text-2xl font-bold header-gradient-background">
                AI-READI
              </h3>

              <p className="text-lg font-asap">
                Generating a flagship AI-ready and ethically-sourced dataset to
                support future AI-driven discoveries in diabetes
              </p>
            </div>
          </div>
        </div>
        <div></div>

        <p className="text-xl text-center mt-6">
          There is a lot more in the pipeline. To learn more about all our work
          in this area, please visit our{` `}
          <Link href="/projects" passHref>
            <span className="text-accent hover:underline">Projects</span>
          </Link>
          {` `}
          page.
        </p>
      </section>

      <section className="py-20 relative bg-stone-900 text-white">
        <div className="mx-auto max-w-screen-xl py-20 ">
          <h2 className="mb-10 text-left text-4xl font-extrabold sm:text-4xl">
            Sharing is caring... but also daunting?
          </h2>

          <div className="grid grid-cols-2 gap-10 font-asap pt-8">
            <p className="text-xl">
              Sharing biomedical data is essential for accelerating discoveries
              in human health. However, it&apos;s not as simple as uploading
              data anywhere. Adherence to FAIR (Findable, Accessible,
              Interoperable, Reusable) Principles and ethical guidelines is
              crucial to ensure data reusability. This involves formatting and
              organizing data according to standards, including metadata, and
              finding appropriate platforms for sharing.
            </p>

            <p className="text-xl">
              Unfortunately, many researchers lack the training and support
              needed for these tasks, leading to inadequate or non-existent data
              sharing practices. It&apos;s imperative to equip researchers with
              the necessary tools and resources to navigate these challenges
              effectively. By empowering researchers, we can foster a culture of
              responsible and impactful data sharing in biomedical research,
              ultimately advancing the pace of discoveries for improving human
              health.
            </p>
          </div>
        </div>

        <hr className="mx-auto max-w-screen-lg h-0.5 border-t-0 bg-stone-800 " />

        <div className="mx-auto max-w-screen-xl py-20">
          <h2 className="mb-10 text-left text-4xl font-extrabold sm:text-4xl">
            Simple guidelines and open-source tools for the win!
          </h2>

          <div className="gap-16 items-start lg:grid lg:grid-cols-2">
            <div className="pt-8 font-asap">
              <p className="mb-4 text-xl">
                We believe that researchers already have enough work and
                responsibilities on their hands. Therefore, sharing data,
                software, and other research outcomes should be made very easy
                and quick for them. We are trying to achieve that through two
                main approaches
              </p>
              <p className="mb-4 text-xl">
                Developing minimal, step-by-step, and actionable guidelines for
                preparing and sharing datasets, software, and other research
                outcomes such that they are FAIR and AI-Ready
              </p>
              <p className="text-xl">
                Developing open-source and free tools that streamline these
                tasks and minimize researchers’ time and effort through a
                combination of intuitive user interfaces, AI, and automation.
              </p>
            </div>

            <div>
              <img
                className="w-full rounded-lg"
                src="https://assets-global.website-files.com/59ace8427353c50001765cbd/64a87a6d7dba1d15881be545_Property%201%3DDefault.svg"
                alt="office content 1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <div
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative aspect-square rotate-[45deg] bg-gradient-to-tr from-blue-300 to-green-500 opacity-50"
          style={{
            clipPath: `polygon(10% 15%, 60% 35%, 85% 55%, 70% 90%, 95% 98%, 35% 60%, 55% 15%, 10% 40%, 75% 55%, 70% 70%, 85% 35%, 60% 70%, 65% 25%, 50% 65%, 85% 70%, 95% 72%, 90% 80%)`,
          }}
        ></div>
      </div> */}

      {/* <section className="py-10">
        <Vision />
      </section> */}

      <section className="relative py-10">
        <div className="container mx-auto max-w-screen-lg px-6 py-0 sm:pb-4 sm:pt-6">
          <div className="items-center justify-center md:flex">
            <div className="mt-6 flex w-full items-center justify-center p-8 lg:mt-0 lg:w-1/2">
              <LottieAnimation
                animationData={teamLottie}
                width={400}
                height={400}
              />
            </div>

            <div className="h-full w-full p-2 lg:max-w-2xl">
              <h2 className="my-10 text-center text-4xl font-extrabold sm:text-4xl">
                A little bit about us
              </h2>

              <p className="mb-6 mt-2 w-full text-left font-asap sm:text-center md:my-2 text-xl">
                FAIR Data Innovations Hub is a division of the California
                Medical Innovations Institute (CalMI<sup>2</sup>), a non profit
                biomedical research organization located in San Diego,
                California. We have a multidisciplinary team of enthusiasts
                about FAIR Data practices and software development.
              </p>
              <div className="flex w-full justify-center py-5">
                <a
                  href="https://calmi2.org/"
                  target="_blank"
                  className="hidden"
                  rel="noopener"
                ></a>
                <Link href="/team" passHref>
                  <button
                    type="button"
                    className="w-max rounded-md border-none bg-black px-6 py-4 text-center text-base font-semibold text-white ring-2 ring-transparent ring-offset-2 transition duration-200 ease-in-out hover:ring-pink-600 focus:ring-pink-600"
                    data-umami-event="Home page link"
                    data-umami-event-value="Meet our team"
                  >
                    Meet our team
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative aspect-square rotate-[45deg] bg-gradient-to-tr from-pink-200 to-purple-300 opacity-50"
            style={{
              clipPath: `polygon(10% 15%, 60% 35%, 85% 55%, 70% 90%, 95% 98%, 35% 60%, 55% 15%, 10% 40%, 75% 55%, 70% 70%, 85% 35%, 60% 70%, 65% 25%, 50% 65%, 85% 70%, 95% 72%, 90% 80%)`,
            }}
          ></div>
        </div>
      </section>

      <section className=" py-10">
        <ProjectsCarousel />
      </section>

      <section className="bg-[#f9f1f3] py-10">
        <Collaborators />
      </section>
    </div>
  );
}
