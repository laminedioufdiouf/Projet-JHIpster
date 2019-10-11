package com.mycompany.myapp.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.ZonedDateTime;

/**
 * A Transaction.
 */
@Entity
@Table(name = "transaction")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Transaction implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "dateexpediteur", nullable = false)
    private ZonedDateTime dateexpediteur;

    @NotNull
    @Column(name = "montant", nullable = false)
    private Integer montant;

    @NotNull
    @Column(name = "idexpediteur", nullable = false)
    private Integer idexpediteur;

    @NotNull
    @Column(name = "dateretrait", nullable = false)
    private ZonedDateTime dateretrait;

    @NotNull
    @Column(name = "iddestinataire", nullable = false)
    private Integer iddestinataire;

    @NotNull
    @Column(name = "iduserexpediteur", nullable = false)
    private Integer iduserexpediteur;

    @NotNull
    @Column(name = "iduserrecepteur", nullable = false)
    private Integer iduserrecepteur;

    @NotNull
    @Column(name = "commission", nullable = false)
    private Integer commission;

    @NotNull
    @Column(name = "commissionexpediteur", nullable = false)
    private Integer commissionexpediteur;

    @NotNull
    @Column(name = "commissionrecepteur", nullable = false)
    private Integer commissionrecepteur;

    @NotNull
    @Column(name = "taxe", nullable = false)
    private Integer taxe;

    @NotNull
    @Column(name = "status", nullable = false)
    private String status;

    @NotNull
    @Column(name = "code", nullable = false, unique = true)
    private Integer code;

    @ManyToOne(optional = false)
    @NotNull
    private Client client;

    @ManyToOne(optional = false)
    @NotNull
    @JsonIgnoreProperties("transactions")
    private User user;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ZonedDateTime getDateexpediteur() {
        return dateexpediteur;
    }

    public Transaction dateexpediteur(ZonedDateTime dateexpediteur) {
        this.dateexpediteur = dateexpediteur;
        return this;
    }

    public void setDateexpediteur(ZonedDateTime dateexpediteur) {
        this.dateexpediteur = dateexpediteur;
    }

    public Integer getMontant() {
        return montant;
    }

    public Transaction montant(Integer montant) {
        this.montant = montant;
        return this;
    }

    public void setMontant(Integer montant) {
        this.montant = montant;
    }

    public Integer getIdexpediteur() {
        return idexpediteur;
    }

    public Transaction idexpediteur(Integer idexpediteur) {
        this.idexpediteur = idexpediteur;
        return this;
    }

    public void setIdexpediteur(Integer idexpediteur) {
        this.idexpediteur = idexpediteur;
    }

    public ZonedDateTime getDateretrait() {
        return dateretrait;
    }

    public Transaction dateretrait(ZonedDateTime dateretrait) {
        this.dateretrait = dateretrait;
        return this;
    }

    public void setDateretrait(ZonedDateTime dateretrait) {
        this.dateretrait = dateretrait;
    }

    public Integer getIddestinataire() {
        return iddestinataire;
    }

    public Transaction iddestinataire(Integer iddestinataire) {
        this.iddestinataire = iddestinataire;
        return this;
    }

    public void setIddestinataire(Integer iddestinataire) {
        this.iddestinataire = iddestinataire;
    }

    public Integer getIduserexpediteur() {
        return iduserexpediteur;
    }

    public Transaction iduserexpediteur(Integer iduserexpediteur) {
        this.iduserexpediteur = iduserexpediteur;
        return this;
    }

    public void setIduserexpediteur(Integer iduserexpediteur) {
        this.iduserexpediteur = iduserexpediteur;
    }

    public Integer getIduserrecepteur() {
        return iduserrecepteur;
    }

    public Transaction iduserrecepteur(Integer iduserrecepteur) {
        this.iduserrecepteur = iduserrecepteur;
        return this;
    }

    public void setIduserrecepteur(Integer iduserrecepteur) {
        this.iduserrecepteur = iduserrecepteur;
    }

    public Integer getCommission() {
        return commission;
    }

    public Transaction commission(Integer commission) {
        this.commission = commission;
        return this;
    }

    public void setCommission(Integer commission) {
        this.commission = commission;
    }

    public Integer getCommissionexpediteur() {
        return commissionexpediteur;
    }

    public Transaction commissionexpediteur(Integer commissionexpediteur) {
        this.commissionexpediteur = commissionexpediteur;
        return this;
    }

    public void setCommissionexpediteur(Integer commissionexpediteur) {
        this.commissionexpediteur = commissionexpediteur;
    }

    public Integer getCommissionrecepteur() {
        return commissionrecepteur;
    }

    public Transaction commissionrecepteur(Integer commissionrecepteur) {
        this.commissionrecepteur = commissionrecepteur;
        return this;
    }

    public void setCommissionrecepteur(Integer commissionrecepteur) {
        this.commissionrecepteur = commissionrecepteur;
    }

    public Integer getTaxe() {
        return taxe;
    }

    public Transaction taxe(Integer taxe) {
        this.taxe = taxe;
        return this;
    }

    public void setTaxe(Integer taxe) {
        this.taxe = taxe;
    }

    public String getStatus() {
        return status;
    }

    public Transaction status(String status) {
        this.status = status;
        return this;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getCode() {
        return code;
    }

    public Transaction code(Integer code) {
        this.code = code;
        return this;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public Client getClient() {
        return client;
    }

    public Transaction client(Client client) {
        this.client = client;
        return this;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public User getUser() {
        return user;
    }

    public Transaction user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Transaction)) {
            return false;
        }
        return id != null && id.equals(((Transaction) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Transaction{" +
            "id=" + getId() +
            ", dateexpediteur='" + getDateexpediteur() + "'" +
            ", montant=" + getMontant() +
            ", idexpediteur=" + getIdexpediteur() +
            ", dateretrait='" + getDateretrait() + "'" +
            ", iddestinataire=" + getIddestinataire() +
            ", iduserexpediteur=" + getIduserexpediteur() +
            ", iduserrecepteur=" + getIduserrecepteur() +
            ", commission=" + getCommission() +
            ", commissionexpediteur=" + getCommissionexpediteur() +
            ", commissionrecepteur=" + getCommissionrecepteur() +
            ", taxe=" + getTaxe() +
            ", status='" + getStatus() + "'" +
            ", code=" + getCode() +
            "}";
    }
}
