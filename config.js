/* Config de ciudad — shell compartido (_motor/dashboard_kit).
   GENERADO por `gen_config_js.py` desde config_ciudad.py: NO editar a mano, se pisa.
   Los nombres de comuna vienen del geojson validado, no de una lista escrita aparte. */
window.CITY = {
  slug: "valparaiso",
  nombre: "Gran Valparaíso",
  sigla: "GV",
  lat0: -33.0385, lon0: -71.5289,
  comunas: ["Valparaíso", "Viña Del Mar", "Quilpué", "Villa Alemana", "Concón"],
  comunasGeojson: "comunas_valparaiso.geojson",
  live: true,
  liveBase: "https://storage.googleapis.com/valparaiso-transporte-live/",
  demanda: false,
  repo: "transportepublicoValparaiso",
  voz: {"ejeSing": "eje", "ejePlur": "ejes", "EjePlur": "Ejes"},
};
