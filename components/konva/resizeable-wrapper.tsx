import { useEffect, useRef, useState } from "react";

type IState = {
  width: number;
  height: number;
};

type Props = {
  className?: string;
  children: ({ width, height }: IState) => React.ReactNode;
};

function debounce<T extends (...args: unknown[]) => unknown>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function ResizeableWrapper({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setState({ width: ref.current?.clientWidth ?? 0, height: ref.current?.clientHeight ?? 0 });
    };

    updateSize();

    const debouncedResize = debounce(updateSize, 50);

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children(state)}
    </div>
  );
}
