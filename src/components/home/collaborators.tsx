import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import Cobe from '@/components/home/cobe';

export default function Collaborators() {
  const logoImages = [
    {
      src: `/images/collaborators/ucsf-logo.png`,
      alt: `UCSF logo`,
      width: 200,
      height: 145,
    },
    {
      src: `/images/collaborators/sparc-logo.svg`,
      alt: `NIH SPARC logo`,
      width: 200,
      height: 111,
    },
    {
      src: `/images/collaborators/fdi-lab-logo.png`,
      alt: `FDI Lab logo`,
      width: 200,
      height: 79.45,
    },
    {
      src: `/images/collaborators/calmi-logo.png`,
      alt: `California Medical Innovations Institute logo`,
      width: 200,
      height: 88,
    },
    {
      src: `/images/collaborators/UCL-logo.png`,
      alt: `UCL logo`,
      width: 200,
      height: 85,
    },
  ];

  return (
    <section className="mx-auto max-w-screen-lg px-6 pb-0 pt-4 md:p-10">
      <div className="container relative mx-auto max-w-screen-lg">
        <div className="mb-4 flex w-full flex-col items-center">
          <p className="my-2 text-center text-4xl font-extrabold tracking-tight sm:text-4xl">
            Where do our tools make a difference?
          </p>
        </div>

        <div className="">
          <Cobe />
        </div>

        <div className="md:logo-overlay md:absolute md:bottom-0">
          <div className="relative mb-2 block">
            <Marquee
              speed={60}
              gradient={true}
              gradientColor={[255, 255, 255]}
              gradientWidth="25p"
            >
              {logoImages.map((logo, index) => (
                <div
                  key={index}
                  className=" flex h-full w-full items-center justify-center"
                >
                  <Image
                    className=" !px-4"
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
      <span className="text-xs text-gray-400">
        Disclaimer: All logos are used with adequate permissions. Opinions,
        interpretations, conclusions and recommendations are those of the FAIR
        Data Innovations Hub and are not necessarily endorsed by the other
        organizations mentioned on this website.
      </span>
    </section>
  );
}
