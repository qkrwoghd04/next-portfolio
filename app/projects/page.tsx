import SomeReusableLayout from "../components/SomeReusableLayout";
import { Metadata } from "next";
import { TOKEN, DATABASE_ID } from "../../config/index"
import { NotionPage, NotionResponse } from './types';
import Image from 'next/legacy/image';

export const metadata: Metadata = {
  title: 'Projects',
  description: '오늘도 화이팅!',
}

function formatDate(dateString: string | null): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' });
}

function getWorkPeriod(startDate: string | null, endDate: string | null): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  return `${start} - ${end}`;
}

export const revalidate = 0

async function getProjectData() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({ page_size: 100 })
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
  const projects: NotionResponse = await res.json();

  return projects.results.map((aProject: NotionPage) => ({
    name: aProject.properties.이름.title[0]?.plain_text ?? "Untitled",
    description: aProject.properties.Description.rich_text[0]?.plain_text ?? "",
    gitLink: aProject.properties.github.url ?? "#",
    coverImage: aProject.cover?.file?.url ?? null,
    tag: aProject.properties.태그.multi_select ?? [],
    startDate: aProject.properties.WorkPeriod.date?.start ?? null,
    endDate: aProject.properties.WorkPeriod.date?.end ?? null,
  }));
}

export default async function Project() {
  const projectData = await getProjectData();

  return (
    <SomeReusableLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 mt-4 sm:text-5xl text-center">Projects List: {projectData.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            //Project box
            <div key={index} className="project-card bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden">
              {project.coverImage && (
                //For image
                <div className="relative h-48 border-b border-gray-200 dark:border-gray-700">
                  <Image
                    src={project.coverImage}
                    alt={`Cover image for ${project.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              )}
              {/* Project name, description, gitlink, tag, workperiod */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  작업 기간: {getWorkPeriod(project.startDate, project.endDate)}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                >
                  GitHub
                </a>
                <div className="flex flex-wrap items-start mt-4 -mx-1">
                  {project.tag.map((aTag) => (
                    <span
                      key={aTag.id}
                      className='px-2 py-1 m-1 text-sm font-semibold rounded-md bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                    >
                      {aTag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SomeReusableLayout>
  );
}