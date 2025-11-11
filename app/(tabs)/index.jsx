import Dashboard from "../../components/Dashboard";
import FavesProvider from "../../context/FavesContext";

const index = () => {
  return (
    <FavesProvider>
      <Dashboard />
    </FavesProvider>
  );
};

export default index;
