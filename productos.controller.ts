import { Request, Response } from "express";

export const getAll = (req: Request, res: Response): void => {
    const productos = [
        { id: 1, nombre: "Juan Pérez", email: "juan@example.com" },
        { id: 2, nombre: "Ana García", email: "ana@example.com" },
        { id: 3, nombre: "Carlos López", email: "carlos@example.com" }
    ];
    res.setHeader('Content-Type', 'application/json');  // Asegura que sea JSON
    res.send(JSON.stringify(productos, null, 4));  // Indentación de 4 espacios


};

