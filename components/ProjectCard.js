export default function ProjectCard({ desc, link, bg }) {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className={`w-full flex justify-center items-center sm:bg-contain md:bg-contain bg-cover bg-no-repeat bg-center mb-4 lg:mb-8 rounded-md`}
    >
      <a
        href={link}
        target="_blank"
        className="p-24 opacity-0 transition ease-in-out duration-300 cursor-pointer hover:opacity-100 bg-black text-white bg-opacity-60 text-center h-full w-full text-2xl rounded-md font-semibold"
      >
        {desc}
      </a>
    </div>
  );
}
