package org.acme.ecommerce.celular;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.not;

import org.junit.jupiter.api.Test;

import io.quarkus.test.junit.QuarkusTest;

/**
 * Teste do {@link CelularResource}.
 * TODO - Para testes no build nativo teria que criar uma outra classe extentendo dessa.
 *
 * @author leonildo.albani
 * @since 1.0 (06/08/2019)
 */
@QuarkusTest
public class CelularResourceTest {
    @Test
    public void testEndpointCelular() {
        given()
            .when().get("/celular")
            .then()
            .statusCode(200)
            .body(
                containsString("Moto G5"),
                containsString("iPhone 6")
            );
    }
    @Test
    public void testEndpointCelularBuscaESModelo() {
        given()
            .when().get("/celular/busca?busca=iPhone")
            .then()
            .statusCode(200)
            .body(
                containsString("iPhone 6"),
                not(containsString("Moto G5"))
            );
    }
    @Test
    public void testEndpointCelularBuscaSESModeloParcial() {
        given()
            .when().get("/celular/busca-sem-elasticsearch?busca=iPhon")
            .then()
            .statusCode(200)
            .body(
                containsString("iPhone 6"),
                not(containsString("Moto G5"))
            );
    }
    @Test
    public void testEndpointCelularBuscaESMarca() {
        given()
            .when().get("/celular/busca?busca=Apple")
            .then()
            .statusCode(200)
            .body(
                containsString("iPhone 6"),
                not(containsString("Moto G5"))
            );
    }
    @Test
    public void testEndpointCelularBuscaSESMarcaParcial() {
        given()
            .when().get("/celular/busca-sem-elasticsearch?busca=Appl")
            .then()
            .statusCode(200)
            .body(
                containsString("iPhone 6"),
                not(containsString("Moto G5"))
            );
    }
}
