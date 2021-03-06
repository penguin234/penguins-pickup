CREATE TABLE ITEMS (
    ITEM_ID SERIAL PRIMARY KEY,
    CATEGORY_ID INTEGER,
    ITEM_NAME VARCHAR NOT NULL,
    ITEM_CONTENT VARCHAR,

    FOREIGN KEY (CATEGORY_ID) REFERENCES CATEGORIES(CATEGORY_ID) ON DELETE SET NULL
);