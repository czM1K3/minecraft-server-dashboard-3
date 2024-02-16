import Button from "@/components/Button";
import PlayersInfo from "@/components/PlayersInfo";
import MinecraftApiController from "@/controllers/minecraftApi";
import { NextPage } from "next";

const Players: NextPage = async () => {
  const playersData = await MinecraftApiController.PlayersRouteStripped();
  return (
    <>

      <div className="center">
              <div className="animate__animated animate__jackInTheBox">
                      <h1>Players</h1>
                      <PlayersInfo data={playersData} />
              </div>
       <div className="button">
        <Button link="/" text="Back" type={4} />
      </div>     </div>
    </>
  );
};

export default Players;

