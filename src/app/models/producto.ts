export interface Respuesta {
    ofertas: Producto[];
    paginasTotales: number;
    paginaActual: number;
}

export interface Producto {
    foto: string;
    categoria: number;
    marca: string;
    establecimiento: string;
    validez: string;
    fecha_pub: string;
    estado: string;
    precio: number;
    producto: string;
    descripcion: string;
    ubicacion: Ubicacion;
}

export interface Ubicacion {
    lat: number;
    long: number;
}


