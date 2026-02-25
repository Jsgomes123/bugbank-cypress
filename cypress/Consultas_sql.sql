
-- CONSULTAS SQL - TABELA USUARIOS

-- 1) Selecionar usuários com saldo maior que 1000
SELECT *
FROM usuarios
WHERE saldo > 1000;

-- 2) Atualizar saldo de um usuário específico
UPDATE usuarios
SET saldo = 2500.00
WHERE id = 5;

-- 3) Contar quantos usuários possuem saldo igual a 0
SELECT COUNT(*) AS total_usuarios_saldo_zero
FROM usuarios
WHERE saldo = 0;