import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="lg:pt-20">
      <div className="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
          <div className="flex flex-col w-full mb-2 text-left md:text-center">
            <h1 className="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
              <span>Learn the</span>
              <br className="hidden lg:block"></br>
              Way of the Sword
            </h1>
            <br></br>
            <p className="mx-auto text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
              Strenghthen your mind and body in the tranditional Japanese martial art of Kendo.
              </p>
          </div>

      </div>
      <h1>HEADER HERE. Explain Kendo</h1>
      <h1>Maybe News and Events that will be handled with dynamic routing</h1>
      <h1>The gallery of images will probably be here</h1>
      <h1>Social Media Links here</h1>
    </section>
  )
}
