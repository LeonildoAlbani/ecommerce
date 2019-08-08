package org.acme.ecommerce.commons;

import java.util.List;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheQuery;
import io.quarkus.panache.common.Page;

/**
 * Classe responsável por ajudar na paginação.
 *
 * @author leonildo.albani
 * @since 1.0 (07/08/2019)
 */
public class ResponseEntity<E extends PanacheEntity> {

    public ResponseEntity(PanacheQuery<E> query, int page) {
        this.pageCount = calculaPageSize(Math.toIntExact(query.count()));
        this.page = page;
        this.data = query.page(Page.of(page, PAGE_SIZE)).list();
    }

    private final int PAGE_SIZE = 50;
    private int page;
    private int pageCount;
    private List<E> data;

    private int calculaPageSize(int count) {
        if (count % PAGE_SIZE == 0) {
            return count / PAGE_SIZE;
        } else {
            return count / PAGE_SIZE + 1;
        }
    }

    public int getPageCount() {

        return pageCount;
    }

    public List<E> getData() {

        return data;
    }

    public int getPage() {

        return page;
    }
}
