CREATE TABLE categorias(
	id SERIAL PRIMARY KEY, 	
	nome VARCHAR(255) NOT NULL
);

CREATE TABLE fornecedores(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	contato VARCHAR(255)
);

CREATE TABLE produtos(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	preco DECIMAL (10,2),
	quantidade INT,
	categoria_id INT,
	FOREIGN KEY (categoria_id) REFERENCES categorias(id),
	fornecedor_id INT,
	FOREIGN KEY (fornecedor_id) REFERENCES fornecedores(id)
);

CREATE TABLE movimentacoes(
	id SERIAL PRIMARY KEY,
	produto_id INT,
	FOREIGN KEY (produto_id) REFERENCES produtos(id),
	tipo VARCHAR(10) CHECK(tipo in ('entrada', 'saida')),
	quantidade INT,
	data TIMESTAMP
);

