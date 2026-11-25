import Link from "next/link";

// const metadata = {
//   title: "Harvey | Personal Site",
// }

export default function Home() {
  return(
    <main className="p-8">
      <h1 className="text-3xl font-bold">Hello my name is Harvey</h1>
      <p className="mt-2">
        I love building web applications and exploring new technologies. This is my personal website built with Next.js. My hobby is playing video games and I also enjoy reading books. I am always looking for new challenges and opportunities to learn and grow as a developer.
      </p>

      <Link href="/projects" className="mt-4 inline-block text-blue-500 hover:underline">
        See my projects
      </Link>
    </main>
  );
}