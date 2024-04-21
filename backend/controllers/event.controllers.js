import { eventModel } from "../models/event.model.js"

const createNewEvent=async ()=>{
    try {
        const createNewEvent= await eventModel.create({...req.body})

        //response
        res.status(201).json(createNewEvent)
    } catch (error) {
        
    }
}

export const updateEvent = (req, res, next) => {};

export const deleteEvent = (req, res, next) => {};




export {createNewEvent}