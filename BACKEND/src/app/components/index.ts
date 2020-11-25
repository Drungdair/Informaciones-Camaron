import { Express } from "express";
import contact from "./contact";
import noticia from "./noticia";


const components: Express[] = [
    contact,
    noticia
];

export default components;