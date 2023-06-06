/**
 * No hay una única forma de organizar las rutas de un sitio web.
 * Una alternativa podría ser organizar las rutas por entidad:
 */

const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");
// const articleRoutes = require("./articleRoutes");
// const commentRoutes = require("./commentRoutes");
const tweetRoutes = require("./tweetRoutes");
/**
 * Otra alternativa podría ser organizar las rutas según su nivel de
 * privacidad (ej: si son rutas públicas o privadas).
 *
 * En `publicRoutes` podrían estar las rutas relacionadas con páginas como
 * Home, Contacto y Sobre Nosotros. En `privateRoutes` podrían estar las rutas
 * relacionados al Panel de Control (Admin). Notar que si se está construyendo
 * una API esta alternativa no tendría sentido.
 */

const publicRoutes = require("./publicRoutes");
// const privateRoutes = require("./privateRoutes");

module.exports = (app) => {
  /**
   * Notar que si el sitio está en español, tiene sentido que las URLs que se
   * ven en la barra de direcciiones del navegador también lo estén. No así los
   * nombres de variables, funciones, etc, que siempre se recomienda que estén
   * en inglés.
   */

  app.use("/usuarios", userRoutes);
  app.use("/", authRoutes);
  app.use("/", tweetRoutes);
  app.use("/", publicRoutes);
};

// PD: Recordar que es muy importante el orden en que se definen las rutas.
