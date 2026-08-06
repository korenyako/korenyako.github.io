import type { ProjectCoverId } from '@/types/project';
import NetokCover from './covers/NetokCover';
import KoticCover from './covers/KoticCover';

/*
 * The card thumbnail, shared by ProjectCard and MoreProjects (the markup was
 * duplicated verbatim in both). Server component — the animated covers are
 * pure CSS, so nothing here forces a client boundary.
 */

const COVERS: Record<ProjectCoverId, (props: { className?: string }) => JSX.Element> = {
  netok: NetokCover,
  kotic: KoticCover,
};

/** Hover lift, kept identical for every kind of cover. */
const MEDIA_CLASS =
  'w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105';

interface ProjectCardMediaProps {
  hero: string;
  heroComponent?: ProjectCoverId;
  alt: string;
}

const ProjectCardMedia = ({ hero, heroComponent, alt }: ProjectCardMediaProps) => {
  const Cover = heroComponent ? COVERS[heroComponent] : undefined;

  return (
    <div className="aspect-[4/3] overflow-hidden bg-neutral-100 rounded-3xl">
      {Cover ? (
        <Cover className={MEDIA_CLASS} />
      ) : hero.endsWith('.mp4') ? (
        <video src={hero} autoPlay loop muted playsInline className={MEDIA_CLASS} />
      ) : (
        <img src={hero} alt={alt} className={MEDIA_CLASS} />
      )}
    </div>
  );
};

export default ProjectCardMedia;
