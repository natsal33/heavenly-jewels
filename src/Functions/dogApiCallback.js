export async function dogApiCallback(breed) {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`
    const response = await fetch(url);
    const responseJSON = await response.json();
    const dogPhoto = responseJSON.message;
    
    return dogPhoto;
}