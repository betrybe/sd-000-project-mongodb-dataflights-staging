db.voos.find(
  {
    $and: [
      { "aeroportoOrigem.sigla": "SBGR" },
      { "aeroportoDestino.sigla": "KJFK" },
      {
        $or: [
          { "empresa.nome": "DELTA AIRLINES" },
          { "empresa.nome": "AMERICAN AIRLINES" }
        ]
      }
    ]
  },
  { _id: false, vooId: true }
).limit(1);
