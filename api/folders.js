import express from "express";
const router = express.Router();
export default router;

import { getFolders, getFolderContents } from "#db/queries/folders";
import { createFile } from "#db/queries/files";

router.route("/").get(async (req, res) => {
  const folders = await getFolders();
  res.send(folders);
});

router.param("id", async (req, res, next, id) => {
  const folder = await getFolderContents(id);
  if (!folder) {
    return res.status(404).send("Folder does not exist.");
  }

  req.folder = folder;
  next();
});

router.route("/:id").get((req, res) => {
  res.send(req.folder);
});

router.route("/:id/files").post(async (req, res) => {
  if (!req.body) return res.status(400).send("Request body not provided.");
  const { name, size } = req.body;
  if (!name || !size)
    return res
      .status(400)
      .send("Request body must include: name, size, folder_id.");
  const file = await createFile(name, size, req.folder.id);
  res.status(201).send(file);
});
