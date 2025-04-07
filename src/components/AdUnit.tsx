import React, { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
  className?: string;
}

const AdUnit: React.FC<AdUnitProps> = ({ slot, format = 'auto', responsive = true, className = '' }) => {
  const adRef = useRef<HTMLDivElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (adRef.current && !isLoaded.current) {
      try {
        const adsbygoogle = (window as any).adsbygoogle || [];
        adsbygoogle.push({});
        isLoaded.current = true;
      } catch (error) {
        console.error('Error loading AdSense ad:', error);
      }
    }

    return () => {
      isLoaded.current = false;
    };
  }, []);

  return (
    <div className={`ad-container relative min-h-[100px] ${className}`}>
      {/* Ad Label */}
      <div className="absolute -top-6 left-0 text-xs text-gray-500 dark:text-gray-400">
        Advertisement
      </div>
      
      {/* Ad Unit */}
      <ins
        ref={adRef}
        className="adsbygoogle block w-full"
        style={{ display: 'block', minHeight: '100px' }}
        data-ad-client="ca-pub-9774323877072715"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default AdUnit;