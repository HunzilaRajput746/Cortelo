import fs from "fs";
import path from "path";
import sharp from "sharp";

const uploaded = "C:/Users/Hunzila Rajput/.gemini/antigravity/brain/4a5e1064-26da-4417-88ab-4ca188663e70/.user_uploaded/media_1795516577754_cb508603.jpg";
const root = process.cwd();

const targetPublic = path.join(root, "public", "assets", "team", "hunzila_nisar.jpg");
const targetAssets = path.join(root, "assets", "team", "hunzila_nisar.jpg");
const backupLegacy = path.join(root, "public", "assets", "team", "hunzila_nisar_3d_legacy.jpg");

async function run() {
  console.log("Processing new official founder portrait...");

  // Backup old 3D image if not already backed up
  if (fs.existsSync(targetPublic) && !fs.existsSync(backupLegacy)) {
    fs.copyFileSync(targetPublic, backupLegacy);
    console.log("✔ Backed up legacy 3D portrait to hunzila_nisar_3d_legacy.jpg");
  }

  // The uploaded image is 1024w x 776h.
  // Hunzila's center is around x: 388, y: 300.
  // Extract 776 x 776 square with left: 20, top: 0, then resize to 1024 x 1024 high-res
  const croppedBuf = await sharp(uploaded)
    .extract({ left: 20, top: 0, width: 776, height: 776 })
    .resize(1024, 1024, { fit: "cover", kernel: "lanczos3" })
    .jpeg({ quality: 96, chromaSubsampling: "4:4:4" })
    .toBuffer();

  fs.writeFileSync(targetPublic, croppedBuf);
  fs.writeFileSync(targetAssets, croppedBuf);
  console.log("✔ Updated public/assets/team/hunzila_nisar.jpg (1024x1024 HQ Square)");
  console.log("✔ Updated assets/team/hunzila_nisar.jpg (1024x1024 HQ Square)");

  // Clean test files
  const test1 = path.join(root, "public", "assets", "team", "test_crop_100.jpg");
  const test2 = path.join(root, "public", "assets", "team", "test_crop_60.jpg");
  if (fs.existsSync(test1)) fs.unlinkSync(test1);
  if (fs.existsSync(test2)) fs.unlinkSync(test2);
}

run().catch(console.error);
