import path from 'path'

import express from 'express';

export function setStatics(app) {
    app.use(express.static(path.join(process.cwd(), 'public')))
    app.use(express.static(path.join(process.cwd(), 'node_modules', 'font-awesome')))
    app.use(express.static(path.join(process.cwd(), 'node_modules', 'bootstrap', 'dist')))
}
