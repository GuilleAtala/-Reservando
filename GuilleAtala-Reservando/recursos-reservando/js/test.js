var expect = chai.expect;

describe('Test metodos clase Restaurante', function() {

    describe("Test del metodo reservarHorarios()", function() {
        var restaurantTao = listado.restaurantes[0];
        var ArrayHorarios = restaurantTao.horarios.length;
        it('Cuando se reserva un horario de un restaurante, el horario correspondiente se elimina del arreglo.',
            function() {
                restaurantTao.reservarHorario("13:00");
                expect(restaurantTao.horarios.length).to.be.not.equal(ArrayHorarios);
            })
        it("Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.", function() {
            restaurantTao.reservarHorario("08:00");
            expect(restaurantTao.horarios.length).to.be.equal(ArrayHorarios - 1);
        })
        it("Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.", function() {
            restaurantTao.reservarHorario();
            expect(restaurantTao.horarios.length).to.be.equal(ArrayHorarios - 1);
        })
    })


    describe("Test del metodo obtenerPuntuación()", function() {

        var sumatoria = 0;
        var restaurantCafeFrancoeur = listado.restaurantes[7];
        for (var i = 0; i < restaurantCafeFrancoeur.calificaciones.length; i++) {
            sumatoria += restaurantCafeFrancoeur.calificaciones[i]
        }
        var promedio = sumatoria / restaurantCafeFrancoeur.calificaciones.length;
        promediofinal = Math.round(promedio * 10) / 10;

        it("Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.", function() {
            expect(restaurantCafeFrancoeur.ObtenerPuntuacion()).to.be.equal(promediofinal);
        });
        it("Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0", function() {

            restaurantCafeFrancoeur.calificaciones = [];
            expect(restaurantCafeFrancoeur.ObtenerPuntuacion()).to.be.equal(0);
        })
    });

    describe("Test del metodo calificar()", function() {
        var estaBien;
        var CalificaionNueva = 9,
            restaurantBurgermeister = listado.restaurantes[2],
            longOriginal = restaurantBurgermeister.calificaciones.length;
        it("Verifica que si la calificacion es menor a 1 y mayor a 10 no la agregue al arreglo ", function() {
            for (var i = 0; i < restaurantBurgermeister.calificaciones.length; i++) {
                if (restaurantBurgermeister.calificaciones[i] > 10 || restaurantBurgermeister.calificaciones[i] < 1) {
                    estaBien = false;
                } else {
                    estaBien = true;
                }
            }
            restaurantBurgermeister.calificar(CalificaionNueva);
            expect(estaBien).to.be.true;
        })
        it("Verifica que al calificar esta se agregue al array de calificaciones", function() {
            restaurantBurgermeister.calificar(CalificaionNueva);
            expect(restaurantBurgermeister.calificaciones.length).to.not.equal(longOriginal);
        })
    })

    describe("Test del metodo buscarRestaurante(id)", function() {
        var restaurantTao = listado.restaurantes[0];
        it("Se espera que cuando se busca un restaurante su id coincida con el listadoDeRestaurantes", function() {
            expect(listado.buscarRestaurante(1)).to.be.equal(restaurantTao);
        })
    })

    describe("Test del metodo obtenerRestaurantes()", function() {
        var restaurantVapiano = listado.restaurantes[16];
        it("Se espera que cuando se busca restaurante sin elegir opciones, siga mostrando el listado completo", function() {
            expect(listado.ObtenerRestaurantes(null, null, null)).to.be.deep.eql(listado.restaurantes);
        })
        it("Se espera que cuando se busca un restaurante todas sus opciones de filtrado coincidan", function() {
            expect(listado.ObtenerRestaurantes("Pasta", "Berlín", "15:00")[0]).to.be.equal(listado.restaurantes[16]);
        })
    })
})

describe("Test del objeto reserva()", function() {

    it("Calcula el precio base de forma correcta", function() {
        expect(reserva.PrecioBase()).to.be.equal(2800);
    })
    it("calcula el precio final de forma correcta", function() {
        expect(reserva.PrecioFinal()).to.be.equal(2310);
    })
});