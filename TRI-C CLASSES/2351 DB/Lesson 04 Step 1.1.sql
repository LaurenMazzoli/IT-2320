--- 4.1.1

USE ap;

SELECT 
    SUM(invoice_total) AS Total, COUNT(*) AS Count
FROM
    invoices