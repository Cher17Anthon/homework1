import { useGetAlbumPhotosQuery } from "../../../entities/album/api/albumsApi";
import { PhotoCard } from "./PhotoCard";

export const AlbumPhotos = ({ albumId }: { albumId: number }) => {
  const { data: photos, isLoading } = useGetAlbumPhotosQuery(albumId);

  if (isLoading) return <p>Загрузка...</p>;
  if (!photos) return <p>Фото не найдено</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} title={photo.title} url={photo.thumbnailUrl} />
      ))}
    </div>
  );
};
