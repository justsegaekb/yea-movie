import { ActorCard } from "@/shared/uiKit/actorCard";
import { mockData } from "@/shared/uiKit/actorCard/model/mockData";

export const Main = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        {mockData.map(({ name, role, image }) => (
          <ActorCard key={name} name={name} role={role} image={image} />
        ))}
      </div>
    </>
  );
};
