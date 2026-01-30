import type { ReactNode } from 'react';
interface AppWrapperProps {
  children: ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
      }}
      className="bg-black"
    >
      <div
        style={{
          flex: 1,
          overflow: 'auto',
          width: '100%',
          height: '100%',
        }}
        className="scrollbar-hide"
      >
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        {children}
      </div>
    </div>
  );
}
