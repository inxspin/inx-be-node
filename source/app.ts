import express, {Request, Response} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3003;

// Health
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({message: 'Server is healthy'})
});
