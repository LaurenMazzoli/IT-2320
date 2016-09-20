--- 4.2.3

USE ap;

SELECT 
    vendor_name AS Vendor,
    invoice_date AS Date,
    FORMAT(invoice_total,2 ) AS Total
FROM
    vendors AS v
        INNER JOIN
    invoices AS i ON v.vendor_id = i.vendor_id
WHERE
    invoice_total > 2 * (SELECT 
            AVG(invoice_total)
        FROM
            invoices)
ORDER BY vendor, invoice_total DESC