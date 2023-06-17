import { Bars } from 'react-loader-spinner';

export const FullPageLoader = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Bars type="TailSpin" color="#3f51b5" height={80} width={80} />
    </div>
  );
};
