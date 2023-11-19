import express from 'express';
import { connect, StringCodec } from 'nats';
const app = express();
const port = 8081;

const sc = StringCodec();

app.get('/', (req, res) => res.send('Producer Ready'));

app.get('/publish', async (req, res) => {
  try {
    const nc = await connect({
      servers: ['localhost:4222'],
    });

    const message = {
      id: Math.random().toString(),
      username: 'Bob',
    };

    nc.publish('EXAMPLE_EVENT_TOPIC', sc.encode(JSON.stringify(message)));

    res.send('Published!');
  } catch (e) {
    console.log(e);
    res.send('FAIL!');
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
