import { Heading } from "@/shared/uiKit/heading";
import { Link, useRouteError } from "react-router-dom";
import styles from "./Page.module.css";
import cn from "classnames";
import { Paragraph } from "@/shared/uiKit/paragraph/ui/Paragraph";
import { Button } from "@/shared/uiKit/button";

export const ErrorBoundary = () => {
  const error = useRouteError();

  //const mapping: Record<number, string> = {
  //  404: "Запрашиваемая страниа не найдена",
  //  403: "Доступ к запрашиваемой странице запрещен",
  //  401: "Ошибка передачи токена в запросе",
  //  500: "Cерверная ошибка",
  //};
  if (error instanceof Error) return null;
  return (
    <div className={cn(styles.container)}>
      <Heading size="large">YeaMovie</Heading>
      <Paragraph> К сожалению, произошла ошибка :( </Paragraph>
      <Paragraph>Попробуйте вернуться на главную страницу</Paragraph>
      <Link to="/">
        <Button>На главную</Button>
      </Link>
    </div>
  );
};
