--- 4.1.4

USE ap;

SELECT 
    vendor_state AS State,
    COUNT(*) AS Count,
    ROUND(AVG(invoice_total), 2) AS Average,
    FORMAT(SUM(invoice_total),2 ) AS Total
FROM
    invoices
        INNER JOIN
    vendors ON invoices.vendor_id = vendors.vendor_id
GROUP BY State
ORDER BY State;