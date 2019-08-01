package org.acme.ecommerce.celular;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * @author leonildo.albani
 * @since 1.0 (31/07/2019)
 */
@Path("/celular")
@ApplicationScoped
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CelularResource {

    @GET
    public List<Celular> hello() {
        return Celular.listAll();
    }

    @POST
    @Transactional
    public Response insert(Celular celular) {
        celular.id = null;
        celular.persist();
        return Response.ok(celular).build();
    }

//    @Provider
//    public static class ErrorMapper implements ExceptionMapper<Exception> {
//
//        @Override
//        public Response toResponse(Exception exception) {
//            int code = 500;
//            if (exception instanceof WebApplicationException) {
//                code = ((WebApplicationException) exception).getResponse().getStatus();
//            }
//            return Response.status(code)
//                    //Corrigir tratamento
////                    .entity(Json.createObjectBuilder().add("error", exception.getMessage()).add("code", code).build())
//                    .build();
//        }
//
//    }
}