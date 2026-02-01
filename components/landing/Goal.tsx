import Image from "next/image"
import Link from "next/link"

export default function Goal() {
  return (
    <section className="p-6 md:p-16 bg-gold-500 w-full">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
        <div className="flex-1 flex-col text-left space-y-6 p-4 w-full md:w-1/2">
          <h2 className="text-5xl font-extrabold text-primary-800">Our Mission</h2>
          <div className="space-y-4">
            <p>
              The goal of this lab is to develop AI systems that augment and empower everyday people rather than replace them. 
              While we pursue a highly rigorous and systematic study of AI problems and techniques, the core of every effort is the goal of preserving and amplifying human agency. 
              As builders of AI systems, we get to choose what future awaits us. Let’s build one where these systems support the flourishing of all humanity.
            </p>
          </div>
          <div>
            <Link
              href="/publications"
              className="px-4 py-2 bg-primary-800 hover:bg-primary-500 transition duration-200 text-white font-extrabold rounded"
            >
              Read More
            </Link>
          </div>
        </div>

        <div className="hidden md:flex flex-1 w-1/2 flex items-center justify-center">
          {/*  <Image src="/landing/lab-group.jpg" alt="Created through Gemini" width={1000} height={1000} className="rounded" /> */}
          <figure className="max-w-4xl mx-auto">
            <Image 
              src="/landing/lab-group.jpg" 
              alt="People working alongside AI tools in a community setting" 
              width={1000} 
              height={1000} 
              className="rounded-lg shadow-md" 
            />
            <figcaption className="mt-3 text-center text-sm text-gray-600 italic">
              Visual concept co-created by human vision and AI augmentation.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
