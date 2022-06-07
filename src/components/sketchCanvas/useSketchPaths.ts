import { useRef, useState } from 'react';
import type { SketchPath } from './types';
import { useSketchCanvasContext } from './SketchCanvasProvider';

export const useSketchPaths = (isSynced: boolean) => {
  const context = useSketchCanvasContext();
  const [, setPathsLength] = useState(0);
  const paths = useRef<SketchPath[]>([]);

  if (context && isSynced) {
    return context;
  }

  return [setPathsLength, paths, () => {}] as const;
};