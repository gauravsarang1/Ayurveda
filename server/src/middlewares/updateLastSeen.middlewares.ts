import sessionUser from '../models/sessionUser.models'
import { Request, Response, NextFunction } from 'express'


const updateLastSeen = function(req:Request, res:Response, next:NextFunction) {
    const sessioId = req.sessionID

    if(sessioId) {
        try {
            sessionUser.findOneAndUpdate(
                {sessioId},
                {lastSeen: new Date()},
                {upsert: true, new: true}
            )
        } catch (error) {
            console.log('erro while updatinng last seen', error)
        }
    }

    next()
}

export default updateLastSeen