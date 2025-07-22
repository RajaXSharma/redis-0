import { createClient } from "redis";

const client = createClient();

async function worker() {
  await client.connect();
  console.log("worker started");

  while (true) {
    try {
      const submission = await client.brPop("submission", 0);
    } catch (error) {
      console.error(error);
    }
  }
}

worker();
