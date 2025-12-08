import fs from 'fs';
import path from 'path';

export function readJsonFile() {
    const dataPath = path.join(__dirname, 'project-data/properties.json');
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
}

export function updateJsonFile(newData: any[]) {
    const dataPath = path.join(__dirname, 'project-data/properties.json');
    fs.writeFileSync(dataPath, JSON.stringify(newData, null, 2)); // Pretty print JSON
}