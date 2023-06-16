const fs = require('fs');
const path = require('path');
const filePath = __dirname + "/images";
const listFolderName = fs.readdirSync(filePath);
const currentData = require("./FacebookSticker.json");
const data = [...currentData];
listFolderName.forEach(folderName => {
    const listFileName = fs.readdirSync(`${filePath}/${folderName}/`);
    data.push({
        name: folderName,
        icon: listFileName[0],
        data: [
            ...listFileName.map((fileName, id) => ({
                id,
                src: `https://cdn.jsdelivr.net/gh/havaem/StickerCollection@latest/images/${folderName.replaceAll(" ", "%20")}/` + fileName,
                frame_count: 1,
                frame_rate: 1,
                frames_per_column: 1,
                frames_per_row: 1
            }))
        ]
    });
});
fs.writeFileSync("./FacebookSticker.json", JSON.stringify(data, null, 4));
