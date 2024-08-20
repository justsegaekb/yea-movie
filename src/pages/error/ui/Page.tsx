import { Heading } from "@/shared/uiKit/heading";
import { useRouteError } from "react-router-dom";
import styles from "./Page.module.css";
import cn from "classnames";
import { Paragraph } from "@/shared/uiKit/paragraph/ui/Paragraph";

export const ErrorBoundary = () => {
  const error = useRouteError();

  const mapping: Record<number, string> = {
    404: "Запрашиваемая страниа не найдена",
    403: "Доступ к запрашиваемой странице запрещен",
    401: "Ошибка передачи токена в запросе",
    500: "Cерверная ошибка",
  };

  return (
    <div className={cn(styles.container)}>
      <Heading size="large">YeaMovie</Heading>
      <Paragraph> К сожалению, произошла ошибка :( </Paragraph>
      <Paragraph>
        {mapping[error.statusCode] ?? mapping[error.status]}
      </Paragraph>
      <Heading size="large">
        Код ошибки: {error.statusCode ?? error.status}
      </Heading>
    </div>
  );
};
