select * from employees
where Lastname like 'L%';

select * from employees
where Lastname like '%L%';


select * from employees
where Lastname like '_u%';

select * from employees
where Lastname like '%a';

select * from Orders
where orderdate >= '1996-07-04' and orderdate <= '1996-07-10';

select * from Orders
where orderdate  between '1996-07-04' and  '1996-07-10';

select * from orders
where EmployeeId = 4 or EmployeeId =5 or EmployeeId =6;

select * from orders
where EmployeeId not in( 4,5,6);


select * from orders
where EmployeeId not in( 4,5,6)
order by ShipperID desc, CUstomerid;

SELECT DISTINCT Country FROM Customers;

select * from products
order by price desc
limit 5;

select avg(price) from products;
select max(price) from products;
select min(price) from products;
select count(price) from products;

select sum(price) from products;

select ProductID as ID,
productname as 'nombre de producto',
price as Precio from products;

select p.ProductID as ID,
p.productname as 'nombre de producto',
p.price as Precio from products p;

select * from orders, customers;
select * from customer;

select 
o.orderid,
o.orderdate,
c.customername,
c.city
 from orders o inner join customers c on o.CustomerId = c.CustomerId;
 
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;


SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID;

SELECT City FROM Customers
UNION
SELECT City FROM Suppliers
ORDER BY City;


SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;


select count(customerid) from customers;