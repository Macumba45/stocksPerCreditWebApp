export type ProjectCardResponse = {
    id:string
    image:string;
    tiempo:string;
    dinero:string,
    nombre:string
    categoria:string
    inversiones:string
    createdAt: Date;
    updatedAt: Date;
}

export type ProjectCardDetailsResponse = {
    id:string
    categoria:string
    titulo:string,
    description:string
    imagenes:string
    createdAt: Date;
    updatedAt: Date;
}