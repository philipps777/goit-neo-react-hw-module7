import { Vortex } from "react-loader-spinner";
const Loader = () => {
  return (
    <div
      style={{
        marginTop: "150px",
        textAlign: "center",
      }}
    >
      <Vortex
        visible={true}
        height="180"
        width="180"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
};
export default Loader;
