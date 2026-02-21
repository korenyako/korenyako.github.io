
interface ProjectHeaderProps {
  title: string;
  subtitle: string;
  highlights?: string;
  role?: string;
  scope?: string;
  timeline?: string;
  industry: string;
  deliverables: string;
  tags: string[];
  hero: string;
  awardLogo?: string;
  awardLink?: string;
  externalLink?: string;
}

const ProjectHeader = ({ title, subtitle, highlights, role, scope, timeline, industry, deliverables, tags, hero, awardLogo, awardLink, externalLink }: ProjectHeaderProps) => {
  return (
    <div className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-xl md:text-2xl font-medium text-foreground leading-tight m-0 p-0">
              {title}
            </h1>
          </div>
          <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
          {awardLogo && (
            awardLink ? (
              <a href={awardLink} target="_blank" rel="noopener noreferrer" className="block mt-6 hover:opacity-80 transition-opacity">
                <img
                  src={awardLogo}
                  alt="Award Logo"
                  className="w-[140px]"
                />
              </a>
            ) : (
              <img
                src={awardLogo}
                alt="Award Logo"
                className="w-[140px] mt-6"
              />
            )
          )}
          {externalLink && (
            <a
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-black text-white rounded-full text-base font-medium hover:opacity-80 transition-opacity"
            >
              Visit Website
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-base md:text-lg font-medium text-foreground mb-2">Industry</h3>
            <p className="text-lg md:text-xl text-muted-foreground">{industry}</p>
          </div>
          {role && (
            <div>
              <h3 className="text-base md:text-lg font-medium text-foreground mb-2">Role</h3>
              <p className="text-lg md:text-xl text-muted-foreground">{role}</p>
            </div>
          )}
          {scope && (
            <div>
              <h3 className="text-base md:text-lg font-medium text-foreground mb-2">Scope</h3>
              <p className="text-lg md:text-xl text-muted-foreground">{scope}</p>
            </div>
          )}
          {timeline && (
            <div>
              <h3 className="text-base md:text-lg font-medium text-foreground mb-2">Timeline</h3>
              <p className="text-lg md:text-xl text-muted-foreground">{timeline}</p>
            </div>
          )}
          {highlights && (
            <div>
              <h3 className="text-base md:text-lg font-medium text-foreground mb-2">Key Facts</h3>
              <p className="text-lg md:text-xl text-muted-foreground">{highlights}</p>
            </div>
          )}
          <div>
            <h3 className="text-base md:text-lg font-medium text-foreground mb-2">Deliverables</h3>
            <p className="text-lg md:text-xl text-muted-foreground">{deliverables}</p>
          </div>
        </div>
      </div>
      
      {/* Hero Image */}
      <div className="overflow-hidden bg-neutral-100 rounded-3xl">
        {hero.endsWith('.mp4') ? (
          <video
            src={hero}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-3xl"
          />
        ) : (
          <img 
            src={hero} 
            alt={title}
            className="w-full h-auto rounded-3xl"
          />
        )}
      </div>
    </div>
  );
};

export default ProjectHeader;
