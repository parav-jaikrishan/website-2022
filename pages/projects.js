import Head from "next/head";
import HeadingWithIllustration from "../components/HeadingWithIllustration";
import PageHeader from "../components/PageHeader";
import projects from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

export default function Projects() {
  const [openArr, setOpenArr] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const handleClick = (index) => {
    let arr = openArr;
    arr[index] = true;
    setOpenArr([...arr]);
  };
  return (
    <>
      <Head>
        <title>Projects | Exun Clan</title>
      </Head>
      <div className="px-5 md:px-20 mx-auto max-w-[1400px] w-full">
        <PageHeader
          title="Projects"
          description="Exun Talks are a series of semi-professional sessions relating to technology, with speakers including Exun and DPS RKP alumni, YouTubers among others."
        />
        {projects.map((project, index) => (
          <>
            <HeadingWithIllustration title={project.type} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {project.projects
                .slice(0, `${openArr[index] ? project.projects.length : 3}`)
                .map(({ desc, image, link }, index) => (
                  <ProjectCard key={index} desc={desc} bg={image} link={link} />
                ))}
            </div>
            {project.projects.length > 3 && (
              <button
                target="_blank"
                rel="noreferrer"
                onClick={() => handleClick(index)}
                className="text-left w-full flex justify-end mt-6 text-accent cursor-pointer"
              >
                View {openArr[index] ? "Less" : "More"}{" "}
                {openArr[index] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </button>
            )}
          </>
        ))}
      </div>
    </>
  );
}
