const GOOGLE_API_KEY = 'AIzaSyCTCDNDtYPCpAD0FaKghgdzCjMN1QUHnt4'

/**not real built with google */
export function getMapPreview(lat, lng){
    const imagePreviewUrl = `https://www.google.com.ec/maps/@${lat},${lng},19z?hl=es&entry=ttu`
    return imagePreviewUrl
}

export async function getAddres(lat, lng){
    return 'Carihuariazon y Villonaco'
    const url = 'uri';
    const response = await fetch(url);

    if(!response.ok){
        throw new Error('Failed to fetch address!!')
    }

    const data = await response.json();
    const address = data.results[0].formatted_address;
    return address;

}