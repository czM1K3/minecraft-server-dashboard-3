import { FC } from "react";
import styles from "./map.module.scss";
import { notFound } from "next/navigation";
import { env } from "@/env";
import Button from "@/components/Button";

const Map: FC = () => {
  const mapAddress = env.MAP_ADDRESS;
  if (!mapAddress)
    return notFound();
  return (
    <>
      <div className={styles.button}>
        <Button link="/" text="Back" type={4} />
      </div>
      <iframe src={mapAddress} className={styles.iframe}></iframe>
    </>
  );
};

export default Map;

