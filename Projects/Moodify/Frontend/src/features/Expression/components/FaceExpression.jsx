import { useEffect, useRef, useState } from 'react';
import { init, detect } from '../utils/utils.js';

export default function FaceExpression(onClick = () => {}) {
  const videoRef = useRef(null);
  const landmarkerRef = useRef(null);
  const animationRef = useRef(null);
  const [expression, setExpression] = useState('Detecting...');
  const streamRef = useRef(null);

  useEffect(() => {
    init({ landmarkerRef, videoRef, streamRef });
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
      }
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  async function handleClick() {
    const expression = detect({
      landmarkerRef,
      videoRef,
      setExpression,
      animationRef,
    });
    onClick(expression);
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <video
        ref={videoRef}
        style={{ width: '400px', borderRadius: '12px' }}
        playsInline
      />
      <h2>{expression}</h2>
      <button onClick={handleClick}>Detect expression</button>
    </div>
  );
}
