import API from "./rules-api";

export async function obtenerPokemon() {
  let url = "/pokemon";
  return await API.get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw Error(error || "Error procesando la solicitud");
    });
}
