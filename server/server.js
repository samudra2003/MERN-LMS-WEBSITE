import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';

const app = express();

const PORT = process.env.PORT || 5000;

// Database connection
await connectDB();


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (_, res) => {
    res.send('APi Working');
});

// Clerk Webhooks
app.post('/clerk',express.json(),clerkWebhooks);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

