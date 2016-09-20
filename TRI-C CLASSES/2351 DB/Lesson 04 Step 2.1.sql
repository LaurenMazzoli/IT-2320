--- 4.2.1

USE ex ;

SELECT 
    Customers.customer_first_name, Orders.order_id
FROM
    Customers
        INNER JOIN
    Orders ON Customers.customer_id = Orders.Customer_id
ORDER BY Customers.customer_first_name;
