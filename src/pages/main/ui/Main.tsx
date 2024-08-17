import { ActorCard } from "@/shared/uiKit/actorCard";
import { mockData } from "@/shared/uiKit/actorCard/model/mockData";
import { Button } from "@/shared/uiKit/button";
import { CategoryCard } from "@/shared/uiKit/categoryCard";
import { Heading } from "@/shared/uiKit/heading";
import { Input } from "@/shared/uiKit/input";
import { MovieCard } from "@/features/movieCard";
import { Paragraph } from "@/shared/uiKit/paragraph/ui/Paragraph";
import { Rating } from "@/shared/uiKit/rating";
export const Main = () => {
  return (
    <>
      <div style={{ display: "flex", gap: "9px", flexDirection: "column" }}>
        <Heading size="large">Заголовок большой</Heading>
        <Heading size="medium">Заголовок средний</Heading>
        <Heading size="small">Заголовок маленький</Heading>
        <Paragraph>
          Блок текста <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex...
        </Paragraph>

        {mockData.map(({ name, role, image }) => (
          <ActorCard key={name} name={name} role={role} image={image} />
        ))}
        <div>
          <Rating rating={10} />
          <Rating rating={4.5} />
          <Rating rating={3} />
        </div>
      </div>
      <Input placeholder="Поле ввода" setValue={() => {}} />
      <Button>Кнопка</Button>
      <CategoryCard title="Фильмы" direction="left" />
      <CategoryCard title="Сериалы" direction="right" />
      <MovieCard
        name="Брат 2"
        alternativeName="alt name"
        poster="https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/e9008e2f-433f-43b0-b9b8-2ea8e3fb6c9b/600x900"
        year="2002"
      />
    </>
  );
};
