-- run queries in seq

CREATE SEQUENCE public.price_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;



CREATE TABLE public.price
(
    id integer NOT NULL DEFAULT nextval('price_id_seq'::regclass),
    "createdAt" time with time zone,
    "updatedAt" time with time zone,
    "group" integer NOT NULL,
    var integer,
    value character varying(10) COLLATE pg_catalog."default",
    CONSTRAINT price_pkey PRIMARY KEY (id)
)

