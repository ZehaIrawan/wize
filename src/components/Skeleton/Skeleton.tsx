import InfoCardLoader from "../InfoCard/InfoCardLoader";
import TempBarLoader from "../TempBar/TempBarLoader";

const Skeleton = () => {
  const hours = ["00", "03", "06", "09", "12", "15", "18", "21"];

  return (
    <>
      <InfoCardLoader />
      <div className="tempbar__group">
        {hours.map((hour) => (
          <TempBarLoader key={hour} hour={hour} />
        ))}
      </div>
    </>
  );
};

export default Skeleton;
