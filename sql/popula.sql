INSERT INTO MOTORISTA (CPF, Nome, CategoriaCNH, VencimentoCNH, FK_VEICULO_placa)
VALUES
('12345678901', 'João Silva', 'B', '2024-01-01', 'ABC123'),
('98765432101', 'Maria Oliveira', 'A', '2023-05-15', 'XYZ789');

INSERT INTO VEICULO (Placa, Marca, Modelo, Ano, Cor, FK_MULTA_ID)
VALUES
('ABC123', 'Chevrolet', 'Cruze', 2019, 'Blue', NULL),
('XYZ789', 'Ford', 'Fiesta', 2017, 'Red', NULL);

INSERT INTO MULTA (ID, Valor, Data, PontosPenalidade, TipoInfracao)
VALUES
(1, 150.00, '2023-02-10', 3, 'Estacionar em local proibido'),
(2, 200.00, '2023-04-20', 4, 'Velocidade acima da máxima permitida');
