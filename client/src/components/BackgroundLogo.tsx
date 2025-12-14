export default function BackgroundLogo() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden opacity-[0.03] mix-blend-multiply">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 800 800" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] max-w-none transform -rotate-12"
      >
        <g fill="currentColor" className="text-secondary">
          {/* 089 Box Background */}
          <rect x="100" y="200" width="200" height="200" rx="20" fill="currentColor" />
          
          {/* 089 Text (White inside box, so we use mask or just make it transparent if possible, but here we can just overlay white text if background is white, but better to use path subtraction or just white fill if we assume light theme background) */}
          <text x="200" y="340" fontSize="120" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" fill="white">089</text>
          
          {/* DACH Text */}
          <text x="340" y="340" fontSize="120" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">DACH</text>
          
          {/* GmbH München Text */}
          <text x="345" y="390" fontSize="30" fontWeight="medium" fontFamily="sans-serif" letterSpacing="5" fill="currentColor">GMBH MÜNCHEN</text>
        </g>
      </svg>
    </div>
  );
}
