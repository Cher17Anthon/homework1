import { Link } from "react-router-dom";
import { useGetAlbumsQuery } from "../../features/PostList/model/api/postsApi";

const AlbumsPage = () => {
  const { data: albums, isLoading } = useGetAlbumsQuery();

  if (isLoading) return <p>Загрузка альбомов...</p>;

  return (
    <div>
      <h2>Альбомы</h2>
      {albums?.map((a) => (
        <Link key={a.id} to={`/albums/${a.id}`}>
          <div style={{ border: "1px solid gray", margin: "1rem", padding: "1rem" }}>
            {a.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AlbumsPage;
