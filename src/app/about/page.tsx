import { FC } from "react";
import { notFound } from "next/navigation";
import { env } from "@/env";
import Button from "@/components/Button";
import { readFileSync } from "fs";
import { marked } from "marked";
import styles from "./about.module.scss";

const Map: FC = () => {
  const aboutFile = env.SERVER_ABOUT_FILE;
  if (!aboutFile)
    return notFound();
  const rawContent= readFileSync(aboutFile).toString();
  const htmlContent = marked.parse(rawContent);
  
  return (
    <div className="center">
      <div className="animate__animated animate__jackInTheBox">
        <div className={styles.article} dangerouslySetInnerHTML={{__html: htmlContent.toString()}} />
        <Button link="/" text="Back" type={4} />
      </div>
    </div>
  );
};

export default Map;

export const revalidate = 60;

