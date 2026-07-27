import 'dotenv/config';
import app from './src/app.js';
import connectDB from './src/config/db.js';

const PORT = process.env.PORT ?? 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server started running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.log(`Error in connecting to database: ${err}`);
    process.exit(1);
  });
