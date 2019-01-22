var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;

}

//Nueva Funcion para reservar Horario
Restaurant.prototype.reservarHorario = function(horarioReservado) {
    this.horarios = this.horarios.filter(function(horarios) {
        return horarios != horarioReservado;
    })
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
        if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
            this.calificaciones.push(nuevaCalificacion);
        }
    }
    //Nueva funcion Para obtener la puntuacion
Restaurant.prototype.ObtenerPuntuacion = function() {
    var sumatoria = sumar(this.calificaciones)
    return promediar(this.calificaciones, sumatoria);
}

function sumar(arr) {
    var sumatoria = 0;

    for (let i = 0; i < arr.length; i++) {
        sumatoria += arr[i]
    }
    return sumatoria
}

function promediar(arr, sumatoria) {
    if (arr.length == 0) { return 0 } else {
        return Math.round((sumatoria / arr.length) * 10) / 10;
    }
}