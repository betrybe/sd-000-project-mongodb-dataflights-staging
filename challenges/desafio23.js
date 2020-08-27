db.voos.find(
  {
    litrosCombustivel: { $not: { $gt: 1000 } },
    litrosCombustivel: { $exists: true }
  },
  { _id: false, vooId: true, litrosCombustivel: true }
).limit(1);
