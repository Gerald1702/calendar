import { Router } from "express";
import { createNewEvent, deleteEvent, getEvents, updateEvent } from "../controllers/event.controllers.js";


//create user routes
const router = Router();

router.post("/", createNewEvent)

router.get("/", getEvents)

router.patch('/:id',updateEvent)

//to delete event
router.delete('/:id',deleteEvent)

export default router;
