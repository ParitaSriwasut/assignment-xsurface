import { ProductListContainer } from "../containers/ProductList";
import Loading from "../components/Loading";

export default function HomePage() {
  if (!ProductListContainer) {
    return <Loading />;
  }
  return (
    <div>
      <ProductListContainer />
    </div>
  );
}
