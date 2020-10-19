const API_URL = `https://nature-image-api.now.sh/search?q=`;

export default async function getImagenes(termBusqueda) {
    const res = await fetch(`${API_URL}${termBusqueda}`);
    const data = await res.json();
    return data.images;
}