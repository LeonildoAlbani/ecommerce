package org.acme.ecommerce.celular;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

import org.hibernate.search.mapper.orm.Search;

import io.quarkus.runtime.StartupEvent;

/**
 * @author leonildo.albani
 * @since 1.0 (31/07/2019)
 */
@Path("/celular")
@ApplicationScoped
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CelularResource {

    @Inject
    EntityManager em;

    @Transactional
    void onStart(@Observes StartupEvent ev) throws InterruptedException {
        // Como sempre insere novamente os dados ao reiniciar (import.sql) a documentação recomenda indexar
        // Em produção não precisaria
        if (Celular.count() > 0) {
            Search.session(em)
                .massIndexer()
                .startAndWait();
        }
    }

    @GET
    @Path("/busca")
    public List<Celular> busca(@QueryParam("busca") String busca) {

        //Como selecionar as palavras parcialmente?
        return Search.session(em)
            .search(Celular.class)
            .predicate(f ->
                f.simpleQueryString().onFields("modelo", "marca").matching(busca)
            )
            .fetchHits();
    }

    @GET
    public List<Celular> listAll() {
        return Celular.listAll();
    }

    @POST
    @Transactional
    public Response insert(Celular celular) {
        celular.id = null;
        celular.persist();
        return Response.ok(celular).build();
    }
}