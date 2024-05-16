async function fetchDogBreeds() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  if (!response.ok) {
    throw new Error("API response was not OK.");
  }
  const dogBreeds = await response.json();
  return dogBreeds.message;
}

export async function dogApiArguments() {
  const dogBreeds = await fetchDogBreeds();
  let dogBreedList = [];
  let returnList = [];

  for (const breed in dogBreeds) {
    dogBreedList.push(breed);
  }

  const dogBreedNum = dogBreedList.length;

  for (let i = 0; i < 5; i++) {
    const indx = Math.floor(Math.random() * dogBreedNum);
    returnList.push(dogBreedList[indx]);
  }

  return returnList;
}