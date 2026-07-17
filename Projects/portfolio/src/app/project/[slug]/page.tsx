import { projects } from '@/data/projects';
import ProjectPage from '@/components/ProjectPage';

type PageProps = {
  params: {
    slug: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];
  return (
    <>
      <ProjectPage project={project} nextProject={nextProject} />
    </>
  );
};

export default Page;
