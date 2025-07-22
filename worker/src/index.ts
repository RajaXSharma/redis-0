import { createClient } from "redis";

const client = createClient();

async function worker() {
  await client.connect();
  console.log("worker started");

  while(1) {
    try {
      const response = await client.brPop("problems", 0);
      console.log(response);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("processed user submission");
    } catch (error) {
      console.error(error);
    }
  }
}

worker();
