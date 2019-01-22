var Reserva = function(Horario, Personas, PreciosPersonas, CodigoDescuento) {
    this.Horario = Horario;
    this.Personas = Personas;
    this.PreciosPersonas = PreciosPersonas;
    this.CodigoDescuento = CodigoDescuento;
}

Reserva.prototype.PrecioBase = function() {
    return this.Personas * this.PreciosPersonas
}
Reserva.prototype.promocion = function() {

    var descuentos = 0

    if (this.Personas >= 4 && this.Personas <= 6) {
        descuentos += this.PrecioBase() * 0.05;
    }
    if (this.Personas >= 7 && this.Personas <= 8) {
        descuentos += this.PrecioBase() * 0.10;
    }
    if (this.Personas > 8) {
        descuentos += this.PrecioBase() * 0.15;
    }
    return descuentos
}
Reserva.prototype.promocionCodigo = function() {
    var promo = "";
    if (this.CodigoDescuento == "DES15") {
        promo += this.PrecioBase() * 0.15;
    }
    if (this.CodigoDescuento == "DES200") {
        promo += 200;
    }
    if (this.CodigoDescuento == "DES1") {
        promo += this.PreciosPersonas;
    }
    return promo
}
Reserva.prototype.adicionales = function() {
    var adicional = 0,
        hora = this.Horario.getHours();
    if (hora == 13 || hora == 14 || hora >= 21 || hora <= 22) {
        adicional += this.PrecioBase() * 0.05
    }
    var minutos = this.Horario.getMinutes()
    if (hora == 14 || hora == 13) {}
    if (hora == 20 || hora == 21) {
        if (minutos > 0) {
            adicional = 0;
        }
        var dia = this.Horario.getDay()
        if (dia == 0 || dia == 6) {
            adicional += this.PrecioBase() * 0.10;
        }
    }
    return adicional;
}
Reserva.prototype.PrecioFinal = function() {
    return this.PrecioBase() + this.adicionales() - this.promocion() - this.promocionCodigo();
}

var reserva = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");