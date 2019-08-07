package org.acme.ecommerce.compra;

import static io.restassured.RestAssured.given;

import org.junit.jupiter.api.Test;

import io.restassured.http.ContentType;

/**
 * Teste do {@link CompraResource}. TODO - Para testes no build nativo teria que criar uma outra classe extentendo
 * dessa.
 *
 * @author leonildo.albani
 * @since 1.0 (06/08/2019)
 */
public class CompraResourceTest {

    @Test
    public void testEndpointCelular() {

        final String payload = "{\n"
            + "   \"nomeCliente\": \"cliente\",\n"
            + "   \"celulares\": [{\n"
            + "      \"id\": 1\n"
            + "   }]\n"
            + "}";

        given()
            .contentType(ContentType.JSON)
            .body(payload)
            .when()
            .post("/compra")
            .then()
            .statusCode(201);
    }
}
