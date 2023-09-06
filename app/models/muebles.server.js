export async function getMuebles(){
    const respuesta = await fetch(`${process.env.API_URL}/muebles?populate=imagen`)
    const resultado = await respuesta.json()
    return resultado
}


export async function getMueble(url){
    const respuesta = await fetch(`${process.env.API_URL}/muebles?filters[url]=${url}&populate=imagen`)
    const resultado = await respuesta.json()
    return resultado
}
