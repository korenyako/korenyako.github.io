'use client';

import { useEffect, useState } from 'react';
import GallerySlider from './ui/GallerySlider';
import PulseSlider from './PulseSlider';

interface ContentItem {
  type: string;
  content?: string;
  level?: number;
  items?: string[];
  src?: string;
  alt?: string;
  src1?: string;
  src2?: string;
  alt1?: string;
  alt2?: string;
  text?: string;
  className?: string;
  images?: string[];
  component?: string;
  props?: any;
  link?: string;
}

interface ProjectContentProps {
  content: ContentItem[];
}

const ProjectContent = ({ content }: ProjectContentProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSpacing = (currentIndex: number, currentItem: ContentItem) => {
    if (currentIndex === 0) return '';
    
    const prevItem = content[currentIndex - 1];
    
    // Reduced spacing after headings
    if (prevItem?.type === 'heading') {
      return 'mt-4';
    }

    // Tighter spacing between consecutive text blocks
    if ((currentItem.type === 'text' || currentItem.type === 'large-text') && (prevItem?.type === 'text' || prevItem?.type === 'large-text')) {
      return 'mt-6';
    }

    // Default spacing for other elements
    return 'mt-16';
  };

  const renderContent = (item: ContentItem, index: number) => {
    const spacing = getSpacing(index, item);
    
    switch (item.type) {
      case 'text':
        return (
          <div key={index} className={`max-w-3xl mx-auto ${spacing}`}>
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_strong]:font-medium"
              dangerouslySetInnerHTML={{ __html: item.content || '' }}
            />
          </div>
        );
      
      case 'large-text':
        return (
          <div key={index} className={`max-w-3xl mx-auto ${spacing}`}>
            <p
              className="text-2xl md:text-3xl text-muted-foreground leading-relaxed [&_a]:text-foreground [&_a]:underline [&_a]:hover:opacity-70"
              dangerouslySetInnerHTML={{ __html: item.content || '' }}
            />
          </div>
        );
      
      case 'heading':
        const HeadingTag = `h${item.level}` as keyof JSX.IntrinsicElements;
        const headingClasses = item.level === 2 
          ? "text-base md:text-lg font-medium text-foreground" 
          : "text-base md:text-lg font-medium text-foreground";
        
        return (
          <div key={index} className={`max-w-3xl mx-auto ${spacing}`}>
            <HeadingTag className={headingClasses}>
              {item.content}
            </HeadingTag>
          </div>
        );
      
      case 'list':
        return (
          <div key={index} className={`max-w-3xl mx-auto ${spacing}`}>
            <ul className="space-y-3">
              {item.items?.map((listItem: string, listIndex: number) => (
                <li key={listIndex} className="text-lg md:text-xl text-muted-foreground leading-relaxed flex items-start">
                  <span className="mr-4 flex-shrink-0 h-[1.25em] flex items-center"><span className="text-muted-foreground">—</span></span>
                  <span>{listItem}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      
      case 'image-full':
        const isPlaceholder = item.className?.includes('bg-gray-200');
        const imageElement = (
          <img
            src={item.src}
            alt={item.alt}
            className={`w-full h-auto rounded-3xl ${item.className || ''} ${item.link ? 'hover:opacity-90 transition-opacity' : ''}`}
            style={isPlaceholder ? {backgroundColor: '#e5e7eb', minHeight: '600px'} : {}}
            onError={e => {
              if (isPlaceholder) {
                (e.target as HTMLImageElement).style.display = 'none';
              }
            }}
          />
        );
        return (
          <div key={index} className={`w-full ${spacing} relative`}>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                {imageElement}
              </a>
            ) : (
              imageElement
            )}
            {isPlaceholder && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-2xl font-semibold select-none pointer-events-none">
                Скриншот скоро
              </div>
            )}
          </div>
        );
      
      case 'video':
        return (
          <div key={index} className={`w-full ${spacing}`}>
            <video 
              src={item.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-3xl"
            />
          </div>
        );
      
      case 'image-full-width':
        console.log('Rendering full-width image:', item.src);
        return (
          <div key={index} className={`relative left-1/2 transform -translate-x-1/2 w-[80vw] h-[80vh] overflow-hidden bg-gray-200 rounded-2xl ${spacing}`}>
            <div 
              className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${item.src})`,
                transform: `translateY(${scrollY * 0.5}px)`
              }}
            />
          </div>
        );
      
      case 'image-duo':
        return (
          <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${spacing}`}>
            <div className="aspect-square overflow-hidden rounded-3xl">
              <img 
                src={item.src1} 
                alt={item.alt1}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-3xl">
              <img 
                src={item.src2} 
                alt={item.alt2}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        );
      
      case 'text-image':
        return (
          <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${spacing}`}>
            <div>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
            <div>
              <img 
                src={item.src} 
                alt={item.alt}
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        );
      
      case 'gallery-slider':
        return (
          <div key={index} className={spacing}>
            {item.images && <GallerySlider images={item.images} />}
          </div>
        );
      
      case 'image-text-width':
        return (
          <div key={index} className={`max-w-3xl mx-auto ${spacing}`}>
            <img src={item.src} alt={item.alt} className="w-full h-auto rounded-2xl" />
          </div>
        );
      
      case 'custom':
        if (item.component === 'PulseSlider' && item.props?.images) {
          return (
            <div key={index} className={spacing}>
              <PulseSlider {...item.props} />
            </div>
          );
        }
        return null;
      
      default:
        return null;
    }
  };

  return (
    <div>
      {content.map((item, index) => renderContent(item, index))}
    </div>
  );
};

export default ProjectContent;
