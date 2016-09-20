--- 4.1.2

USE ap;

SELECT 
    AVG(invoice_total) AS Average,
    MIN(invoice_total) AS Minimum,
    MAX(invoice_total) AS Maximum,
    COUNT(*) AS Count,
    FORMAT(SUM(invoice_total), 2) AS Total
FROM
    invoices
WHERE
    invoice_date < '2015-07-01'