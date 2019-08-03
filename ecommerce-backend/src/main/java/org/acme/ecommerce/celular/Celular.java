package org.acme.ecommerce.celular;

import java.math.BigDecimal;

import javax.persistence.Entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

/**
 * Representa os objetos que podem ser comprados.
 * <p>
 * Caso tivesse mais tempo e fosse algo mais definitivo, nunca criaria uma classe específica assim. Provavelmente
 * criaria uma classe "Produto" ou algo do gênero para representar o que está sendo comprado.
 *
 * @author leonildo.albani
 * @since 1.0 (31/07/2019)
 */
@Entity
public class Celular extends PanacheEntity {

    public Celular() {
    }

    public String modelo;
    public String marca;
    public BigDecimal preco;
    public BigDecimal custoBeneficio;
    public BigDecimal notaHardware;
    public String sistemaOperacional;
    public BigDecimal megapixelsCamera;
    public Integer processadorNucleos;
    public BigDecimal processadorClock;
    public String displayTamanho;
    public String displayResolucao;
    public String urlImagem;

}