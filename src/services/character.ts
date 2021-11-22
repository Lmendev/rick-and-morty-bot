import { getCharacter as getCharacterFromRickmortyapi, getCharacters } from 'rickmortyapi'
import { ApiResponse, Character, Info } from 'rickmortyapi/dist/interfaces';

export const getCharacter = async (characterId: number) => {
    const apiResponse:ApiResponse<Character> = await getCharacterFromRickmortyapi(characterId)
    return apiResponse.data;
};

export const getRandomCharacter = async () => {
    const id = Math.floor(Math.random() * 826) + 1;

    const apiResponse:ApiResponse<Character> = await getCharacterFromRickmortyapi(id)
    return apiResponse.data;
};

export const searchCharactersByName = async (name: string) => {
    const apiResponse:ApiResponse<Info<Character[]>> = await getCharacters({ name })
    return apiResponse.data;
};




