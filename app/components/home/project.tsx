import { Metadata } from "next";
import { TOKEN, DATABASE_ID } from "../../../config/index"
import { NotionPage, NotionResponse } from "./types";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Projects | 박재홍의 포트폴리오',
  description: '혁신적인 웹 솔루션을 만드는 주니어 개발자의 프로젝트 모음',
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
  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({ page_size: 100 }),
    cache: 'no-store'
  });
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
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              {project.coverImage && (
                <div className="relative h-48">
                  <Image
                    src={project.coverImage}
                    alt={`Cover image for ${project.name}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.name}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {getWorkPeriod(project.startDate, project.endDate)}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap items-center mb-4">
                  {project.tag.map((aTag) => (
                    <span
                      key={aTag.id}
                      className='px-2 py-1 m-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                    >
                      {aTag.name}
                    </span>
                  ))}
                </div>
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}