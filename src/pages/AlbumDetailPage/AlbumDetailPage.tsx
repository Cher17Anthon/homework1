import { useParams } from "react-router-dom";
import { useGetAlbumPhotosQuery } from "../../features/PostList/model/api/postsApi";

const AlbumDetailPage = () => {
  const { id } = useParams();
  const { data: photos, isLoading } = useGetAlbumPhotosQuery(Number(id));

  if (isLoading) return <p>Загрузка фото...</p>;

  return (
    <div>
      <h2>Фото альбома</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
        {photos?.map((p) => (
          <div key={p.id}>
            <img src={p.thumbnailUrl} alt={p.title} />
            <p>{p.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumDetailPage;
