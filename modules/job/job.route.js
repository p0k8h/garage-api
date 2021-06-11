import { Router } from "express";
const router = Router();

import { addJob, getJobs, deleteJobById } from "./job.controller"

router.get("/", getJobs);
router.post("/", addJob);
router.delete("/:jobID", deleteJobById);


export default router;
