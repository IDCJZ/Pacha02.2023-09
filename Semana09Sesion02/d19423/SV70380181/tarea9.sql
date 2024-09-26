//## Ejercicios con una tabla

Revisa las tablas Customers (clientes), Employees (empleados) y Orders (pedidos)

- ¿Cuántos clientes hay registrados?
    select count(customerid) from customers;   

- ¿Cuántos pedidos?
     select count(orderid) from orders;

- ¿Qué clientes viven en Londres y su nombre (CustomerName) empieza por A?
select * from customers
where country like 'uk'and customername like 'A%';

- ¿Cuántos clientes hay que son de Londres?
select count(customerid) from customers where country = 'UK';

- ¿Quién es el empleado que tiene más años?
 select min(birthdate) from employees;

- ¿Cuántos clientes hay en cada ciudad?
select city,count(city) as num_customers 
from customers group by city;

- ¿Cuántos empleados nacieron después de 1 de Junio del 1965?+
select count(BirthDate) from employees where birthdate > '01-06-1965';

- Hazme un informe que diga «El empleado N nació el N», siendo N, nombre (FirstName y Last Name) y día de nacimiento (BirthDate)
  

- Hazme el informe anterior, pero sólo para los empleados con id 8, 7, 3 y 10


- Dime los paises que tengan más de 5 clientes, ordenados por el nombre de país
select c.country, count(c.country) as num_clients
from customers c
group by c.country




#### Ejercicios con más de una tabla
- Dime el nombre del cliente del pedido 10360
   select orderid, customerid from orders
   where orderid like '10360';

- Dime el nombre completo de los clientes con los pedidos 10360, 10253 y 10440
   select orderid, customerid from orders
   where orderid like '10360','10253','10440';


- Dime las ciudades y número de pedidos de clientes en esa ciudad


- ¿Cuales son las ciudades desde las que hay más de 7 pedidos?

- ¿Cuales son los tres países desde los que tengo más pedidos?

- Necesito un informe con el Nombre completo de los Empleados y el número de pedidos que registraron

- En el informe anterior, sólo necesito los empleados cuyo nombre comience por M

- Quiero saber el número de pedido, qué empleado (sólo el nombre) lo registró y el cliente.

- ¿Hay algún cliente que haya hecho más de un pedido registrado por el mismo empleado?

- Quiero saber los clientes que hayan hecho más de un pedido y que hayan sido registrado por un Empleado cuyo nombre sea Margaret.




#### Ejercicios con Subconsultas
- ¿Cual es el producto con el precio mínimo más bajo? (usando subconsultas)

- ¿Cual es el producto cuyo precio sea al menos 10 veces el pedido mínimo (quantity) de los pedidos (OrderDetails)?

- ¿Cuales son los registros de productos (Products) cuyo precio (price) sea mayor que el máximo de los precios de los productos cuyo id sea 3, 6, 9 y 10?

- ¿Cuales son los registros de productos (Products) cuyo ProductID sea un valor que esté en Shippers.ShipperID?

- ¿Qué clientes (Customers) tenemos registrados, que estén en ciudades de nuestros proveedores (Suppliers)?