import { Request, Response, NextFunction } from 'express'
import { CustomError } from '..'

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    if(err instanceof CustomError) {
        return res.status(err.statusCode).json({ errors: err.serialiseErrors() })
    }

    res.status(500).send({ errors: [ { message: 'something went wrong' } ] })
}