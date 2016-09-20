--- 4.1.3

USE ap;

SELECT 
    vendor_name AS 'Vendor',
    COUNT(*) AS Count,
    FORMAT(SUM(invoice_total), 2) AS Total
FROM
    invoices
        INNER JOIN vendors on invoices.vendor_id = vendors.vendor_id
GROUP BY vendor_name
ORDER BY SUM(invoice_total) DESC