import { useState } from "react";
import { replacePlaceholder } from "../../../shared/lib/replacePlaceholder";

type PhotoCardProps = {
  title: string;
  url: string;
};

export const PhotoCard = ({ title, url }: PhotoCardProps) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", padding: 8, marginBottom: 8 }}>
      {!imgError ? (
        <img
          src={replacePlaceholder(url)}
          alt={title}
          style={{ width: 150, height: 150 }}
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          style={{
            width: 150,
            height: 150,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#333",
            color: "#fff",
            fontSize: 12,
            textAlign: "center",
            padding: 4,
          }}
        >
          {title}
        </div>
      )}
      <p>{title}</p>
    </div>
  );
};
