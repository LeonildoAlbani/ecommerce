package org.acme.ecommerce.celular;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.hibernate.search.mapper.orm.Search;

import io.quarkus.hibernate.orm.panache.PanacheQuery;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import io.quarkus.runtime.StartupEvent;

/**
 * DAO para manipular {@link Celular}.
 *
 * @author leonildo.albani
 * @since 1.0 (07/08/2019)
 */
@ApplicationScoped
public class CelularRepository implements PanacheRepository<Celular> {

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

    public List<Celular> buscaComElasticSearch(String busca) {
        //Como selecionar as palavras parcialmente? Talvez com um analizer diferente?
        return Search.session(em)
            .search(Celular.class)
            .predicate(f ->
                f.simpleQueryString().onFields("modelo", "marca").matching(busca)
            )
            .fetchHits();
    }

    public List<Celular> buscaSemElasticSearch(String busca) {

        return Celular.list(
            "upper(modelo) like upper('%' || ?1 || '%') or upper(marca) like upper('%' || ?1 || '%')",
            busca);
    }

    public PanacheQuery<Celular> findAll() {

        return Celular.findAll();
    }

    /**
     * Garantir a entrega do back sem quebrar o front.
     */
    public List<Celular> listAll() {

        return Celular.listAll();
    }

    public Celular insert(Celular celular) {

        celular.persist();
        return celular;
    }
}
