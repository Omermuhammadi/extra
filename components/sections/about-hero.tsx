import Image from "next/image";

export function AboutHero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col overflow-hidden bg-gray-900">
      <Image
        src="/images/about-bg.png"
        alt="Professional commercial cleaning team in action"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/60 to-transparent" />

      <div className="relative z-10 flex min-h-[80vh] items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl px-4 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-tight mb-6">
              Decades of Uncompromising Cleanliness
            </h1>
            <p className="text-lg md:text-xl text-gray-100 font-medium leading-relaxed">
              Artillery&apos;s delivers dependable commercial cleaning and facility support across Pennsylvania, including Delaware County and Chester, PA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}