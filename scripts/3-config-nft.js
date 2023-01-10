import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x0daebD53Fa7e3FEF948a2134339056acb1fE6ce6", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Astronaut walking on Grass",
        description: "This NFT will give you access to CreatorDAO!",
        image: readFileSync("scripts/assets/astronaut.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();