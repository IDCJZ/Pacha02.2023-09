
db123456.materia_prima.find();


db123456.produccion.find({ fecha: ISODate("2023-11-20T10:00:00Z") });


db123456.personal.find({ salario: { $gt: 25000 } });


db123456.insumos.aggregate([
  {
    $match: {
      fecha: {
        $gte: ISODate("2023-11-01T00:00:00Z"),
        $lt: ISODate("2023-12-01T00:00:00Z")
      }
    }
  },
  {
    $group: {
      _id: null,
      costo_total: { $sum: "$costo_total" }
    }
  }
]);