import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function rootDir() {
    // اگر می‌خواهید به پوشهٔ پروژه (جایی که package.json است) برسید:
    return path.dirname(__dirname);   // یا path.resolve(__dirname, '..')
}