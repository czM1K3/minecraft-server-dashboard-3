import { env } from "@/env";
import Button from "@/components/Button";
import MinecraftApiController from "@/controllers/minecraftApi";
import ServerInfo from "@/components/ServerInfo";
import { NextPage } from "next";


const Home: NextPage = async () => {
  const serverData = await MinecraftApiController.ServerRouteStripped();

  return (
    <div className="center">
      <div className="animate__animated animate__jackInTheBox">
	<h1>{env.SERVER_NAME}</h1>
	<p>Join at: {env.SERVER_ADDRESS}</p>
	<ServerInfo data={serverData} />
	<div className="animate__animated animate__bounceIn animate__delay-1s">
	  <Button type={1} link="/players" text="Players" />
	  {env.MAP_ADDRESS && <Button type={2} link="/map" text="Map" />}
	  {env.SERVER_ABOUT_FILE && <Button type={3} link="/about" text="About" />}
	</div>
      </div>
    </div>
  );
};

export default Home;

