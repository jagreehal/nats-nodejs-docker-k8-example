import express from 'express';
import { StringCodec, connect } from 'nats';

const app = express();
const port = 8082;

app.get('/', (req, res) => res.send('Consumer Ready'));

const topic = 'EXAMPLE_EVENT_TOPIC';

const run = async () => {
  const nc = await connect({
    servers: 'localhost:4222',
  });

  const sub = nc.subscribe(topic);
  const sc = StringCodec();
  (async () => {
    for await (const m of sub) {
      console.log(`[${sub.getProcessed()}]: ${sc.decode(m.data)}`);
    }
    console.log('subscription closed');
  })();
};

run().catch((e) => {
  //// nats.logger().error(`[nats-consumer-1] ${e.message}`, { stack: e.stack }),
  console.error(e);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
