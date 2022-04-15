import { useEffect, useState } from "react";
import { Image } from "react-native";

export function useAspectRatio(image: string, ImageComponent: typeof Image) {
  const [ratio, setRatio] = useState<number>(1);

  useEffect(() => {
    if (image) {
      ImageComponent.getSize(image, (width, height) =>
        setRatio(width / height)
      );
    }
  }, [image]);

  return { ratio };
}
