import { ActorCard } from "@/shared/uiKit/actorCard";
import { mockData } from "@/shared/uiKit/actorCard/model/mockData";
import { Button } from "@/shared/uiKit/button";
import { Heading } from "@/shared/uiKit/heading";
import { Input } from "@/shared/uiKit/input";
import { Paragraph } from "@/shared/uiKit/paragraph/ui/Paragraph";
import { Rating } from "@/shared/uiKit/rating";

export const Main = () => {
  return (
    <>
      <Heading size="large">Заголовок большой</Heading>
      <Heading size="medium">Заголовок средний</Heading>
      <Heading size="small">Заголовок маленький</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex...
      </Paragraph>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        {mockData.map(({ name, role, image }) => (
          <ActorCard key={name} name={name} role={role} image={image} />
        ))}
        <div>
          <Rating rating={6} />
        </div>
      </div>
      <Input placeholder="Поле ввода" />
      <Button>Кнопка</Button>
    </>
  );
};
