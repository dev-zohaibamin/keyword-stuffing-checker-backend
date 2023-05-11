import { Request, Response } from "express";
import { checkStuffing } from "../service/keyword-stuffing-checker.service";

export const check = async (req: Request, res: Response) => {
  try {
    const { keywords, content } = req.body;
    if (!keywords.length) {
      res.status(400).json({ message: `Please Provide keywords` });
      return;
    }
    if (!content.length) {
        res.status(400).json({ message: `Please Provide Content` });
        return;
      }
   const result= await checkStuffing(keywords,content);
   res.json({ result });

  } catch (err: any) {
    res.status(400).json({ message: `${err.message}` });
  }
};
