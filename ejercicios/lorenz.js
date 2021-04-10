// A partir de la velocidad de una particula en el expacio
// que pasa por un campo magnetico constante en el tiempo
// realizar un codigo que permita obtener la fuerza ejercida

class Direccion {
	constructor(i, j, k) {
		this.i = i;
		this.j = j;
		this.k = k;
	}
    productoVectorial(direccion){
        const nuevoI = (direccion.j * this.k) - (this.k * direccion.j);
        const nuevoJ = -((direccion.i * this.k) - (this.i * direccion.k));
        const nuevoK = (direccion.i * this.j) - (this.i * direccion.j);

        return new Direccion(nuevoI,nuevoJ,nuevoK);
    }
}

class Velocidad {
	constructor(vx = 0, vy = 0, vz = 0) {
		this.direccion = new this.direccion(vx, vy, vz);
	}

	setVelocidad(vx, vy, vz) {
		this.direccion.cambiarDireccion(vx, vy, vz);
	}

	productoVectorial(campoVectorial) {
		return campoVectorial.productoVectorial(this.direccion);
	}
}

class Posicion {
	constructor(x = 0, y = 0, z = 0) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	setPosicion(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
}

class Particula {
	constructor(carga, x = 0, y = 0, z = 0) {
		this.carga = carga;
		this.velocidad = new Velocidad();
		this.posicion = new Posicion(x,y,z);
	}

	setVelocidad(vx, vy, vz) {
		this.velocidad.setVelocidad(vx, vy, vz);
	}

	recibirCampoMagnetico(campoMagnetico) {
		const direccionResultante = this.velocidad.productoVectorial(
			campoMagnetico
		);

		return direccionResultante;
	}
}

class CampoMagnetico {
	constructor(i = 0, j = 0, k = 0) {
        this.direccion = new Direccion(i,j,k);
    }

    productoVectorial(direccion){
        return direccion.productoVectorial(this.direccion);
    }
}
